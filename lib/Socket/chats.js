"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChatsSocket = void 0;
const boom_1 = require("@hapi/boom");
const node_cache_1 = __importDefault(require("@cacheable/node-cache"));
const WAProto_1 = require("../../WAProto");
const Defaults_1 = require("../Defaults");
const Types_1 = require("../Types");
const Utils_1 = require("../Utils");
const make_mutex_1 = require("../Utils/make-mutex");
const process_message_1 = __importDefault(require("../Utils/process-message"));
const WABinary_1 = require("../WABinary");
const WAUSync_1 = require("../WAUSync");
const usync_1 = require("./usync");
const chalk = require('chalk');
const MAX_SYNC_ATTEMPTS = 2;
const SyncState = {
    Connecting: 'connecting',
    AwaitingInitialSync: 'awaiting_initial_sync',
    Syncing: 'syncing',
    Online: 'online'
};
const makeChatsSocket = (config) => {
    const { logger, markOnlineOnConnect, fireInitQueries, appStateMacVerification, shouldIgnoreJid, shouldSyncHistoryMessage, } = config;
    const sock = (0, usync_1.makeUSyncSocket)(config);
    const { ev, ws, authState, generateMessageTag, sendNode, query, signalRepository, onUnexpectedError, } = sock;
    let privacySettings;
    let syncState = SyncState.Connecting;
    let needToFlushWithAppStateSync = false;
    let pendingAppStateSync = false;
    let awaitingSyncTimeout;
    const processingMutex = (0, make_mutex_1.makeMutex)();
    const placeholderResendCache = config.placeholderResendCache || new node_cache_1.default({
        stdTTL: Defaults_1.DEFAULT_CACHE_TTLS.MSG_RETRY,
        useClones: false
    });
    const receivedMessageDedupCache = new node_cache_1.default({
        stdTTL: 3 * 60,
        useClones: false
    });
    if (!config.placeholderResendCache) {
        config.placeholderResendCache = placeholderResendCache;
    }
    const getAppStateSyncKey = async (keyId) => {
        const { [keyId]: key } = await authState.keys.get('app-state-sync-key', [keyId]);
        return key;
    };
    const fetchPrivacySettings = async (force = false) => {
        if (!privacySettings || force) {
            const { content } = await query({
                tag: 'iq',
                attrs: {
                    xmlns: 'privacy',
                    to: WABinary_1.S_WHATSAPP_NET,
                    type: 'get'
                },
                content: [
                    { tag: 'privacy', attrs: {} }
                ]
            });
            privacySettings = (0, WABinary_1.reduceBinaryNodeToDictionary)(content === null || content === void 0 ? void 0 : content[0], 'category');
        }
        return privacySettings;
    };
    const privacyQuery = async (name, value) => {
        await query({
            tag: 'iq',
            attrs: {
                xmlns: 'privacy',
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set'
            },
            content: [{
                    tag: 'privacy',
                    attrs: {},
                    content: [
                        {
                            tag: 'category',
                            attrs: { name, value }
                        }
                    ]
                }]
        });
    };
    const updateMessagesPrivacy = async (value) => {
        await privacyQuery('messages', value);
    };
    const updateCallPrivacy = async (value) => {
        await privacyQuery('calladd', value);
    };
    const updateLastSeenPrivacy = async (value) => {
        await privacyQuery('last', value);
    };
    const updateOnlinePrivacy = async (value) => {
        await privacyQuery('online', value);
    };
    const updateProfilePicturePrivacy = async (value) => {
        await privacyQuery('profile', value);
    };
    const updateStatusPrivacy = async (value) => {
        await privacyQuery('status', value);
    };
    const updateReadReceiptsPrivacy = async (value) => {
        await privacyQuery('readreceipts', value);
    };
    const updateGroupsAddPrivacy = async (value) => {
        await privacyQuery('groupadd', value);
    };
    const updateDisableLinkPreviewsPrivacy = async (isPreviewsDisabled) => {
        return chatModify({ disableLinkPreviews: { isPreviewsDisabled } }, '');
    };
    const updateDefaultDisappearingMode = async (duration) => {
        await query({
            tag: 'iq',
            attrs: {
                xmlns: 'disappearing_mode',
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set'
            },
            content: [{
                    tag: 'disappearing_mode',
                    attrs: {
                        duration: duration.toString()
                    }
                }]
        });
    };
    const getBotListV2 = async () => {
        const resp = await query({
            tag: 'iq',
            attrs: {
                xmlns: 'bot',
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'get'
            },
            content: [{
                    tag: 'bot',
                    attrs: {
                        v: '2'
                    }
                }]
        });
        const botNode = (0, WABinary_1.getBinaryNodeChild)(resp, 'bot');
        const botList = [];
        for (const section of (0, WABinary_1.getBinaryNodeChildren)(botNode, 'section')) {
            if (section.attrs.type === 'all') {
                for (const bot of (0, WABinary_1.getBinaryNodeChildren)(section, 'bot')) {
                    botList.push({
                        jid: bot.attrs.jid,
                        personaId: bot.attrs['persona_id']
                    });
                }
            }
        }
        return botList;
    };
    const onWhatsApp = async (...jids) => {
        const usyncQuery = new WAUSync_1.USyncQuery()
            .withContactProtocol()
            .withLIDProtocol();
        for (const jid of jids) {
            const phone = `+${jid.replace('+', '').split('@')[0].split(':')[0]}`;
            usyncQuery.withUser(new WAUSync_1.USyncUser().withPhone(phone));
        }
        const results = await sock.executeUSyncQuery(usyncQuery);
        if (results) {
            return results.list.filter((a) => !!a.contact).map(({ contact, id, lid }) => ({ jid: id, exists: contact, lid }));
        }
    };
    const fetchStatus = async (...jids) => {
        const usyncQuery = new WAUSync_1.USyncQuery()
            .withStatusProtocol();
        for (const jid of jids) {
            usyncQuery.withUser(new WAUSync_1.USyncUser().withId(jid));
        }
        const result = await sock.executeUSyncQuery(usyncQuery);
        if (result) {
            return result.list;
        }
    };
    const fetchDisappearingDuration = async (...jids) => {
        const usyncQuery = new WAUSync_1.USyncQuery()
            .withDisappearingModeProtocol();
        for (const jid of jids) {
            usyncQuery.withUser(new WAUSync_1.USyncUser().withId(jid));
        }
        const result = await sock.executeUSyncQuery(usyncQuery);
        if (result) {
            return result.list;
        }
    };
    const updateProfilePicture = async (jid, content, dimensions) => {
        let targetJid;
        if (!jid) {
            throw new boom_1.Boom('Illegal no-jid profile update. Please specify either your ID or the ID of the chat you wish to update');
        }
        if ((0, WABinary_1.jidNormalizedUser)(jid) !== (0, WABinary_1.jidNormalizedUser)(authState.creds.me.id)) {
            targetJid = (0, WABinary_1.jidNormalizedUser)(jid);
        }
        const { img } = await (0, Utils_1.generateProfilePicture)(content, dimensions);
        await query({
            tag: 'iq',
            attrs: {
                target: targetJid,
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [
                {
                    tag: 'picture',
                    attrs: { type: 'image' },
                    content: img
                }
            ]
        });
    };
    const removeProfilePicture = async (jid) => {
        let targetJid;
        if (!jid) {
            throw new boom_1.Boom('Illegal no-jid profile update. Please specify either your ID or the ID of the chat you wish to update');
        }
        if ((0, WABinary_1.jidNormalizedUser)(jid) !== (0, WABinary_1.jidNormalizedUser)(authState.creds.me.id)) {
            targetJid = (0, WABinary_1.jidNormalizedUser)(jid);
        }
        await query({
            tag: 'iq',
            attrs: {
                target: targetJid,
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set',
                xmlns: 'w:profile:picture'
            }
        });
    };
    const updateProfileStatus = async (status) => {
        await query({
            tag: 'iq',
            attrs: {
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set',
                xmlns: 'status'
            },
            content: [
                {
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }
            ]
        });
    };
    const updateProfileName = async (name) => {
        await chatModify({ pushNameSetting: name }, '');
    };
    const fetchBlocklist = async () => {
        const result = await query({
            tag: 'iq',
            attrs: {
                xmlns: 'blocklist',
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'get'
            }
        });
        const listNode = (0, WABinary_1.getBinaryNodeChild)(result, 'list');
        return (0, WABinary_1.getBinaryNodeChildren)(listNode, 'item')
            .map(n => n.attrs.jid);
    };
    const updateBlockStatus = async (jid, action) => {
        await query({
            tag: 'iq',
            attrs: {
                xmlns: 'blocklist',
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set'
            },
            content: [
                {
                    tag: 'item',
                    attrs: {
                        action,
                        jid
                    }
                }
            ]
        });
    };
    const getBusinessProfile = async (jid) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const results = await query({
            tag: 'iq',
            attrs: {
                to: 's.whatsapp.net',
                xmlns: 'w:biz',
                type: 'get'
            },
            content: [{
                    tag: 'business_profile',
                    attrs: { v: '244' },
                    content: [{
                            tag: 'profile',
                            attrs: { jid }
                        }]
                }]
        });
        const profileNode = (0, WABinary_1.getBinaryNodeChild)(results, 'business_profile');
        const profiles = (0, WABinary_1.getBinaryNodeChild)(profileNode, 'profile');
        if (profiles) {
            const address = (0, WABinary_1.getBinaryNodeChild)(profiles, 'address');
            const description = (0, WABinary_1.getBinaryNodeChild)(profiles, 'description');
            const website = (0, WABinary_1.getBinaryNodeChild)(profiles, 'website');
            const email = (0, WABinary_1.getBinaryNodeChild)(profiles, 'email');
            const category = (0, WABinary_1.getBinaryNodeChild)((0, WABinary_1.getBinaryNodeChild)(profiles, 'categories'), 'category');
            const businessHours = (0, WABinary_1.getBinaryNodeChild)(profiles, 'business_hours');
            const businessHoursConfig = businessHours
                ? (0, WABinary_1.getBinaryNodeChildren)(businessHours, 'business_hours_config')
                : undefined;
            const websiteStr = (_a = website === null || website === void 0 ? void 0 : website.content) === null || _a === void 0 ? void 0 : _a.toString();
            return {
                wid: (_b = profiles.attrs) === null || _b === void 0 ? void 0 : _b.jid,
                address: (_c = address === null || address === void 0 ? void 0 : address.content) === null || _c === void 0 ? void 0 : _c.toString(),
                description: ((_d = description === null || description === void 0 ? void 0 : description.content) === null || _d === void 0 ? void 0 : _d.toString()) || '',
                website: websiteStr ? [websiteStr] : [],
                email: (_e = email === null || email === void 0 ? void 0 : email.content) === null || _e === void 0 ? void 0 : _e.toString(),
                category: (_f = category === null || category === void 0 ? void 0 : category.content) === null || _f === void 0 ? void 0 : _f.toString(),
                'business_hours': {
                    timezone: (_g = businessHours === null || businessHours === void 0 ? void 0 : businessHours.attrs) === null || _g === void 0 ? void 0 : _g.timezone,
                    'business_config': businessHoursConfig === null || businessHoursConfig === void 0 ? void 0 : businessHoursConfig.map(({ attrs }) => attrs)
                }
            };
        }
    };
    const cleanDirtyBits = async (type, fromTimestamp) => {
        logger.info({ fromTimestamp }, 'clean dirty bits ' + type);
        await sendNode({
            tag: 'iq',
            attrs: {
                to: WABinary_1.S_WHATSAPP_NET,
                type: 'set',
                xmlns: 'urn:xmpp:whatsapp:dirty',
                id: generateMessageTag(),
            },
            content: [
                {
                    tag: 'clean',
                    attrs: {
                        type,
                        ...(fromTimestamp ? { timestamp: fromTimestamp.toString() } : null),
                    }
                }
            ]
        });
    };
    const newAppStateChunkHandler = (isInitialSync) => {
        return {
            onMutation(mutation) {
                (0, Utils_1.processSyncAction)(mutation, ev, authState.creds.me, isInitialSync ? { accountSettings: authState.creds.accountSettings } : undefined, logger);
            }
        };
    };
    const resyncAppState = ev.createBufferedFunction(async (collections, isInitialSync) => {
        const initialVersionMap = {};
        const globalMutationMap = {};
        await authState.keys.transaction(async () => {
            var _a;
            const collectionsToHandle = new Set(collections);
            const attemptsMap = {};
            while (collectionsToHandle.size) {
                const states = {};
                const nodes = [];
                for (const name of collectionsToHandle) {
                    const result = await authState.keys.get('app-state-sync-version', [name]);
                    let state = result[name];
                    if (state) {
                        if (typeof initialVersionMap[name] === 'undefined') {
                            initialVersionMap[name] = state.version;
                        }
                    }
                    else {
                        state = (0, Utils_1.newLTHashState)();
                    }
                    states[name] = state;
                    logger.info(`resyncing ${name} from v${state.version}`);
                    nodes.push({
                        tag: 'collection',
                        attrs: {
                            name,
                            version: state.version.toString(),
                            'return_snapshot': (!state.version).toString()
                        }
                    });
                }
                const result = await query({
                    tag: 'iq',
                    attrs: {
                        to: WABinary_1.S_WHATSAPP_NET,
                        xmlns: 'w:sync:app:state',
                        type: 'set'
                    },
                    content: [
                        {
                            tag: 'sync',
                            attrs: {},
                            content: nodes
                        }
                    ]
                });
                const decoded = await (0, Utils_1.extractSyncdPatches)(result, config === null || config === void 0 ? void 0 : config.options);
                for (const key in decoded) {
                    const name = key;
                    const { patches, hasMorePatches, snapshot } = decoded[name];
                    try {
                        if (snapshot) {
                            const { state: newState, mutationMap } = await (0, Utils_1.decodeSyncdSnapshot)(name, snapshot, getAppStateSyncKey, initialVersionMap[name], appStateMacVerification.snapshot);
                            states[name] = newState;
                            Object.assign(globalMutationMap, mutationMap);
                            logger.info(`restored state of ${name} from snapshot to v${newState.version} with mutations`);
                            await authState.keys.set({ 'app-state-sync-version': { [name]: newState } });
                        }
                        if (patches.length) {
                            const { state: newState, mutationMap } = await (0, Utils_1.decodePatches)(name, patches, states[name], getAppStateSyncKey, config.options, initialVersionMap[name], logger, appStateMacVerification.patch);
                            await authState.keys.set({ 'app-state-sync-version': { [name]: newState } });
                            logger.info(`synced ${name} to v${newState.version}`);
                            initialVersionMap[name] = newState.version;
                            Object.assign(globalMutationMap, mutationMap);
                        }
                        if (hasMorePatches) {
                            logger.info(`${name} has more patches...`);
                        }
                        else {
                            collectionsToHandle.delete(name);
                        }
                    }
                    catch (error) {
                        const isIrrecoverableError = attemptsMap[name] >= MAX_SYNC_ATTEMPTS
                            || ((_a = error.output) === null || _a === void 0 ? void 0 : _a.statusCode) === 404
                            || error.name === 'TypeError';
                        logger.info({ name, error: error.stack }, `failed to sync state from version${isIrrecoverableError ? '' : ', removing and trying from scratch'}`);
                        await authState.keys.set({ 'app-state-sync-version': { [name]: null } });
                        attemptsMap[name] = (attemptsMap[name] || 0) + 1;
                        if (isIrrecoverableError) {
                            collectionsToHandle.delete(name);
                        }
                    }
                }
            }
        });
        const { onMutation } = newAppStateChunkHandler(isInitialSync);
        for (const key in globalMutationMap) {
            onMutation(globalMutationMap[key]);
        }
    });
    const profilePictureUrl = async (jid, type = 'preview', timeoutMs) => {
        var _a;
        jid = (0, WABinary_1.jidNormalizedUser)(jid);
        try {
            const result = await query({
                tag: 'iq',
                attrs: {
                    target: jid,
                    to: WABinary_1.S_WHATSAPP_NET,
                    type: 'get',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    { tag: 'picture', attrs: { type, query: 'url' } }
                ]
            }, timeoutMs);
            const child = (0, WABinary_1.getBinaryNodeChild)(result, 'picture');
            return (_a = child === null || child === void 0 ? void 0 : child.attrs) === null || _a === void 0 ? void 0 : _a.url;
        } catch (error) {
            if (error.message?.includes('item-not-found') || 
                error.output?.payload?.statusCode === 404 || 
                error.statusCode === 404) {
                logger.info(chalk.gray(`[INFO] Profile pic not found for ${jid}, using fallback`));
                return {
                    eurl: undefined,
                    id: jid.split('@')[0],
                    status: null,
                    img: null
                };
            }
            throw error;
        }
    };
    const createCallLink = async (type, event, timeoutMs) => {
        const result = await query({
            tag: 'call',
            attrs: {
                id: generateMessageTag(),
                to: '@call'
            },
            content: [
                {
                    tag: 'link_create',
                    attrs: { media: type },
                    content: event ? [{ tag: 'event', attrs: { start_time: String(event.startTime) } }] : undefined
                }
            ]
        }, timeoutMs);
        const child = (0, WABinary_1.getBinaryNodeChild)(result, 'link_create');
        return child?.attrs?.token;
    };
    const sendPresenceUpdate = async (type, toJid) => {
        const me = authState.creds.me;
        if (type === 'available' || type === 'unavailable') {
            if (!me.name) {
                logger.warn('no name present, ignoring presence update request...');
                return;
            }
            ev.emit('connection.update', { isOnline: type === 'available' });
            await sendNode({
                tag: 'presence',
                attrs: {
                    name: me.name.replace(/@/g, ''),
                    type
                }
            });
        }
        else {
            const { server } = (0, WABinary_1.jidDecode)(toJid);
            const isLid = server === 'lid';
            await sendNode({
                tag: 'chatstate',
                attrs: {
                    from: isLid ? me.lid : me.id,
                    to: toJid,
                },
                content: [
                    {
                        tag: type === 'recording' ? 'composing' : type,
                        attrs: type === 'recording' ? { media: 'audio' } : {}
                    }
                ]
            });
        }
    };
    const presenceSubscribe = (toJid, tcToken) => (sendNode({
        tag: 'presence',
        attrs: {
            to: toJid,
            id: generateMessageTag(),
            type: 'subscribe'
        },
        content: tcToken
            ? [
                {
                    tag: 'tctoken',
                    attrs: {},
                    content: tcToken
                }
            ]
            : undefined
    }));
    const handlePresenceUpdate = ({ tag, attrs, content }) => {
        var _a;
        let presence;
        const jid = attrs.from;
        const participant = attrs.participant || attrs.from;
        if (shouldIgnoreJid(jid) && jid != '@s.whatsapp.net') {
            return;
        }
        if (tag === 'presence') {
            presence = {
                lastKnownPresence: attrs.type === 'unavailable' ? 'unavailable' : 'available',
                lastSeen: attrs.last && attrs.last !== 'deny' ? +attrs.last : undefined
            };
        }
        else if (Array.isArray(content)) {
            const [firstChild] = content;
            let type = firstChild.tag;
            if (type === 'paused') {
                type = 'available';
            }
            if (((_a = firstChild.attrs) === null || _a === void 0 ? void 0 : _a.media) === 'audio') {
                type = 'recording';
            }
            presence = { lastKnownPresence: type };
        }
        else {
            logger.error({ tag, attrs, content }, 'recv invalid presence node');
        }
        if (presence) {
            ev.emit('presence.update', { id: jid, presences: { [participant]: presence } });
        }
    };
    const appPatch = async (patchCreate) => {
        const name = patchCreate.type;
        const myAppStateKeyId = authState.creds.myAppStateKeyId;
        if (!myAppStateKeyId) {
            throw new boom_1.Boom('App state key not present!', { statusCode: 400 });
        }
        let initial;
        let encodeResult;
        await processingMutex.mutex(async () => {
            await authState.keys.transaction(async () => {
                logger.debug({ patch: patchCreate }, 'applying app patch');
                await resyncAppState([name], false);
                const { [name]: currentSyncVersion } = await authState.keys.get('app-state-sync-version', [name]);
                initial = currentSyncVersion || (0, Utils_1.newLTHashState)();
                encodeResult = await (0, Utils_1.encodeSyncdPatch)(patchCreate, myAppStateKeyId, initial, getAppStateSyncKey);
                const { patch, state } = encodeResult;
                const node = {
                    tag: 'iq',
                    attrs: {
                        to: WABinary_1.S_WHATSAPP_NET,
                        type: 'set',
                        xmlns: 'w:sync:app:state'
                    },
                    content: [
                        {
                            tag: 'sync',
                            attrs: {},
                            content: [
                                {
                                    tag: 'collection',
                                    attrs: {
                                        name,
                                        version: (state.version - 1).toString(),
                                        'return_snapshot': 'false'
                                    },
                                    content: [
                                        {
                                            tag: 'patch',
                                            attrs: {},
                                            content: WAProto_1.proto.SyncdPatch.encode(patch).finish()
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                };
                await query(node);
                await authState.keys.set({ 'app-state-sync-version': { [name]: state } });
            });
        });
        if (config.emitOwnEvents) {
            const { onMutation } = newAppStateChunkHandler(false);
            const { mutationMap } = await (0, Utils_1.decodePatches)(name, [{ ...encodeResult.patch, version: { version: encodeResult.state.version }, }], initial, getAppStateSyncKey, config.options, undefined, logger);
            for (const key in mutationMap) {
                onMutation(mutationMap[key]);
            }
        }
    };
    const fetchProps = async () => {
        var _a, _b, _c;
        const resultNode = await query({
            tag: 'iq',
            attrs: {
                to: WABinary_1.S_WHATSAPP_NET,
                xmlns: 'w',
                type: 'get',
            },
            content: [
                { tag: 'props', attrs: {
                        protocol: '2',
                        hash: ((_a = authState === null || authState === void 0 ? void 0 : authState.creds) === null || _a === void 0 ? void 0 : _a.lastPropHash) || ''
                    } }
            ]
        });
        const propsNode = (0, WABinary_1.getBinaryNodeChild)(resultNode, 'props');
        let props = {};
        if (propsNode) {
            if ((_b = propsNode.attrs) === null || _b === void 0 ? void 0 : _b.hash) {
                authState.creds.lastPropHash = (_c = propsNode === null || propsNode === void 0 ? void 0 : propsNode.attrs) === null || _c === void 0 ? void 0 : _c.hash;
                ev.emit('creds.update', authState.creds);
            }
            props = (0, WABinary_1.reduceBinaryNodeToDictionary)(propsNode, 'prop');
        }
        logger.debug('fetched props');
        return props;
    };
    const chatModify = (mod, jid) => {
        const patch = (0, Utils_1.chatModificationToAppPatch)(mod, jid);
        return appPatch(patch);
    };
    const star = (jid, messages, star) => {
        return chatModify({
            star: {
                messages,
                star
            }
        }, jid);
    };
    const addOrEditContact = (jid, contact) => {
        return chatModify({ contact }, jid);
    };
    const removeContact = (jid) => {
        return chatModify({ contact: null }, jid);
    };
    const addLabel = (jid, labels) => {
        return chatModify({ addLabel: { ...labels } }, jid);
    };
    const addChatLabel = (jid, labelId) => {
        return chatModify({
            addChatLabel: {
                labelId
            }
        }, jid);
    };
    const removeChatLabel = (jid, labelId) => {
        return chatModify({
            removeChatLabel: {
                labelId
            }
        }, jid);
    };
    const addMessageLabel = (jid, messageId, labelId) => {
        return chatModify({
            addMessageLabel: {
                messageId,
                labelId
            }
        }, jid);
    };
    const removeMessageLabel = (jid, messageId, labelId) => {
        return chatModify({
            removeMessageLabel: {
                messageId,
                labelId
            }
        }, jid);
    };
    const executeInitQueries = async () => {
        await Promise.all([
            fetchProps(),
            fetchBlocklist(),
            fetchPrivacySettings(),
        ]);
    };
    const canonicalizeUserJid = (jid) => {
        if (!jid) {
            return jid;
        }
        if ((0, WABinary_1.isLidUser)(jid)) {
            return (0, WABinary_1.lidToJid)(jid);
        }
        return jid;
    };
    const extractStanzaId = (msg) => {
        var _a, _b;
        const topLevelStanzaId = (_a = msg.messageContextInfo) === null || _a === void 0 ? void 0 : _a.stanzaId;
        if (topLevelStanzaId) {
            return topLevelStanzaId;
        }
        const messageContextStanzaId = (_b = msg.message) === null || _b === void 0 ? void 0 : _b.messageContextInfo;
        if (messageContextStanzaId === null || messageContextStanzaId === void 0 ? void 0 : messageContextStanzaId.stanzaId) {
            return messageContextStanzaId.stanzaId;
        }
        const normalizedContent = (0, Utils_1.normalizeMessageContent)(msg.message);
        const contentType = normalizedContent ? (0, Utils_1.getContentType)(normalizedContent) : undefined;
        const contentContextStanzaId = contentType
            ? normalizedContent[contentType].contextInfo && normalizedContent[contentType].contextInfo.stanzaId
            : undefined;
        return contentContextStanzaId;
    };
    const buildMessageDedupKeys = (msg) => {
        const remoteJid = canonicalizeUserJid(msg.key.remoteJid);
        const participant = canonicalizeUserJid(msg.key.participant);
        const stanzaId = extractStanzaId(msg);
        const primaryKey = [remoteJid, participant, msg.key.id, msg.key.fromMe ? '1' : '0', stanzaId || ''].join('|');
        const keys = [primaryKey];
        // fallback alias key to collapse LID->PN duplicate deliveries for the same incoming user message ID
        if (!msg.key.fromMe && ((0, WABinary_1.isJidUser)(msg.key.remoteJid) || (0, WABinary_1.isLidUser)(msg.key.remoteJid))) {
            keys.push(`incoming-user-id|${msg.key.id}|${stanzaId || ''}`);
        }
        return keys;
    };
    const getDedupState = (msg) => msg.messageStubType === WAProto_1.proto.WebMessageInfo.StubType.CIPHERTEXT
        ? 'ciphertext'
        : 'final';
    const upsertMessage = ev.createBufferedFunction(async (msg, type) => {
        var _a, _b, _c;
        const dedupKeys = buildMessageDedupKeys(msg);
        const dedupState = getDedupState(msg);
        const previousDedupState = dedupKeys
            .map(key => receivedMessageDedupCache.get(key))
            .find(state => !!state);
        if (previousDedupState === 'final' || (previousDedupState === 'ciphertext' && dedupState === 'ciphertext')) {
            logger.debug({ dedupKeys, messageId: msg.key.id, type, dedupState, previousDedupState }, 'skipping duplicate messages.upsert');
            return;
        }
        ev.emit('messages.upsert', { messages: [msg], type });
        if (!!msg.pushName) {
            let jid = msg.key.fromMe ? authState.creds.me.id : (msg.key.participant || msg.key.remoteJid);
            jid = (0, WABinary_1.jidNormalizedUser)(jid);
            if (!msg.key.fromMe) {
                ev.emit('contacts.update', [{ id: jid, notify: msg.pushName, verifiedName: msg.verifiedBizName }]);
            }
            if (msg.key.fromMe && msg.pushName && ((_a = authState.creds.me) === null || _a === void 0 ? void 0 : _a.name) !== msg.pushName) {
                ev.emit('creds.update', { me: { ...authState.creds.me, name: msg.pushName } });
            }
        }
        const historyMsg = (0, Utils_1.getHistoryMsg)(msg.message);
        const shouldProcessHistoryMsg = historyMsg
            ? (shouldSyncHistoryMessage(historyMsg)
                && Defaults_1.PROCESSABLE_HISTORY_TYPES.includes(historyMsg.syncType))
            : false;
        if (historyMsg && syncState === SyncState.AwaitingInitialSync) {
            if (awaitingSyncTimeout) {
                clearTimeout(awaitingSyncTimeout);
                awaitingSyncTimeout = undefined;
            }
            if (shouldProcessHistoryMsg) {
                syncState = SyncState.Syncing;
                logger.info('Transitioned to Syncing state');
            } else {
                syncState = SyncState.Online;
                logger.info('History sync skipped, transitioning to Online state and flushing buffer');
                ev.flush();
            }
        }
        const doAppStateSync = async () => {
            if (syncState === SyncState.Syncing) {
                logger.info('Doing app state sync');
                await resyncAppState(Types_1.ALL_WA_PATCH_NAMES, true);
                syncState = SyncState.Online;
                logger.info('App state sync complete, transitioning to Online state and flushing buffer');
                ev.flush();
                const accountSyncCounter = (authState.creds.accountSyncCounter || 0) + 1;
                ev.emit('creds.update', { accountSyncCounter });
            }
        };
        if (historyMsg && !authState.creds.myAppStateKeyId) {
            logger.warn('skipping app state sync, as myAppStateKeyId is not set');
            pendingAppStateSync = true;
        }
        await Promise.all([
            (async () => {
                if (historyMsg
                    && authState.creds.myAppStateKeyId) {
                    pendingAppStateSync = false;
                    await doAppStateSync();
                }
            })(),
            (0, process_message_1.default)(msg, {
                signalRepository,
                shouldProcessHistoryMsg,
                placeholderResendCache,
                ev,
                creds: authState.creds,
                keyStore: authState.keys,
                logger,
                options: config.options,
                getMessage: config.getMessage,
            })
        ]);
        if (((_c = (_b = msg.message) === null || _b === void 0 ? void 0 : _b.protocolMessage) === null || _c === void 0 ? void 0 : _c.appStateSyncKeyShare)
            && pendingAppStateSync) {
            await doAppStateSync();
            pendingAppStateSync = false;
        }
        for (const key of dedupKeys) {
            receivedMessageDedupCache.set(key, dedupState);
        }
    });
    ws.on('CB:presence', handlePresenceUpdate);
    ws.on('CB:chatstate', handlePresenceUpdate);
    ws.on('CB:ib,,dirty', async (node) => {
        const { attrs } = (0, WABinary_1.getBinaryNodeChild)(node, 'dirty');
        const type = attrs.type;
        switch (type) {
            case 'account_sync':
                if (attrs.timestamp) {
                    let { lastAccountSyncTimestamp } = authState.creds;
                    if (lastAccountSyncTimestamp) {
                        await cleanDirtyBits('account_sync', lastAccountSyncTimestamp);
                    }
                    lastAccountSyncTimestamp = +attrs.timestamp;
                    ev.emit('creds.update', { lastAccountSyncTimestamp });
                }
                break;
            case 'groups':
                break;
            default:
                logger.info({ node }, 'received unknown sync');
                break;
        }
    });
    ev.on('connection.update', ({ connection, receivedPendingNotifications }) => {
        var _a;
        if (connection === 'open') {
            if (fireInitQueries) {
                executeInitQueries()
                    .catch(error => onUnexpectedError(error, 'init queries'));
            }
            sendPresenceUpdate(markOnlineOnConnect ? 'available' : 'unavailable')
                .catch(error => onUnexpectedError(error, 'presence update requests'));
        }
        if (receivedPendingNotifications &&
            !((_a = authState.creds) === null || _a === void 0 ? void 0 : _a.myAppStateKeyId)) {
            ev.buffer();
            needToFlushWithAppStateSync = true;
        }
        if (!receivedPendingNotifications || syncState !== SyncState.Connecting) {
            return;
        }
        syncState = SyncState.AwaitingInitialSync;
        logger.info('Connection is now AwaitingInitialSync, buffering events');
        ev.buffer();
        const willSyncHistory = shouldSyncHistoryMessage(
            WAProto_1.proto.Message.HistorySyncNotification.create({
                syncType: WAProto_1.proto.HistorySync.HistorySyncType.RECENT
            })
        );
        if (!willSyncHistory) {
            logger.info('History sync is disabled by config, not waiting for notification. Transitioning to Online.');
            syncState = SyncState.Online;
            setTimeout(() => ev.flush(), 0);
            return;
        }
        logger.info('History sync is enabled, awaiting notification with a 20s timeout.');
        if (awaitingSyncTimeout) {
            clearTimeout(awaitingSyncTimeout);
        }
        awaitingSyncTimeout = setTimeout(() => {
            if (syncState === SyncState.AwaitingInitialSync) {
                logger.warn('Timeout in AwaitingInitialSync, forcing state to Online and flushing buffer');
                syncState = SyncState.Online;
                ev.flush();
            }
        }, 20000);
    });
    return {
        ...sock,
        createCallLink,
        getBotListV2,
        processingMutex,
        fetchPrivacySettings,
        upsertMessage,
        appPatch,
        sendPresenceUpdate,
        presenceSubscribe,
        profilePictureUrl,
        onWhatsApp,
        fetchBlocklist,
        fetchDisappearingDuration,
        fetchStatus,
        updateProfilePicture,
        removeProfilePicture,
        updateProfileStatus,
        updateProfileName,
        updateBlockStatus,
        updateDisableLinkPreviewsPrivacy,
        updateCallPrivacy,
        updateMessagesPrivacy,
        updateLastSeenPrivacy,
        updateOnlinePrivacy,
        updateProfilePicturePrivacy,
        updateStatusPrivacy,
        updateReadReceiptsPrivacy,
        updateGroupsAddPrivacy,
        updateDefaultDisappearingMode,
        getBusinessProfile,
        resyncAppState,
        chatModify,
        cleanDirtyBits,
        addOrEditContact,
        removeContact,
        addLabel,
        addChatLabel,
        removeChatLabel,
        addMessageLabel,
        removeMessageLabel,
        star
    };
};
exports.makeChatsSocket = makeChatsSocket;

import type KeyedDB from '@adiwajshing/keyed-db';
import type { Comparable } from '@adiwajshing/keyed-db/lib/Types';
import { proto } from '../../WAProto';
import type makeMDSocket from '../Socket';
import type { BaileysEventEmitter, Chat, ConnectionState, Contact, GroupMetadata, PresenceData, WAMessage, WAMessageCursor, WAMessageKey } from '../Types';
import { Label } from '../Types/Label';
import { LabelAssociation } from '../Types/LabelAssociation';
import { ILogger } from '../Utils/logger';
import { ObjectRepository } from './object-repository';
type WASocket = ReturnType<typeof makeMDSocket>;
export declare const waChatKey: (pin: boolean) => {
    key: (c: Chat) => string;
    compare: (k1: string, k2: string) => number;
};
export declare const waMessageID: (m: WAMessage) => string;
export declare const waLabelAssociationKey: Comparable<LabelAssociation, string>;
export type BaileysInMemoryStoreConfig = {
    chatKey?: Comparable<Chat, string>;
    labelAssociationKey?: Comparable<LabelAssociation, string>;
    logger?: ILogger;
    socket?: WASocket;
};
declare const _default: (config: BaileysInMemoryStoreConfig) => {
    chats: KeyedDB<Chat, string>;
    contacts: {
        [_: string]: Contact;
    };
    messages: {
        [_: string]: {
            array: WAMessage[];
            get: (id: string) => WAMessage | undefined;
            upsert: (item: WAMessage, mode: "append" | "prepend") => void;
            update: (item: WAMessage) => boolean;
            remove: (item: WAMessage) => boolean;
            updateAssign: (id: string, update: Partial<WAMessage>) => boolean;
            clear: () => void;
            filter: (contain: (item: WAMessage) => boolean) => void;
            toJSON: () => WAMessage[];
            fromJSON: (newItems: WAMessage[]) => void;
        };
    };
    groupMetadata: {
        [_: string]: GroupMetadata;
    };
    state: ConnectionState;
    presences: {
        [id: string]: {
            [participant: string]: PresenceData;
        };
    };
    labels: ObjectRepository<Label>;
    labelAssociations: KeyedDB<LabelAssociation, string>;
    bind: (ev: BaileysEventEmitter) => void;
    /** loads messages from the store, if not found -- uses the legacy connection */
    loadMessages: (jid: string, count: number, cursor: WAMessageCursor) => Promise<WAMessage[]>;
    /**
     * Get all available labels for profile
     *
     * Keep in mind that the list is formed from predefined tags and tags
     * that were "caught" during their editing.
     */
    getLabels: () => ObjectRepository<Label>;
    /**
     * Get labels for chat
     *
     * @returns Label IDs
     **/
    getChatLabels: (chatId: string) => LabelAssociation[];
    /**
     * Get labels for message
     *
     * @returns Label IDs
     **/
    getMessageLabels: (messageId: string) => string[];
    loadMessage: (jid: string, id: string) => Promise<WAMessage | undefined>;
    mostRecentMessage: (jid: string) => Promise<WAMessage>;
    fetchImageUrl: (jid: string, sock: WASocket | undefined) => Promise<string | null | undefined>;
    fetchGroupMetadata: (jid: string, sock: WASocket | undefined) => Promise<GroupMetadata>;
    fetchMessageReceipts: ({ remoteJid, id }: WAMessageKey) => Promise<proto.IUserReceipt[] | null | undefined>;
    toJSON: () => {
        chats: KeyedDB<Chat, string>;
        contacts: {
            [_: string]: Contact;
        };
        messages: {
            [_: string]: {
                array: WAMessage[];
                get: (id: string) => WAMessage | undefined;
                upsert: (item: WAMessage, mode: "append" | "prepend") => void;
                update: (item: WAMessage) => boolean;
                remove: (item: WAMessage) => boolean;
                updateAssign: (id: string, update: Partial<WAMessage>) => boolean;
                clear: () => void;
                filter: (contain: (item: WAMessage) => boolean) => void;
                toJSON: () => WAMessage[];
                fromJSON: (newItems: WAMessage[]) => void;
            };
        };
        labels: ObjectRepository<Label>;
        labelAssociations: KeyedDB<LabelAssociation, string>;
    };
    fromJSON: (json: {
        chats: Chat[];
        contacts: {
            [id: string]: Contact;
        };
        messages: {
            [id: string]: WAMessage[];
        };
        labels: {
            [labelId: string]: Label;
        };
        labelAssociations: LabelAssociation[];
    }) => void;
    writeToFile: (path: string) => void;
    readFromFile: (path: string) => void;
};
export default _default;

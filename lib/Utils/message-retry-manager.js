"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRetryManager = void 0;

const lru_cache_1 = require("lru-cache");

const RECENT_MESSAGES_SIZE = 512;

const RECREATE_SESSION_TIMEOUT = 60 * 60 * 1000;

const PHONE_REQUEST_DELAY = 3000;

class MessageRetryManager {
    constructor(logger, maxMsgRetryCount) {
        this.logger = logger;
        this.maxMsgRetryCount = maxMsgRetryCount;
        this._recentMessagesMap = new lru_cache_1.LRUCache({
            max: RECENT_MESSAGES_SIZE
        });
        this._sessionRecreateHistory = new lru_cache_1.LRUCache({
            ttl: RECREATE_SESSION_TIMEOUT * 2,
            ttlAutopurge: true
        });
        this._retryCounters = new lru_cache_1.LRUCache({
            ttl: 15 * 60 * 1000,
            ttlAutopurge: true,
            updateAgeOnGet: true
        });
        this._pendingPhoneRequests = {};
        this.statistics = {
            totalRetries: 0,
            successfulRetries: 0,
            failedRetries: 0,
            mediaRetries: 0,
            sessionRecreations: 0,
            phoneRequests: 0
        };
        this.maxMsgRetryCount = maxMsgRetryCount;
    }
    addRecentMessage(to, id, message) {
        const key = { to, id };
        const keyStr = this._keyToString(key);
        this._recentMessagesMap.set(keyStr, {
            message,
            timestamp: Date.now()
        });
        this.logger.debug(`Added message to retry cache: ${to}/${id}`);
    }
    getRecentMessage(to, id) {
        const key = { to, id };
        const keyStr = this._keyToString(key);
        return this._recentMessagesMap.get(keyStr);
    }
    shouldRecreateSession(jid, retryCount, hasSession) {
        if (!hasSession) {
            this._sessionRecreateHistory.set(jid, Date.now());
            this.statistics.sessionRecreations++;
            return {
                reason: "we don't have a Signal session with them",
                recreate: true
            };
        }
        if (retryCount < 2) {
            return { reason: '', recreate: false };
        }
        const now = Date.now();
        const prevTime = this._sessionRecreateHistory.get(jid);
        if (!prevTime || now - prevTime > RECREATE_SESSION_TIMEOUT) {
            this._sessionRecreateHistory.set(jid, now);
            this.statistics.sessionRecreations++;
            return {
                reason: 'retry count > 1 and over an hour since last recreation',
                recreate: true
            };
        }
        return { reason: '', recreate: false };
    }
    incrementRetryCount(messageId) {
        this._retryCounters.set(messageId, (this._retryCounters.get(messageId) || 0) + 1);
        this.statistics.totalRetries++;
        return this._retryCounters.get(messageId);
    }
    getRetryCount(messageId) {
        return this._retryCounters.get(messageId) || 0;
    }
    hasExceededMaxRetries(messageId) {
        return this.getRetryCount(messageId) >= this.maxMsgRetryCount;
    }
    markRetrySuccess(messageId) {
        this.statistics.successfulRetries++;
        this._retryCounters.delete(messageId);
        this._cancelPendingPhoneRequest(messageId);
    }
    markRetryFailed(messageId) {
        this.statistics.failedRetries++;
        this._retryCounters.delete(messageId);
    }
    schedulePhoneRequest(messageId, callback, delay = PHONE_REQUEST_DELAY) {
        this._cancelPendingPhoneRequest(messageId);
        this._pendingPhoneRequests[messageId] = setTimeout(() => {
            delete this._pendingPhoneRequests[messageId];
            this.statistics.phoneRequests++;
            callback();
        }, delay);
        this.logger.debug(`Scheduled phone request for message ${messageId} with ${delay}ms delay`);
    }
    cancelPendingPhoneRequest(messageId) {
        const timeout = this._pendingPhoneRequests[messageId];
        if (timeout) {
            clearTimeout(timeout);
            delete this._pendingPhoneRequests[messageId];
            this.logger.debug(`Cancelled pending phone request for message ${messageId}`);
        }
    }
    _keyToString(key) {
        return `${key.to}:${key.id}`;
    }
    _cancelPendingPhoneRequest(messageId) {
        const timeout = this._pendingPhoneRequests[messageId];
        if (timeout) {
            clearTimeout(timeout);
            delete this._pendingPhoneRequests[messageId];
            this.logger.debug(`Cancelled pending phone request for message ${messageId}`);
        }
    }
}

exports.MessageRetryManager = MessageRetryManager;
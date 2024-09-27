"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubManager = void 0;
const redis_1 = require("redis");
class PubSubManager {
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
        this.redisClient.connect();
        this.subscription = new Map();
    }
    static getInsatnce() {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
            return PubSubManager.instance;
        }
        return PubSubManager.instance;
    }
    userSubscribe(userId, stockTicker) {
        var _a, _b;
        if (!this.subscription.has(stockTicker)) {
            this.subscription.set(stockTicker, []);
        }
        (_a = this.subscription.get(stockTicker)) === null || _a === void 0 ? void 0 : _a.push(userId);
        if (((_b = this.subscription.get(stockTicker)) === null || _b === void 0 ? void 0 : _b.length) === 1) {
            this.redisClient.subscribe(stockTicker, (message) => {
                this.handleMessage(stockTicker, message);
            });
            console.log(`Subscribed to Redis channel: ${stockTicker}`);
        }
    }
    userUnSubscribe(userId, stockTicker) {
        var _a, _b;
        this.subscription.set(stockTicker, ((_a = this.subscription.get(stockTicker)) === null || _a === void 0 ? void 0 : _a.filter((sub) => sub !== userId)) || []);
        if (((_b = this.subscription.get(stockTicker)) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            this.redisClient.unsubscribe(stockTicker);
            console.log(`Unsubscribed from RedisChannel: ${stockTicker}`);
        }
    }
    handleMessage(stockTicker, message) {
        var _a;
        console.log(`Message recieved on RedisCahnnel: ${stockTicker}: ${message}`);
        (_a = this.subscription.get(stockTicker)) === null || _a === void 0 ? void 0 : _a.forEach((user) => {
            console.log(`Sending message to user: ${user}`);
        });
    }
    showAllSubscriber(stockTicker) {
        var _a;
        let count = 1;
        (_a = this.subscription.get(stockTicker)) === null || _a === void 0 ? void 0 : _a.forEach((user) => {
            console.log(`User Subscribed to ${stockTicker} Number - ${count} : ${user}`);
            count += 1;
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisClient.quit;
        });
    }
}
exports.PubSubManager = PubSubManager;

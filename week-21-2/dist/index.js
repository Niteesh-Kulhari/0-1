"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManager_1 = require("./PubSubManager");
setTimeout(() => {
    setInterval(() => {
        PubSubManager_1.PubSubManager.getInsatnce().userSubscribe(Math.random().toString(), "APPLE");
        //PubSubManager.getInsatnce().showAllSubscriber("APPLE");
    }, 5000);
}, 20000);
PubSubManager_1.PubSubManager.getInsatnce().showAllSubscriber("APPLE");

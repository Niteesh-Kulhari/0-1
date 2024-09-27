import { PubSubManager } from "./PubSubManager";

setInterval(()=> {
    PubSubManager.getInsatnce().userSubscribe(Math.random().toString(), "APPLE");

    PubSubManager.getInsatnce().showAllSubscriber("APPLE");
}, 5000)
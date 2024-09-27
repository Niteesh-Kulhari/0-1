import { createClient, RedisClientType } from "redis";

export class PubSubManager{

    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subscription: Map<string, string[]>;

    private constructor(){
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subscription = new Map();
    }

    public static getInsatnce(): PubSubManager{
        if(!PubSubManager.instance){
            PubSubManager.instance = new PubSubManager();
            return PubSubManager.instance;
        }

        return PubSubManager.instance;
    }

    public userSubscribe(userId: string, stockTicker: string){
        if(!this.subscription.has(stockTicker)){
            this.subscription.set(stockTicker, []);
        }

        this.subscription.get(stockTicker)?.push(userId);

        if(this.subscription.get(stockTicker)?.length === 1){
            this.redisClient.subscribe(stockTicker, (message)=>{
                this.handleMessage(stockTicker, message);
            });
            console.log(`Subscribed to Redis channel: ${stockTicker}`);
        }
    }

    public userUnSubscribe(userId: string, stockTicker:string){
        this.subscription.set(stockTicker, this.subscription.get(stockTicker)?.filter((sub) => sub !== userId) || []);

        if(this.subscription.get(stockTicker)?.length === 0){
            this.redisClient.unsubscribe(stockTicker);

            console.log(`Unsubscribed from RedisChannel: ${stockTicker}`);
        }
    }

    public handleMessage(stockTicker:string, message:string){
        console.log(`Message recieved on RedisCahnnel: ${stockTicker}: ${message}`);
        this.subscription.get(stockTicker)?.forEach((user)=>{
            console.log(`Sending message to user: ${user}`);
        })
    }

    public showAllSubscriber(stockTicker: string){
        let count = 1;
        this.subscription.get(stockTicker)?.forEach((user) => {
            console.log(`User Subscribed to ${stockTicker} Number - ${count} : ${user}`);
            count += 1;
        })
    }

    public async disconnect(){
        await this.redisClient.quit;
    }
}
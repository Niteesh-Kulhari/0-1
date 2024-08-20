import  express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on('error', (err) => console.log("Redis client Error", err));

app.post("/", async (req,res)=>{
    const problemId = req.body.id;
    const code = req.body.code;
    const language = req.body.language;

    try {
        await client.lPush("problems", JSON.stringify({code, language, problemId}));
        res.status(200).send("Submission recieved and stored")
    } catch (error) {
        console.error("Redis error", error);
        res.status(500).send("Failed to store submission");
    }
} )



async function startServer () {

    try {
    await client.connect();
    console.log("Client successfully connected");

    app.listen(3000, ()=>{
        console.log("Server is up and running on 3000")
    })
    } catch (error) {
        console.error("Error connecting to redis client")    
    }
}


startServer();
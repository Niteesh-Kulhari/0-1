import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission : string){
    const {problemId, code, language} = JSON.parse(submission)

    console.log(`Processing Submission for ${problemId} ......`);
    console.log(`Code ${code}`);
    console.log(`Language ${language}`);

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(`Finished processing problem with problemId ${problemId}`);
}


async function workerFunction(){
    try {
        await client.connect();
        console.log("Worker is connected to redis");


        while(true){
             try {
                const submission  = await client.brPop("problems", 0);
                // @ts-ignore
                await processSubmission(submission.element);

             } catch (error) {
                console.log("Error processing submission", error)
             }
        }
    } catch (error) {
        console.log("Error connecting to redis", error);
    }
}

workerFunction();
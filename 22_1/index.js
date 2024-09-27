import express from "express"
import cluster from "cluster"
import os from "os"

const totalCpus = os.cpus().length;

const port = 3000;

if(cluster.isPrimary){
    console.log(`Number of cpus is ${totalCpus}`)
    console.log(`Primary ${process.pid} is running`)

    // Forking to create multiple processes

    for(let i=0; i<totalCpus; i++){
        cluster.fork();
    }

    cluster.on("exit", (Worker, code, signal) => {
        console.log(`Worker ${Worker.process.pid} died`)
        console.log("Let's fork another worker!");
        cluster.fork();
    })
}else{
    const app = express();
    console.log(`Worker ${process.pid} started`);

    app.get("/", (req, res)=>{
        res.send("Hello World")
    })

    app.get("/api/:n", (req,res)=>{
        const num = req.params.n;
        let count = 0;

        if (num > 5000000000) n = 5000000000;

        for(let i=0; i<num; i++){
            count += i;
        }

        res.send(`The total count is ${count} and process is ${process.pid}`);
    });

    app.listen(port, ()=>{
        console.log(`App listening on Port ${port}`)
    })

}
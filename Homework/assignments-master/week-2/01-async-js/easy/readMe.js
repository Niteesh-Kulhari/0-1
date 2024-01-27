let fs = require('fs');

fs.readFile('a.txt', (err, data)=>{
    console.log(data.toString());
})

let a= 0;

for(let i=0; i<10000000000; i++){
    a += i;
}

let dataWritten = "This is the data getting written to file";

fs.appendFile('a.txt', dataWritten, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully\n");


        fs.readFile('a.txt', (err, data)=>{
            console.log(data.toString());
        })
    }
})


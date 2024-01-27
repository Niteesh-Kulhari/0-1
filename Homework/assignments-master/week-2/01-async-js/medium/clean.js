const fs = require('fs');


fs.readFile('file.txt', 'utf8',  (err, data)=>{
    
    if(err){
        console.log(err);
        return;
    }
        let cleanData = data.replace(/\s+/g,' ');

        fs.writeFile('file.txt', cleanData, (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Data cleaned successfully");
            }
        });
});


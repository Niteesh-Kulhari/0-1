import  express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

function add(a: number, b: number){
    return a+b;
}

app.post('/rpc', (req, res) => {
    const{jsonrpc, method, params, id} = req.body;

    if(jsonrpc !== '2.0' || !method || !Array.isArray(params)){
        res.status(400).json(
            {
                jsonrpc: '2.0',
                error: {
                    code: -32600,
                    message: "Invalid Request"
                },
                id: null
            }
        )
    }

    let result;

    switch(method){
        case 'add':
            result = add(params[0], params[1]);
            break;
        default:
            res.status(400).json({
                jsonrpc: '2.0',
                error:{
                    code: -32601,
                    message: "Invalid method",
                },
                id: null
            })
            return;
    }

    res.json({jsonrpc: '2.0', result, id})
});

app.listen(port, ()=> {
    console.log("listening on port 3000")
})


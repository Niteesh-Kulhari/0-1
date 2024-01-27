const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


function sum(n){
    let ans  = 0;
    for(let i=0; i<=n; i++){
        ans += i;
    }

    return ans;
}

app.get('/', (req, res) => {

    const n = req.query.n;
    const ans = sum(n);
    res.send(ans.toString());
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

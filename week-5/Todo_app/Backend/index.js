const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/todos', async (req,res)=>{
    const userBody = req.body;
    const parseBody = createTodo.safeParse(userBody);

    if(!parseBody.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })

        return;
    }

    //Put it in mongoDB

    await todo.create({
        title: userBody.title,
        description: userBody.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put('/completed', async (req, res)=>{
    const updateBody = req.body;
    const parsedUpdateBody = updateTodo.safeParse(updateBody);

    if(!parsedUpdateBody.success){
        res.status(411).json({
            msg: "Your input was wrong"
        })
        return;
    }

    //Update in Mongo

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });
    res.json({
        msg: "completed is updated"
    })

})


app.listen(3000);
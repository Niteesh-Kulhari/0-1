const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb+srv://nkulhari96:D04rHGzzVHJ8XARY@cluster0.pef40ya.mongodb.net/todos");



const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};
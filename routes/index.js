const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // Make sure this path is correct
console.log(Todo);
// Route to fetch all Todos
router.get('/', async (req, res) => {
    try {
        const allTodos = await Todo.find().toArray();
        res.render('index.ejs', { todos: allTodos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

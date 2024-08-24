const router = require("express").Router();
const Todo = require("../models/Todo");

// Routes
router.post("/add/todo", (req, res) => {
    const { todo } = req.body; // Destructuring to get the todo from request body
    const newTodo = new Todo({ todo });

    // Save the todo
    newTodo.save()
        .then(() => {
            console.log("Successfully added todo");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

module.exports = router;

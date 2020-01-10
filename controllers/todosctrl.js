const Todo = require("../models/todo");
const todosArr = Todo.todos;

const index = (req, res) => {
    res.render("index", {
        title: "Unit 2 Assessment",
        todos: todosArr
    });
};

const createOne = (req, res) => {
    let todo = req.body.todo;
    todosArr.push({ todo, done: false });
    res.redirect("/");
};

const deleteOne = (req, res) => {
    let deleteTodo = (arr, idx) => {
        arr.splice(idx, 1);
    };

    deleteTodo(todosArr, req.params.id);

    res.render("index", {
        title: "Unit 2 Assessment",
        todos: todosArr
    });
};

module.exports = {
    index,
    createOne,
    deleteOne
};

const path = require('path');
const db = require(path.join(__dirname, '..', 'models'));

const getTodoList = async (ctx) => {
  const todoList = await db.Todo.findAll();
  ctx.body = todoList;
}

const deleteTodo = async (id) => {
  await db.Todo.destroy({
    where: { id: id }
  })
}

const updateTodo = async (id, title, contents, dueDate) => {
  await db.Todo.update({
    title: title,
    contents: contents,
    dueDate: dueDate
  }, {
    where: { id: id }
  })
}

const addTodo = async (title, contents, dueDate) => {
  await db.Todo.create({
    title: title,
    contents: contents,
    dueDate: dueDate,
    finish: 0
  })
}

const finishTodo = async (id, finish) => {
  await db.Todo.update({
    finish: !finish
  }, {
    where: { id: id }
  })
}

module.exports = {
  getTodoList,
  deleteTodo,
  updateTodo,
  addTodo,
  finishTodo
}
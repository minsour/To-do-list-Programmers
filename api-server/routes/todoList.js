var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

router.get('/', async function(req, res, next) {
  const todoList = {};
  await db.getTodoList(todoList);
  res.send(todoList);
});

module.exports = router;

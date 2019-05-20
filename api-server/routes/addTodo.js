var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET users listing. */
router.post('/', async function(req, res, next) {
  await db.addTodo(req.body.title, req.body.contents, new Date(req.body.date));
  res.send('추가되었습니다.');
});

module.exports = router;

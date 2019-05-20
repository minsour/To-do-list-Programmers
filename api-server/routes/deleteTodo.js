var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET users listing. */
router.post('/', async function(req, res, next) {
  await db.deleteTodo(req.body.id);
  res.send('삭제되었습니다.');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET users listing. */
router.post('/', async function(req, res, next) {
  await db.finishTodo(req.body.id, req.body.finish);
  res.send('Switch Finish.');
});

module.exports = router;

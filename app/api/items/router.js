var express = require('express');
var router = express.Router();
const { getAll, create, getOne, update, destroy } = require('./controller')

/* GET home page. */
router.get('/items', getAll);
router.get('/items/:id', getOne);
router.post('/items', create);
router.put('/items/:id', update);
router.delete('/items/:id', destroy);

module.exports = router;

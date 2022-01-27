var express = require('express');
var router = express.Router();
const { getAll, create, getOne, update, destroy, move } = require('./controller')

/* GET home page. */
// router.get('/items', getAll);
router.get('/items/:id', getOne);
router.post('/items', create);
router.put('/items/:id', update);
router.put('/items/:id/move', move);
router.delete('/items/:id', destroy);

module.exports = router;

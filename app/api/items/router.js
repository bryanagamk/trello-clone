var express = require('express');
const { validateOne, validateCreate, validateUpdate, validateMove } = require('./validation');
var router = express.Router();
const { getAll, create, getOne, update, destroy, move } = require('./controller');
/* GET home page. */
// router.get('/items', getAll);
router.get('/items/:id', validateOne, getOne);
router.post('/items', validateCreate, create);
router.put('/items/:id', validateUpdate, update);
router.put('/items/:id/move', validateMove, move);
router.delete('/items/:id', validateUpdate, destroy);

module.exports = router;

var express = require('express');
var router = express.Router();
const { getAll, create, getOne, update, destroy } = require('./controller')
const { validateCreate, validateOne } = require('./validation')

/* GET home page. */
router.get('/todos', getAll);
router.get('/todos/:id', validateOne, getOne);
router.post('/todos', validateCreate, create);
router.put('/todos/:id', validateUpdate, update);
router.delete('/todos/:id', validateOne, destroy);

module.exports = router;

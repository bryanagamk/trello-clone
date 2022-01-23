const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todosRouter = require('./app/api/todos/router');
const itemsRouter = require('./app/api/items/router');

const URL = '/api/v1';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.json({
        message: 'Welcome to My Trello Apps',
        version: '0.0.1'
    });
});

app.use(`${URL}`, todosRouter);
app.use(`${URL}`, itemsRouter);

module.exports = app;

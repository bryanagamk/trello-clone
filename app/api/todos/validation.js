const { body, param, validationResult } = require('express-validator');
const { Todo } = require('../../db/models');

module.exports = {
    validateCreate: [
        body('name')
            .notEmpty()
            .withMessage('Name is required'),
        (req, res, next) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'Error',
                    error: error.array()
                })
            }

            next();
        }
    ],

    validateUpdate: [
        param('id')
            .notEmpty()
            .withMessage('param id is required')
            .bail()
            .isNumeric()
            .withMessage('id must be an integer')
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Todo.findOne({
                    where: { id: value }
                });
                if (checking == null) {
                    return Promise.reject();
                }
            }).withMessage('Param id not found'),
        body('name')
            .notEmpty()
            .withMessage('Name is required'),
        (req, res, next) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'Error',
                    error: error.array()
                })
            }

            next();
        }
    ],

    validateOne: [
        param('id')
            .notEmpty()
            .withMessage('param id is required')
            .bail()
            .isNumeric()
            .withMessage('id must be an integer')
            .bail()
            .custom(async (value, { req }) => {
                const checking = await Todo.findOne({
                    where: { id: value }
                });
                if (checking == null) {
                    return Promise.reject();
                }
            }).withMessage('Param id not found'),
        (req, res, next) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'Error',
                    error: error.array()
                })
            }

            next();
        }
    ],
}
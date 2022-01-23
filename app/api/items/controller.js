const { Item } = require('../../db/models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Item.findAll({
                attributes: ['id', 'name', 'TodoId'],
            });
            res.status(200).json({
                message: 'success',
                data: result,
            })
        } catch (err) {
            console.log(err);
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await Item.findOne({
                where: { id: id },
                attributes: ['id', 'name', 'TodoId'],
            });
            res.status(200).json({
                message: 'success',
                data: result,
            })
        } catch (err) {
            console.log(err);
        }
    },
    create: async (req, res) => {
        try {
            const { name } = req.body;
            const result = await Item.create({ name });
            res.status(201).json({
                message: 'success',
                data: result,
            })
        } catch (err) {
            console.log(err);
        }
    },
    update: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        Item.findOne({
            where: { id: id }
        }).then((Item) => {
            Item.update({ name: name }).then(() => {
                res.status(201).json({
                    message: 'success',
                    data: Item,
                })
            })
        }).catch((err) => {
            console.log(err);
        });
    },
    destroy: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        Item.findOne({
            where: { id: id }
        }).then((Item) => {
            Item.destroy().then(() => {
                res.status(201).json({
                    message: 'Delete success',
                    data: Item,
                })
            })
        }).catch((err) => {
            console.log(err);
        });
    },
}
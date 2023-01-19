const express = require('express');
const router = express.Router();

const { validatorHandler } = require('../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema, addItemSchema } = require('../squema/orders.schema');
const OrderServices = require('../services/orders.service');
const service = new OrderServices();

router.get('/:id', 
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.findOne(id);
        res.json({
            message: 'Order found',
            data: rta
        });
});

router.get('/', async (req, res, next) => {
    const rta = await service.findAll();
    res.json({
        message: 'All orders',
        data: rta
    });
});

router.post('/',
    validatorHandler(createOrderSchema, 'body'),
    async (req, res, next) => {
        const body = req.body;
        const rta = await service.create(body);
        res.status(201).json({
            message: 'Order created'
        });
});

router.post('/add-item',
    validatorHandler(addItemSchema, 'body'),
    async (req, res, next) => {
        const body = req.body;
        const rta = await service.addItem(body);
        res.status(201).json({
            message: 'Order created',
            data: rta
        });
});

// router.put('/:id',
//     // validatorHandler(getUserSchema, 'params'),
//     // validatorHandler(updateUserSchema, 'body'),
//     async (req, res, next) => {
//         const { id } = req.params;
//         const body = req.body;
//         const rta = await service.update(id, body);
//         res.json({
//             message: 'Order Updated',
//             data: rta
//         });
// });

router.delete('/:id', 
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.delete(id);
        res.json({
            message: 'deleted order',
            data: rta
        });
});

module.exports = router;

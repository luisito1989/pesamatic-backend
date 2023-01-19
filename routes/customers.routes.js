const express = require('express');
const router = express.Router();

const { validatorHandler } = require('../middlewares/validator.handler');
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require('../squema/customer.schema');
const CustomerServices = require('../services/customers.service');
const service = new CustomerServices();

router.get('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.findOne(id);
        res.json({
            message: 'Customer found',
            data: rta
        });
});

router.get('/', async (req, res, next) => {
    const rta = await service.findAll();
    res.json({
        message: 'All customers',
        data: rta
    });
});

router.post('/', 
    validatorHandler(createCustomerSchema, 'body'),
    async (req, res, next) => {
        const body = req.body;
        const rta = await service.create(body);
        res.status(201).json({
            message: 'Customer created'
        });
});

router.put('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async (req, res, next) => {
        const { id } = req.params;
        const body = req.body;
        const rta = await service.update(id, body);
        res.json({
            message: 'Customer Updated',
            data: rta
        });
});

router.delete('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.delete(id);
        res.json({
            message: 'Deleted customer',
            data: rta
        });
});

module.exports = router;

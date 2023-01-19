const express = require('express');
const router = express.Router();

const { validatorHandler } = require('../middlewares/validator.handler');
const { createUserSchema, getUserSchema, updateUserSchema } = require('../squema/users.schema');
const UserServices = require('../services/users.service');
const service = new UserServices();

router.get('/:id', 
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.findOne(id);
        res.json({
            message: 'User found',
            data: rta
        });
});

router.get('/', async (req, res, next) => {
    const rta = await service.findAll();
    res.json({
        message: 'All users',
        data: rta
    });
});

router.post('/', 
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        const body = req.body;
        const rta = await service.create(body);
        res.status(201).json({
            message: 'User created'
        });
});

router.put('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
        const { id } = req.params;
        const body = req.body;
        const rta = await service.update(id, body);
        res.json({
            message: 'User Updated',
            data: rta
        });
});

router.delete('/:id', 
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.delete(id);
        res.json({
            message: 'deleted user',
            data: rta
        });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const { getHeadquarterSchema, createHeadquarterSchema, updateHeadquarterSchema } = require('../squema/headquarter.schema');
const { validatorHandler } = require('../middlewares/validator.handler');
const HeadquarterServices = require('../services/headquarters.service');
const services = new HeadquarterServices();

router.get('/', async (req, res, next) => {
    try {
        const rta = await services.findAll();
        res.json({
            message: 'All headquarters',
            data: rta
        });
    } catch (error) {
        next(error);
    }
});

router.get('/:id', 
    validatorHandler(getHeadquarterSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const rta = await services.findOne(id);
            res.json({
                message: 'Headquarter found',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.post('/', 
    validatorHandler(createHeadquarterSchema, 'body'),
    async (req, res, next) => {
        try {
            const { body } = req;
            const rta = await services.create(body);
            res.json({
                message: 'Headquarter created',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.put('/:id', 
    validatorHandler(getHeadquarterSchema, 'params'),
    validatorHandler(updateHeadquarterSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const { body } = req;
            const rta = await services.update(id, body);
            res.json({
                message: 'Headquarter updated',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.delete('/:id', 
    validatorHandler(getHeadquarterSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const { body } = req;
            const rta = await services.delete(id);
            res.json({
                message: 'Headquarter droped',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

module.exports = router;

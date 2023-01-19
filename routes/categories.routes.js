const express = require('express');
const router = express.Router();

const { getCategorySchema, createCategorySchema, updateCategorySchema } = require('../squema/categories.schema');
const { validatorHandler } = require('../middlewares/validator.handler');
const CategoryServices = require('../services/categories.service');
const services = new CategoryServices();

router.get('/', async (req, res, next) => {
    const rta = await services.findAll({
        include: ['product']
    });
    res.json({
        message: 'Categories finded',
        data: rta
    });
});

router.get('/:id', 
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await services.findOne(id);
        res.json({
            message: 'Category find',
            data: rta
        });
});

router.post('/', 
    validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
        const body = req.body;
        try {
            const rta = await services.create(body);
            res.json({
                message: 'Category created',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.put('/:id', 
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const rta = await services.update(id, body);
            res.json({
                message: 'Category updated',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.delete('/:id', 
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const rta = await services.delete(id);
            res.json({
                message: 'Category droped',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

module.exports = router;

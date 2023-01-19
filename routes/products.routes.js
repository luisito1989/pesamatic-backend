const express = require('express');
const router = express.Router();

const { validatorHandler } = require('../middlewares/validator.handler');
const { createProductSchema, getProductSchema, updateProductSchema, paginationSchema } = require('../squema/products.schema');
const ProductServices = require('../services/products.service');
const service = new ProductServices();

router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.findOne(id);
        res.json({
            message: 'Product found',
            data: rta
        });
});

router.get('/', 
    validatorHandler(paginationSchema, 'query'),
    async (req, res, next) => {
        try {
            // de query se obtienen el limit y el offset para la paginacion
            const { query } = req;
            const rta = await service.findAll(query);
            res.json({
                message: 'All Products',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        const body = req.body;
        const rta = await service.create(body);
        res.status(201).json({
            message: 'Product created',
            data: rta
        });
});

router.put('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
        const { id } = req.params;
        const body = req.body;
        const rta = await service.update(id, body);
        res.json({
            message: 'Product Updated',
            data: rta
        });
});

router.delete('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        const { id } = req.params;
        const rta = await service.delete(id);
        res.json({
            message: 'deleted product',
            data: rta
        });
});

module.exports = router;

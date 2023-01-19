const express = require('express');
const router = express.Router();

const { validatorHandler } = require('../middlewares/validator.handler');
const { getCompanySchema, createCompanySchema, updateCompanySchema } = require('../squema/company.schema');
const CompanyServices = require('../services/company.service');
const services = new CompanyServices();

router.get('/:id', 
    validatorHandler(getCompanySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const rta = await services.findOne(id);
            res.json({
                message: 'Company found',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.get('/', async (req, res, next) => {
    try {
        const rta = await services.findAll();
        res.json({
            message: 'All company',
            data: rta
        });
    } catch (error) {
        next(error);
    }
});

router.post('/', 
    validatorHandler(createCompanySchema, 'params'),
    async (req, res, next) => {
        try {
            const { body } = req;
            const rta = await services.create(body);
            res.json({
                message: 'Company created',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.put('/:id', 
    validatorHandler(getCompanySchema, 'params'),
    validatorHandler(updateCompanySchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const { body } = req;
            const rta = await services.update(id, body);
            res.json({
                message: 'Company updated',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

router.delete('/:id', 
    validatorHandler(getCompanySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const { body } = req;
            const rta = await services.delete(id);
            res.json({
                message: 'Company droped',
                data: rta
            });
        } catch (error) {
            next(error);
        }
});

module.exports = router;

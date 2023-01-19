const express = require('express');

const userRouter = require('./users.routes');
const categoriesRouter = require('./categories.routes');
const companyRouter = require('./company.routes');
const headquarterRouter = require('./headquarter.routes');
const customerRouter = require('./customers.routes');
const productServices = require('./products.routes');
const orderRoutes = require('./order.routes');

const setRoutes = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', userRouter);
    router.use('/categories', categoriesRouter);
    router.use('/company', companyRouter);
    router.use('/headquarters', headquarterRouter);
    router.use('/customers', customerRouter);
    router.use('/products', productServices);
    router.use('/orders', orderRoutes);
}

module.exports = setRoutes;

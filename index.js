const express = require('express');
const setRoutes = require('./routes');
require('dotenv').config();

const { ormErrorHandler, boomErrorHandler, errorHandler, logError } = require('./middlewares/error.handler');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(logError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

setRoutes(app);

app.listen(port, () => {
    console.log(`init on port ${port}`);
});

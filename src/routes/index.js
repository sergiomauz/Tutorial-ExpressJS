const express = require('express');
const tasksRouter = require('./tasks.router');

const routerApi = (app) => {
    const routerV1 = express.Router();
    app.use('/api/v1', routerV1);
    routerV1.use('/tasks', tasksRouter);
};

module.exports = routerApi;

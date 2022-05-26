const express = require('express');
const app = express();
const routerApi = require('./routes');
const db = require('./database');
const environmentVars = require('../environment.vars');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const port = environmentVars.SERVER_PORT;

app.use(express.json());

app.listen(port, () => {
    console.log('My port: ' + port);
});

routerApi(app);



app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

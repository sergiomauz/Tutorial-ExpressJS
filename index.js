const environmentVars = require('./environment.vars');
const express = require('express');
const app = express();
const routerApi = require('./routes');

const port = environmentVars.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Hello my server on Express');
});

app.get('/new-route', (req, res) => {
    res.send('Hello, I am a new route');
});

app.listen(port, () => {
    console.log('My port: ' + port);
});

routerApi(app);

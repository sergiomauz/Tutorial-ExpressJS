const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello my server on Express')
});

app.get('/new-route', (req, res) => {
    res.send('Hello, I am a new route')
});

app.listen(port, () => {
    console.log('My port ' + port);
});

routerApi(app);
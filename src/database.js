const { connect } = require('mongoose');

(async() => {
    const db = await connect('mongodb://localhost:27017/todolist')
        .then(() => console.log('Connected!!'))
        .catch(err => console.error('Not connected!!', err));
})();

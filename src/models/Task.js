const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Task', taskSchema);

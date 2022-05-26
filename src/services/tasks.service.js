const boom = require('@hapi/boom');
const Task = require('../models/Task');

class TasksService {
    constructor() {};

    async create(request) {
        const task = Task(request.body);
        const taskSaved = await task.save();

        return taskSaved;
    };

    async list(request) {
        const tasksList = await Task.find().lean();

        return tasksList;
    };

    async show(request) {
        const { id } = request.params;
        const selectedTask = await Task.findById(id).lean();

        if (!selectedTask) {
            throw boom.notFound('Task not found');
        }

        return selectedTask;
    };

    async update(request) {
        const { id } = request.params;
        const body = request.body;
        const updatedTask = await Task.findByIdAndUpdate(id, body);

        if (!updatedTask) {
            throw boom.notFound('Task not found');
        }

        return updatedTask;
    };

    async delete(request) {
        const { id } = request.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            throw boom.notFound('Task not found');
        }

        return deletedTask;
    };
}

module.exports = TasksService;

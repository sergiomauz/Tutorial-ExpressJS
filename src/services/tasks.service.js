const boom = require('@hapi/boom');
const Task = require('../models/Task');

class TasksService {
    constructor() {};

    async create(request) {
        try {
            const task = Task(request.body);
            const taskSaved = await task.save();

            return taskSaved;
        } catch (error) {
            throw boom.badRequest('Bad request. Try again.');
        }
    };

    async list(request) {
        try {
            const tasksList = await Task.find().lean();

            return tasksList;
        } catch (error) {
            throw boom.notFound('Tasks not found');
        }
    };

    async show(request) {
        try {
            const { id } = request.params;
            const selectedTask = await Task.findById(id);

            if (!selectedTask) {
                throw boom.notFound('Task not found');
            }

            return selectedTask;
        } catch (error) {
            // throw boom.notFound('Task not found');
        }
    };


    update() {

    };

    delete() {

    };
}

module.exports = TasksService;

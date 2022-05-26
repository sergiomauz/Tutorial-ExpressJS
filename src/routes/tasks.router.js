const express = require('express');
const TasksService = require('../services/tasks.service');
const router = express.Router();

const service = new TasksService();

router.post('/', async(req, res) => {
    const taskSaved = await service.create(req);

    res.json(taskSaved);
});

router.get('/', async(req, res) => {
    const tasksList = await service.list(req);

    res.json(tasksList);
});

router.get('/:id', async(req, res, next) => {
    const selectedTask = await service.show(req);

    res.json(selectedTask);
});

router.put('/:id', async(req, res) => {
    const updatedTask = await service.update(req);

    res.json(updatedTask);
});

router.delete('/:id', async(req, res, next) => {
    const deletedTask = await service.delete(req);

    res.json(deletedTask);
});

module.exports = router;

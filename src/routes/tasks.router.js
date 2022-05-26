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
    // try {
    //     const selectedTask = await service.show(req);

    //     res.json(selectedTask);


    //     const { id } = req.params;
    //     const article = service.show(id);

    //     if (article) {
    //         res.status(200).json(article);
    //     } else {
    //         res.status(404).send('Article not found');
    //     }
    // } catch (error) {
    //     next(error);
    // }
});

router.put('/:id', (req, res) => {
    res.json({
        "body": req.body,
        "params": req.params
    });
});

router.delete('/:id', (req, res) => {
    res.json(req.params);
});


module.exports = router;

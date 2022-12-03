const router = require('express').Router();
const Tasks = require('./model');
const {checkTaskData} = require('./middleware');


router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
})

router.post('/', checkTaskData, async (req, res, next) => {
    try {
        const createdTask = await Tasks.createTask(req.body);
        res.status(201).json(createdTask);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
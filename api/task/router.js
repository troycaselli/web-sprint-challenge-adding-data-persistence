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

// router.post('/', checkProjectName, async (req, res, next) => {
//     try {
//         const createdProject = await Projects.createProject(req.body);
//         res.status(201).json(createdProject);
//     } catch (err) {
//         next(err);
//     }
// })

module.exports = router;
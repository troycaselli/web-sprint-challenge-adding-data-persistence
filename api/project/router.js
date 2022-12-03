const router = require('express').Router();
const Projects = require('./model');
const {checkProjectName} = require('./middleware');


router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
})

router.post('/', checkProjectName, async (req, res, next) => {
    try {
        const createdProject = await Projects.createProject(req.body);
        res.status(201).json(createdProject);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
const router = require('express').Router();
const Projects = require('./model');


router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
})

// router.post('/', checkResourceName, async (req, res, next) => {
//     try {
//         const createdResource = await Resources.createResource(req.body);
//         res.status(201).json(createdResource);
//     } catch (err) {
//         next(err);
//     }
// })

module.exports = router;
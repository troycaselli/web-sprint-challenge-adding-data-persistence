const router = require('express').Router();
const Projects = require('./model');


router.get('/', (req, res, next) => {
    next({status: 400, message: 'error in the projects'})
})

module.exports = router;
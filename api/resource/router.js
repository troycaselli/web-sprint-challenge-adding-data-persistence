const router = require('express').Router();
const Resources = require('./model');
const {checkResourceName} = require('./middleware');


router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources();
        res.status(200).json(resources);
    } catch (err) {
        next(err);
    }
})

router.post('/', checkResourceName, async (req, res, next) => {
    try {
        const createdResource = await Resources.createResource(req.body);
        res.status(201).json(createdResource);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
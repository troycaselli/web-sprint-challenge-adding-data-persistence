const router = require('express').Router();
const Resources = require('./model');


router.get('/', (req, res, next) => {
    next({status: 400, message: 'error in the resources'})
})

module.exports = router;
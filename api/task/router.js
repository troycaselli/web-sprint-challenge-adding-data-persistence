const router = require('express').Router();


router.get('/', (req, res, next) => {
    next({status: 400, message: 'error in the tasks'})
})

module.exports = router;
const {findResourceByName} = require('./model');

module.exports = {
    checkResourceName
}

async function checkResourceName(req, res, next) {
    const {resource_name} = req.body;
    if(!resource_name) {
        next({status: 400, message: 'Resource name is required'});
    } else {
        const existing = await findResourceByName(resource_name)
        if(!existing) {
            next();
        } else {
            next({status: 400, message: `Resource ${resource_name} already exists`});
        }
    }
}
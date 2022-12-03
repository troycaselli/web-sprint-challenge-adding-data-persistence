const {findProjectById} = require('./model');

module.exports = {
    checkTaskData
}

async function checkTaskData(req, res, next) {
    const {task_description, project_id} = req.body;
    if(!task_description || !project_id) {
        next({status: 400, message: 'Task description and project id are required'});
    } else {
        const existing = await findProjectById(project_id)
        if(!existing) {
            next({status: 404, message: `Project with an id of ${project_id} does not exist`});
        } else {
            next();
        }
    }
}
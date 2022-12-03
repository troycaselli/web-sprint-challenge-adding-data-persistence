module.exports = {
    checkProjectName
}

async function checkProjectName(req, res, next) {
    const {project_name} = req.body;
    if(!project_name) {
        next({status: 400, message: 'Project name is required'});
    } else {
        next();
    }
}
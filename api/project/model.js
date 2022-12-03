const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db('projects')
    const result = [];
    projects.forEach(project => {
        console.log(project);
        if(project.project_completed === 1) {
            result.push({...project, project_completed: true});
        } else {
            result.push({...project, project_completed: false});
        }
    })
    return result
}

async function createResource(resource) {
    await db('resources')
        .insert(resource)
    return findResourceByName(resource.resource_name)
}

function findResourceByName(resource_name) {
    return db('resources')
        .where({resource_name})
        .first()
}

module.exports = {
    getProjects,
    createResource,
    findResourceByName
}
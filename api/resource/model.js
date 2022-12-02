const db = require('../../data/dbConfig');

function getResources() {
    return db('resources')
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
    getResources,
    createResource,
    findResourceByName
}
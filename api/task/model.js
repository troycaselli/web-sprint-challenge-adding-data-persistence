const db = require('../../data/dbConfig');

async function getTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.project_id')
        .select(
            'task_id', 
            'task_description', 
            'task_notes',
            'task_completed',
            'project_name',
            'project_description'
        )

    const formattedTasks = []

    tasks.forEach(task => {
        if(
            task.task_completed > 0
            || task.task_completed === true) {
                formattedTasks.push({...task, task_completed: true})
        } else {
            formattedTasks.push({...task, task_completed: false})
        }
    })

    return formattedTasks
}

async function createTask(task) {
    const result = await db('tasks')
        .insert(task)
    return findTaskById(result)
}

function findTaskById(task_id) {
    return db('tasks')
        .where({task_id})
        .first()
}

module.exports = {
    getTasks,
    createTask,
    findTaskById
}
exports.seed = async function(knex) {
  await knex('tasks').insert([
    {task_description: 'Cut drywall', task_notes: 'Measure twice, cut once', task_completed: true, project_id: 1},
    {task_description: 'Screw drywall', task_completed: 0, project_id: 1},
    {task_description: 'Paint edges', task_notes: 'Use brush', project_id: 2},
    {task_description: 'Paint body', task_notes: 'Use roller', task_completed: false, project_id: 2},
    {task_description: 'Hang up pictures', project_id: 3},
  ]);
};

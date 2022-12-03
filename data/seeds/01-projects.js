exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      project_name: 'Hang Drywall', 
      project_description: 'Hang drywall in basement', 
      project_completed: 0
    },
    {
      project_name: 'Paint', 
      project_completed: 0
    },
    {
      project_name: 'Hang Pictures', 
      project_description: 
        'Decorate the game room with your favorite pictures'
    }
  ]);
};

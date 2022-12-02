exports.seed = async function(knex) {
  await knex('resources').insert([
    {resource_name: 'drywall', resource_description: 'material'},
    {resource_name: 'drill', resource_description: 'tool'},
    {resource_name: 'step ladder', resource_description: 'tool'},
    {resource_name: 'paint', resource_description: 'material'},
    {resource_name: 'brush', resource_description: 'tool'},
    {resource_name: 'roller', resource_description: 'tool'},
    {resource_name: 'pictures'},
    {resource_name: 'hammer'}
  ]);
};

exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name')
                .notNullable()
            table.string('project_description')
            table.boolean('project_completed')
                .default(0)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name')
                .notNullable()
                .unique()
            table.string('resource_description')
        })
        .createTable('project_resources', table => {
            table.increments('project_resources_id')
            table.integer('projects_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('resources_id')
                .unsigned()
                .notNullable()
                .references('resources_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.string('task_description')
                .notNullable()
            table.string('task_notes')
            table.boolean('task_completed')
                .default(0)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })

};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};

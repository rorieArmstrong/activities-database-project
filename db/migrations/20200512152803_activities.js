
exports.up = function(knex) {
  return knex.schema.createTable('activities', table =>{
      table.increments();
      table.string('activity', 255).notNullable();
      table.string('location', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('activities')
};

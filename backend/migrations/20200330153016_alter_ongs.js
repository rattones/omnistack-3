
exports.up = function(knex) {
    return knex.schema.alterTable('ongs', function(table) {
        table.string('password').notNullable().defaultTo('123');
      });
};

exports.down = function(knex) {
  
};

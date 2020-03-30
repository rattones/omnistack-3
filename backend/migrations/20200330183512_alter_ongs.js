
exports.up = function(knex) {
    return knex.schema.alterTable('ongs', function(table) {
        table.unique('whatsapp')
      })
};

exports.down = function(knex) {
  
};

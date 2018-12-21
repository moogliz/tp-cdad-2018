
exports.up = function(knex, Promise) {
  return knex.schema.table("sentences", function(table) {
    table.timestamp('createdAt')
    table.timestamp('updatedAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("sentences", function(table) {
    table.dropColumns(['createdAt', 'updatedAt']);
  })
};

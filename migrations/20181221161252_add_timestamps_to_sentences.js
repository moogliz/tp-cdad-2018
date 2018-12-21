
exports.up = function(knex, Promise) {
  return knex.schema.table("sentences", function(table) {
    table.integer('createdAt')
    table.integer('updatedAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("sentences", function(table) {
    table.dropColumns(['createdAt', 'updatedAt']);
  })
};

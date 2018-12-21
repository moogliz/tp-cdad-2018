
exports.up = function(knex, Promise) {
  knex.schema.table("sentences", function(table) {
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.table("sentences", function(table) {
    table.dropTimestamps();
  })
};

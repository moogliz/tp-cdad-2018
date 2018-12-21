exports.up = function(knex, Promise) {
  knex.schema.createTable('sentences', function (table) {
    table.increments();
    table.string('sentence');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('sentences');
};

exports.config = { transaction: false };

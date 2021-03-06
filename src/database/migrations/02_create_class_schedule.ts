import Knex from 'knex';

// do
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary;
    
    table.integer('week_day').notNullable;
    table.integer('to').notNullable;
    table.integer('from').notNullable;

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
}

// redo
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
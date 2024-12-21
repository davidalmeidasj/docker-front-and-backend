/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('appointments', (table) => {
            table.increments('id').primary();
            table.integer('provider_id').notNullable();
            table.integer('patient_id').notNullable();
            table.timestamp('start_time').notNullable();
            table.timestamp('end_time').notNullable();
            table.text('description');
            table.string('status', 20).notNullable();
        })
        .createTable('availability', (table) => {
            table.increments('id').primary();
            table.integer('provider_id').notNullable();
            table.string('day_of_week', 20).notNullable();
            table.time('start_time').notNullable();
            table.time('end_time').notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('availability')
        .dropTableIfExists('appointments');
};

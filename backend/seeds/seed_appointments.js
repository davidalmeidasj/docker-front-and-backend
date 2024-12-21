/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('appointments').del();
  await knex('availability').del();

  await knex('appointments').insert([
    {
      provider_id: 1,
      patient_id: 2,
      start_time: '2024-12-22T10:00:00Z',
      end_time: '2024-12-22T10:30:00Z',
      description: 'Consultation',
      status: 'booked',
    },
  ]);

  await knex('availability').insert([
    {
      provider_id: 1,
      day_of_week: 'Monday',
      start_time: '09:00',
      end_time: '17:00',
    },
  ]);
};

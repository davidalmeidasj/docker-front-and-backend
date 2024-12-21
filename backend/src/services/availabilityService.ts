import { pool } from '../db';

export const getAvailability = async () => {
    const result = await pool.query('SELECT * FROM availability');
    return result.rows;
};

export const createAvailability = async (availability: any) => {
    const { providerId, dayOfWeek, startTime, endTime } = availability;
    const result = await pool.query(
        'INSERT INTO availability (provider_id, day_of_week, start_time, end_time) VALUES ($1, $2, $3, $4) RETURNING *',
        [providerId, dayOfWeek, startTime, endTime]
    );
    return result.rows[0];
};

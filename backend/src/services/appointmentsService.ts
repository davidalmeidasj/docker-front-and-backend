import { pool } from '../db';

export const getAppointments = async () => {
    const result = await pool.query('SELECT * FROM appointments');
    return result.rows;
};

export const createAppointment = async (appointment: any) => {
    const { providerId, patientId, startTime, endTime, description, status } = appointment;
    const result = await pool.query(
        'INSERT INTO appointments (provider_id, patient_id, start_time, end_time, description, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [providerId, patientId, startTime, endTime, description, status]
    );
    return result.rows[0];
};

export const updateAppointment = async (id: number, updates: any) => {
    const { startTime, endTime, description, status } = updates;
    const result = await pool.query(
        'UPDATE appointments SET start_time = $1, end_time = $2, description = $3, status = $4 WHERE id = $5 RETURNING *',
        [startTime, endTime, description, status, id]
    );
    return result.rows[0];
};

export const deleteAppointment = async (id: number): Promise<boolean> => {
    const result = await pool.query('DELETE FROM appointments WHERE id = $1 RETURNING *', [id]);

    return (result.rowCount as number) > 0;
};

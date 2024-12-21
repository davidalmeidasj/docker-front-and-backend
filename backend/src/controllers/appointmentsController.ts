import { Request, Response } from 'express';
import * as appointmentsService from '../services/appointmentsService';

export const getAppointments = async (_req: Request, res: Response) => {
    const appointments = await appointmentsService.getAppointments();
    res.json(appointments);
};

export const createAppointment = async (req: Request, res: Response) => {
    const newAppointment = await appointmentsService.createAppointment(req.body);
    res.status(201).json(newAppointment);
};

export const updateAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedAppointment = await appointmentsService.updateAppointment(Number(id), req.body);

        if (!updatedAppointment) {
            res.status(404).json({ message: 'Appointment not found' });
            return;
        }

        res.json(updatedAppointment);
    } catch (error: any) {
        console.error('Error updating appointment:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const success = await appointmentsService.deleteAppointment(Number(id));

        if (!success) {
            res.status(404).json({ message: 'Appointment not found' });
            return;
        }

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting appointment:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

import { Request, Response } from 'express';
import * as availabilityService from '../services/availabilityService';

export const getAvailability = async (_req: Request, res: Response) => {
    const availability = await availabilityService.getAvailability();
    res.json(availability);
};

export const createAvailability = async (req: Request, res: Response) => {
    const newAvailability = await availabilityService.createAvailability(req.body);
    res.status(201).json(newAvailability);
};

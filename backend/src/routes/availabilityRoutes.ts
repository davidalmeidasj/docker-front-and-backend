import { Router } from 'express';
import * as availabilityController from '../controllers/availabilityController';

const router = Router();

router.get('/', availabilityController.getAvailability);
router.post('/', availabilityController.createAvailability);

export default router;

import { Router } from 'express';
import * as appointmentsController from '../controllers/appointmentsController';

const router = Router();

router.get('/', appointmentsController.getAppointments);
router.post('/', appointmentsController.createAppointment);
router.put('/:id', appointmentsController.updateAppointment);
router.delete('/:id', appointmentsController.deleteAppointment);

export default router;

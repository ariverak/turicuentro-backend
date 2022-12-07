import { Router } from 'express';
import { getReservations,createReservation,updateReservation,deleteReservation } from '../controllers/reservations.controller';

const router = Router();

router.get('/', getReservations);
router.post('/', createReservation)
router.put('/:id', updateReservation)
router.delete('/:id', deleteReservation)

export default router;
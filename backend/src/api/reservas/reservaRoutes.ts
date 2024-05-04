import { Router } from 'express';
import {
    getAllReservations,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation
} from './reservaController';

const router = Router();

// Fetch all reservations
router.get('/', getAllReservations);

// Fetch a single reservation by ID
router.get('/:id', getReservationById);

// Create a new reservation
router.post('/', createReservation);

// Update an existing reservation
router.put('/:id', updateReservation);

// Delete a reservation
router.delete('/:id', deleteReservation);

export default router;
import { Router } from 'express';
import { makePayment, getPaymentDetails, refundPayment } from './paymentController';

const router = Router();

// Endpoint to process a new payment
router.post('/make', makePayment);

// Endpoint to retrieve details of a specific payment
router.get('/:paymentId', getPaymentDetails);

// Endpoint to refund a specific payment
router.post('/refund/:paymentId', refundPayment);

export default router;
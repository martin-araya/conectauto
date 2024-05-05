import express from 'express';
import {
  createPaymentIntent,
  createCustomer,
  createInvoice,
  createSession,
} from '../payments/stripeController';

const router = express.Router();

router.get('/payment-intent', createPaymentIntent);
router.post('/customer', createCustomer);
router.post('/invoice', createInvoice);
router.post('/checkout-session', createSession);

export default router;
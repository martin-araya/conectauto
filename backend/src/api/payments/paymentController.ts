import { Request, Response } from 'express';
import * as StripeService from './services/stripeServices';
import bodyParser from 'body-parser';

// Function to handle creating a payment
export const makePayment = async (req: Request, res: Response) => {
    ;
    try {
        const session = await StripeService.createCheckoutSession(product_name, unit_amount, currency);
        res.status(201).json(session);
    } catch (error:any) {
        res.status(500).send(`Error processing payment: ${error.message}`);
    }
};
// Function to get details about a specific payment
export const getPaymentDetails = async (req: Request, res: Response) => {
    const { paymentId } = req.params;
    try {
        const paymentIntent = await StripeService.getPaymentIntentDetails(paymentId);
        res.status(200).json(paymentIntent);
    } catch (error:any) {
        res.status(404).send(`Payment not found: ${error.message}`);
    }
};

// Function to handle refunding a payment
export const refundPayment = async (req: Request, res: Response) => {
    const { paymentId } = req.params;
    try {
        const refund = await StripeService.refundPayment(paymentId);
        res.status(200).send(`Refund processed for payment ID: ${paymentId}`);
    } catch (error:any) {
        res.status(500).send(`Error processing refund: ${error.message}`);
    }
};
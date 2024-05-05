import Stripe from 'stripe';
import { Request, Response } from 'express';


const stripe = new Stripe('sk_test_51PCumKF580kd3SVlBD0FnQiQixrgrhOEpm3muOq10KE1AQK971eW6glqHtyawDufLVCWdlQwN5CfKr1GzqExbhqw00BFqN85DN');

// Crear Payment Intent
export const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Crear Customer
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const customer = await stripe.customers.create({ email });

    res.json({ customer });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Crear Invoice
export const createInvoice = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.body;

    const invoice = await stripe.invoices.create({
      customer: customerId,
      auto_advance: true, // Avanza automáticamente al estado "finalized"
    });

    res.json({ invoice });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Crear Checkout Session
export const createSession = async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Laptop',
            },
            currency: 'usd',
            unit_amount: 2000,
          },
          quantity: 1,
        },
        {
          price_data: {
            product_data: {
              name: 'TV',
            },
            currency: 'usd',
            unit_amount: 1000,
          },
          quantity: 2,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    console.log(session);
    return res.json({ url: session.url });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
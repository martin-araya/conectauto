import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createCheckoutSession = async (product_name: string, unit_amount: number, currency: string) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price_data: {
                    product_data: {
                        name: 'Tshirt',
                        description: 'Comfortable cotton t-shirt',
                    },
                    currency: 'usd', // Provide a valid currency value
                    unit_amount: 200000, // Stripe's unit amount is in cents
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
        });
        return session;
    } catch (error: any) {
        throw new Error(`Failed to create checkout session: ${error.message}`);
    }
};

export const getPaymentIntentDetails = async (paymentId: string) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);
        return paymentIntent;
    } catch (error:any) {
        throw new Error(`Failed to retrieve payment intent: ${error.message}`);
    }
};

export const refundPayment = async (paymentId: string) => {
    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentId,
        });
        return refund;
    } catch (error:any) {
        throw new Error(`Failed to refund payment: ${error.message}`);
    }
};
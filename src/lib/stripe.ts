import Stripe from 'stripe';

// Server-side Stripe instance - lazy initialization
let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
  if (!stripeInstance) {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
    }
    stripeInstance = new Stripe(apiKey, {
      apiVersion: '2026-01-28.clover',
    });
  }
  return stripeInstance;
};

// Stripe configuration
export const stripeConfig = {
  publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
};

import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { tools } from '@/data/tools';

export async function POST(req: NextRequest) {
  try {
    const { toolId, type, amount } = await req.json();

    const tool = tools.find((t) => t.id === toolId);
    if (!tool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
    }

    // Get Stripe instance
    const stripe = getStripe();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${tool.name} - ${type === 'purchase' ? 'Purchase' : 'Customization Deposit'}`,
              description: tool.description,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout?toolId=${toolId}&type=${type}&deposit=${amount}`,
      metadata: {
        toolId,
        type,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

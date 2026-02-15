'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { tools } from '@/data/tools';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const toolId = searchParams.get('toolId');
  const type = searchParams.get('type') as 'purchase' | 'customization' | null;
  const deposit = searchParams.get('deposit');

  const [loading, setLoading] = useState(false);
  const [tool, setTool] = useState(tools.find((t) => t.id === toolId));

  useEffect(() => {
    if (toolId) {
      setTool(tools.find((t) => t.id === toolId));
    }
  }, [toolId]);

  if (!tool || !type) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Invalid checkout parameters</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  const amount = type === 'purchase' ? tool.price : parseInt(deposit || '1000');

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Call Stripe API to create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toolId: tool.id,
          type,
          amount,
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error creating checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error processing checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Summary */}
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Tool:</span>
                <span className="font-medium">{tool.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium capitalize">{type}</span>
              </div>
              {type === 'customization' && (
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Deposit Amount:</span>
                  <span className="font-medium">${(amount / 100).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-lg font-bold mt-4">
                <span>Total:</span>
                <span className="text-blue-600">${(amount / 100).toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm">
                <strong>Secure Payment:</strong> You will be redirected to Stripe&apos;s secure checkout page to complete
                your payment.
              </p>
            </div>

            {type === 'customization' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Note:</strong> This is a deposit payment. Our team will review your requirements and provide
                  a full project quote within 24 hours.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link href={`/tools/${tool.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
              <Button
                onClick={handleCheckout}
                disabled={loading}
                className="flex-1"
              >
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </Button>
            </div>

            {/* Social Sharing Placeholder */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">
                Share your purchase on social media:
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Share on LinkedIn
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Share on Facebook
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Social sharing will be available after successful purchase
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-12"><div className="container mx-auto px-4 text-center">Loading...</div></div>}>
      <CheckoutContent />
    </Suspense>
  );
}

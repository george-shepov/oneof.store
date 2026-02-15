'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showSocialShare, setShowSocialShare] = useState(false);

  useEffect(() => {
    // Show social share after 2 seconds
    const timer = setTimeout(() => {
      setShowSocialShare(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      '_blank',
      'width=600,height=600'
    );
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      '_blank',
      'width=600,height=600'
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
            <CardTitle className="text-3xl text-green-600">Payment Successful!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              Thank you for your purchase. We&apos;ve received your payment and will begin processing your order.
            </p>

            {sessionId && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Session ID:</strong> {sessionId.substring(0, 20)}...
                </p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm">
                <strong>What&apos;s Next?</strong>
                <br />
                You&apos;ll receive a confirmation email shortly with details about your purchase. Our team will contact you
                within 24 hours to discuss the next steps.
              </p>
            </div>

            {showSocialShare && (
              <div className="border-t pt-6 animate-fade-in">
                <h3 className="font-semibold mb-3">Share the news!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Let your network know about your new tool from OneOf.Store
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={handleLinkedInShare}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <span className="text-blue-700">in</span>
                    Share on LinkedIn
                  </Button>
                  <Button
                    onClick={handleFacebookShare}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <span className="text-blue-600">f</span>
                    Share on Facebook
                  </Button>
                </div>
              </div>
            )}

            <div className="pt-6">
              <Link href="/">
                <Button size="lg">Return to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-12"><div className="container mx-auto px-4 text-center">Loading...</div></div>}>
      <SuccessContent />
    </Suspense>
  );
}

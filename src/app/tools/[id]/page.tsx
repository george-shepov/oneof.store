'use client';

import { tools } from '@/data/tools';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ToolDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    notFound();
  }

  const handlePurchase = () => {
    // Redirect to checkout page
    window.location.href = `/checkout?toolId=${tool.id}&type=purchase`;
  };

  const handleCustomize = () => {
    // Redirect to customization wizard
    window.location.href = `/customize/${tool.id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Gallery
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tool Image/Icon */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-9xl font-bold">
              {tool.name.charAt(0)}
            </div>
          </div>

          {/* Tool Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="success">{tool.category}</Badge>
                {tool.customizable && <Badge>Customizable</Badge>}
              </div>
              <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
              <p className="text-lg text-gray-600">{tool.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">
                  ${(tool.price / 100).toFixed(2)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full"
                >
                  Purchase Now
                </Button>
                {tool.customizable && (
                  <Button
                    onClick={handleCustomize}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Request Customization
                  </Button>
                )}
                <p className="text-sm text-gray-500 text-center">
                  Secure payment powered by Stripe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🚀 Quick Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get up and running within 24-48 hours after purchase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🛠️ Full Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Use our wizard to specify your exact requirements and get a custom solution.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📞 Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                30 days of support included with every purchase.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

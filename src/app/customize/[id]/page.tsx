'use client';

import { useState, use } from 'react';
import { tools } from '@/data/tools';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

type WizardStep = 1 | 2 | 3 | 4;

export default function CustomizationWizard({ params }: PageProps) {
  const { id } = use(params);
  const tool = tools.find((t) => t.id === id);
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [formData, setFormData] = useState({
    projectName: '',
    businessGoals: '',
    targetAudience: '',
    features: [] as string[],
    timeline: '',
    budget: '',
    platforms: [] as string[],
    integrations: [] as string[],
    scalability: '',
    style: '',
    colorScheme: '',
    inspirations: [] as string[],
    additionalNotes: '',
  });

  if (!tool) {
    notFound();
  }

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as WizardStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as WizardStep);
    }
  };

  const handleSubmit = () => {
    // Navigate to checkout with customization data
    const depositAmount = Math.max(tool.price * 0.2, 1000); // 20% deposit, minimum $10.00 (prices in cents)
    window.location.href = `/checkout?toolId=${tool.id}&type=customization&deposit=${depositAmount}`;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Project Name *</label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => handleInputChange('projectName', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., My Custom E-Commerce Platform"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Business Goals *</label>
              <textarea
                value={formData.businessGoals}
                onChange={(e) => handleInputChange('businessGoals', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Describe what you want to achieve with this tool..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Target Audience *</label>
              <textarea
                value={formData.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Who will be using this tool?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Timeline *</label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select timeline...</option>
                <option value="1-2 months">1-2 months</option>
                <option value="2-4 months">2-4 months</option>
                <option value="4-6 months">4-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range *</label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select budget range...</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Required Platforms</label>
              <div className="space-y-2">
                {['Web', 'iOS', 'Android', 'Desktop', 'API'].map((platform) => (
                  <label key={platform} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.platforms.includes(platform)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('platforms', [...formData.platforms, platform]);
                        } else {
                          handleInputChange(
                            'platforms',
                            formData.platforms.filter((p) => p !== platform)
                          );
                        }
                      }}
                      className="mr-2"
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Required Integrations</label>
              <div className="space-y-2">
                {['Payment Gateway', 'Email Service', 'SMS Service', 'Analytics', 'CRM', 'Social Media'].map(
                  (integration) => (
                    <label key={integration} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.integrations.includes(integration)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleInputChange('integrations', [...formData.integrations, integration]);
                          } else {
                            handleInputChange(
                              'integrations',
                              formData.integrations.filter((i) => i !== integration)
                            );
                          }
                        }}
                        className="mr-2"
                      />
                      {integration}
                    </label>
                  )
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Scalability Requirements</label>
              <select
                value={formData.scalability}
                onChange={(e) => handleInputChange('scalability', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select scalability...</option>
                <option value="Small (100-1,000 users)">Small (100-1,000 users)</option>
                <option value="Medium (1,000-10,000 users)">Medium (1,000-10,000 users)</option>
                <option value="Large (10,000-100,000 users)">Large (10,000-100,000 users)</option>
                <option value="Enterprise (100,000+ users)">Enterprise (100,000+ users)</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Design Style</label>
              <select
                value={formData.style}
                onChange={(e) => handleInputChange('style', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select style...</option>
                <option value="Modern">Modern</option>
                <option value="Minimalist">Minimalist</option>
                <option value="Bold">Bold</option>
                <option value="Classic">Classic</option>
                <option value="Playful">Playful</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Color Scheme Preference</label>
              <input
                type="text"
                value={formData.colorScheme}
                onChange={(e) => handleInputChange('colorScheme', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Blue and white, Dark theme, Vibrant colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Inspiration Links</label>
              <textarea
                value={formData.inspirations.join('\n')}
                onChange={(e) =>
                  handleInputChange('inspirations', e.target.value.split('\n').filter((s) => s.trim()))
                }
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Add URLs to websites or designs you like (one per line)"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Additional Notes</label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={6}
                placeholder="Any other requirements, questions, or specific needs?"
              />
            </div>

            {/* Summary */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Requirements Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>Project:</strong> {formData.projectName || 'Not specified'}
                </div>
                <div>
                  <strong>Timeline:</strong> {formData.timeline || 'Not specified'}
                </div>
                <div>
                  <strong>Budget:</strong> {formData.budget || 'Not specified'}
                </div>
                <div>
                  <strong>Platforms:</strong>{' '}
                  {formData.platforms.length > 0 ? formData.platforms.join(', ') : 'None selected'}
                </div>
                <div>
                  <strong>Integrations:</strong>{' '}
                  {formData.integrations.length > 0 ? formData.integrations.join(', ') : 'None selected'}
                </div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm">
                <strong>Next Steps:</strong> After submitting, you&apos;ll be redirected to pay a deposit (20% of estimated
                cost). Our team will review your requirements within 24 hours and contact you to discuss the project in
                detail.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    'Project Overview',
    'Technical Requirements',
    'Design Preferences',
    'Review & Submit',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href={`/tools/${tool.id}`} className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to {tool.name}
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Customization Wizard</CardTitle>
            <CardDescription>
              Tell us about your requirements for {tool.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 ${step !== 4 ? 'mr-2' : ''}`}
                  >
                    <div
                      className={`h-2 rounded ${
                        step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Step {currentStep} of 4: {stepTitles[currentStep - 1]}
              </div>
            </div>

            {/* Step Content */}
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handleBack}
                variant="outline"
                disabled={currentStep === 1}
              >
                Back
              </Button>
              {currentStep < 4 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit & Pay Deposit</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

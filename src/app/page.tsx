import { ToolCard } from '@/components/ToolCard';
import { tools } from '@/data/tools';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              OneOf.Store
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Custom Tailored Web, Mobile, and Cloud Tools
            </p>
            <p className="text-lg mb-8">
              Your One Stop Software Development Shop! Purchase ready-made tools or customize them to your exact specifications.
            </p>
            <Link
              href="#tools"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Gallery */}
      <section id="tools" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Tools Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of professional-grade software tools. Purchase ready-made solutions or customize them to fit your unique requirements.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white">All</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Web</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Mobile</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Cloud</button>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OneOf.Store?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customization Wizard</h3>
              <p className="text-gray-600">
                Our guided wizard walks you through requirements gathering and validation for perfect customizations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Integrated with Stripe for secure payments on ready-made tools and custom development deposits.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Integration</h3>
              <p className="text-gray-600">
                Share your projects on LinkedIn and Facebook directly from our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

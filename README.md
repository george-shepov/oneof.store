# OneOf.Store

**Custom Tailored Web, Mobile, and Cloud Tools - Your One Stop Software Development Shop!**

A modern e-commerce platform for purchasing and customizing software development tools. Built with Next.js 14, TypeScript, Tailwind CSS, and Stripe integration.

## Features

- 🛍️ **Tools Gallery** - Browse and purchase ready-made software tools
- ✨ **Customization Wizard** - Multi-step form for gathering project requirements
- 💳 **Stripe Integration** - Secure payments for purchases and custom development deposits
- 📱 **Social Media Integration** - Share purchases on LinkedIn and Facebook
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 📊 **Project Funnel** - Track customization requests and orders

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account for payment processing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/george-shepov/oneof.store.git
cd oneof.store
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Stripe keys:
```
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── checkout/          # Checkout page
│   ├── customize/[id]/    # Customization wizard
│   ├── success/           # Success page
│   └── tools/[id]/        # Tool detail pages
├── components/            # React components
│   └── ui/               # Reusable UI components
├── data/                 # Static data (tools)
├── lib/                  # Utility functions
└── types/                # TypeScript types
```

## Available Tools

The platform includes sample tools in the following categories:
- **Web** - E-Commerce platforms, project management tools, booking systems
- **Mobile** - Fitness apps, cross-platform solutions
- **Cloud** - CRM systems, AI chatbots, enterprise solutions

## Customization Wizard

The wizard guides customers through 4 steps:
1. **Project Overview** - Name, goals, timeline, budget
2. **Technical Requirements** - Platforms, integrations, scalability
3. **Design Preferences** - Style, colors, inspirations
4. **Review & Submit** - Summary and deposit payment

## Payment Flow

1. Customer selects a tool or requests customization
2. Redirected to checkout page
3. Stripe checkout session created
4. Secure payment via Stripe
5. Success page with social sharing options

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables

Make sure to set these environment variables in your deployment:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_APP_URL`

## Development

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Start Production Server
```bash
npm start
```

## Technologies Used

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Payment:** Stripe
- **Forms:** React Hook Form
- **UI Components:** Radix UI primitives

## Future Enhancements

- User authentication and accounts
- Admin dashboard for managing tools and orders
- Email notifications
- Enhanced social media OAuth integration
- Project tracking dashboard
- Review and rating system
- Search and advanced filtering

## Learn More

To learn more about Next.js:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or support, please open an issue on GitHub.

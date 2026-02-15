import { Tool } from '@/types';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Full-featured online store with inventory management, payment processing, and analytics dashboard.',
    category: 'Web',
    price: 4999,
    image: '/tools/ecommerce.jpg',
    features: [
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Order tracking',
      'Admin dashboard',
      'Analytics and reporting'
    ],
    customizable: true,
    tags: ['web', 'ecommerce', 'stripe', 'dashboard']
  },
  {
    id: '2',
    name: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans, nutrition logging, and social features.',
    category: 'Mobile',
    price: 7999,
    image: '/tools/fitness.jpg',
    features: [
      'Workout tracking',
      'Nutrition logging',
      'Progress charts',
      'Social sharing',
      'Push notifications',
      'Wearable integration'
    ],
    customizable: true,
    tags: ['mobile', 'fitness', 'health', 'ios', 'android']
  },
  {
    id: '3',
    name: 'CRM System',
    description: 'Customer relationship management system with lead tracking, email campaigns, and sales pipeline.',
    category: 'Cloud',
    price: 8999,
    image: '/tools/crm.jpg',
    features: [
      'Contact management',
      'Lead tracking',
      'Sales pipeline',
      'Email campaigns',
      'Reporting and analytics',
      'API integration'
    ],
    customizable: true,
    tags: ['cloud', 'crm', 'sales', 'enterprise']
  },
  {
    id: '4',
    name: 'Project Management Tool',
    description: 'Collaborative project management platform with task tracking, time management, and team communication.',
    category: 'Web',
    price: 5999,
    image: '/tools/project.jpg',
    features: [
      'Task management',
      'Gantt charts',
      'Team collaboration',
      'Time tracking',
      'File sharing',
      'Integration with Slack/Teams'
    ],
    customizable: true,
    tags: ['web', 'project', 'collaboration', 'productivity']
  },
  {
    id: '5',
    name: 'AI Chatbot Platform',
    description: 'Intelligent chatbot platform with natural language processing, multi-channel support, and analytics.',
    category: 'Cloud',
    price: 9999,
    image: '/tools/chatbot.jpg',
    features: [
      'NLP integration',
      'Multi-channel support',
      'Custom conversation flows',
      'Analytics dashboard',
      'Integration APIs',
      'Training interface'
    ],
    customizable: true,
    tags: ['cloud', 'ai', 'chatbot', 'nlp', 'automation']
  },
  {
    id: '6',
    name: 'Restaurant Booking System',
    description: 'Online reservation system with table management, customer database, and automated reminders.',
    category: 'Web',
    price: 3999,
    image: '/tools/restaurant.jpg',
    features: [
      'Online reservations',
      'Table management',
      'Customer profiles',
      'Email/SMS reminders',
      'Waitlist management',
      'Analytics reporting'
    ],
    customizable: true,
    tags: ['web', 'restaurant', 'booking', 'hospitality']
  }
];

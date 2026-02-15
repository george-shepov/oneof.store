export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  features: string[];
  customizable: boolean;
  tags: string[];
}

export interface CustomizationRequest {
  id: string;
  toolId: string;
  userId: string;
  status: 'draft' | 'submitted' | 'in-review' | 'approved' | 'in-progress' | 'completed';
  requirements: Requirements;
  depositAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Requirements {
  projectName: string;
  businessGoals: string;
  targetAudience: string;
  features: string[];
  timeline: string;
  budget: string;
  additionalNotes: string;
  technicalRequirements?: {
    platforms: string[];
    integrations: string[];
    scalability: string;
  };
  designPreferences?: {
    style: string;
    colorScheme: string;
    inspirations: string[];
  };
}

export interface Order {
  id: string;
  userId: string;
  toolId: string;
  type: 'purchase' | 'customization';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  stripePaymentId?: string;
  createdAt: Date;
}

export interface SocialPost {
  id: string;
  platform: 'linkedin' | 'facebook';
  content: string;
  toolId?: string;
  customizationId?: string;
  postedAt: Date;
  success: boolean;
}

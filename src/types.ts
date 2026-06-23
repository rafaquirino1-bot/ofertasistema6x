export interface PageConfig {
  vslUrl: string; // The URL/Embed code for the VSL player
  vslType: 'youtube' | 'vimeo' | 'vturb' | 'custom'; // Type of player
  delayMinutes: number;
  delaySeconds: number;
  checkoutUrl: string;
  price: number;
  originalPrice: number;
  whatsappSupportNumber: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
  relativeTime: string;
  screenshotUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

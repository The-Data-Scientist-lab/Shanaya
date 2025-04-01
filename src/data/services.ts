
export interface Service {
  id: number;
  title: string;
  price: number;
  duration: string;
  description: string;
  isPopular?: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Teasing Chat",
    price: 1999,
    duration: "15 minutes",
    description: "A flirtatious video encounter where I'll tease and tantalize your senses",
    isPopular: false
  },
  {
    id: 2,
    title: "Sensual Session",
    price: 3499,
    duration: "30 minutes",
    description: "An intimate one-on-one experience with seductive conversation and playful visuals",
    isPopular: true
  },
  {
    id: 3,
    title: "Fantasy Fulfillment",
    price: 5999,
    duration: "60 minutes",
    description: "Bring your deepest desires to life with a personalized roleplay experience",
    isPopular: false
  },
  {
    id: 4,
    title: "Couple's Delight",
    price: 7999,
    duration: "45 minutes",
    description: "Spice up your relationship with a special session designed for couples",
    isPopular: false
  },
  {
    id: 5,
    title: "VIP Experience",
    price: 12499,
    duration: "90 minutes",
    description: "Premium extended session with all exclusive content and personal attention",
    isPopular: false
  },
  {
    id: 6,
    title: "Late Night Special",
    price: 4499,
    duration: "30 minutes",
    description: "After hours session with extra naughty content only available at night",
    isPopular: false
  },
  {
    id: 7,
    title: "Lingerie Show",
    price: 3999,
    duration: "25 minutes",
    description: "Watch me model my favorite lingerie collections just for your eyes",
    isPopular: false
  },
  {
    id: 8,
    title: "Ultimate Package",
    price: 19999,
    duration: "120 minutes",
    description: "My most exclusive and intimate experience with unlimited possibilities",
    isPopular: false
  }
];

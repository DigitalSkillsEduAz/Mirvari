
export type Region = 'Большой Кавказ' | 'Малый Кавказ' | 'Карабахские горы' | 'Талышские горы' | 'Баку и Абшерон' | 'Все';
export type Difficulty = 'Легкий' | 'Средний' | 'Сложный';

export interface Buddy {
  id: string;
  name: string;
  age: number;
  location: string;
  region: Region;
  role: string; // e.g., "Mountain Expert", "City Guide"
  bio: string;
  rating: number;
  reviewCount: number;
  hikesCompleted: number;
  languages: string[];
  pricePerDay: number;
  specializations: string[];
  imageUrl: string;
  isVerified: boolean;
  isCity: boolean; // True if Baku focused
}

export interface Route {
  id: string;
  title: string;
  region: Region;
  duration: string;
  difficulty: Difficulty;
  maxAltitude?: string;
  description: string;
  imageUrl: string;
  priceEstimate: number;
  isFeatured: boolean;
  itinerary?: { day: number; title: string; desc: string }[];
  requirements?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  tourType: string;
}

export interface Message {
  id: string;
  senderId: 'user' | string; // 'user' is the tourist, string is the buddy ID
  text: string;
  timestamp: number;
  isRead: boolean;
}

export interface ChatSession {
  buddyId: string;
  lastMessage?: Message;
  unreadCount: number;
}

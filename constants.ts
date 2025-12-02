import { Buddy, Route, Review } from './types';

// Mock Data for Buddies
export const BUDDIES: Buddy[] = [
  {
    id: 'rashad-laza',
    name: 'Рашад',
    age: 32,
    location: 'Село Лаза, Гусар',
    region: 'Большой Кавказ',
    role: 'Горный Эксперт',
    bio: "Салам! Я Рашад, родился и вырос в селе Лаза у подножия Большого Кавказа. Горы — это моя жизнь. Я знаю каждую тропу к Базар-Дюзи, каждый скрытый водопад и каждого пастуха. Я поднимался на Базар-Дюзи более 40 раз. Моя цель — показать вам НАСТОЯЩИЙ Азербайджан.",
    rating: 4.9,
    reviewCount: 54,
    hikesCompleted: 58,
    languages: ['AZ', 'EN', 'RU'],
    pricePerDay: 180,
    specializations: ['Высокогорье', 'Фотография', 'Культура'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Man face
    isVerified: true,
    isCity: false,
  },
  {
    id: 'leyla-gabala',
    name: 'Лейла',
    age: 28,
    location: 'Габала',
    region: 'Большой Кавказ',
    role: 'Гид по природе',
    bio: "Специализируюсь на скрытых ущельях и водопадах Кавказа. Я люблю запечатлевать красоту нашей природы и показывать её гостям.",
    rating: 4.8,
    reviewCount: 32,
    hikesCompleted: 42,
    languages: ['AZ', 'EN'],
    pricePerDay: 120,
    specializations: ['Водопады', 'Флора и Фауна', 'Хайкинг'],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80', // Woman face
    isVerified: true,
    isCity: false,
  },
  {
    id: 'tural-shusha',
    name: 'Турал',
    age: 35,
    location: 'Шуша',
    region: 'Карабахские горы',
    role: 'Историк и Локал-гид',
    bio: "Шуша — сердце Азербайджана. Я покажу вам плато Джыдыр Дюзю и туманные леса Карабаха, рассказывая историю нашего края.",
    rating: 5.0,
    reviewCount: 20,
    hikesCompleted: 39,
    languages: ['AZ', 'RU', 'TR'],
    pricePerDay: 150,
    specializations: ['История', 'Треккинг', 'Культура Карабаха'],
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', // Man face
    isVerified: true,
    isCity: false,
  },
  {
    id: 'elchin-lerik',
    name: 'Эльчин',
    age: 50,
    location: 'Лерик',
    region: 'Талышские горы',
    role: 'Эксперт по долголетию',
    bio: "Добро пожаловать в край долгожителей. Талышские горы имеют уникальный субтропический климат и мистические леса, которые я знаю как свои пять пальцев.",
    rating: 4.9,
    reviewCount: 44,
    hikesCompleted: 44,
    languages: ['AZ', 'FA'],
    pricePerDay: 100,
    specializations: ['Леса', 'Местная кухня', 'Легкие прогулки'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // Older man face
    isVerified: true,
    isCity: false,
  },
  {
    id: 'samir-baku',
    name: 'Самир',
    age: 29,
    location: 'Старый Город, Баку',
    region: 'Баку и Абшерон',
    role: 'Городской рассказчик',
    bio: "После ваших горных приключений, позвольте мне показать вам тайны Ичери-шехер и современного Баку.",
    rating: 4.7,
    reviewCount: 62,
    hikesCompleted: 62, // Tours
    languages: ['AZ', 'EN', 'RU'],
    pricePerDay: 80,
    specializations: ['Архитектура', 'История', 'Еда'],
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', // Man face
    isVerified: true,
    isCity: true,
  },
   {
    id: 'aysel-sheki',
    name: 'Айсель',
    age: 26,
    location: 'Шеки',
    region: 'Малый Кавказ',
    role: 'Исследователь долин',
    bio: "Откройте для себя термальные источники и глубокие ущелья Малого Кавказа вместе со мной.",
    rating: 4.8,
    reviewCount: 15,
    hikesCompleted: 35,
    languages: ['AZ', 'EN'],
    pricePerDay: 110,
    specializations: ['Источники', 'Кемпинг', 'Хайкинг'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', // Woman face
    isVerified: true,
    isCity: false,
  },
];

// Mock Data for Routes
export const ROUTES: Route[] = [
  {
    id: 'bazar-dyuzi-expedition',
    title: 'Экспедиция на Базар-Дюзи',
    region: 'Большой Кавказ',
    duration: '3 Дня',
    difficulty: 'Сложный',
    maxAltitude: '4,466м',
    description: 'Покорите высочайшую вершину Азербайджана на границе с Россией. Альпийские луга, ледники и захватывающие панорамы.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', // Snowy High Peaks
    priceEstimate: 540,
    isFeatured: true,
    requirements: ['Треккинговые ботинки', 'Теплая куртка', 'Спальник (-5°C)', 'Физ. подготовка'],
    itinerary: [
      { day: 1, title: 'Из Баку в Базовый лагерь', desc: 'Трансфер в Лазу, подъем в Базовый лагерь (2,200м). Акклиматизация.' },
      { day: 2, title: 'День восхождения', desc: 'Ранний подъем (3 утра). Восхождение на 4,466м. Возвращение в лагерь.' },
      { day: 3, title: 'Возвращение', desc: 'Спуск в Лазу. Традиционный обед. Возвращение в Баку.' }
    ]
  },
  {
    id: 'shusha-jidir',
    title: 'Шуша и Джыдыр Дюзю',
    region: 'Карабахские горы',
    duration: '2 Дня',
    difficulty: 'Средний',
    description: 'Культурное сердце Азербайджана. Туманные леса и легендарное плато.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // Green Valley/Plateau
    priceEstimate: 300,
    isFeatured: true,
  },
  {
    id: 'khinaliq-laza',
    title: 'Трек Хыналыг - Лаза',
    region: 'Большой Кавказ',
    duration: '2 Дня',
    difficulty: 'Средний',
    description: 'Соедините два древнейших села через потрясающий горный перевал.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', // Misty Mountains
    priceEstimate: 250,
    isFeatured: true,
  },
  {
    id: 'talysh-forests',
    title: 'Мистические леса Талыша',
    region: 'Талышские горы',
    duration: '1 День',
    difficulty: 'Легкий',
    description: 'Прогулка по реликтовым гирканским лесам и посещение водопадов в Лерике.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80', // Forest
    priceEstimate: 100,
    isFeatured: false,
  },
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Марк', rating: 5, text: "Рашад показал нам настоящий Кавказ! Базар-Дюзи был незабываемым.", date: "Июль 2024", tourType: "Горный поход" },
  { id: '2', author: 'Елена', rating: 5, text: "После Шуши я поняла, почему Карабах называют сердцем Азербайджана.", date: "Сент 2024", tourType: "Культурный тур" },
  { id: '3', author: 'Сара', rating: 5, text: "Талышские горы — это другой мир. Эльчин был великолепен!", date: "Авг 2024", tourType: "Прогулка на природе" }
];
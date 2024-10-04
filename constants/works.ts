export type Work = {
  id: number;
  key: string;
  name: string;
  category: string;
  role: string;
  year: string;
  description: string;
  mainImage: string;
  images?: string[];
  technologies?: string[];
  'showcase-heading': string;
};

export const works: Work[] = [
  {
    id: 1,
    key: 'fruits',
    name: 'Fruits - Baccarat Betting Site',
    category: 'Web Development',
    role: 'Frontend Developer',
    year: '2023',
    description: `Developed a dynamic online Baccarat game called "Fruit" featuring real-time gameplay and secure betting options. The project showcases my ability to create engaging user experiences and implement complex gaming logic`,
    mainImage: '/images/projects/fruits/fruits-main.png',
    images: [
      '/images/projects/fruits/chats-desktop.png',
      '/images/projects/fruits/fruits-desktop.png',
      '/images/projects/fruits/fruits-deposit.png',
      '/images/projects/fruits/fruits-withdraw.png',
    ],
    technologies: [
      'NextJs',
      'TailwindCss',
      'i18next',
      'Zustand',
      'Zod',
      'Framer Motion',
      'PostgreSQL',
      'Socket.io',
    ],
    'showcase-heading': 'Website',
  },

  {
    id: 3,
    key: 'solely-shoes',
    name: 'Solely shoes',
    category: 'Web Development',
    role: 'Fullstack Developer',
    year: '2022 Freelance',
    description:
      'Designed and developed a responsive e-commerce website for a small business called Solely Shoes, featuring an intuitive user interface, seamless navigation, and secure payment integration. The site includes product listings and a streamlined checkout process to enhance the shopping experience.',
    mainImage: '/images/projects/solely-shoes/solely-shoes-main.png',
    images: ['/images/projects/solely-shoes/solely-shoes.png'],
    technologies: [
      'NextJs',
      'TailwindCss',
      'NextAuth',
      'Prisma',
      'Supabase',
      'Zustand',
    ],
    'showcase-heading': 'Website',
  },
  {
    id: 2,
    key: 'virtual-vazaar',
    name: 'Virtual Vazaar',
    category: 'Web Development',
    role: 'Frontend Developer',
    year: '2022 Freelance',
    description: `A online virtual marketplace for real estate. The project showcases my ability to create engaging user experiences.`,
    mainImage: '/images/projects/virtual-vazaar/main-page.png',
    images: [
      '/images/projects/virtual-vazaar/main-page.png',
      '/images/projects/virtual-vazaar/cart.png',
      '/images/projects/virtual-vazaar/contact.png',
    ],
    'showcase-heading': 'Website',
    technologies: ['NextJs', 'TailwindCss', 'NextAuth'],
  },
  // {
  //   id: 4,
  //   key: 'imdb-clone',
  //   name: 'IMDB Clone',
  //   category: 'Web Development',
  //   role: 'Frontend Developer',
  //   year: '2022 (student project)',
  //   description: 'IMDB clone. Implemented google authentication',
  //   mainImage: '/images/projects/imdb/main.png',
  //   images: ['/images/projects/imdb/main.png'],
  //   technologies: ['NextJs', 'TailwindCss', 'NextAuth'],
  // },
];

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
  viewable?: {
    isViewable: boolean;
    href: string;
  };
  'showcase-heading': string;
};

export const works: Work[] = [
  {
    id: 1,
    key: 'OohRay',
    name: 'OohRay - travel and lifestyle services marketplace',
    category: 'Web Development',
    role: 'Full Stack Developer',
    year: '2025',
    description: `Developed OohRay, a comprehensive travel. The platform enables users to seamlessly book travel experiences, car rentals, and local lifestyle services such as dining vouchers and event tickets. Implemented features include a dynamic booking engine, user reviews, payment integration, and merchant management tools. As the full stack developer, I led the development of both frontend and backend systems using Next.js a responsive UI and scalable architecture.,
`,
    mainImage: '/images/projects/oohray-rental/9.png',
    images: [
      '/images/projects/oohray-rental/1.png',
      '/images/projects/oohray-rental/2.png',
      '/images/projects/oohray-rental/3.png',
      '/images/projects/oohray-rental/4.png',
      '/images/projects/oohray-rental/5.png',
      '/images/projects/oohray-rental/6.png',
      '/images/projects/oohray-rental/7.png',
      '/images/projects/oohray-rental/8.png',
      '/images/projects/oohray-rental/9.png',
      '/images/projects/oohray-rental/10.png',
      '/images/projects/oohray-rental/11.png',
    ],
    technologies: [
      'NextJs',
      'TailwindCss',
      'Antd',
      'i18next',
      'Zustand',
      'Zod',
      'Stripe',
      'Apollo',
      'QraphQl',
      'Twillio',
    ],
    'showcase-heading': 'Website',
  },
  {
    id: 2,
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
    id: 4,
    key: 'subscription-calendar',
    name: 'Subscription Calendar',
    category: 'Web Development',
    role: 'Fullstack',
    year: '2024',
    description:
      'A lightweight calendar app for tracking and managing subscriptions, helping users stay on top of recurring payments and due dates.',
    mainImage: '/images/projects/subscription-calendar/main.png',
    images: [
      '/images/projects/subscription-calendar/main.png',
      '/images/projects/subscription-calendar/details-modal.png',
      '/images/projects/subscription-calendar/profile.png',
      //   '/images/projects/subscription-calendar/mobile-main.png',
      //   '/images/projects/subscription-calendar/mobile-details-modal.png',
      //   '/images/projects/subscription-calendar/profile.png',
    ],

    viewable: {
      isViewable: true,
      href: 'https://subscription-mini.vercel.app/',
    },

    'showcase-heading': 'Website',
    technologies: [
      'NextJs',
      'TailwindCss',
      'Shadcn',
      'ClerkAuth',
      'Prisma',
      'Supabase',
    ],
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
  {
    id: 5,
    key: 'portfolio',
    name: 'Arlie Torres',
    category: 'Web Development',
    role: 'Fullstack Developer',
    year: '2024',
    description: `A simple portfolio website. The project showcases my ability to create engaging user experiences.`,
    mainImage: '/images/projects/portfolio/main-page.png',
    images: [
      '/images/projects/portfolio/works-calendar.png',
      '/images/projects/portfolio/works-page.png',
      '/images/projects/portfolio/about-page.png',
    ],
    'showcase-heading': 'Website',
    technologies: ['NextJs15', 'TailwindCss', 'Framer-motion'],
  },
];

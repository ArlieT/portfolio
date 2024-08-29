type Work = {
  id: number;
  key: string;
  name: string;
  category: string;
  role: string;
  year: string;
  description: string;
  mainImage: string;
  images: string[];
};

export const works = [
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
  },
  // {
  //   id: 'eco-arcade',
  //   name: 'Eco Arcade',
  //   category: 'Web Development',
  //   role: 'Frontend Developer',
  //   year: '2022',
  //   description: `Eco Arcade is about a solution for effective waste management and monitoring.`,
  //   mainImage: '/images/projects/eco-arcade/eco4.png',
  //   images: [
  //     '/images/projects/eco-arcade/eco1.png',
  //     '/images/projects/eco-arcade/eco3.png',
  //     '/images/projects/eco-arcade/eco2.png',
  //   ],
  // },
  {
    id: 2,
    key: 'solely-shoes',
    name: 'Solely shoes',
    category: 'Web Development',
    role: 'Fullstack Developer',
    year: '2022',
    description:
      'Designed and developed a responsive e-commerce website for a small business called Solely Shoes, featuring an intuitive user interface, seamless navigation, and secure payment integration. The site includes product listings and a streamlined checkout process to enhance the shopping experience.',
    mainImage: '/images/projects/solely-shoes/solely-shoes-main.png',
    images: [, '/images/projects/solely-shoes/solely-shoes.png'],
  },
];

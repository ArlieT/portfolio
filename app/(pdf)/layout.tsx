import React from 'react';
import '../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arlie',
  description: "Arlie's portfolio and blog",
  openGraph: {
    title: 'Arlie',
    description: "Arlie's portfolio and blog",
    url: 'https://torres-arlie.vercel.app/',
    type: 'website', // Type of content
    images: [
      {
        url: '/images/logo_no_bg.png', // Specify the URL of your image
        width: 800, // Optional, image width
        height: 600, // Optional, image height
        alt: 'Arlie logo', // Alternative text for the image
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

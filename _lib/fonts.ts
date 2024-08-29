import { Bebas_Neue, JetBrains_Mono, Old_Standard_TT } from 'next/font/google';
import localFont from 'next/font/local';

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  variable: '--font-old-standard',
  weight: '400',
});

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: '400',
});

export const feixen = localFont({
  src: '../public/fonts/studio-feixen-sans-variable.woff2',
  variable: '--font-feixen',
  weight: '400',
  fallback: ['sans-serif'],
});

export const feixenBold = localFont({
  src: '../public/fonts/studio-feixen-sans-variable.woff2',
  variable: '--font-feixen-bold',
  weight: '500',
  fallback: ['sans-serif'],
});

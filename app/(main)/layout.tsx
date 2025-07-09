import Container from '@/components/Container';
import Header from '@/components/Header';
import NavigationMenu from '@/components/NavigationMenu';
import { SidebarProvider } from '@/components/SidebarProvider';
import ThemeProdiver from '@/components/provider/ThemeProvider';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import {
  bebasNeue,
  feixen,
  feixenBold,
  jetbrains,
  oldStandard,
} from '../../_lib/fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: "Arlie's Portfolio",
  description: "Arlie's portfolio and blog",
  openGraph: {
    title: "Arlie's Portfolio",
    description: "Arlie's portfolio work showcase",
    url: 'https://torres-arlie.vercel.app/',
    siteName: 'Arlie Portfolio',
    type: 'website', // Type of content
    images: [
      {
        url: 'https://torres-arlie.vercel.app/images/preview.png', // Specify the URL of your image
        width: 800, // Optional, image width
        height: 600, // Optional, image height
        alt: '', // Alternative text for the image
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arlie Portfolio',
    description: 'A simple work showcase.',
    images: [
      {
        url: 'https://torres-arlie.vercel.app/images/preview.png', // Specify the URL of your image
        width: 800, // Optional, image width
        height: 600, // Optional, image height
        alt: '', // Alternative text for the image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${bebasNeue.variable} ${feixenBold.variable} ${feixen.variable} ${oldStandard.variable} ${jetbrains.variable}`}
      >
        <SidebarProvider>
          <ThemeProdiver>
            <NavigationMenu />
            <div className="relative h-dvh min-h-dvh overflow-y-auto pt-[82px] md:pt-[130px]">
              <Header />
              <div className="h-[calc(100dvh-82px)] md:h-[calc(100dvh-130px)]">
                <Container>{children}</Container>
                <Analytics />
              </div>
            </div>
            <div className="noise" />
          </ThemeProdiver>
        </SidebarProvider>
      </body>
    </html>
  );
}

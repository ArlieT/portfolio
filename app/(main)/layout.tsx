import Container from '@/components/Container';
import Header from '@/components/Header';
import NavigationMenu from '@/components/NavigationMenu';
import { SidebarProvider } from '@/components/SidebarProvider';
import ThemeProdiver from '@/components/provider/ThemeProvider';
import type { Metadata } from 'next';
import {
  bebasNeue,
  feixen,
  feixenBold,
  jetbrains,
  oldStandard,
} from '../../_lib/fonts';
import '../globals.css';

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
        url: '/images/logo_no_bglogo.png', // Specify the URL of your image
        width: 800, // Optional, image width
        height: 600, // Optional, image height
        alt: 'Arlie logo', // Alternative text for the image
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
              </div>
            </div>
            <div className="noise" />
          </ThemeProdiver>
        </SidebarProvider>
      </body>
    </html>
  );
}

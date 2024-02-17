import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Toronto Library Passport',
  description: "Track Your Visits to Toronto's Libraries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>
          <h1>Benny&#39;s Library Passport</h1>
        </nav>

        {children}
      </body>
    </html>
  );
}

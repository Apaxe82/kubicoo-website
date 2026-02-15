import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kubicoo - Encontre o Imóvel Perfeito em Angola',
  description: 'A plataforma mais moderna e segura para arrendar ou vender propriedades em Angola.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-AO">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

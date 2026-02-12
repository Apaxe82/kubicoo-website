import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://kubicoo.com'),
  title: {
    default: 'Kubicoo - Encontre o Imóvel Perfeito em Angola',
    template: '%s | Kubicoo'
  },
  description: 'A plataforma mais moderna e segura para arrendar ou vender propriedades em Angola. Digital que abre portas. Destinos que transcendem.',
  keywords: [
    'imóveis Angola',
    'arrendamento Luanda',
    'venda propriedades Angola',
    'casas Talatona',
    'apartamentos Luanda',
    'Kubicoo',
    'imobiliária Angola',
    'marketplace imobiliário',
    'propriedades Angola',
    'real estate Angola'
  ],
  authors: [{ name: 'Kubicoo', url: 'https://kubicoo.com' }],
  creator: 'Kubicoo',
  publisher: 'Kubicoo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://kubicoo.com',
    title: 'Kubicoo - Encontre o Imóvel Perfeito em Angola',
    description: 'A plataforma mais moderna e segura para arrendar ou vender propriedades em Angola.',
    siteName: 'Kubicoo',
    images: [
      {
        url: '/images/logo-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Kubicoo - Digital que abre portas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubicoo - Encontre o Imóvel Perfeito em Angola',
    description: 'A plataforma mais moderna e segura para arrendar ou vender propriedades em Angola.',
    images: ['/images/logo-full.jpg'],
    creator: '@kubicoo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-AO">
      <head>
        {/* Google Fonts Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Organization */}
        <Script id="structured-data-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Kubicoo",
            "description": "Digital que abre portas. Destinos que transcendem.",
            "url": "https://kubicoo.com",
            "logo": "https://kubicoo.com/images/logo.png",
            "image": "https://kubicoo.com/images/logo-full.jpg",
            "telephone": "+244-XXX-XXX-XXX",
            "email": "info@kubicoo.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Luanda",
              "addressCountry": "AO"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Angola"
            },
            "priceRange": "$$"
          })}
        </Script>

        {/* Structured Data - Website */}
        <Script id="structured-data-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kubicoo",
            "url": "https://kubicoo.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://kubicoo.com/properties?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        {/* Google Analytics (placeholder) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel (Facebook) - placeholder */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

#!/bin/bash

echo "🚀 KUBICOO WEBSITE UPGRADE - COMPLETE PACKAGE"
echo "=============================================="
echo ""

# Navigate to project
cd ~/kubico/kubicoo-website

echo "📦 Step 1: Installing required packages..."
npm install --save-dev @types/node @types/react @types/react-dom typescript
npm install react-hot-toast clsx tailwind-merge @tailwindcss/typography

echo ""
echo "🎨 Step 2: Setting up logo assets..."
mkdir -p public/images
cp /mnt/user-data/uploads/logo_kubi_JPG.png public/images/logo.png
cp /mnt/user-data/uploads/logo_kubi.jpg public/images/logo-full.jpg

echo ""
echo "⚙️ Step 3: Creating configuration files..."

# Update tailwind.config.js with typography plugin
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#0967d2',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        kubicoo: {
          cyan: '#3dd9d6',
          navy: '#1a2332',
          dark: '#0f1419',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
EOF

# Create robots.txt
cat > public/robots.txt << 'EOF'
# Kubicoo - Robots.txt
User-agent: *
Allow: /
Allow: /properties
Allow: /about
Allow: /pricing
Allow: /contact

# Sitemap
Sitemap: https://kubicoo.com/sitemap.xml

# Disallow admin areas
Disallow: /dashboard
Disallow: /api
Disallow: /admin

# Crawl-delay
Crawl-delay: 1
EOF

# Create sitemap.xml
cat > public/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kubicoo.com/</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://kubicoo.com/properties</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://kubicoo.com/pricing</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://kubicoo.com/about</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://kubicoo.com/contact</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
EOF

# Create Google Business Profile JSON-LD
cat > public/google-business.json << 'EOF'
{
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
    "streetAddress": "Luanda",
    "addressLocality": "Luanda",
    "addressCountry": "AO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-8.8383",
    "longitude": "13.2344"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "Angola"
  }
}
EOF

echo ""
echo "✅ Configuration files created:"
echo "   - tailwind.config.js (with typography plugin)"
echo "   - public/robots.txt (SEO)"
echo "   - public/sitemap.xml (Google indexing)"
echo "   - public/google-business.json (structured data)"
echo "   - public/images/logo.png (optimized)"
echo ""
echo "🎯 Next: Copy component files from /mnt/user-data/outputs/"
echo ""

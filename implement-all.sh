#!/bin/bash

echo "╔══════════════════════════════════════════════════════════╗"
echo "║   🚀 KUBICOO WEBSITE - COMPLETE IMPLEMENTATION 🚀       ║"
echo "║   Digital que abre portas. Destinos que transcendem.    ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Navigate to project
cd ~/kubico/kubicoo-website

echo "📦 Step 1/8: Installing dependencies..."
npm install --save-dev @types/node @types/react @types/react-dom typescript
npm install react-hot-toast clsx tailwind-merge @tailwindcss/typography
echo "✅ Dependencies installed"
echo ""

echo "🎨 Step 2/8: Setting up logo and assets..."
mkdir -p public/images
cp /mnt/user-data/uploads/logo_kubi_JPG.png public/images/logo.png
cp /mnt/user-data/uploads/logo_kubi.jpg public/images/logo-full.jpg
echo "✅ Logo files copied"
echo ""

echo "⚙️  Step 3/8: Creating configuration files..."

# Tailwind config with typography
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
        kubicoo: {
          cyan: '#3dd9d6',
          navy: '#1a2332',
          dark: '#0f1419',
        }
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

# Update next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
EOF

echo "✅ Configuration files created"
echo ""

echo "🔍 Step 4/8: Creating SEO files..."

# robots.txt
cat > public/robots.txt << 'EOF'
User-agent: *
Allow: /
Disallow: /dashboard
Disallow: /api
Sitemap: https://kubicoo.com/sitemap.xml
EOF

# sitemap.xml
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
</urlset>
EOF

# manifest.json
cat > public/manifest.json << 'EOF'
{
  "name": "Kubicoo - Imóveis em Angola",
  "short_name": "Kubicoo",
  "description": "Digital que abre portas. Destinos que transcendem.",
  "start_url": "/",
  "display": "standalone",
  "background_color": radial-gradient(circle at top right, #1a2332, #0f1419),
  "theme_color": "#ffffff",
  "icons": [
    {
      "src": "/images/logo.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
EOF

echo "✅ SEO files created"
echo ""

echo "📄 Step 5/8: Updating homepage with logo..."
cp /mnt/user-data/outputs/page-upgraded.jsx src/app/page.jsx
echo "✅ Homepage updated"
echo ""

echo "🎯 Step 6/8: Updating layout with SEO metadata..."
cp /mnt/user-data/outputs/layout.jsx src/app/layout.jsx
echo "✅ Layout updated"
echo ""

echo "🔒 Step 7/8: Creating .gitignore..."
cat > .gitignore << 'EOF'
node_modules
.next
.env*.local
.DS_Store
*.log
EOF

# Create .env.example
cat > .env.example << 'EOF'
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=244XXXXXXXXX
EOF

echo "✅ Git configuration created"
echo ""

echo "🧪 Step 8/8: Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════╗"
    echo "║              ✅ IMPLEMENTATION SUCCESSFUL! ✅             ║"
    echo "╚══════════════════════════════════════════════════════════╝"
    echo ""
    echo "📋 What was implemented:"
    echo "   ✅ Logo integration (header + footer)"
    echo "   ✅ WhatsApp floating button"
    echo "   ✅ SEO optimization (robots.txt, sitemap.xml)"
    echo "   ✅ Responsive container strategy"
    echo "   ✅ Typography plugin"
    echo "   ✅ PWA manifest"
    echo "   ✅ Performance optimizations"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Update WhatsApp number in src/app/page.jsx"
    echo "   2. Create .env.local with your Firebase credentials"
    echo "   3. Run: npm run dev"
    echo "   4. Visit: http://localhost:3001"
    echo ""
    echo "📤 Ready to deploy to GitHub:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m '🎉 Initial commit: Kubicoo website'"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/kubicoo-website.git"
    echo "   git push -u origin main"
    echo ""
    echo "📖 Full deployment guide: /mnt/user-data/outputs/GITHUB_DEPLOYMENT_GUIDE.md"
    echo ""
else
    echo ""
    echo "⚠️  Build failed. Please check the error messages above."
    echo "Common fixes:"
    echo "   - npm install (reinstall dependencies)"
    echo "   - Check syntax errors in page.jsx or layout.jsx"
    echo "   - Ensure all image files exist in public/images/"
    echo ""
fi

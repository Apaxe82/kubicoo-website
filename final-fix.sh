#!/bin/bash

echo "🔧 FINAL FIX - ES Module Syntax"
echo "================================"
echo ""

cd ~/kubico/kubicoo-website

echo "📝 Step 1: Creating postcss.config.mjs (ES Module)..."
cat > postcss.config.mjs << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF
echo "✅ postcss.config.mjs created"

echo ""
echo "📝 Step 2: Creating tailwind.config.mjs (ES Module)..."
cat > tailwind.config.mjs << 'EOF'
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
        },
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
  plugins: [],
};
EOF
echo "✅ tailwind.config.mjs created"

echo ""
echo "🗑️  Step 3: Removing old .js config files..."
rm -f postcss.config.js
rm -f tailwind.config.js
echo "✅ Old files removed"

echo ""
echo "🧹 Step 4: Clearing cache..."
rm -rf .next
echo "✅ Cache cleared"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║         ✅ FIX COMPLETE! ✅              ║"
echo "╚══════════════════════════════════════════╝"
echo ""
echo "🚀 Now run: npm run dev"
echo ""
echo "Your site will work at: http://localhost:3000"
echo ""

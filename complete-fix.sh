#!/bin/bash

echo "🔧 COMPLETE FIX - Using Tailwind v3 (Stable)"
echo "============================================"
echo ""

cd ~/kubico/kubicoo-website

echo "📦 Step 1: Installing correct Tailwind version..."
npm install -D tailwindcss@3.4.17 postcss@8.4.49 autoprefixer@10.4.20

echo ""
echo "📝 Step 2: Creating globals.css (Tailwind v3 syntax)..."
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #1a2332;
    background: radial-gradient(circle at top right, #1a2332, #0f1419);
    color: #ffffff;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: #3dd9d6;
    color: #0f1419;
  }
}

@layer components {
  /* Glass Card Effect */
  .property-card {
    @apply rounded-xl shadow-lg overflow-hidden transition-all duration-300;
    background: rgba(26, 35, 50, 0.9);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(61, 217, 214, 0.1);
  }

  @media (min-width: 768px) {
    .property-card {
      background: rgba(26, 35, 50, 0.7);
    }
  }

  .property-card:hover {
    transform: translateY(-8px);
    border-color: #3dd9d6;
    box-shadow: 0 10px 30px -10px rgba(61, 217, 214, 0.3);
  }

  /* Primary Button */
  .btn-primary {
    @apply font-bold uppercase px-6 py-3 rounded-lg transition-all duration-300;
    background-color: #3dd9d6;
    color: #000000;
    letter-spacing: 0.05em;
  }

  .btn-primary:hover {
    box-shadow: 0 0 20px rgba(61, 217, 214, 0.6);
    transform: scale(1.02);
  }

  .btn-primary:active {
    transform: scale(0.98);
  }

  /* Gradient Heading */
  .heading-impact {
    @apply font-extrabold;
    color: #ffffff;
    background: linear-gradient(to bottom right, #ffffff 30%, #3dd9d6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @supports not (background-clip: text) {
    .heading-impact {
      color: #ffffff;
      background: none;
      -webkit-text-fill-color: initial;
    }
  }
}

@layer utilities {
  .text-gradient {
    background: linear-gradient(to bottom right, #ffffff 30%, #3dd9d6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glow-cyan {
    box-shadow: 0 0 20px rgba(61, 217, 214, 0.4);
  }

  .glass {
    background: rgba(26, 35, 50, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}
EOF

echo "✅ globals.css created"
echo ""

echo "⚙️  Step 3: Creating tailwind.config.js..."
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
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
}
EOF

echo "✅ tailwind.config.js created"
echo ""

echo "⚙️  Step 4: Creating postcss.config.js..."
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

echo "✅ postcss.config.js created"
echo ""

echo "🧹 Step 5: Cleaning cache..."
rm -rf .next
rm -rf node_modules/.cache
echo "✅ Cache cleared"
echo ""

echo "╔══════════════════════════════════════════╗"
echo "║         ✅ FIX COMPLETE! ✅              ║"
echo "╚══════════════════════════════════════════╝"
echo ""
echo "🚀 Now run: npm run dev"
echo ""
echo "Your site will be at: http://localhost:3000"
echo ""

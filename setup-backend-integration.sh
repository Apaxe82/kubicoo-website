#!/bin/bash

echo "🔗 KUBICOO BACKEND INTEGRATION SETUP"
echo "====================================="
echo ""

cd ~/kubico/kubicoo-website

echo "📦 Step 1: Installing required packages..."
npm install axios

echo ""
echo "📁 Step 2: Creating services directory..."
mkdir -p src/services

echo ""
echo "📝 Step 3: Copying service files..."

# Copy property service
if [ -f "/mnt/user-data/outputs/propertyService.js" ]; then
    cp /mnt/user-data/outputs/propertyService.js src/services/
    echo "✅ propertyService.js copied"
fi

# Copy booking service
if [ -f "/mnt/user-data/outputs/bookingService.js" ]; then
    cp /mnt/user-data/outputs/bookingService.js src/services/
    echo "✅ bookingService.js copied"
fi

# Copy payment service
if [ -f "/mnt/user-data/outputs/paymentService.js" ]; then
    cp /mnt/user-data/outputs/paymentService.js src/services/
    echo "✅ paymentService.js copied"
fi

echo ""
echo "⚙️  Step 4: Configuring environment variables..."

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "Found .env.local"
    
    # Check if API_URL is set
    if grep -q "NEXT_PUBLIC_API_URL" .env.local; then
        echo "✅ NEXT_PUBLIC_API_URL already configured"
    else
        echo "NEXT_PUBLIC_API_URL=http://localhost:3000/api" >> .env.local
        echo "✅ Added NEXT_PUBLIC_API_URL to .env.local"
    fi
else
    echo "Creating .env.local..."
    cat > .env.local << 'EOF'
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Firebase (add your credentials)
NEXT_PUBLIC_FIREBASE_API_KEY=your_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456:web:abcdef

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=244XXXXXXXXX
EOF
    echo "✅ Created .env.local"
fi

echo ""
echo "🧹 Step 5: Clearing cache..."
rm -rf .next
echo "✅ Cache cleared"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║     ✅ INTEGRATION SETUP COMPLETE! ✅    ║"
echo "╚══════════════════════════════════════════╝"
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. START BACKEND (if not running):"
echo "   cd ~/kubico"
echo "   node server.js"
echo ""
echo "   OR with PM2:"
echo "   pm2 start server.js --name kubicoo-backend"
echo ""
echo "2. VERIFY BACKEND:"
echo "   curl http://localhost:3000/health"
echo "   curl http://localhost:3000/api/properties/search"
echo ""
echo "3. START FRONTEND:"
echo "   npm run dev"
echo ""
echo "4. TEST CONNECTION:"
echo "   Open http://localhost:3000"
echo "   Go to /properties page"
echo "   Should show real data from backend"
echo ""
echo "════════════════════════════════════════════"
echo ""
echo "🔍 TROUBLESHOOTING:"
echo ""
echo "If properties page shows 404 error:"
echo "  1. Check backend is running: lsof -i :3000"
echo "  2. Check API endpoint exists: curl localhost:3000/api/properties/search"
echo "  3. Check .env.local has correct API_URL"
echo ""
echo "If authentication fails:"
echo "  1. Verify Firebase credentials in .env.local"
echo "  2. Check Firebase Admin SDK on backend"
echo "  3. Test with: curl -H 'Authorization: Bearer TOKEN' localhost:3000/api/users/profile"
echo ""

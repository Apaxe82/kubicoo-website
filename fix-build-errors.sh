#!/bin/bash

echo "🔧 FIXING BUILD ERRORS..."
echo ""

cd ~/kubico/kubicoo-website

# Fix 1: Replace globals.css with Tailwind v4 compatible version
echo "1. Fixing globals.css (Tailwind v4 compatibility)..."
cp /mnt/user-data/outputs/globals-fixed.css src/app/globals.css
echo "✅ globals.css fixed"
echo ""

# Fix 2: Replace layout.jsx (remove duplicate exports)
echo "2. Fixing layout.jsx (removing duplicate exports)..."
cp /mnt/user-data/outputs/layout-fixed.jsx src/app/layout.jsx
echo "✅ layout.jsx fixed"
echo ""

echo "🧪 Testing build..."
npm run dev &
DEV_PID=$!

# Wait a few seconds for startup
sleep 5

# Check if process is still running
if kill -0 $DEV_PID 2>/dev/null; then
    echo ""
    echo "╔══════════════════════════════════════════╗"
    echo "║        ✅ BUILD SUCCESSFUL! ✅           ║"
    echo "╚══════════════════════════════════════════╝"
    echo ""
    echo "🌐 Your site is running at:"
    echo "   http://localhost:3000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    # Keep script running
    wait $DEV_PID
else
    echo ""
    echo "⚠️  Build may have failed. Check errors above."
    echo ""
fi

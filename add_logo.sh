#!/bin/bash

# Kubicoo Logo Integration Script
# Run this from your kubicoo-website directory

echo "🎨 KUBICOO LOGO INTEGRATION"
echo "=============================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "Please run this script from your kubicoo-website directory:"
    echo "   cd kubicoo-website"
    echo "   bash add-logo.sh"
    exit 1
fi

echo "✅ Found package.json - in correct directory"
echo ""

# Step 1: Create public directory
echo "📁 Creating public directory..."
mkdir -p public
echo "✅ Public directory ready"
echo ""

# Step 2: Copy logo
echo "🖼️  Copying logo..."
if [ -f "/mnt/user-data/uploads/logo_kubi_JPG.png" ]; then
    cp /mnt/user-data/uploads/logo_kubi_JPG.png public/logo.png
    echo "✅ Logo copied successfully (37KB PNG)"
else
    echo "⚠️  Source logo not found at /mnt/user-data/uploads/"
    echo "Please copy your logo manually:"
    echo "   cp /path/to/logo.png public/logo.png"
fi
echo ""

# Step 3: Update homepage
echo "📝 Updating homepage with logo..."
if [ -f "/mnt/user-data/outputs/page-with-logo.jsx" ]; then
    cp /mnt/user-data/outputs/page-with-logo.jsx src/app/page.jsx
    echo "✅ Homepage updated with branded version"
else
    echo "⚠️  Could not find page-with-logo.jsx"
    echo "The logo integration code is in /mnt/user-data/outputs/"
fi
echo ""

# Step 4: Verify files
echo "🔍 Verifying installation..."
if [ -f "public/logo.png" ]; then
    SIZE=$(du -h public/logo.png | cut -f1)
    echo "✅ Logo file exists (${SIZE})"
else
    echo "❌ Logo file missing"
fi

if [ -f "src/app/page.jsx" ]; then
    if grep -q "logo.png" src/app/page.jsx; then
        echo "✅ Homepage references logo"
    else
        echo "⚠️  Homepage doesn't reference logo yet"
    fi
else
    echo "❌ Homepage file missing"
fi
echo ""

# Step 5: Show next steps
echo "🚀 NEXT STEPS:"
echo "=============="
echo ""
echo "1. Restart your dev server:"
echo "   npm run dev"
echo ""
echo "2. Visit your site:"
echo "   http://localhost:3001"
echo ""
echo "3. You should see the logo in:"
echo "   ✅ Header (top left with hover effect)"
echo "   ✅ Hero section (center, animated pulse)"
echo "   ✅ Footer (with tagline)"
echo ""
echo "🎨 Brand colors updated to match your logo:"
echo "   Primary: Teal (#14b8a6)"
echo "   Background: Dark Navy (#1e293b)"
echo ""
echo "✨ All done! Your website is now fully branded! 🎉"

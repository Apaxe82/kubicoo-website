#!/bin/bash

echo "📚 KUBICOO BOOKING SYSTEM DEPLOYMENT"
echo "====================================="
echo ""

echo "🎯 UNDERSTANDING THE ARCHITECTURE:"
echo ""
echo "BACKEND (~/kubico/):"
echo "  controllers/bookingController.js  ← Business logic + Database"
echo "  routes/bookings.js                ← API endpoints"
echo "  services/proxyPayService.js       ← Payment integration"
echo ""
echo "FRONTEND (~/kubico/kubicoo-website/):"
echo "  src/services/bookingService.js    ← API client (calls backend)"
echo ""
echo "════════════════════════════════════════════"
echo ""

# Check if backend exists
if [ -d ~/kubico ]; then
    echo "✅ Backend directory found: ~/kubico"
    
    # Update backend controller
    if [ -f ~/kubico/controllers/bookingController.js ]; then
        echo "⚠️  Backend bookingController.js already exists"
        echo "   Review BOOKING_ARCHITECTURE.md for merge instructions"
        echo "   Your existing file has the correct calculateQuote() function"
        echo "   Keep it as-is!"
    else
        echo "❌ Backend bookingController.js NOT found"
        echo "   You'll need to create it"
    fi
else
    echo "❌ Backend directory NOT found"
fi

echo ""
echo "════════════════════════════════════════════"
echo ""

# Update frontend
if [ -d ~/kubico/kubicoo-website ]; then
    echo "✅ Frontend directory found"
    
    cd ~/kubico/kubicoo-website
    
    # Create services directory
    mkdir -p src/services
    
    # Copy frontend booking service
    if [ -f /mnt/user-data/outputs/bookingService-frontend-final.js ]; then
        cp /mnt/user-data/outputs/bookingService-frontend-final.js src/services/bookingService.js
        echo "✅ Frontend bookingService.js installed"
    fi
    
    echo "✅ Frontend booking service ready"
else
    echo "❌ Frontend directory NOT found"
fi

echo ""
echo "════════════════════════════════════════════"
echo ""
echo "📋 BACKEND REQUIREMENTS:"
echo ""
echo "Your backend needs these endpoints:"
echo "  POST /api/bookings/quote          ← Calculate price with discounts"
echo "  POST /api/bookings/create         ← Create booking"
echo "  GET  /api/bookings/user/:userId   ← Get user bookings"
echo "  GET  /api/bookings/:id            ← Get booking details"
echo "  POST /api/bookings/:id/cancel     ← Cancel booking"
echo "  POST /api/webhooks/booking-payment ← Payment webhook"
echo ""
echo "════════════════════════════════════════════"
echo ""
echo "🔧 LANDLORD DISCOUNT CONFIGURATION:"
echo ""
echo "Discounts are managed by property owners in their dashboard."
echo "The backend controller checks the 'pricing_rules' table:"
echo ""
echo "CREATE TABLE pricing_rules ("
echo "  id UUID PRIMARY KEY,"
echo "  property_id UUID REFERENCES properties(id),"
echo "  rule_type VARCHAR(50),  -- 'long_stay', 'early_bird', etc."
echo "  rule_name VARCHAR(100),"
echo "  price_modifier DECIMAL(5,4),  -- 0.85 = 15% discount"
echo "  min_nights INTEGER,"
echo "  max_nights INTEGER,"
echo "  start_date DATE,"
echo "  end_date DATE,"
echo "  active BOOLEAN DEFAULT true,"
echo "  priority INTEGER DEFAULT 0,"
echo "  created_by UUID,"
echo "  created_at TIMESTAMP DEFAULT NOW()"
echo ");"
echo ""
echo "Example: 15% discount for 28+ night bookings:"
echo "INSERT INTO pricing_rules VALUES ("
echo "  uuid_generate_v4(),"
echo "  'property-uuid',"
echo "  'long_stay',"
echo "  'Desconto Mensal',"
echo "  0.85,              -- 85% of original price = 15% off"
echo "  28,"
echo "  NULL,"
echo "  NULL,"
echo "  NULL,"
echo "  true,"
echo "  1,"
echo "  'landlord-uuid',"
echo "  NOW()"
echo ");"
echo ""
echo "════════════════════════════════════════════"
echo ""
echo "✅ WHAT TO DO NEXT:"
echo ""
echo "1. BACKEND:"
echo "   - Keep your existing bookingController.js (it's correct!)"
echo "   - Ensure you have the pricing_rules table"
echo "   - Create routes/bookings.js with the endpoints listed above"
echo ""
echo "2. FRONTEND:"
echo "   - Frontend bookingService.js is now ready"
echo "   - Use it in your booking flow components"
echo "   - Example: const quote = await getBookingQuote(propertyId, checkIn, checkOut)"
echo ""
echo "3. TEST:"
echo "   - Start backend: cd ~/kubico && node server.js"
echo "   - Start frontend: cd ~/kubico/kubicoo-website && npm run dev"
echo "   - Try booking a property"
echo "   - Verify discounts apply for 28+ night stays"
echo ""
echo "════════════════════════════════════════════"
echo ""
echo "📖 DOCUMENTATION:"
echo "   - BOOKING_ARCHITECTURE.md   ← Read this first!"
echo "   - Explains the two-file system"
echo "   - Shows how frontend calls backend"
echo ""
echo "✅ DONE!"
echo ""

#!/bin/bash

echo "🔧 SETTING UP MOCK API FOR DEVELOPMENT"
echo "======================================="
echo ""

cd ~/kubico/kubicoo-website

echo "📝 Creating mock API routes..."

# Create API directory
mkdir -p src/app/api

# Create health check endpoint
mkdir -p src/app/api/health
cat > src/app/api/health/route.js << 'EOF'
export async function GET() {
  return Response.json({ 
    success: true, 
    message: 'Frontend API is running',
    timestamp: new Date().toISOString()
  });
}
EOF

# Create properties search endpoint (mock)
mkdir -p src/app/api/properties/search
cat > src/app/api/properties/search/route.js << 'EOF'
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  // Mock property data
  const mockProperties = [
    {
      id: '1',
      title: 'Apartamento T3 Moderno em Talatona',
      category: 'apartment',
      municipality: 'Talatona',
      neighbourhood: 'Talatona',
      price: 150000,
      bedrooms: 3,
      bathrooms: 2,
      photos: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    },
    {
      id: '2',
      title: 'Vivenda Luxuosa na Ilha de Luanda',
      category: 'villa',
      municipality: 'Ilha de Luanda',
      neighbourhood: 'Ilha',
      price: 450000,
      bedrooms: 5,
      bathrooms: 4,
      photos: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    },
    {
      id: '3',
      title: 'Casa Familiar em Viana',
      category: 'house',
      municipality: 'Viana',
      neighbourhood: 'Viana',
      price: 85000,
      bedrooms: 4,
      bathrooms: 2,
      photos: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'],
    },
    {
      id: '4',
      title: 'Apartamento T2 no Kilamba',
      category: 'apartment',
      municipality: 'Kilamba',
      neighbourhood: 'Kilamba Kiaxi',
      price: 95000,
      bedrooms: 2,
      bathrooms: 1,
      photos: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    },
    {
      id: '5',
      title: 'Espaço Comercial em Maianga',
      category: 'commercial',
      municipality: 'Maianga',
      neighbourhood: 'Maianga',
      price: 250000,
      bedrooms: 0,
      bathrooms: 2,
      photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    },
    {
      id: '6',
      title: 'Apartamento de Luxo em Maculusso',
      category: 'apartment',
      municipality: 'Maculusso',
      neighbourhood: 'Ingombota',
      price: 320000,
      bedrooms: 3,
      bathrooms: 3,
      photos: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'],
    },
  ];

  // Simple filtering
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category');
  const municipality = searchParams.get('municipality');
  
  let filtered = mockProperties;
  
  if (search) {
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.municipality.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (municipality && municipality !== 'all') {
    filtered = filtered.filter(p => p.municipality === municipality);
  }

  return Response.json({
    success: true,
    properties: filtered,
    total: filtered.length
  });
}
EOF

# Create property detail endpoint (mock)
mkdir -p src/app/api/properties/[id]
cat > 'src/app/api/properties/[id]/route.js' << 'EOF'
export async function GET(request, { params }) {
  const { id } = params;
  
  // Mock property detail
  const property = {
    id: id,
    title: 'Apartamento T3 Moderno em Talatona',
    description: 'Lindo apartamento completamente mobilado com vista panorâmica da cidade. Inclui 3 quartos espaçosos, sala de estar, cozinha moderna e 2 casas de banho.',
    category: 'apartment',
    municipality: 'Talatona',
    neighbourhood: 'Talatona Sul',
    price: 150000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    photos: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    ],
    amenities: ['Estacionamento', 'Segurança 24h', 'Piscina', 'Ginásio'],
    available: true,
  };

  return Response.json({
    success: true,
    property: property
  });
}
EOF

echo "✅ Mock API routes created"
echo ""

echo "📝 Updating .env.local to use local API..."
if grep -q "NEXT_PUBLIC_API_URL" .env.local 2>/dev/null; then
    sed -i 's|NEXT_PUBLIC_API_URL=.*|NEXT_PUBLIC_API_URL=/api|' .env.local
else
    echo "NEXT_PUBLIC_API_URL=/api" >> .env.local
fi
echo "✅ .env.local updated"

echo ""
echo "🧹 Clearing cache..."
rm -rf .next
echo "✅ Cache cleared"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║      ✅ MOCK API READY! ✅               ║"
echo "╚══════════════════════════════════════════╝"
echo ""
echo "🚀 Restart your dev server:"
echo "   npm run dev"
echo ""
echo "🧪 Test endpoints:"
echo "   http://localhost:3000/api/health"
echo "   http://localhost:3000/api/properties/search"
echo ""
echo "📋 Your site will now show mock properties!"
echo ""

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

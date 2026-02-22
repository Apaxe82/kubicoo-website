'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AccommodationSearch() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const location = searchParams.get('location') || '';
        const type = searchParams.get('type') || 'all';
        
        const params = new URLSearchParams();
        if (location) params.append('location', location);
        if (type !== 'all') params.append('type', type);

        const response = await fetch(`http://localhost:5000/api/accommodation/search?${params}`);
        const data = await response.json();
        setProperties(data.accommodations || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#06B6D4] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resultados da Pesquisa</h1>
        
        {properties.length === 0 ? (
          <p className="text-gray-600">Nenhuma propriedade encontrada.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.neighbourhood}</p>
                <p className="text-2xl font-bold text-[#06B6D4] mt-4">
                  {Number(property.price).toLocaleString()} AOA
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

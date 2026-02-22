
'use client';

import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { WhatsAppFloatingButton } from '@/components/WhatsAppButton';

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('http://localhost:5000/api/accommodation/search');
        
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        
        const data = await response.json();
        setProperties(data.accommodations || []);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#06B6D4] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">A carregar propriedades...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Erro ao carregar</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#06B6D4] text-white px-6 py-3 rounded-lg hover:bg-opacity-90"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Propriedades Disponíveis</h1>
          <p className="text-gray-600">Encontre o imóvel perfeito para você</p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto px-4 py-8">
        {properties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nenhuma propriedade encontrada</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton phoneNumber="244923456789" />
    </div>
  );
}

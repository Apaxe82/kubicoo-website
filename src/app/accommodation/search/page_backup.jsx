'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Star, Calendar, Users, Clock, Shield, ChevronDown } from 'lucide-react';
import Link from 'next/link';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 1000000,
    sortBy: 'recommended'
  });

  const searchData = {
    location: searchParams.get('location') || '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    guests: parseInt(searchParams.get('guests') || '1'),
    type: searchParams.get('type') || 'all',
    duration: searchParams.get('duration') || 'night'
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    setLoading(true);
    try {
      // Mock data for now - replace with actual API call
      const mockData = [
        {
          id: '1',
          title: 'Hotel Premium Luanda',
          type: 'hotel',
          price: 250000,
          rating: 4.8,
          reviews: 124,
          location: 'Talatona, Luanda',
          image: '/placeholder-hotel.jpg',
          amenities: ['WiFi', 'Piscina', 'Restaurante', 'Estacionamento'],
          requiresId: true,
          available: true
        },
        {
          id: '2',
          title: 'Apartamento T3 Moderno',
          type: 'airbnb',
          price: 150000,
          rating: 4.9,
          reviews: 89,
          location: 'Maianga, Luanda',
          image: '/placeholder-apartment.jpg',
          amenities: ['WiFi', 'Cozinha', 'AC', 'Vista'],
          requiresId: true,
          available: true
        },
        {
          id: '3',
          title: 'Hospedaria Central',
          type: 'hospedaria',
          price: 50000,
          rating: 4.5,
          reviews: 56,
          location: 'Centro, Benguela',
          image: '/placeholder-hospedaria.jpg',
          amenities: ['WiFi', 'TV', 'Segurança'],
          requiresId: false,
          available: true
        },
        {
          id: '4',
          title: 'Resort Praia Morena',
          type: 'resort',
          price: 200000,
          hourlyRate: 15000,
          rating: 4.7,
          reviews: 203,
          location: 'Praia Morena, Benguela',
          image: '/placeholder-resort.jpg',
          amenities: ['Piscina', 'Praia', 'Restaurante', 'Bar'],
          requiresId: false,
          hourlyAvailable: true,
          available: true
        }
      ];

      // Filter by type
      let filtered = mockData;
      if (searchData.type !== 'all') {
        filtered = filtered.filter(acc => acc.type === searchData.type);
      }

      setAccommodations(filtered);
    } catch (error) {
      console.error('Error fetching accommodations:', error);
    } finally {
      setLoading(false);
    }
  };

  const typeIcons = {
    hotel: '🏨',
    airbnb: '🏠',
    hospedaria: '🛏️',
    resort: '🏖️'
  };

  const typeNames = {
    hotel: 'Hotel',
    airbnb: 'Airbnb',
    hospedaria: 'Hospedaria',
    resort: 'Resort'
  };

  const calculateNights = () => {
    if (!searchData.checkIn || !searchData.checkOut) return 0;
    const start = new Date(searchData.checkIn);
    const end = new Date(searchData.checkOut);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Summary Header */}
      <div className="bg-gradient-to-r from-[#0A1628] to-[#1a2942] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {searchData.location || 'Todas as localizações'}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                {searchData.checkIn && searchData.checkOut && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{searchData.checkIn} → {searchData.checkOut}</span>
                    <span>({nights} noites)</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{searchData.guests} {searchData.guests === 1 ? 'hóspede' : 'hóspedes'}</span>
                </div>
                {searchData.type !== 'all' && (
                  <div className="flex items-center gap-2">
                    <span>{typeIcons[searchData.type]}</span>
                    <span>{typeNames[searchData.type]}</span>
                  </div>
                )}
              </div>
            </div>
            <Link 
              href="/"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Modificar Busca
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Filtros</h2>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preço por noite
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin}
                    onChange={(e) => setFilters({...filters, priceMin: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({...filters, priceMax: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ordenar por
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="recommended">Recomendados</option>
                  <option value="price_low">Preço: Menor → Maior</option>
                  <option value="price_high">Preço: Maior → Menor</option>
                  <option value="rating">Melhor Avaliados</option>
                </select>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Comodidades</h3>
                <div className="space-y-2">
                  {['WiFi', 'Piscina', 'Estacionamento', 'AC', 'Cozinha'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-cyan-500" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">{accommodations.length}</span> propriedades encontradas
              </p>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
                    <div className="flex gap-6">
                      <div className="w-64 h-48 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {accommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-6 p-6">
                      {/* Image */}
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-6xl">{typeIcons[accommodation.type]}</span>
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                            {typeNames[accommodation.type]}
                          </span>
                          {!accommodation.requiresId && (
                            <span className="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              Sem ID
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="md:col-span-2 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {accommodation.title}
                          </h3>

                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{accommodation.rating}</span>
                            </div>
                            <span className="text-gray-500 text-sm">
                              ({accommodation.reviews} avaliações)
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-600 mb-4">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{accommodation.location}</span>
                          </div>

                          {/* Amenities */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {accommodation.amenities.map((amenity, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                                {amenity}
                              </span>
                            ))}
                          </div>

                          {/* Hourly rate for resorts */}
                          {accommodation.hourlyAvailable && (
                            <div className="flex items-center gap-2 text-sm text-cyan-600 mb-2">
                              <Clock className="w-4 h-4" />
                              <span>Disponível por hora: {accommodation.hourlyRate.toLocaleString()} AOA/hora</span>
                            </div>
                          )}
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-end justify-between pt-4 border-t border-gray-200">
                          <div>
                            <div className="text-3xl font-bold text-gray-900">
                              {accommodation.price.toLocaleString()} <span className="text-lg text-gray-600">AOA</span>
                            </div>
                            <div className="text-sm text-gray-500">por noite</div>
                            <div className="text-xs text-gray-500 mt-1">
                              + 1.000 AOA/dia taxa de serviço
                            </div>
                          </div>

                          <Link
                            href={`/accommodation/${accommodation.id}`}
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                          >
                            Ver Detalhes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {!loading && accommodations.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Nenhuma acomodação encontrada
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente modificar seus filtros ou buscar em outra localização
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Nova Busca
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccommodationSearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando resultados...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}

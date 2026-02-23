'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Calendar, Clock, Users, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppFloatingButton } from '../../components/WhatsAppButton';
import { getPropertyInquiryLink } from '../../utils/whatsappLinks';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    bookingType: searchParams.get('bookingType') || 'night',
    hours: parseInt(searchParams.get('hours') || '3'),
    guests: parseInt(searchParams.get('guests') || '1'),
    propertyType: searchParams.get('type') || 'all',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    sortBy: 'featured' // 'featured', 'price_low', 'price_high', 'newest'
  });

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      
      if (filters.location) params.append('location', filters.location);
      if (filters.checkIn) params.append('checkIn', filters.checkIn);
      if (filters.checkOut) params.append('checkOut', filters.checkOut);
      if (filters.bookingType) params.append('bookingType', filters.bookingType);
      if (filters.guests) params.append('guests', filters.guests.toString());
      if (filters.propertyType !== 'all') params.append('type', filters.propertyType);
      if (filters.priceMin) params.append('priceMin', filters.priceMin);
      if (filters.priceMax) params.append('priceMax', filters.priceMax);
      if (filters.bedrooms) params.append('bedrooms', filters.bedrooms);

      const response = await fetch(`http://localhost:5000/api/accommodation/search?${params}`);
      const data = await response.json();
      
      let results = data.accommodations || [];
      
      // Apply sorting
      if (filters.sortBy === 'price_low') {
        results.sort((a, b) => a.price - b.price);
      } else if (filters.sortBy === 'price_high') {
        results.sort((a, b) => b.price - a.price);
      } else if (filters.sortBy === 'newest') {
        results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      }
      
      setProperties(results);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {properties.length} Propriedades Encontradas
              </h1>
              <p className="text-gray-600">
                {filters.location || 'Todas as localizações'} · {filters.bookingType === 'hour' ? 'Por Hora' : 'Por Noite'}
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filtros</span>
              </button>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Sidebar/Panel */}
      {showFilters && (
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Booking Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Reserva
                </label>
                <select
                  value={filters.bookingType}
                  onChange={(e) => setFilters({ ...filters, bookingType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                >
                  <option value="night">Por Noite</option>
                  <option value="hour">Por Hora</option>
                  <option value="day">Por Dia</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Imóvel
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                >
                  <option value="all">Todos</option>
                  <option value="apartment">Apartamentos</option>
                  <option value="house">Vivendas</option>
                  <option value="commercial">Comercial</option>
                  <option value="hotel">Hotéis</option>
                  <option value="resort">Resorts</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço Mínimo
                </label>
                <input
                  type="number"
                  placeholder="Min AOA"
                  value={filters.priceMin}
                  onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço Máximo
                </label>
                <input
                  type="number"
                  placeholder="Max AOA"
                  value={filters.priceMax}
                  onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                />
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quartos
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                >
                  <option value="">Qualquer</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordenar Por
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                >
                  <option value="featured">Destaque</option>
                  <option value="price_low">Menor Preço</option>
                  <option value="price_high">Maior Preço</option>
                  <option value="newest">Mais Recentes</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({
                    location: '',
                    checkIn: '',
                    checkOut: '',
                    bookingType: 'night',
                    hours: 3,
                    guests: 1,
                    propertyType: 'all',
                    priceMin: '',
                    priceMax: '',
                    bedrooms: '',
                    sortBy: 'featured'
                  })}
                  className="w-full px-4 py-2 text-[#06B6D4] border border-[#06B6D4] rounded-lg hover:bg-[#06B6D4] hover:text-white transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Properties Grid/List */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nenhuma propriedade encontrada
            </h3>
            <p className="text-gray-600 mb-8">
              Tente ajustar seus filtros ou procure em outra localização
            </p>
            <button
              onClick={() => setFilters({ ...filters, location: '', priceMin: '', priceMax: '' })}
              className="px-6 py-3 bg-[#06B6D4] text-white rounded-lg hover:bg-[#0891B2]"
            >
              Ver Todas as Propriedades
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
          }>
            {properties.map((property) => (
              viewMode === 'grid' ? (
                <PropertyCardGrid key={property.id} property={property} filters={filters} />
              ) : (
                <PropertyCardList key={property.id} property={property} filters={filters} />
              )
            ))}
          </div>
        )}
      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}

// Grid View Property Card
function PropertyCardGrid({ property, filters }) {
  const mainImage = property.photos?.[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80';
  const whatsappLink = getPropertyInquiryLink(property);
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <Link href={`/booking/${property.id}`} className="block">
        <div className="relative h-64 group">
          <Image
            src={mainImage}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {property.hourly_booking_available && (
            <div className="absolute top-4 left-4 bg-[#06B6D4] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Por Hora
            </div>
          )}
          <div className="absolute top-4 right-4 flex gap-2">
            {property.photos && property.photos.length > 1 && (
              <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                +{property.photos.length - 1} fotos
              </div>
            )}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/booking/${property.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-[#06B6D4] transition-colors">
            {property.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          {property.neighbourhood}, {property.municipality}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <span>{property.bedrooms} quartos</span>
          )}
          {property.bathrooms > 0 && (
            <span>{property.bathrooms} casas de banho</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-2xl font-bold text-[#06B6D4]">
              {Number(property.price || property.nightly_rate).toLocaleString()} AOA
            </p>
            <p className="text-sm text-gray-500">por noite</p>
          </div>
          
          {property.hourly_rate && (
            <div className="text-right">
              <p className="text-lg font-semibold">
                {Number(property.hourly_rate).toLocaleString()} AOA
              </p>
              <p className="text-sm text-gray-500">por hora</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Link
            href={`/booking/${property.id}`}
            className="px-4 py-2 bg-[#06B6D4] text-white rounded-lg hover:bg-[#0891B2] text-center font-medium"
          >
            Reservar
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-[#06B6D4] text-[#06B6D4] rounded-lg hover:bg-[#06B6D4] hover:text-white text-center font-medium transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// List View Property Card
function PropertyCardList({ property, filters }) {
  const mainImage = property.photos?.[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80';
  const whatsappLink = getPropertyInquiryLink(property);
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <div className="md:flex">
        <Link href={`/booking/${property.id}`} className="md:w-1/3">
          <div className="relative h-64 md:h-full group">
            <Image
              src={mainImage}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </Link>

        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <Link href={`/booking/${property.id}`}>
                <h3 className="text-2xl font-bold mb-2 hover:text-[#06B6D4] transition-colors">
                  {property.title}
                </h3>
              </Link>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {property.neighbourhood}, {property.municipality}
              </p>
            </div>
            
            {property.hourly_booking_available && (
              <div className="bg-[#06B6D4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Por Hora
              </div>
            )}
          </div>

          <p className="text-gray-700 mb-4 line-clamp-2">
            {property.description || 'Propriedade disponível para arrendamento'}
          </p>

          <div className="flex items-center gap-6 mb-4 text-gray-600">
            {property.bedrooms > 0 && (
              <span>{property.bedrooms} quartos</span>
            )}
            {property.bathrooms > 0 && (
              <span>{property.bathrooms} casas de banho</span>
            )}
            {property.category && (
              <span>{property.category}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <div>
                <p className="text-3xl font-bold text-[#06B6D4]">
                  {Number(property.price || property.nightly_rate).toLocaleString()} AOA
                </p>
                <p className="text-sm text-gray-500">por noite</p>
              </div>
              
              {property.hourly_rate && (
                <div>
                  <p className="text-2xl font-semibold">
                    {Number(property.hourly_rate).toLocaleString()} AOA
                  </p>
                  <p className="text-sm text-gray-500">por hora</p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Link
                href={`/booking/${property.id}`}
                className="px-6 py-3 bg-[#06B6D4] text-white rounded-lg hover:bg-[#0891B2] font-medium"
              >
                Reservar Agora
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#06B6D4] text-[#06B6D4] rounded-lg hover:bg-[#06B6D4] hover:text-white font-medium transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Heart, MessageCircle, Phone, Calendar } from 'lucide-react';
import { getPropertyInquiryLink, getVisitSchedulingLink } from '@/utils/whatsappLinks';

/**
 * Property Card with WhatsApp Integration
 * Used in search results, listings, and property grids
 */
export default function PropertyCard({ property }) {
  const whatsappInquiryLink = getPropertyInquiryLink(property);
  const whatsappVisitLink = getVisitSchedulingLink(property);

  const formatPrice = (price, currency) => {
    return `${Number(price).toLocaleString()} ${currency || 'AOA'}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.photos?.[0] || '/images/placeholder-property.jpg'}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.listing_type && (
            <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
              {property.listing_type}
            </span>
          )}
          {property.accommodation_type && (
            <span className="bg-[#06B6D4]/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
              {property.accommodation_type}
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 hover:fill-red-500 transition-colors" />
        </button>

        {/* Featured Badge */}
        {property.is_verified && (
          <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <span>✓</span>
            <span>Verificado</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#06B6D4] transition-colors line-clamp-2">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
          <span className="text-sm line-clamp-1">
            {property.neighbourhood || property.municipality}, {property.country_code || 'AO'}
          </span>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-100">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{property.bathrooms}</span>
            </div>
          )}
          {property.area && (
            <div className="flex items-center gap-2">
              <Square className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{property.area}m²</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-2xl font-black text-gray-900">
            {formatPrice(property.price || property.nightly_rate, property.currency)}
          </div>
          {property.nightly_rate && (
            <div className="text-xs text-gray-500 mt-1">
              por noite
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {/* WhatsApp Inquiry */}
          <a
            href={whatsappInquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contactar</span>
          </a>

          {/* Schedule Visit */}
          <a
            href={whatsappVisitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border-2 border-green-500 text-green-600 px-4 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Visita</span>
          </a>
        </div>

        {/* Quick Info */}
        {property.avg_rating && (
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-yellow-500 font-semibold">
              ★ {Number(property.avg_rating).toFixed(1)}
            </span>
            {property.review_count > 0 && (
              <span className="text-gray-500">
                ({property.review_count} avaliações)
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Property List View (Alternative Layout)
 */
export function PropertyListCard({ property }) {
  const whatsappInquiryLink = getPropertyInquiryLink(property);
  const whatsappVisitLink = getVisitSchedulingLink(property);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 flex flex-col md:flex-row">
      {/* Image */}
      <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0">
        <Image
          src={property.photos?.[0] || '/images/placeholder-property.jpg'}
          alt={property.title}
          fill
          className="object-cover"
        />
        {property.is_verified && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ✓ Verificado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Link href={`/properties/${property.id}`}>
              <h3 className="text-2xl font-bold text-gray-900 hover:text-[#06B6D4] transition-colors mb-2">
                {property.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-[#06B6D4]" />
              <span className="text-sm">{property.neighbourhood}, {property.municipality}</span>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {property.description || 'Propriedade disponível para visualização.'}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-4 mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-2 text-gray-700">
              <Bed className="w-5 h-5 text-gray-400" />
              <span className="font-medium">{property.bedrooms} quartos</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-2 text-gray-700">
              <Bath className="w-5 h-5 text-gray-400" />
              <span className="font-medium">{property.bathrooms} casas de banho</span>
            </div>
          )}
          {property.area && (
            <div className="flex items-center gap-2 text-gray-700">
              <Square className="w-5 h-5 text-gray-400" />
              <span className="font-medium">{property.area}m²</span>
            </div>
          )}
        </div>

        {/* Price & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
          <div>
            <div className="text-3xl font-black text-gray-900">
              {Number(property.price || property.nightly_rate).toLocaleString()} {property.currency || 'AOA'}
            </div>
            {property.nightly_rate && (
              <div className="text-sm text-gray-500">por noite</div>
            )}
          </div>

          <div className="flex gap-2">
            <a
              href={whatsappInquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactar</span>
            </a>
            <a
              href={whatsappVisitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border-2 border-[#06B6D4] text-[#06B6D4] px-5 py-3 rounded-lg font-semibold hover:bg-[#06B6D4] hover:text-white transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Visita</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

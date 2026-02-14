'use client';

// src/app/booking/[propertyId]/page.jsx
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, ChevronRight, MapPin, Bed, Bath } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function BookingStep1() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  useEffect(() => {
    if (!user) {
      toast.error('Por favor, faça login primeiro');
      router.push(`/auth/login?redirect=/booking/${params.propertyId}`);
      return;
    }
    
    fetchProperty();
  }, [params.propertyId, user]);

  const fetchProperty = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/properties/${params.propertyId}`
      );
      setProperty(res.data.property);
    } catch (error) {
      console.error('Error fetching property:', error);
      toast.error('Erro ao carregar propriedade');
    } finally {
      setLoading(false);
    }
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const calculateTotal = () => {
    if (!property) return 0;
    const nights = calculateNights();
    return nights * property.price;
  };

  const handleContinue = () => {
    if (!formData.checkIn || !formData.checkOut) {
      toast.error('Por favor, selecione as datas');
      return;
    }

    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      toast.error('A data de saída deve ser posterior à data de entrada');
      return;
    }

    // Store booking data in sessionStorage
    sessionStorage.setItem('bookingData', JSON.stringify({
      propertyId: params.propertyId,
      ...formData,
      nights: calculateNights(),
      totalPrice: calculateTotal(),
    }));

    router.push(`/booking/${params.propertyId}/review`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-kubicoo-cyan border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriedade não encontrada</h2>
          <Link href="/properties" className="text-kubicoo-cyan hover:underline">
            Ver todas as propriedades
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Kubicoo" width={40} height={40} />
            <span className="text-2xl font-bold text-kubicoo-navy">KUBICOO</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-kubicoo-cyan text-white flex items-center justify-center font-bold">
                1
              </div>
              <span className="font-semibold text-gray-900">Datas</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-gray-500">Revisão</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-gray-500">Pagamento</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Selecione as datas
              </h1>

              <div className="space-y-6">
                {/* Check-in */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data de entrada
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data de saída
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Número de hóspedes
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none"
                  >
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  className="w-full bg-kubicoo-cyan text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Continuar para revisão
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              {/* Property Image */}
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                {property.photos?.[0] ? (
                  <Image
                    src={property.photos[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">🏠</span>
                  </div>
                )}
              </div>

              {/* Property Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {property.title}
              </h3>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.municipality}</span>
              </div>

              <div className="flex items-center gap-4 mb-6 text-gray-700 text-sm">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.bedrooms} quartos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms} casas de banho</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Preço por noite:</span>
                  <span className="font-semibold">{formatPrice(property.price)}</span>
                </div>

                {calculateNights() > 0 && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {formatPrice(property.price)} x {calculateNights()} noites:
                      </span>
                      <span className="font-semibold">{formatPrice(calculateTotal())}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-bold text-gray-900">Total:</span>
                      <span className="font-bold text-2xl text-kubicoo-cyan">
                        {formatPrice(calculateTotal())}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

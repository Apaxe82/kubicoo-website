// src/app/booking/[propertyId]/review/page.jsx

'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { bookingService } from '@/services/bookingService';
import { useAuth } from '@/hooks/useAuth';

export default function BookingReview({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const bookingDetails = {
    propertyId: params.propertyId,
    startDate: searchParams.get('start'),
    endDate: searchParams.get('end'),
    guests: Number(searchParams.get('guests'))
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const response = await bookingService.createBooking({
        ...bookingDetails,
        userId: user.uid
      });

      // Redirect to payment
      router.push(`/booking/${params.propertyId}/payment?booking=${response.data.booking_id}`);
    } catch (error) {
      toast.error('Erro ao criar reserva. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Revise sua Reserva</h1>

      {/* Property Details */}
      <div className="bg-white rounded-lg border p-6 mb-6">
        <PropertySummaryCard property={property} />
      </div>

      {/* Booking Details */}
      <div className="bg-white rounded-lg border p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Detalhes da Reserva</h2>
        <div className="space-y-3">
          <DetailRow label="Check-in" value={formatDate(bookingDetails.startDate)} />
          <DetailRow label="Check-out" value={formatDate(bookingDetails.endDate)} />
          <DetailRow label="Hóspedes" value={`${bookingDetails.guests} pessoa(s)`} />
          <DetailRow label="Noites" value={calculateNights(bookingDetails)} />
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-lg border p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Resumo de Preços</h2>
        <PriceBreakdown booking={bookingDetails} property={property} />
      </div>

      {/* Cancellation Policy */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <h3 className="font-semibold text-blue-900 mb-2">Política de Cancelamento</h3>
        <p className="text-sm text-blue-800">
          Cancelamento grátis até 24h antes do check-in. 
          Após isso, será cobrada 50% do valor total.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
        >
          Voltar
        </button>
        <button
          onClick={handleConfirm}
          disabled={loading}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Processando...' : 'Confirmar e Pagar'}
        </button>
      </div>
    </div>
  );
}

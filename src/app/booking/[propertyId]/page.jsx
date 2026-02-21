// src/app/booking/[propertyId]/page.jsx

'use client';

import { useState } from 'react';
import { DatePicker } from '@/components/booking/DatePicker';
import { BookingSummary } from '@/components/booking/BookingSummary';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function BookingSelectDates({ params }) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [guests, setGuests] = useState(1);

  const handleContinue = () => {
    if (!isAuthenticated) {
      router.push(`/auth/login?redirect=/booking/${params.propertyId}`);
      return;
    }

    if (!dateRange.start || !dateRange.end) {
      toast.error('Selecione as datas');
      return;
    }

    router.push(`/booking/${params.propertyId}/review?start=${dateRange.start}&end=${dateRange.end}&guests=${guests}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Selecione as Datas</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <DatePicker
            value={dateRange}
            onChange={setDateRange}
            minDate={new Date()}
          />
          
          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">
              Número de Hóspedes
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-3"
            >
              {[1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} pessoa{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="sticky top-24">
          <BookingSummary
            property={property}
            dateRange={dateRange}
            guests={guests}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}

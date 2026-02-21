// src/app/booking/[propertyId]/payment/page.jsx

'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { paymentService } from '@/services/paymentService';
import { MulticaixaInstructions } from '@/components/payment/MulticaixaInstructions';
import { PaymentStatus } from '@/components/payment/PaymentStatus';
import { usePayment } from '@/hooks/usePayment';

export default function BookingPayment({ params }) {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking');
  const [paymentRef, setPaymentRef] = useState(null);
  const [loading, setLoading] = useState(true);

  const { status } = usePayment(paymentRef?.reference);

  useEffect(() => {
    const generatePaymentReference = async () => {
      try {
        const response = await paymentService.generateReference({
          bookingId,
          type: 'booking'
        });
        setPaymentRef(response.data);
      } catch (error) {
        toast.error('Erro ao gerar referência de pagamento');
      } finally {
        setLoading(false);
      }
    };

    generatePaymentReference();
  }, [bookingId]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pagamento</h1>

      {status === 'paid' ? (
        <PaymentSuccess bookingId={bookingId} />
      ) : (
        <>
          {/* Payment Reference */}
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
              Dados para Pagamento Multicaixa
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Entidade</p>
                <p className="text-2xl font-mono font-bold">{paymentRef.entity}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Referência</p>
                  <p className="text-2xl font-mono font-bold">{paymentRef.reference}</p>
                </div>
                <CopyButton text={paymentRef.reference} />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Montante</p>
                <p className="text-2xl font-mono font-bold">
                  {paymentRef.amount.toLocaleString('pt-AO')} Kz
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <MulticaixaInstructions />

          {/* Status Checker */}
          <PaymentStatus 
            reference={paymentRef.reference}
            status={status}
          />
        </>
      )}
    </div>
  );
}

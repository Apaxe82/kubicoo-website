// src/app/dashboard/subscription/upgrade/page.jsx

'use client';

import { useState } from 'react';
import { PricingCard } from '@/components/subscription/PricingCard';
import { subscriptionService } from '@/services/subscriptionService';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const PLANS = [
  {
    id: 'FREE_ANGOLA',
    name: 'Plano Gratuito',
    price: 0,
    features: [
      '2 propriedades ativas',
      'Fotos ilimitadas',
      'Suporte por email'
    ],
    recommended: false
  },
  {
    id: 'BASIC_LANDLORD',
    name: 'Básico',
    price: 15000,
    features: [
      '10 propriedades ativas',
      'Destaque em buscas',
      'Analytics básico',
      'Suporte prioritário'
    ],
    recommended: false
  },
  {
    id: 'PREMIUM_LANDLORD',
    name: 'Premium',
    price: 35000,
    features: [
      'Propriedades ilimitadas',
      'Selo verificado',
      'Analytics avançado',
      'Tour virtual 360°',
      'Suporte 24/7'
    ],
    recommended: true
  }
];

export default function UpgradePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(null);

  const handleUpgrade = async (plan) => {
    if (plan.price === 0) return;

    setLoading(plan.id);
    try {
      const response = await subscriptionService.initializeUpgrade({
        planCode: plan.id,
        userId: user.uid
      });

      // Redirect to payment page
      router.push(`/payment/pending?ref=${response.data.reference}`);
    } catch (error) {
      toast.error('Erro ao processar upgrade');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Escolha seu Plano
        </h1>
        <p className="text-xl text-gray-600">
          Aumente a visibilidade das suas propriedades
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PLANS.map(plan => (
          <PricingCard
            key={plan.id}
            plan={plan}
            onSelect={() => handleUpgrade(plan)}
            loading={loading === plan.id}
          />
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Perguntas Frequentes
        </h2>
        <FAQ />
      </div>
    </div>
  );
}

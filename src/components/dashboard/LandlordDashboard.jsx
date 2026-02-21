// src/components/dashboard/LandlordDashboard.jsx

'use client';

import { useState, useEffect } from 'react';
import { useProperties } from '@/hooks/useProperties';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { EarningsChart } from '@/components/dashboard/EarningsChart';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Home, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function LandlordDashboard({ user, subscription }) {
  const { properties, loading, stats } = useProperties();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bem-vindo, {user.displayName || 'Proprietário'}
          </h1>
          <p className="text-gray-600 mt-1">
            Gerencie suas propriedades e acompanhe seus ganhos
          </p>
        </div>
        <Link 
          href="/dashboard/properties/create"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          + Nova Propriedade
        </Link>
      </div>

      {/* Subscription Alert */}
      {subscription?.status !== 'active' && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Sua assinatura expirou. 
                <Link href="/dashboard/subscription/upgrade" className="font-semibold underline ml-1">
                  Renovar agora
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Propriedades Ativas"
          value={stats?.active_properties || 0}
          icon={<Home className="w-6 h-6" />}
          trend={stats?.property_trend}
          color="blue"
        />
        <StatsCard
          title="Reservas Este Mês"
          value={stats?.bookings_this_month || 0}
          icon={<Calendar className="w-6 h-6" />}
          trend={stats?.booking_trend}
          color="green"
        />
        <StatsCard
          title="Taxa de Ocupação"
          value={`${stats?.occupancy_rate || 0}%`}
          icon={<TrendingUp className="w-6 h-6" />}
          color="purple"
        />
        <StatsCard
          title="Receita Este Mês"
          value={`${(stats?.revenue_this_month || 0).toLocaleString('pt-AO')} Kz`}
          icon={<DollarSign className="w-6 h-6" />}
          trend={stats?.revenue_trend}
          color="green"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <EarningsChart data={stats?.earnings_chart} />
        <RecentActivity activities={stats?.recent_activities} />
      </div>

      {/* My Properties */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Minhas Propriedades</h2>
          <Link href="/dashboard/properties" className="text-blue-600 hover:underline">
            Ver todas →
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => <PropertyCardSkeleton key={i} />)}
          </div>
        ) : properties?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.slice(0, 6).map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                showActions 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <Home className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhuma propriedade cadastrada
            </h3>
            <p className="text-gray-600 mb-4">
              Comece adicionando sua primeira propriedade
            </p>
            <Link 
              href="/dashboard/properties/create"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Adicionar Propriedade
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

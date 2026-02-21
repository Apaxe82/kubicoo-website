// src/components/dashboard/ClientDashboard.jsx

'use client';

import { useBookings } from '@/hooks/useBooking';
import { Heart, Calendar, CreditCard, Bell } from 'lucide-react';

export default function ClientDashboard({ user, subscription }) {
  const { bookings, loading } = useBookings();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Olá, {user.displayName || 'Usuário'}!
        </h1>
        <p className="text-gray-600 mt-1">
          Gerencie suas reservas e propriedades favoritas
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <QuickAction
          icon={<Calendar />}
          title="Minhas Reservas"
          count={bookings?.active || 0}
          href="/dashboard/bookings"
          color="blue"
        />
        <QuickAction
          icon={<Heart />}
          title="Favoritos"
          count={stats?.favorites || 0}
          href="/dashboard/favorites"
          color="red"
        />
        <QuickAction
          icon={<CreditCard />}
          title="Pagamentos"
          count={stats?.pending_payments || 0}
          href="/dashboard/payments"
          color="green"
        />
        <QuickAction
          icon={<Bell />}
          title="Notificações"
          count={stats?.unread_notifications || 0}
          href="/dashboard/notifications"
          color="purple"
        />
      </div>

      {/* Active Bookings */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Reservas Ativas
        </h2>
        {bookings?.active?.length > 0 ? (
          <div className="space-y-4">
            {bookings.active.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<Calendar />}
            title="Nenhuma reserva ativa"
            description="Explore propriedades incríveis em Luanda"
            actionText="Buscar Propriedades"
            actionHref="/properties"
          />
        )}
      </div>
    </div>
  );
}

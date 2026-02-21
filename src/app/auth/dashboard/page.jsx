// src/app/(auth)/dashboard/page.jsx

'use client';

import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import LandlordDashboard from '@/components/dashboard/LandlordDashboard';
import ClientDashboard from '@/components/dashboard/ClientDashboard';
import { Loader } from '@/components/shared/Loader';

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { subscription, loading: subLoading } = useSubscription();

  if (authLoading || subLoading) {
    return <Loader fullscreen />;
  }

  // Determine user role from Firebase custom claims or subscription
  const isLandlord = user?.customClaims?.role === 'landlord' || 
                     subscription?.plan_code?.includes('LANDLORD');

  return (
    <div className="min-h-screen bg-gray-50">
      {isLandlord ? (
        <LandlordDashboard user={user} subscription={subscription} />
      ) : (
        <ClientDashboard user={user} subscription={subscription} />
      )}
    </div>
  );
}

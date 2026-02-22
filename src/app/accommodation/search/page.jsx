import { Suspense } from 'react';
import AccommodationSearch from './AccommodationSearch';

export default function AccommodationSearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#06B6D4] border-t-transparent" />
      </div>
    }>
      <AccommodationSearch />
    </Suspense>
  );
}

import { Suspense } from 'react';
import PropertiesPageContent from './PropertiesPageContent';

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#06B6D4] border-t-transparent mx-auto mb-4" />
          <p className="text-gray-600">A carregar propriedades...</p>
        </div>
      </div>
    }>
      <PropertiesPageContent />
    </Suspense>
  );
}

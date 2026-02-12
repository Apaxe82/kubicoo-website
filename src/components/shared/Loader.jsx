import { Loader2 } from 'lucide-react';

export function Loader({ fullscreen = false, size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (fullscreen) {
    return (
      <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
        <Loader2 className={`${sizes[size]} text-blue-600 animate-spin`} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className={`${sizes[size]} text-blue-600 animate-spin`} />
    </div>
  );
}

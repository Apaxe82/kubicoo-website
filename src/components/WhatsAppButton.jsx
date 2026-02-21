'use client';

import { MessageCircle } from 'lucide-react';
import { 
  openWhatsApp, 
  getPropertyInquiryLink, 
  getBookingInquiryLink,
  getGeneralInquiryLink 
} from '@/utils/whatsappLinks';

/**
 * WhatsApp Contact Button Component
 * Agora suporta tipos específicos para automatizar mensagens
 */
export default function WhatsAppButton({ 
  type = 'general', // 'property', 'booking', 'general'
  data,             // O objeto da propriedade ou reserva
  text, 
  variant = 'primary',
  size = 'md',
  className = ''
}) {
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-lg active:scale-95';
  
  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-green-600 border-2 border-green-500 hover:bg-green-50',
    outline: 'border-2 border-green-500 text-green-600 hover:bg-green-50',
    ghost: 'text-green-600 hover:bg-green-50'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  // Lógica para determinar qual link gerar baseado no tipo
  const handleAction = (e) => {
    e.preventDefault();
    let finalLink = '';

    switch (type) {
      case 'property':
        finalLink = getPropertyInquiryLink(data);
        break;
      case 'booking':
        finalLink = getBookingInquiryLink(data);
        break;
      default:
        finalLink = getGeneralInquiryLink(text || 'Suporte');
    }

    openWhatsApp(finalLink);
  };

  const buttonText = text || (type === 'property' ? 'Solicitar Informações' : 'Contactar Suporte');
  
  return (
    <button
      onClick={handleAction}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={buttonText}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{buttonText}</span>
    </button>
  );
}

/**
 * Floating WhatsApp Button (Sticky)
 * Mantido para acesso global rápido
 */

export function WhatsAppFloatingButton({ phoneNumber = '244923456789' }) {
  const link = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=Olá!`;
  
  return (
    <div className="fixed bottom-24 right-8 z-50">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Badge de Notificação (!) */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white animate-pulse">
          !
        </span>

        {/* Tooltip */}
        <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
          💬 Precisa de ajuda?
        </span>
      </a>
    </div>
  );
}

/**
 * WhatsApp Share Button
 * Ideal para as listagens de imóveis
 */
export function WhatsAppShareButton({ url, title, className = '' }) {
  const shareText = `Olha este imóvel que encontrei no Kubicoo: ${title}\n\n${url}`;
  const link = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-green-600 font-medium hover:underline ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>Partilhar</span>
    </a>
  );
}

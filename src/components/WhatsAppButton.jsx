'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
// Usando o alias @ para garantir consistência no projeto
import { openWhatsApp } from '../utils/whatsappLinks';

/**
 * Botão padrão de ação para WhatsApp (Button element)
 */
export default function WhatsAppButton({
  link,
  text = 'Contactar via WhatsApp',
  variant = 'primary',
  size = 'md',
  className = ''
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-lg';
  
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
  
  const handleClick = (e) => {
    e.preventDefault();
    if (link) {
      openWhatsApp(link);
    }
  };
  
  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={text}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
}

/**
 * Botão Flutuante (Fixed) que aparece no canto da página
 */
export function WhatsAppFloatingButton({ phoneNumber = '244923456789' }) {
  const message = encodeURIComponent('Olá Kubicoo! Preciso de ajuda.');
  const link = `https://wa.me/${phoneNumber}?text=${message}`;
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
        !
      </span>
      <span className="absolute right-20 top-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
        💬 Precisa de ajuda?
      </span>
    </a>
  );
}

/**
 * Botão de Partilha para imóveis específicos
 */
export function WhatsAppShareButton({ url, title, className = '' }) {
  const message = `Confira este imóvel no Kubicoo: ${title}\n\n${url}`;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/?text=${encodedMessage}`;
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>Partilhar</span>
    </a>
  );
}



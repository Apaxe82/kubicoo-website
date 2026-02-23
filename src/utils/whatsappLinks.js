/**
 * Utilitários para geração de links dinâmicos do WhatsApp
 * Kubicoo - Real Estate Angola
 */

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '244923456789';

/**
 * Gera um link universal wa.me
 */
export function generateWhatsAppLink(phoneNumber, message) {
  const cleanNumber = phoneNumber.replace(/\D/g, ''); // Garante apenas números
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Link para interesse em uma propriedade específica
 */
export function getPropertyInquiryLink(property) {
  if (!property) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const title = property.title || 'Imóvel sem título';
  const location = property.neighbourhood || property.municipality || property.province || 'Localização não especificada';
  const id = property.id || 'N/A';

  const message = `Olá Kubicoo! 👋\n\nEstou interessado no imóvel:\n📍 ${title}\n🏘️ ${location}\n🆔 Ref: ${id}\n\nGostaria de mais informações.`;
  
  return generateWhatsAppLink(WHATSAPP_NUMBER, message);
}

/**
 * Link para suporte de uma reserva existente
 */
export function getBookingInquiryLink(booking) {
  if (!booking) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const ref = booking.paymentReference || booking.id || 'Sem Referência';
  const message = `Olá Kubicoo! 👋\n\nTenho uma dúvida sobre a minha reserva:\n🆔 Ref: ${ref}\n\nPodem ajudar?`;
  
  return generateWhatsAppLink(WHATSAPP_NUMBER, message);
}

/**
 * Helper para abrir o link em uma nova aba
 */
export function openWhatsApp(link) {
  if (typeof window !== 'undefined' && link) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}

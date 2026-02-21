// utils/whatsappLinks.js
// WhatsApp Deep Link Generator for Kubicoo - Version 2.0 (Integrated with DB logic)

/**
 * Formata valores numéricos para a moeda local (Kwanza)
 */
const formatKwanza = (amount) => {
  if (!amount) return 'A consultar';
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
    minimumFractionDigits: 2
  }).format(amount);
};

/**
 * Generate WhatsApp chat link with pre-filled message
 */
export function generateWhatsAppLink(phoneNumber, message) {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  const expiryDate = booking.expires_at 
  ? new Date(booking.expires_at).toLocaleDateString('pt-AO') 
  : 'Vitalício';
}

/**
 * Generate property inquiry WhatsApp link
 */
export function getPropertyInquiryLink(property, phoneNumber = '244923456789') {
  const message = `Olá Kubicoo! 👋

Estou interessado no seguinte imóvel:

📍 *${property.title}*
🏘️ Localização: ${property.neighbourhood || property.municipality}
🆔 Referência: ${property.id}
💰 Preço: ${formatKwanza(property.price)}

Gostaria de mais informações sobre disponibilidade e condições de arrendamento.

Obrigado!`;

  return generateWhatsAppLink(phoneNumber, message);
}

/**
 * Generate booking inquiry WhatsApp link - INTEGRATED VERSION
 */
export function getBookingInquiryLink(booking, phoneNumber = '244923456789') {
  const nights = booking.nights || "A calcular";
  const total = formatKwanza(booking.total_amount);

  const message = `Olá Kubicoo! 👋

Tenho uma questão sobre a minha reserva:

🏠 *${booking.property_title || 'Alojamento Kubicoo'}*
👤 Hóspede: ${booking.guest_name}
📅 Check-in: ${booking.check_in}
📅 Check-out: ${booking.check_out}
🌙 Duração: ${nights} noites
💰 Valor Total: ${total}

💳 Ref. Pagamento: *${booking.payment_reference || 'Pendente'}*
📊 Status: ${String(booking.payment_status).toUpperCase()}

Poderiam me ajudar com o seguinte:
[Escreva sua dúvida aqui]`;

  return generateWhatsAppLink(phoneNumber, message);
}

/**
 * Generate visit scheduling WhatsApp link
 */
export function getVisitSchedulingLink(property, phoneNumber = '244923456789') {
  const message = `Olá Kubicoo! 👋

Gostaria de agendar uma visita ao imóvel:

📍 *${property.title}*
🏘️ ${property.address || property.neighbourhood}
🆔 Ref: ${property.id}

Quando seria possível agendar?
⏰ Sugestão: Manhãs (9h-12h) ou Tardes (14h-17h)

Aguardo retorno!`;

  return generateWhatsAppLink(phoneNumber, message);
}

/**
 * Generate payment help WhatsApp link
 */
export function getPaymentHelpLink(paymentReference, phoneNumber = '244923456789') {
  const message = `Olá Kubicoo! 👋

Preciso de ajuda com o pagamento da referência:
💳 *${paymentReference}*

Já realizei o pagamento, mas o status ainda não atualizou. Como devo proceder?`;

  return generateWhatsAppLink(phoneNumber, message);
}

/**
 * Generate general inquiry WhatsApp link
 */
export function getGeneralInquiryLink(subject, phoneNumber = '244923456789') {
  const message = `Olá Kubicoo! 👋

Tenho uma dúvida sobre: ${subject}

[Descreva sua dúvida aqui]`;

  return generateWhatsAppLink(phoneNumber, message);
}

/**
 * Open WhatsApp in new window
 */
export function openWhatsApp(link) {
  if (typeof window !== 'undefined') {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}

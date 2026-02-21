'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  CheckCircle, Clock, AlertCircle, Download, MessageCircle,
  Phone, Mail, MapPin, Calendar, Users, CreditCard, Copy, Check
} from 'lucide-react';
import { getBookingInquiryLink, getPaymentHelpLink } from '@/utils/whatsappLinks';

export default function BookingDetailPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchBookingStatus();
    
    // Poll every 10 seconds if payment is pending
    const interval = setInterval(() => {
      if (booking?.payment_status === 'pending') {
        fetchBookingStatus();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [id, booking?.payment_status]);

  const fetchBookingStatus = async () => {
    try {
      const response = await fetch(`/api/accommodation/booking/${id}/status`);
      const data = await response.json();
      
      if (data.success) {
        setBooking(data.booking);
      }
    } catch (error) {
      console.error('Error fetching booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: {
        icon: <Clock className="w-6 h-6" />,
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        label: 'Aguardando Pagamento',
        description: 'Complete o pagamento para confirmar sua reserva'
      },
      confirmed: {
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        label: 'Confirmado',
        description: 'Sua reserva está confirmada! Aguardamos você.'
      },
      cancelled: {
        icon: <AlertCircle className="w-6 h-6" />,
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        label: 'Cancelado',
        description: 'Esta reserva foi cancelada'
      }
    };

    return configs[status] || configs.pending;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#06B6D4] border-t-transparent"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reserva não encontrada</h2>
          <p className="text-gray-600">Verifique o ID da reserva e tente novamente.</p>
        </div>
      </div>
    );
  }

  const statusConfig = getStatusConfig(booking.payment_status);
  const whatsappInquiryLink = getBookingInquiryLink(booking);
  const whatsappPaymentLink = getPaymentHelpLink(booking.payment_reference);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Status Header */}
        <div className={`${statusConfig.bg} ${statusConfig.border} border-2 rounded-2xl p-6 mb-8`}>
          <div className="flex items-center gap-4">
            <div className={statusConfig.color}>{statusConfig.icon}</div>
            <div className="flex-1">
              <h2 className={`text-2xl font-bold ${statusConfig.color}`}>
                {statusConfig.label}
              </h2>
              <p className="text-gray-700 mt-1">{statusConfig.description}</p>
            </div>
            {booking.payment_status === 'pending' && (
              <div className="text-right">
                <div className="text-sm text-gray-600">Expira em</div>
                <div className="text-xl font-bold text-gray-900">71h 23m</div>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Property Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detalhes da Propriedade</h3>
              
              <div className="flex gap-4 mb-4">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/placeholder-property.jpg"
                    alt={booking.property_title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{booking.property_title}</h4>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-[#06B6D4]" />
                    <span>{booking.property_address || booking.municipality}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#06B6D4]/10 text-[#06B6D4] px-3 py-1 rounded-full text-xs font-semibold">
                    {booking.accommodation_type}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informações da Reserva</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Check-in</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {new Date(booking.check_in).toLocaleDateString('pt-AO')}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Check-out</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {booking.check_out ? new Date(booking.check_out).toLocaleDateString('pt-AO') : 'N/A'}
                  </span>
                </div>

                {booking.duration_hours && (
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">Duração</span>
                    </div>
                    <span className="font-semibold text-gray-900">{booking.duration_hours} horas</span>
                  </div>
                )}

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Hóspedes</span>
                  </div>
                  <span className="font-semibold text-gray-900">{booking.guests || 1}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Tipo de Reserva</span>
                  </div>
                  <span className="font-semibold text-gray-900 capitalize">{booking.booking_type}</span>
                </div>
              </div>
            </div>

            {/* Guest Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informações do Hóspede</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Nome Completo</div>
                  <div className="font-semibold text-gray-900">{booking.guest_name}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="font-semibold text-gray-900">{booking.guest_email}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Telefone</div>
                  <div className="font-semibold text-gray-900">{booking.guest_phone}</div>
                </div>
                {booking.guest_id_number && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">BI/Passaporte</div>
                    <div className="font-semibold text-gray-900">{booking.guest_id_number}</div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column - Payment & Actions */}
          <div className="space-y-6">
            
            {/* Payment Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resumo do Pagamento</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Valor Total</span>
                  <span className="font-semibold">{Number(booking.total_amount).toLocaleString()} AOA</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">Total a Pagar</span>
                    <span className="text-2xl font-black text-[#06B6D4]">
                      {Number(booking.total_amount).toLocaleString()} AOA
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Reference */}
              {booking.payment_status === 'pending' && (
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-2">Referência de Pagamento</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 font-mono font-bold text-lg text-gray-900">
                      {booking.payment_reference}
                    </div>
                    <button
                      onClick={() => copyToClipboard(booking.payment_reference)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Entidade: 00123
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                {booking.payment_status === 'pending' && (
                  <>
                    <button className="w-full bg-[#06B6D4] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                      Pagar com Multicaixa
                    </button>
                    <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                      Pagar com AppyPay
                    </button>
                  </>
                )}

                {booking.payment_status === 'confirmed' && (
                  <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Baixar Comprovante
                  </button>
                )}

                <a
                  href={whatsappInquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>

                {booking.payment_status === 'pending' && (
                  <a
                    href={whatsappPaymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-green-500 text-green-600 py-4 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Dúvidas sobre Pagamento?
                  </a>
                )}
              </div>

              {/* Help Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-3">Precisa de ajuda?</div>
                <div className="space-y-2 text-sm">
                  <a href="tel:+244923456789" className="flex items-center gap-2 text-gray-700 hover:text-[#06B6D4] transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+244 923 456 789</span>
                  </a>
                  <a href="mailto:support@kubicoo.com" className="flex items-center gap-2 text-gray-700 hover:text-[#06B6D4] transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>support@kubicoo.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

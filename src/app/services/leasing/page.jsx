'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Check, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ServiceDetailPage() {
  const pathname = usePathname();
  const serviceName = pathname?.split('/').pop() || 'serviço';
  
  const serviceNames = {
    'arrendamento': 'Arrendamento',
    'venda': 'Venda',
    'permuta': 'Permuta',
    'trespasse': 'Trespasse',
    'concessao': 'Concessão',
    'superficie': 'Direito de Superfície',
    'usufruto': 'Usufruto',
    'gestao': 'Gestão de Propriedade',
    'leasing': 'Leasing Imobiliário',
    'avaliacao': 'Avaliação Imobiliária',
    'consultoria': 'Consultoria Jurídica',
    'leiloes': 'Leilões Imobiliários'
  };

  const title = serviceNames[serviceName] || 'Serviço';

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Link href="/services" className="inline-flex items-center text-[#06B6D4] hover:underline mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar aos Serviços
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Sobre Este Serviço</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O serviço de {title.toLowerCase()} da Kubicoo oferece soluções completas e profissionais para todas as suas necessidades imobiliárias. Nossa equipa experiente está pronta para ajudá-lo em cada etapa do processo.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Como Funciona</h3>
            <div className="space-y-4 mb-8">
              {[
                'Contacte-nos através do formulário ou WhatsApp',
                'Agendamos uma consulta gratuita',
                'Avaliamos as suas necessidades específicas',
                'Apresentamos uma proposta personalizada',
                'Acompanhamos todo o processo até à conclusão'
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#06B6D4] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 text-lg">{step}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Benefícios</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Equipa profissional e experiente',
                'Transparência total em todas as transações',
                'Acompanhamento personalizado',
                'Melhores condições do mercado',
                'Suporte contínuo durante e após o processo'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#06B6D4] rounded-full"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#06B6D4] to-blue-600 text-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-4">Interessado?</h3>
            <p className="text-xl mb-6">Entre em contacto connosco para mais informações sobre {title.toLowerCase()}</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="https://wa.me/244923456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#06B6D4] px-6 py-4 rounded-lg font-bold hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+244923456789"
                className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Ligar
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

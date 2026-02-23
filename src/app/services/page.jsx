'use client';

import Link from 'next/link';
import { 
  Home, DollarSign, RefreshCcw, Briefcase, FileText, Building2, Users, 
  Key, PiggyBank, Calculator, Scale, Hammer, ArrowRight 
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { icon: <Home className="w-10 h-10" />, title: 'Arrendamento', description: 'Aluguel de longo prazo, curto prazo, por quarto', link: '/services/arrendamento' },
    { icon: <DollarSign className="w-10 h-10" />, title: 'Venda', description: 'Compra e venda de propriedades e terrenos', link: '/services/venda' },
    { icon: <RefreshCcw className="w-10 h-10" />, title: 'Permuta', description: 'Troca direta ou com torna entre propriedades', link: '/services/permuta' },
    { icon: <Briefcase className="w-10 h-10" />, title: 'Trespasse', description: 'Transferência de negócios em funcionamento', link: '/services/trespasse' },
    { icon: <FileText className="w-10 h-10" />, title: 'Concessão', description: 'Direito de uso temporário de terrenos', link: '/services/concessao' },
    { icon: <Building2 className="w-10 h-10" />, title: 'Direito de Superfície', description: 'Construir em terreno alheio', link: '/services/superficie' },
    { icon: <Users className="w-10 h-10" />, title: 'Usufruto', description: 'Direito de usar propriedade de outrem', link: '/services/usufruto' },
    { icon: <Key className="w-10 h-10" />, title: 'Gestão de Propriedade', description: 'Gestão completa para investidores', link: '/services/gestao' },
    { icon: <PiggyBank className="w-10 h-10" />, title: 'Leasing Imobiliário', description: 'Arrendamento com opção de compra', link: '/services/leasing' },
    { icon: <Calculator className="w-10 h-10" />, title: 'Avaliação Imobiliária', description: 'Valor de mercado oficial', link: '/services/avaliacao' },
    { icon: <Scale className="w-10 h-10" />, title: 'Consultoria Jurídica', description: 'Apoio legal completo', link: '/services/consultoria' },
    { icon: <Hammer className="w-10 h-10" />, title: 'Leilões Imobiliários', description: 'Venda ao melhor licitante', link: '/services/leiloes' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções imobiliárias completas para todas as suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.link}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#06B6D4]/30 group"
            >
              <div className="text-[#06B6D4] mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#06B6D4] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-[#06B6D4] font-semibold">
                Saber mais <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#06B6D4] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
            Entre em Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}

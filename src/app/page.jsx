'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, MapPin, Home, DollarSign, RefreshCcw, 
  Shield, Users, ArrowRight, Building2, Briefcase
} from 'lucide-react';
import { WhatsAppFloatingButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  const [location, setLocation] = useState('');

  // Schema de Cores da Página 1 com os Icons Profissionais
  const transactionTypes = [
    { icon: <Home />, title: 'Arrendamento', slug: 'arrendamento', badge: '10% Comissão' },
    { icon: <DollarSign />, title: 'Venda', slug: 'venda', badge: '8-10% Comissão' },
    { icon: <RefreshCcw />, title: 'Permuta', slug: 'permuta', badge: '2.5% Comissão' },
    { icon: <Building2 />, title: 'Comercial', slug: 'comercial', badge: 'Premium' },
    { icon: <Briefcase />, title: 'Escritórios', slug: 'escritorios', badge: 'Luanda Sul' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION (Visual Estilo Página 1 com Search da Página 2) --- */}
      <section className="relative h-[650px] flex items-center justify-center text-white overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000" 
          alt="Luanda Skyview" 
          fill 
          className="object-cover brightness-[0.35]"
          priority
        />
        
        <div className="relative z-10 w-full max-w-5xl px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Imobiliária Digital <span className="text-[#06B6D4]">Angola</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            A forma mais segura de arrendar ou comprar o seu Kubico com proteção de pagamento Escrow.
          </p>

          {/* BARRA DE PESQUISA (Funcionalidade Merged) */}
          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 px-6 flex-1 w-full">
              <MapPin className="text-[#06B6D4] w-6 h-6" />
              <input 
                type="text" 
                placeholder="Centralidade do Kilamba, Talatona..." 
                className="w-full py-3 outline-none text-gray-800 font-medium"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Link 
              href={`/properties?location=${location}`}
              className="bg-[#06B6D4] hover:bg-cyan-600 text-white px-10 py-4 rounded-xl md:rounded-full font-bold flex items-center gap-2 transition-all w-full md:w-auto justify-center"
            >
              <Search className="w-5 h-5" /> Pesquisar
            </Link>
          </div>
        </div>
      </section>

      {/* --- GRID DE TRANSAÇÕES (Exact Schema da Página 1) --- */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">O que deseja fazer?</h2>
            <div className="h-1.5 w-20 bg-[#06B6D4] rounded-full"></div>
          </div>
          <Link href="/properties" className="text-[#06B6D4] font-bold flex items-center gap-2 group">
            Ver todas as ofertas <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {transactionTypes.map((type, i) => (
            <Link 
              key={i} 
              href={`/properties?type=${type.slug}`}
              className="group p-8 border border-gray-100 rounded-[2rem] bg-gray-50 hover:bg-white hover:border-[#06B6D4] hover:shadow-xl transition-all text-center"
            >
              <div className="text-[#06B6D4] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {/* Render do Icon com tamanho fixo */}
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                   {type.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{type.title}</h3>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#06B6D4] mt-3 block">
                {type.badge}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- FOTO SECTION (Merged do Enhance sem quebrar o layout) --- */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Shield className="text-[#06B6D4]" /> Imóveis Verificados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Exemplo de Card com o Schema da Página 1 */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop`} 
                    alt="Property Preview" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-900">
                    VERIFICADO
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#06B6D4] font-bold text-xl mb-2">150.000 AOA <span className="text-sm font-normal text-gray-500">/mês</span></p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">Apartamento T3 - Kilamba</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <MapPin className="w-4 h-4" /> Quarteirão X, Edifício Y
                  </div>
                  <Link href="/properties" className="block text-center py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-[#06B6D4] transition-colors">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </div>
  );
}


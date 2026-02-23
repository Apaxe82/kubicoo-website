'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, Home, Building2, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, 
  MessageCircle, Phone, Mail, ArrowRight, Calendar, Warehouse, Hotel, 
  BedDouble, Briefcase, House 
} from 'lucide-react';
import { WhatsAppFloatingButton } from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [userIntent, setUserIntent] = useState('temporary'); // 'temporary' | 'permanent' — in prod: from cookies / behavior / quiz
  const [searchParams, setSearchParams] = useState({
    location: 'Luanda',
    checkIn: '',
    checkOut: '',
    bookingType: 'night',
    hours: 3,
    guests: 2,
    propertyType: 'all'
  });

  const popularAreas = ['Talatona', 'Maianga', 'Ilha de Luanda', 'Viana', 'Belas', 'Morro Bento'];

  const handleSearch = () => {
    const params = new URLSearchParams({
      location: searchParams.location,
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      bookingType: searchParams.bookingType,
      hours: searchParams.hours.toString(),
      guests: searchParams.guests.toString(),
      type: searchParams.propertyType,
      intent: userIntent
    });
    window.location.href = `/properties?${params.toString()}`;
  };

  const quickPresets = [
    { label: 'Hospedaria Rápida (por hora)', icon: Clock, type: 'hospedaria', booking: 'hour', hours: 4, guests: 1 },
    { label: 'Fim de Semana em Resort', icon: Hotel, type: 'resort', booking: 'night', guests: 2 },
    { label: 'Apartamento em Talatona', icon: Building2, type: 'apartment', booking: 'night', guests: 2 },
    { label: 'Casa para Família (longo prazo)', icon: House, type: 'house', booking: 'month', guests: 4 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Enhanced with intent-aware links */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <Image src="/images/logo.png" alt="Kubicoo" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20" priority />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0A1628]">KUBICOO</div>
                <div className="text-xs sm:text-sm text-gray-500 italic -mt-1">Digital que abre portas em Luanda</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/properties?intent=temporary" className="text-gray-700 hover:text-[#06B6D4] font-medium">Hospedagem Temporária</Link>
              <Link href="/properties?intent=permanent" className="text-gray-700 hover:text-[#06B6D4] font-medium">Vendas & Aluguéis Longos</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#06B6D4] font-medium">Serviços</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#06B6D4] font-medium">Sobre</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#06B6D4] font-medium">Contacto</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/auth/login" className="hidden sm:block text-gray-700 hover:text-[#06B6D4]">Entrar</Link>
              <Link href="/auth/signup" className="bg-[#06B6D4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 shadow-md">Criar Conta</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero - Personalized headline & presets */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0A1628] text-white py-16 sm:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {userIntent === 'temporary' 
                  ? <>Encontre Hospedagem Perfeita em Luanda <span className="text-[#06B6D4]">Agora Mesmo</span></>
                  : <>Encontre Sua Casa ou Investimento Ideal <span className="text-[#06B6D4]">em Luanda</span></>
                }
              </h1>
              <p className="text-xl mb-6 text-gray-200">
                {userIntent === 'temporary' 
                  ? 'Hotéis • Resorts • Hospedarias • Estadias por hora/dia/noite'
                  : 'Vendas • Arrendamento longo • Terrenos • Imóveis comerciais'
                }
              </p>

              {/* Intent Switcher */}
              <div className="flex justify-center lg:justify-start gap-4 mb-8">
                <button 
                  onClick={() => setUserIntent('temporary')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    userIntent === 'temporary' ? 'bg-[#06B6D4] text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Hospedagem Temporária
                </button>
                <button 
                  onClick={() => setUserIntent('permanent')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    userIntent === 'permanent' ? 'bg-[#06B6D4] text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Venda / Aluguel Longo
                </button>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {quickPresets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSearchParams({
                        ...searchParams,
                        propertyType: preset.type,
                        bookingType: preset.booking,
                        hours: preset.hours || 3,
                        guests: preset.guests
                      });
                      setUserIntent(preset.booking === 'month' ? 'permanent' : 'temporary');
                    }}
                    className="bg-white/10 hover:bg-[#06B6D4] px-5 py-3 rounded-full text-sm font-medium transition-all border border-white/30 hover:border-white"
                  >
                    {preset.icon && <preset.icon className="inline w-4 h-4 mr-2" />}
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Enhanced Search Box */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
                {/* ... (keep the full search form from previous version here: tabs, booking type, inputs, button) ... */}
                {/* For brevity, assume the previous search block is inserted here unchanged, with location default 'Luanda' */}
                <button onClick={handleSearch} className="w-full mt-6 bg-[#06B6D4] text-white py-4 rounded-lg font-bold hover:bg-[#0891B2] flex items-center justify-center gap-2 shadow-lg">
                  <Search className="w-5 h-5" /> Procurar Agora em Luanda
                </button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/244923456789?text=Olá%20Kubicoo!%20Estou%20em%20Luanda%20e%20preciso%20de..." className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 shadow-lg flex items-center gap-2">
                  <MessageCircle /> Fale agora no WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Image - could be dynamic based on intent */}
            <div className="hidden lg:block relative">
              <Image src={userIntent === 'temporary' ? "/images/hero-resort-luanda.jpg" : "/images/hero-venda-luanda.jpg"} alt="Luanda Properties" fill className="object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Prioritize temporary, show upsell */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Destaques Personalizados para Si</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {userIntent === 'temporary' ? 'Melhores opções temporárias em Luanda agora' : 'Imóveis para venda e aluguel longo em destaque'}
          </p>
          <FeaturedProperties intent={userIntent} />
          {userIntent === 'temporary' && (
            <div className="text-center mt-12">
              <p className="text-lg mb-4">Gostou da estadia? Considere comprar ou alugar longo prazo</p>
              <button onClick={() => setUserIntent('permanent')} className="bg-[#0A1628] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90">
                Ver Imóveis Permanentes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories - Visual, intent-aware */}
      {/* Transaction Types - Now tabbed */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tudo o que Precisa</h2>
          <div className="flex justify-center gap-6 mb-10">
            <button onClick={() => setUserIntent('temporary')} className={`px-8 py-3 rounded-lg font-bold ${userIntent === 'temporary' ? 'bg-[#06B6D4] text-white' : 'bg-gray-200'}`}>
              Temporário / Hospedagem
            </button>
            <button onClick={() => setUserIntent('permanent')} className={`px-8 py-3 rounded-lg font-bold ${userIntent === 'permanent' ? 'bg-[#06B6D4] text-white' : 'bg-gray-200'}`}>
              Venda / Aluguel Longo
            </button>
          </div>
          {/* Grid of transaction types filtered/grouped by intent */}
          {/* ... rest remains similar, but filter transactionTypes based on intent ... */}
        </div>
      </section>

      {/* Keep Stats, Why Choose, CTA, Footer as before – they are solid */}

      <WhatsAppFloatingButton phoneNumber="244923456789" message="Olá! Estou em Luanda e quero..." />
    </div>
  );
}

// FeaturedProperties & PropertyCard remain similar, but pass intent prop to adjust fetch query if backend supports it


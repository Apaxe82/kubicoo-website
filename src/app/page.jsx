'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search, MapPin, Shield, Zap, Star, ArrowRight, Clock, CheckCircle2, Menu, X,
  Phone, Mail, Instagram, Facebook, Linkedin, Youtube, MessageCircle,
  Home, Building2, Bed, Hotel, Users, Calendar,
  DollarSign, RefreshCcw, Briefcase, FileText, Key, PiggyBank, Calculator, Scale, Hammer
} from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    query: '',
    location: '',
    propertyType: 'all',
    bookingType: 'night',
    guests: 2
  });

  const transactionTypes = [
    { icon: <Home className="w-8 h-8" />, title: 'Arrendamento', badge: '10%', link: '/services/arrendamento' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Venda', badge: '6-10%', link: '/services/venda' },
    { icon: <RefreshCcw className="w-8 h-8" />, title: 'Permuta', badge: '3.5%', link: '/services/permuta' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Trespasse', badge: '6-10%', link: '/services/trespasse' },
    { icon: <FileText className="w-8 h-8" />, title: 'Concessão', badge: '4%', link: '/services/concessao' },
    { icon: <Building2 className="w-8 h-8" />, title: 'Direito de Superfície', badge: '4.5%', link: '/services/superficie' },
    { icon: <Users className="w-8 h-8" />, title: 'Usufruto', badge: '3-5%', link: '/services/usufruto' },
    { icon: <Key className="w-8 h-8" />, title: 'Gestão', badge: '8-12%', link: '/services/gestao' },
    { icon: <PiggyBank className="w-8 h-8" />, title: 'Leasing', badge: '5.5%', link: '/services/leasing' },
    { icon: <Calculator className="w-8 h-8" />, title: 'Avaliação', badge: '50K+', link: '/services/avaliacao' },
    { icon: <Scale className="w-8 h-8" />, title: 'Consultoria', badge: '100K+', link: '/services/consultoria' },
    { icon: <Hammer className="w-8 h-8" />, title: 'Leilões', badge: '10%', link: '/services/leiloes' }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur border-b border-white/10 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Kubicoo" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20" priority />
            <div className="hidden sm:block">
              <span className="text-white text-xl font-black tracking-widest">KUBICOO</span>
              <p className="text-[#06B6D4] text-xs italic">Digital que abre portas</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <Link href="/properties" className="hover:text-[#06B6D4]">Imóveis</Link>
            <Link href="/services" className="hover:text-[#06B6D4]">Serviços</Link>
            <Link href="/pricing" className="hover:text-[#06B6D4]">Planos</Link>
            <Link href="/about" className="hover:text-[#06B6D4]">Sobre</Link>
            <Link href="/contact" className="hover:text-[#06B6D4]">Contacto</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/signup" className="hidden sm:inline-flex items-center gap-2 bg-[#06B6D4] hover:bg-cyan-500 text-white text-sm font-bold px-5 py-2.5 rounded-full">
              Anunciar <ArrowRight className="w-4 h-4" />
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-3 text-gray-300 text-sm font-semibold">
            <Link href="/properties" className="hover:text-[#06B6D4] px-2 py-1">Imóveis</Link>
            <Link href="/services" className="hover:text-[#06B6D4] px-2 py-1">Serviços</Link>
            <Link href="/pricing" className="hover:text-[#06B6D4] px-2 py-1">Planos</Link>
            <Link href="/about" className="hover:text-[#06B6D4] px-2 py-1">Sobre</Link>
            <Link href="/contact" className="hover:text-[#06B6D4] px-2 py-1">Contacto</Link>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <a
      
        href="https://wa.me/244923456789?text=Olá%20Kubicoo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold">1</span>
        <span className="absolute right-20 top-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">💬 Precisa de ajuda?</span>
      </a>

      {/* HERO */}
      <section className="bg-[#0A1628] text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              🇦🇴 Plataforma #1 em Angola
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Encontre o Seu <span className="text-[#06B6D4]">Imóvel Perfeito</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Arrendamento, Venda, Hospedagem • Pagamento Seguro via Escrow
            </p>

            {/* Enhanced Search */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
              {/* Property Types */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { id: 'all', label: 'Todos', icon: Home },
                  { id: 'apartment', label: 'Apartamentos', icon: Building2 },
                  { id: 'house', label: 'Vivendas', icon: Home },
                  { id: 'hospedaria', label: 'Hospedarias', icon: Bed },
                  { id: 'resort', label: 'Resorts', icon: Hotel },
                  { id: 'airbnb', label: 'Airbnb', icon: Bed }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setSearchParams({ ...searchParams, propertyType: id })}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                      searchParams.propertyType === id ? 'bg-[#06B6D4] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>

              {/* Booking Type */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {['hour', 'night', 'day', 'month'].map(type => (
                  <button
                    key={type}
                    onClick={() => setSearchParams({ ...searchParams, bookingType: type })}
                    className={`py-3 rounded-lg font-semibold transition-all ${
                      searchParams.bookingType === type ? 'bg-[#06B6D4] text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {type === 'hour' ? 'Hora' : type === 'night' ? 'Noite' : type === 'day' ? 'Dia' : 'Mês'}
                  </button>
                ))}
              </div>

              {/* Search Inputs */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Localização (ex: Talatona)"
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#06B6D4]"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={searchParams.guests}
                    onChange={(e) => setSearchParams({ ...searchParams, guests: Number(e.target.value) })}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg"
                  >
                    {[1,2,3,4,5,6,8].map(g => <option key={g} value={g}>{g} hóspede{g > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>

              <Link
                href={`/properties?type=${searchParams.propertyType}&booking=${searchParams.bookingType}&location=${searchParams.location}`}
                className="w-full bg-[#06B6D4] text-white py-4 rounded-lg font-bold hover:bg-opacity-90 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" /> Buscar Agora
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div><div className="text-4xl font-bold mb-2">1,500+</div><div className="text-gray-300">Propriedades</div></div>
            <div><div className="text-4xl font-bold mb-2">10,000+</div><div className="text-gray-300">Clientes</div></div>
            <div><div className="text-4xl font-bold mb-2">4.8⭐</div><div className="text-gray-300">Avaliação</div></div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#06B6D4] py-4 px-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-bold">
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Pagamento Escrow</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Imóveis Verificados</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Reserva Rápida</span>
          <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Suporte 24h</span>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Todos os Serviços Imobiliários</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactionTypes.map((type, i) => (
              <Link key={i} href={type.link} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#06B6D4]/30 group relative">
                <div className="absolute top-3 right-3 bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold px-3 py-1 rounded-full">{type.badge}</div>
                <div className="text-[#06B6D4] mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <div className="flex items-center text-[#06B6D4] font-semibold text-sm">Saber mais <ArrowRight className="w-4 h-4 ml-1" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-black mb-12">Como Funciona</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', title: 'Pesquisa', desc: 'Encontre imóveis verificados', icon: <Search className="w-6 h-6" /> },
              { n: '2', title: 'Reserva', desc: 'Reserve online ou via WhatsApp', icon: <MessageCircle className="w-6 h-6" /> },
              { n: '3', title: 'Paga Seguro', desc: 'Escrow protege seu dinheiro', icon: <Shield className="w-6 h-6" /> },
              { n: '4', title: 'Check-in', desc: 'Confirme e libere o pagamento', icon: <CheckCircle2 className="w-6 h-6" /> },
            ].map((s) => (
              <div key={s.n} className="p-6 bg-white rounded-2xl border group hover:border-[#06B6D4] transition-all">
                <div className="w-10 h-10 bg-[#06B6D4]/10 text-[#06B6D4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#06B6D4] group-hover:text-white transition-all">{s.icon}</div>
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-3xl font-black mb-4">Planos para Todos</h2>
          <p className="text-slate-500 mb-12">Pesquisa grátis. Anuncia a partir de 10.000 AOA/mês.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'PAYG', price: 'Grátis', sub: 'pesquisa ilimitada', hl: false },
              { name: 'Standard', price: '10.000 AOA', sub: '/30 dias', hl: true },
              { name: 'Premium', price: '25.000 AOA', sub: '/30 dias', hl: false },
            ].map((p) => (
              <div key={p.name} className={`p-6 rounded-2xl border ${p.hl ? 'border-[#06B6D4] ring-4 ring-cyan-50 bg-white shadow-xl' : 'border-gray-100 bg-white shadow'}`}>
                <h3 className="font-bold mb-1">{p.name}</h3>
                <p className="text-2xl font-black mb-1">{p.price}</p>
                <p className="text-slate-500 text-sm mb-4">{p.sub}</p>
                <Link href="/pricing" className={`block py-2.5 rounded-xl font-bold text-sm ${p.hl ? 'bg-[#06B6D4] text-white hover:bg-cyan-600' : 'bg-slate-100 hover:bg-slate-200'}`}>
                  Ver plano
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1628] text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/logo.png" alt="Kubicoo" width={50} height={50} className="w-12 h-12" />
                <div>
                  <h3 className="text-white text-xl font-bold">KUBICOO</h3>
                  <p className="text-xs text-gray-400 italic">Digital que abre portas</p>
                </div>
              </div>
              <p className="text-sm">Plataforma completa para imóveis em Angola</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm">Plataforma</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/properties" className="hover:text-[#06B6D4]">Imóveis</Link></li>
                <li><Link href="/services" className="hover:text-[#06B6D4]">Serviços</Link></li>
                <li><Link href="/pricing" className="hover:text-[#06B6D4]">Planos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-[#06B6D4]">Sobre</Link></li>
                <li><Link href="/contact" className="hover:text-[#06B6D4]">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm">Contacto</h4>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#06B6D4]" /> +244 923 456 789</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#06B6D4]" /> info@kubicoo.com</li>
              </ul>
              <div className="flex gap-3">
                <Link href="#" className="p-2 bg-white/5 hover:bg-[#06B6D4] rounded-xl transition-all"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" className="p-2 bg-white/5 hover:bg-[#06B6D4] rounded-xl transition-all"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" className="p-2 bg-white/5 hover:bg-[#06B6D4] rounded-xl transition-all"><Linkedin className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
            <p>© 2026 Kubicoo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

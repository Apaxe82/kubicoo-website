'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, Home, Building2, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, MessageCircle, Phone, Mail, ArrowRight, Key, FileText, Briefcase, RefreshCcw, Scale, Hammer, Calculator, PiggyBank, Calendar, Warehouse, Hotel } from 'lucide-react';
import { WhatsAppFloatingButton } from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';

export default function HomePage() {
  // All 15 transaction types with proper slugs
  const transactionTypes = [
    { 
      icon: '🏠', 
      title: 'Arrendamento',
      slug: 'arrendamento',
      subtitle: 'Residencial & Comercial', 
      description: 'Aluguel de longo prazo, curto prazo, por quarto', 
      badge: '10% comissão' 
    },
    { 
      icon: '💰', 
      title: 'Venda',
      slug: 'venda',
      subtitle: 'Residencial & Comercial', 
      description: 'Compra e venda de propriedades e terrenos', 
      badge: '8-10% comissão' 
    },
    { 
      icon: '🔄', 
      title: 'Permuta',
      slug: 'permuta',
      subtitle: 'Troca de Propriedades', 
      description: 'Troca direta ou com torna entre propriedades', 
      badge: '2.5% comissão' 
    },
    { 
      icon: '💼', 
      title: 'Trespasse',
      slug: 'trespasse',
      subtitle: 'Transferência de Negócio', 
      description: 'Restaurantes, cafés, lojas em funcionamento', 
      badge: '6-9% comissão' 
    },
    { 
      icon: '📄', 
      title: 'Concessão',
      slug: 'concessao',
      subtitle: 'Terrenos do Estado', 
      description: 'Direito de uso temporário 1-60 anos', 
      badge: '3.5% comissão' 
    },
    { 
      icon: '🏢', 
      title: 'Direito de Superfície',
      slug: 'direito-de-superficie',
      subtitle: 'Construir em Terreno Alheio', 
      description: 'Separação entre terreno e construção', 
      badge: '4.5% comissão' 
    },
    { 
      icon: '👥', 
      title: 'Usufruto',
      slug: 'usufruto',
      subtitle: 'Vitalício ou Temporário', 
      description: 'Direito de usar propriedade de outrem', 
      badge: '3-4% comissão' 
    },
    { 
      icon: '🔑', 
      title: 'Gestão de Propriedade',
      slug: 'gestao',
      subtitle: 'Property Management', 
      description: 'Gestão completa para investidores', 
      badge: '8-12% mensal' 
    },
    { 
      icon: '🏦', 
      title: 'Leasing Imobiliário',
      slug: 'leasing',
      subtitle: 'Arrendamento c/ Opção', 
      description: 'Arrendar com opção de compra', 
      badge: '6.5% comissão' 
    },
    { 
      icon: '📊', 
      title: 'Avaliação Imobiliária',
      slug: 'avaliacao',
      subtitle: 'Perito Certificado', 
      description: 'Valor de mercado oficial', 
      badge: 'A partir 50K' 
    },
    { 
      icon: '⚖️', 
      title: 'Consultoria Jurídica',
      slug: 'consultoria',
      subtitle: 'Apoio Legal Completo', 
      description: 'Verificação, contratos, regularização', 
      badge: 'A partir 100K' 
    },
    { 
      icon: '🔨', 
      title: 'Leilões Imobiliários',
      slug: 'leiloes',
      subtitle: 'Judicial & Voluntário', 
      description: 'Venda ao melhor licitante', 
      badge: '10% comissão' 
    },
  ];

  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Sistema Escrow',
      description: 'Seu dinheiro protegido até confirmação. Sistema de garantia único em Angola.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Transparência Total',
      description: 'Todas as comissões claras desde o início. Sem taxas escondidas.'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Suporte 24/7',
      description: 'Equipa disponível via WhatsApp, email ou telefone sempre que precisar.'
    }
  ];

  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    bookingType: 'night', // 'night', 'hour', 'day'
    hours: 3,
    guests: 1,
    propertyType: 'all'
  });

  const handleSearch = () => {
    const params = new URLSearchParams({
      location: searchParams.location,
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      bookingType: searchParams.bookingType,
      hours: searchParams.hours.toString(),
      guests: searchParams.guests.toString(),
      type: searchParams.propertyType
    });
    
    window.location.href = `/properties?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Kubicoo Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
                priority
              />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0A1628]">KUBICOO</div>
                <div className="text-xs sm:text-sm text-gray-500 italic -mt-1">Digital que abre portas</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/properties" className="text-gray-700 hover:text-[#06B6D4] font-medium transition-colors">Propriedades</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#06B6D4] font-medium transition-colors">Serviços</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-[#06B6D4] font-medium transition-colors">Planos</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#06B6D4] font-medium transition-colors">Sobre</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#06B6D4] font-medium transition-colors">Contacto</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/auth/login" className="hidden sm:block text-gray-700 hover:text-[#06B6D4] font-medium transition-colors">Entrar</Link>
              <Link href="/auth/signup" className="bg-[#06B6D4] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">Criar Conta</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0A1628] text-white py-16 sm:py-20 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Todos os Serviços Imobiliários em{' '}
                <span className="text-[#06B6D4]">Um Só Lugar</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-gray-300 leading-relaxed">
                15 tipos de transações. Do arrendamento ao leilão.
              </p>
              <p className="text-base sm:text-lg mb-8 text-gray-400">
                Arrendamento • Venda • Permuta • Trespasse • Concessão • Gestão • Avaliação • Leilões
              </p>

              {/* Enhanced Search Box from second page */}
              <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-col gap-4">
                {/* Property Type Tabs */}
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: 'all', label: 'Todos', icon: Home },
                    { id: 'apartment', label: 'Apartamentos', icon: Building2 },
                    { id: 'house', label: 'Vivendas', icon: Home },
                    { id: 'commercial', label: 'Comercial', icon: Warehouse },
                    { id: 'hotel', label: 'Hotéis', icon: Hotel }
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setSearchParams({ ...searchParams, propertyType: id })}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        searchParams.propertyType === id
                          ? 'bg-[#06B6D4] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Booking Type Selection */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSearchParams({ ...searchParams, bookingType: 'night' })}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      searchParams.bookingType === 'night'
                        ? 'bg-[#06B6D4] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Por Noite
                  </button>
                  <button
                    onClick={() => setSearchParams({ ...searchParams, bookingType: 'hour' })}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      searchParams.bookingType === 'hour'
                        ? 'bg-[#06B6D4] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Por Hora
                  </button>
                  <button
                    onClick={() => setSearchParams({ ...searchParams, bookingType: 'day' })}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      searchParams.bookingType === 'day'
                        ? 'bg-[#06B6D4] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Por Dia
                  </button>
                </div>

                {/* Search Inputs */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Location */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Localização"
                      value={searchParams.location}
                      onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                    />
                  </div>

                  {/* Date/Time Inputs based on booking type */}
                  {searchParams.bookingType === 'hour' ? (
                    <>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          value={searchParams.checkIn}
                          onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          value={searchParams.hours}
                          onChange={(e) => setSearchParams({ ...searchParams, hours: parseInt(e.target.value) })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(h => (
                            <option key={h} value={h}>{h} hora{h > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          placeholder="Check-in"
                          value={searchParams.checkIn}
                          onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          placeholder="Check-out"
                          value={searchParams.checkOut}
                          onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                        />
                      </div>
                    </>
                  )}

                  {/* Guests */}
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={searchParams.guests}
                      onChange={(e) => setSearchParams({ ...searchParams, guests: parseInt(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map(g => (
                        <option key={g} value={g}>{g} hóspede{g > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full bg-[#06B6D4] text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Buscar</span>
                </button>
              </div>

              {/* Quick Links with WhatsApp */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <span className="text-gray-400">Popular:</span>
                {['Talatona', 'Maianga', 'Ilha de Luanda', 'Viana'].map(area => (
                  <Link 
                    key={area}
                    href={`/properties?area=${area}`}
                    className="bg-white/10 hover:bg-[#06B6D4] hover:text-white px-4 py-2 rounded-full text-white transition-all border border-white/20 hover:border-[#06B6D4]"
                  >
                    {area}
                  </Link>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/244923456789?text=Olá%20Kubicoo!%20Preciso%20de%20ajuda%20para%20encontrar%20um%20imóvel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Fale Conosco no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#06B6D4] opacity-20 blur-3xl rounded-full"></div>
                <Image
                  src="/images/logo-full.jpg"
                  alt="Kubicoo - Digital que abre portas. Destinos que transcendem."
                  width={500}
                  height={400}
                  className="relative rounded-2xl shadow-2xl border-4 border-[#06B6D4]/30"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: <Home className="w-8 h-8" />, number: '10,000+', label: 'Propriedades' },
              { icon: <Users className="w-8 h-8" />, number: '5,000+', label: 'Clientes' },
              { icon: <TrendingUp className="w-8 h-8" />, number: '15', label: 'Tipos de Serviço' },
              { icon: <DollarSign className="w-8 h-8" />, number: '95%', label: 'Satisfação' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-[#06B6D4] mb-3">{stat.icon}</div>
                <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-sm lg:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties with Photos (merged from second) */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Propriedades em Destaque</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Os melhores imóveis disponíveis em Luanda</p>
          </div>

          <FeaturedProperties />
        </div>
      </section>

      {/* Property Categories with Images (merged from second) */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Explore por Categoria</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Descubra propriedades por tipo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Apartamentos',
                count: '500+',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80',
                link: '/properties?type=apartment'
              },
              {
                title: 'Vivendas',
                count: '300+',
                image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80',
                link: '/properties?type=house'
              },
              {
                title: 'Comercial',
                count: '200+',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
                link: '/properties?type=commercial'
              },
              {
                title: 'Resorts',
                count: '50+',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
                link: '/properties?type=resort'
              }
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#06B6D4]/30"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-gray-200">{category.count} propriedades</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 15 Transaction Types with proper slugs */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">15 Tipos de Transações</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Do arrendamento ao leilão. Todas as soluções imobiliárias numa só plataforma.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactionTypes.map((type, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#06B6D4]/30 group relative"
              >
                <div className="absolute top-3 right-3 bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold px-3 py-1 rounded-full border border-[#06B6D4]/20">
                  {type.badge}
                </div>
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{type.title}</h3>
                <p className="text-sm font-semibold text-[#06B6D4] mb-2">{type.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{type.description}</p>
                
                {/* Updated Link to use slug */}
                <Link 
                  href={`/services/${type.slug}`}
                  className="inline-flex items-center text-[#06B6D4] font-semibold text-sm hover:underline mb-3"
                >
                  Saber mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                {/* WhatsApp Quick Contact */}
                <a
                  href={`https://wa.me/244923456789?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${type.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contactar via WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kubicoo */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Por que escolher o Kubicoo?</h2>
            <p className="text-lg text-gray-600">A plataforma que revoluciona o mercado imobiliário angolano</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#06B6D4]/30">
                <div className="text-[#06B6D4] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">Junte-se a milhares de proprietários e inquilinos que confiam no Kubicoo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="bg-[#06B6D4] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg text-lg">Criar Conta Grátis</Link>
            <Link href="/services" className="border-2 border-[#06B6D4] text-[#06B6D4] px-8 py-4 rounded-lg font-bold hover:bg-[#06B6D4] hover:text-white transition-all text-lg">Ver Todos os Serviços</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/logo.png" alt="Kubicoo" width={50} height={50} className="w-12 h-12" />
                <div><h3 className="text-white text-xl font-bold">KUBICOO</h3><p className="text-xs text-gray-400 italic">Digital que abre portas</p></div>
              </div>
              <p className="text-sm">A plataforma mais completa para todas as suas necessidades imobiliárias.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/arrendamento" className="hover:text-[#06B6D4] transition-colors">Arrendamento</Link></li>
                <li><Link href="/services/venda" className="hover:text-[#06B6D4] transition-colors">Venda</Link></li>
                <li><Link href="/services/gestao" className="hover:text-[#06B6D4] transition-colors">Gestão</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-[#06B6D4] transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contact" className="hover:text-[#06B6D4] transition-colors">Contacto</Link></li>
                <li><Link href="/blog" className="hover:text-[#06B6D4] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#06B6D4]" /><a href="mailto:info@kubicoo.com" className="hover:text-[#06B6D4]">info@kubicoo.com</a></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#06B6D4]" /><a href="tel:+244923456789" className="hover:text-[#06B6D4]">+244 923 456 789</a></li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-green-500" /><a href="https://wa.me/244923456789" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">WhatsApp</a></li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#06B6D4]" /><span>Luanda, Angola</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Kubicoo. Todos os direitos reservados.</p>
            <p className="text-gray-500 mt-2 text-xs italic">Digital que abre portas. Destinos que transcendem.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton phoneNumber="244923456789" />
    </div>
  );
}

// Featured Properties Component (merged from second)
function FeaturedProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured properties
    fetch('http://localhost:5000/api/properties/search?limit=6&featured=true')
      .then(res => res.json())
      .then(data => {
        setProperties(data.accommodations || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse" />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhuma propriedade em destaque no momento.</p>
        <Link
          href="/properties"
          className="inline-block mt-4 px-6 py-3 bg-[#06B6D4] text-white rounded-lg hover:bg-[#0891B2]"
        >
          Ver Todas as Propriedades
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.slice(0, 6).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

// Property Card Component (merged from second)
function PropertyCard({ property }) {
  const mainImage = property.photos?.[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80';
  
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#06B6D4]/30"
    >
      <div className="relative h-64">
        <Image
          src={mainImage}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {property.hourly_booking_available && (
          <div className="absolute top-4 left-4 bg-[#06B6D4] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Por Hora Disponível
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#06B6D4] transition-colors">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {property.neighbourhood}, {property.municipality}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#06B6D4]">
              {Number(property.price).toLocaleString()} {property.currency}
            </p>
            <p className="text-sm text-gray-500">por noite</p>
          </div>
          {property.hourly_rate && (
            <div className="text-right">
              <p className="text-lg font-semibold">
                {Number(property.hourly_rate).toLocaleString()} AOA
              </p>
              <p className="text-sm text-gray-500">por hora</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}


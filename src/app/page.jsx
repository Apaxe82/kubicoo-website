'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, Home, Building2, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, 
  MessageCircle, Phone, Mail, ArrowRight, Calendar, Warehouse, Hotel, Bed,
  Facebook, Instagram, Linkedin, Menu, X, Star, CheckCircle,
  Key, PiggyBank, Calculator, Scale, Hammer, FileText, Briefcase, RefreshCcw
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    bookingType: 'night',
    hours: 3,
    guests: 2,
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 1
  });

  const handleSearch = () => {
    const params = new URLSearchParams({
      location: searchParams.location,
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      bookingType: searchParams.bookingType,
      hours: searchParams.hours.toString(),
      guests: searchParams.guests.toString(),
      type: searchParams.propertyType,
      minPrice: searchParams.minPrice,
      maxPrice: searchParams.maxPrice,
      bedrooms: searchParams.bedrooms.toString()
    });
    window.location.href = `/properties?${params.toString()}`;
  };

  const transactionTypes = [
    { icon: <Home className="w-8 h-8" />, title: 'Arrendamento', subtitle: 'Residencial & Comercial', description: 'Aluguel de longo prazo, curto prazo, por quarto', badge: '10% comissão', link: '/services/arrendamento' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Venda', subtitle: 'Residencial & Comercial', description: 'Compra e venda de propriedades e terrenos', badge: '6-10% comissão', link: '/services/venda' },
    { icon: <RefreshCcw className="w-8 h-8" />, title: 'Permuta', subtitle: 'Troca de Propriedades', description: 'Troca direta ou com torna entre propriedades', badge: '3.5% comissão', link: '/services/permuta' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Trespasse', subtitle: 'Transferência de Negócio', description: 'Restaurantes, cafés, lojas em funcionamento', badge: '6-10% comissão', link: '/services/trespasse' },
    { icon: <FileText className="w-8 h-8" />, title: 'Concessão', subtitle: 'Terrenos do Estado', description: 'Direito de uso temporário 1-60 anos', badge: '4% comissão', link: '/services/concessao' },
    { icon: <Building2 className="w-8 h-8" />, title: 'Direito de Superfície', subtitle: 'Construir em Terreno Alheio', description: 'Separação entre terreno e construção', badge: '4.5% comissão', link: '/services/superficie' },
    { icon: <Users className="w-8 h-8" />, title: 'Usufruto', subtitle: 'Vitalício ou Temporário', description: 'Direito de usar propriedade de outrem', badge: '3-5% comissão', link: '/services/usufruto' },
    { icon: <Key className="w-8 h-8" />, title: 'Gestão de Propriedade', subtitle: 'Property Management', description: 'Gestão completa para investidores', badge: '8-12% mensal', link: '/services/gestao' },
    { icon: <PiggyBank className="w-8 h-8" />, title: 'Leasing Imobiliário', subtitle: 'Arrendamento c/ Opção', description: 'Arrendar com opção de compra', badge: '5.5% comissão', link: '/services/leasing' },
    { icon: <Calculator className="w-8 h-8" />, title: 'Avaliação Imobiliária', subtitle: 'Perito Certificado', description: 'Valor de mercado oficial', badge: 'A partir 50K', link: '/services/avaliacao' },
    { icon: <Scale className="w-8 h-8" />, title: 'Consultoria Jurídica', subtitle: 'Apoio Legal Completo', description: 'Verificação, contratos, regularização', badge: 'A partir 100K', link: '/services/consultoria' },
    { icon: <Hammer className="w-8 h-8" />, title: 'Leilões Imobiliários', subtitle: 'Judicial & Voluntário', description: 'Venda ao melhor licitante', badge: '10% comissão', link: '/services/leiloes' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#06B6D4] to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
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

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-gray-700">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t mt-4">
              <nav className="flex flex-col gap-4">
                <Link href="/properties" className="text-gray-700">Propriedades</Link>
                <Link href="/services" className="text-gray-700">Serviços</Link>
                <Link href="/pricing" className="text-gray-700">Planos</Link>
                <Link href="/about" className="text-gray-700">Sobre</Link>
                <Link href="/contact" className="text-gray-700">Contacto</Link>
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Link href="/auth/login" className="px-6 py-2.5 text-center border rounded-lg">Entrar</Link>
                  <Link href="/auth/signup" className="px-6 py-2.5 text-center bg-[#06B6D4] text-white rounded-lg">Criar Conta</Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* WhatsApp Button */}
      {showWhatsApp && (
        <a 
          href="https://wa.me/244923456789?text=Olá%20Kubicoo"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-bounce"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold">1</span>
          <span className="absolute right-20 top-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">💬 Precisa de ajuda?</span>
        </a>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-gray-900 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Todos os Serviços Imobiliários em <span className="text-[#06B6D4]">Um Só Lugar</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Hospedagem temporária, hotéis, resorts, apartamentos ou venda / arrendamento longo prazo
            </p>

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
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

              <div className="grid grid-cols-4 gap-2 mb-6">
                {['hour', 'night', 'day', 'month'].map(type => (
                  <button
                    key={type}
                    onClick={() => setSearchParams({ ...searchParams, bookingType: type })}
                    className={`py-3 rounded-lg font-semibold ${searchParams.bookingType === type ? 'bg-[#06B6D4] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {type === 'hour' ? 'Hora' : type === 'night' ? 'Noite' : type === 'day' ? 'Dia' : 'Mês'}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Localização" value={searchParams.location} onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })} className="w-full pl-10 pr-4 py-3 border rounded-lg" />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select value={searchParams.guests} onChange={(e) => setSearchParams({ ...searchParams, guests: Number(e.target.value) })} className="w-full pl-10 pr-4 py-3 border rounded-lg">
                    {[1,2,3,4,5,6,8].map(g => <option key={g} value={g}>{g} hóspede{g > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>

              <button onClick={handleSearch} className="w-full bg-[#06B6D4] text-white py-4 rounded-lg font-bold hover:bg-opacity-90 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" /> Buscar Agora
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div><div className="text-4xl font-bold mb-2">1,500+</div><div className="text-gray-300">Propriedades</div></div>
            <div><div className="text-4xl font-bold mb-2">10,000+</div><div className="text-gray-300">Clientes</div></div>
            <div><div className="text-4xl font-bold mb-2">4.8⭐</div><div className="text-gray-300">Avaliação</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Todos os Serviços Imobiliários</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactionTypes.map((type, i) => (
              <Link key={i} href={type.link} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border group">
                <div className="absolute top-3 right-3 bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold px-3 py-1 rounded-full">{type.badge}</div>
                <div className="text-[#06B6D4] mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-1">{type.title}</h3>
                <p className="text-sm font-semibold text-[#06B6D4] mb-2">{type.subtitle}</p>
                <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                <div className="flex items-center text-[#06B6D4] font-semibold text-sm">Saber mais <ArrowRight className="w-4 h-4 ml-1" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2026 Kubicoo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

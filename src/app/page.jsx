'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, Home, Building2, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, 
  MessageCircle, Phone, Mail, ArrowRight, Calendar, Warehouse, Hotel, Bed 
} from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Required for carousel styling
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  // Enhanced search state
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    bookingType: 'night',
    hours: 3,
    guests: 1,
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 1,
    amenities: [] // e.g. ['wifi', 'pool', 'parking']
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
      bedrooms: searchParams.bedrooms.toString(),
      amenities: searchParams.amenities.join(',')
    });
    window.location.href = `/properties?${params.toString()}`;
  };

  // Dynamic featured properties
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Adjust endpoint if needed (e.g. production URL, auth headers)
        const response = await fetch('http://localhost:5000/api/properties/search?limit=8&featured=true');
        const data = await response.json();
        setProperties(data.accommodations || data.properties || data || []); // flexible parsing
      } catch (error) {
        console.error('Failed to load featured properties:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // 15 Transaction Types (your exact list + icons + badges)
  const transactionTypes = [
    { icon: <Home className="w-8 h-8" />, title: 'Arrendamento', subtitle: 'Residencial & Comercial', description: 'Aluguel de longo prazo, curto prazo, por quarto', badge: '10% comissão' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Venda', subtitle: 'Residencial & Comercial', description: 'Compra e venda de propriedades e terrenos', badge: '6-10% comissão' },
    { icon: <RefreshCcw className="w-8 h-8" />, title: 'Permuta', subtitle: 'Troca de Propriedades', description: 'Troca direta ou com torna entre propriedades', badge: '3.5% comissão' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Trespasse', subtitle: 'Transferência de Negócio', description: 'Restaurantes, cafés, lojas em funcionamento', badge: '6-10% comissão' },
    { icon: <FileText className="w-8 h-8" />, title: 'Concessão', subtitle: 'Terrenos do Estado', description: 'Direito de uso temporário 1-60 anos', badge: '4% comissão' },
    { icon: <Building2 className="w-8 h-8" />, title: 'Direito de Superfície', subtitle: 'Construir em Terreno Alheio', description: 'Separação entre terreno e construção', badge: '4.5% comissão' },
    { icon: <Users className="w-8 h-8" />, title: 'Usufruto', subtitle: 'Vitalício ou Temporário', description: 'Direito de usar propriedade de outrem', badge: '3-5% comissão' },
    { icon: <Key className="w-8 h-8" />, title: 'Gestão de Propriedade', subtitle: 'Property Management', description: 'Gestão completa para investidores', badge: '8-12% mensal' },
    { icon: <PiggyBank className="w-8 h-8" />, title: 'Leasing Imobiliário', subtitle: 'Arrendamento c/ Opção', description: 'Arrendar com opção de compra', badge: '5.5% comissão' },
    { icon: <Calculator className="w-8 h-8" />, title: 'Avaliação Imobiliária', subtitle: 'Perito Certificado', description: 'Valor de mercado oficial', badge: 'A partir 50K' },
    { icon: <Scale className="w-8 h-8" />, title: 'Consultoria Jurídica', subtitle: 'Apoio Legal Completo', description: 'Verificação, contratos, regularização', badge: 'A partir 100K' },
    { icon: <Hammer className="w-8 h-8" />, title: 'Leilões Imobiliários', subtitle: 'Judicial & Voluntário', description: 'Venda ao melhor licitante', badge: '10% comissão' },
  ];

  const services = [
    { icon: <Shield className="w-12 h-12" />, title: 'Sistema Escrow', description: 'Seu dinheiro protegido até confirmação. Sistema de garantia único em Angola.' },
    { icon: <TrendingUp className="w-12 h-12" />, title: 'Transparência Total', description: 'Todas as comissões claras desde o início. Sem taxas escondidas.' },
    { icon: <Clock className="w-12 h-12" />, title: 'Suporte 24/7', description: 'Equipa disponível via WhatsApp, email ou telefone sempre que precisar.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header unchanged */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <Image src="/images/logo.png" alt="Kubicoo Logo" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20" priority />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-kubicoo-navy">KUBICOO</div>
                <div className="text-xs sm:text-sm text-gray-500 italic -mt-1">Digital que abre portas</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/properties" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">Propriedades</Link>
              <Link href="/services" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">Serviços</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">Planos</Link>
              <Link href="/about" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">Sobre</Link>
              <Link href="/contact" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">Contacto</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/auth/login" className="hidden sm:block text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">Entrar</Link>
              <Link href="/auth/signup" className="bg-kubicoo-cyan text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">Criar Conta</Link>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button unchanged */}
      {showWhatsApp && (
        <a
          href="https://wa.me/244XXXXXXXXX?text=Olá%20Kubicoo,%20gostaria%20de%20mais%20informações"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-bounce"
          aria-label="Contactar via WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold">
            1
          </span>
          <span className="absolute right-20 top-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
            💬 Precisa de ajuda? Fale conosco!
          </span>
        </a>
      )}

      {/* Hero with extended search filters */}
      <section className="bg-gradient-to-br from-kubicoo-navy via-kubicoo-dark to-gray-900 text-white py-16 sm:py-20 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Todos os Serviços Imobiliários em <span className="text-kubicoo-cyan">Um Só Lugar</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-gray-300 leading-relaxed">
                Hospedagem temporária, hotéis, resorts, apartamentos ou venda / arrendamento longo prazo
              </p>

              {/* Extended Search */}
              <div className="bg-white rounded-xl shadow-2xl p-6 text-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Location */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" placeholder="Talatona, Maianga, Ilha..." value={searchParams.location} onChange={e => setSearchParams({...searchParams, location: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan focus:border-transparent" />
                  </div>

                  {/* Property Type */}
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select value={searchParams.propertyType} onChange={e => setSearchParams({...searchParams, propertyType: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan">
                      <option value="all">Todos os tipos</option>
                      <option value="apartment">Apartamento</option>
                      <option value="house">Vivenda</option>
                      <option value="resort">Resort</option>
                      <option value="hotel">Hotel</option>
                      <option value="commercial">Comercial</option>
                    </select>
                  </div>

                  {/* Booking Type Buttons */}
                  <div className="col-span-1 md:col-span-2 lg:col-span-1 grid grid-cols-4 gap-1">
                    {['hour', 'night', 'day', 'month'].map(type => (
                      <button key={type} onClick={() => setSearchParams({...searchParams, bookingType: type})} className={`py-2 text-sm rounded-lg transition-all ${searchParams.bookingType === type ? 'bg-kubicoo-cyan text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                        {type === 'hour' ? 'Hora' : type === 'night' ? 'Noite' : type === 'day' ? 'Dia' : 'Mês'}
                      </button>
                    ))}
                  </div>

                  {/* Check-in / Hours */}
                  <div className="relative">
                    {searchParams.bookingType === 'hour' ? (
                      <>
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select value={searchParams.hours} onChange={e => setSearchParams({...searchParams, hours: Number(e.target.value)})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan">
                          {[1,2,3,4,6,8,12].map(h => <option key={h} value={h}>{h} hora{h > 1 ? 's' : ''}</option>)}
                        </select>
                      </>
                    ) : (
                      <>
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="date" value={searchParams.checkIn} onChange={e => setSearchParams({...searchParams, checkIn: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan" />
                      </>
                    )}
                  </div>

                  {/* Guests + Bedrooms */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select value={searchParams.guests} onChange={e => setSearchParams({...searchParams, guests: Number(e.target.value)})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan">
                        {[1,2,3,4,5,6,8].map(g => <option key={g} value={g}>{g} hóspede{g > 1 ? 's' : ''}</option>)}
                      </select>
                    </div>
                    <div className="relative">
                      <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select value={searchParams.bedrooms} onChange={e => setSearchParams({...searchParams, bedrooms: Number(e.target.value)})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan">
                        {[1,2,3,4,5].map(b => <option key={b} value={b}>{b}+ quartos</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="grid grid-cols-2 gap-2 col-span-1 md:col-span-2 lg:col-span-1">
                    <input type="number" placeholder="Preço min (AOA)" value={searchParams.minPrice} onChange={e => setSearchParams({...searchParams, minPrice: e.target.value})} className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan" />
                    <input type="number" placeholder="Preço max (AOA)" value={searchParams.maxPrice} onChange={e => setSearchParams({...searchParams, maxPrice: e.target.value})} className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kubicoo-cyan" />
                  </div>

                  {/* Amenities */}
                  <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-wrap gap-3">
                    {['Wifi', 'Piscina', 'Estacionamento', 'Ar Condicionado', 'Academia'].map(am => (
                      <label key={am} className="flex items-center text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={searchParams.amenities.includes(am.toLowerCase())}
                          onChange={e => {
                            const val = am.toLowerCase();
                            setSearchParams(prev => ({
                              ...prev,
                              amenities: e.target.checked ? [...prev.amenities, val] : prev.amenities.filter(a => a !== val)
                            }));
                          }}
                          className="mr-2 accent-kubicoo-cyan"
                        />
                        {am}
                      </label>
                    ))}
                  </div>
                </div>

                <button onClick={handleSearch} className="w-full bg-kubicoo-cyan text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" /> Buscar Agora
                </button>
              </div>

              {/* Quick Links unchanged */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <span className="text-gray-400">Popular:</span>
                {['Talatona', 'Maianga', 'Ilha de Luanda', 'Viana'].map(area => (
                  <Link key={area} href={`/properties?area=${area}`} className="bg-white/10 hover:bg-kubicoo-cyan hover:text-white px-4 py-2 rounded-full text-white transition-all border border-white/20 hover:border-kubicoo-cyan">
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-kubicoo-cyan opacity-20 blur-3xl rounded-full"></div>
                <Image src="/images/logo-full.jpg" alt="Kubicoo" width={500} height={400} className="relative rounded-2xl shadow-2xl border-4 border-kubicoo-cyan/30" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats unchanged */}

      {/* Featured Properties - Carousel + Dynamic */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Propriedades em Destaque</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Seleção exclusiva de imóveis disponíveis agora em Luanda</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-pulse text-gray-500">Carregando propriedades...</div>
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              Nenhuma propriedade em destaque no momento.
              <Link href="/properties" className="block mt-4 text-kubicoo-cyan hover:underline">Ver todas</Link>
            </div>
          ) : (
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              interval={5000}
              transitionTime={800}
              emulateTouch
              className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
            >
              {properties.map((prop, idx) => (
                <div key={idx} className="relative h-[500px] md:h-[600px]">
                  <Image
                    src={prop.photos?.[0] || prop.image || 'https://via.placeholder.com/1200x800?text=Propriedade+Kubicoo'}
                    alt={prop.title || 'Propriedade em Destaque'}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-10 left-10 md:left-16 right-10 md:right-16 text-white">
                    <h3 className="text-2xl md:text-4xl font-bold mb-2">{prop.title || 'Imóvel Premium'}</h3>
                    <p className="text-lg md:text-xl mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {prop.location || prop.neighbourhood || 'Luanda, Angola'}
                    </p>
                    <div className="flex items-end gap-6">
                      <div>
                        <p className="text-3xl md:text-5xl font-extrabold text-kubicoo-cyan">
                          {prop.price ? `${Number(prop.price).toLocaleString()} AOA` : 'Sob Consulta'}
                        </p>
                        <p className="text-sm md:text-base opacity-90">
                          {searchParams.bookingType === 'month' ? '/mês' : searchParams.bookingType === 'night' ? '/noite' : '/dia'}
                        </p>
                      </div>
                      {prop.type && <span className="bg-kubicoo-cyan/80 px-4 py-1 rounded-full text-sm font-medium">{prop.type}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}

          <div className="text-center mt-12">
            <Link href="/properties" className="inline-flex items-center bg-kubicoo-cyan text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
              Explorar Todas as Propriedades <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* 15 Transaction Types Grid - your exact list */}
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
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-kubicoo-cyan/30 group relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 bg-kubicoo-cyan/10 text-kubicoo-cyan text-xs font-bold px-3 py-1 rounded-full border border-kubicoo-cyan/20">
                  {type.badge}
                </div>
                <div className="text-kubicoo-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{type.title}</h3>
                <p className="text-sm font-semibold text-kubicoo-cyan mb-2">{type.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{type.description}</p>
                <Link 
                  href={`/services/${type.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-kubicoo-cyan font-semibold text-sm hover:underline"
                >
                  Saber mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kubicoo + CTA + Footer unchanged */}
      {/* Insert your existing sections here */}
    </div>
  );
}

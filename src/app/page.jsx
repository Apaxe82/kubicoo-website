'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, Home, Building2, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, MessageCircle, Phone, Mail, ArrowRight, Key, FileText, Briefcase, RefreshCcw, Scale, Hammer, Calculator, PiggyBank } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  // All 15 transaction types from Kubicoo scope
  const transactionTypes = [
    { 
      icon: <Home className="w-8 h-8" />, 
      title: 'Arrendamento', 
      subtitle: 'Residencial & Comercial',
      description: 'Aluguel de longo prazo, curto prazo, por quarto',
      badge: '10% comissão'
    },
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: 'Venda', 
      subtitle: 'Residencial & Comercial',
      description: 'Compra e venda de propriedades e terrenos',
      badge: '2-3% comissão'
    },
    { 
      icon: <RefreshCcw className="w-8 h-8" />, 
      title: 'Permuta', 
      subtitle: 'Troca de Propriedades',
      description: 'Troca direta ou com torna entre propriedades',
      badge: '1.5% comissão'
    },
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      title: 'Trespasse', 
      subtitle: 'Transferência de Negócio',
      description: 'Restaurantes, cafés, lojas em funcionamento',
      badge: '5-8% comissão'
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: 'Concessão', 
      subtitle: 'Terrenos do Estado',
      description: 'Direito de uso temporário 1-60 anos',
      badge: '2% comissão'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      title: 'Direito de Superfície', 
      subtitle: 'Construir em Terreno Alheio',
      description: 'Separação entre terreno e construção',
      badge: '2.5% comissão'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: 'Usufruto', 
      subtitle: 'Vitalício ou Temporário',
      description: 'Direito de usar propriedade de outrem',
      badge: '1-2% comissão'
    },
    { 
      icon: <Key className="w-8 h-8" />, 
      title: 'Gestão de Propriedade', 
      subtitle: 'Property Management',
      description: 'Gestão completa para investidores',
      badge: '8-12% mensal'
    },
    { 
      icon: <PiggyBank className="w-8 h-8" />, 
      title: 'Leasing Imobiliário', 
      subtitle: 'Arrendamento c/ Opção',
      description: 'Arrendar com opção de compra',
      badge: '3.5% comissão'
    },
    { 
      icon: <Calculator className="w-8 h-8" />, 
      title: 'Avaliação Imobiliária', 
      subtitle: 'Perito Certificado',
      description: 'Valor de mercado oficial',
      badge: 'A partir 50K'
    },
    { 
      icon: <Scale className="w-8 h-8" />, 
      title: 'Consultoria Jurídica', 
      subtitle: 'Apoio Legal Completo',
      description: 'Verificação, contratos, regularização',
      badge: 'A partir 100K'
    },
    { 
      icon: <Hammer className="w-8 h-8" />, 
      title: 'Leilões Imobiliários', 
      subtitle: 'Judicial & Voluntário',
      description: 'Venda ao melhor licitante',
      badge: '8% comissão'
    },
  ];

  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Sistema Escrow',
      description: 'Seu dinheiro protegido até confirmação. Sistema de garantia único em Angola.',
      color: 'blue'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Transparência Total',
      description: 'Todas as comissões claras desde o início. Sem taxas escondidas.',
      color: 'green'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Suporte 24/7',
      description: 'Equipa disponível via WhatsApp, email ou telefone sempre que precisar.',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with LARGER Logo */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* BIGGER Logo */}
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
                <div className="text-3xl sm:text-4xl font-bold text-kubicoo-navy">KUBICOO</div>
                <div className="text-xs sm:text-sm text-gray-500 italic -mt-1">Digital que abre portas</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/properties" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">
                Propriedades
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">
                Serviços
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">
                Planos
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">
                Sobre
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">
                Contacto
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link 
                href="/auth/login" 
                className="hidden sm:block text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors"
              >
                Entrar
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-kubicoo-cyan text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button - FIXED AND VISIBLE */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kubicoo-navy via-kubicoo-dark to-gray-900 text-white py-16 sm:py-20 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Todos os Serviços Imobiliários em{' '}
                <span className="text-kubicoo-cyan">Um Só Lugar</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-gray-300 leading-relaxed">
                15 tipos de transações. Do arrendamento ao leilão.
              </p>
              <p className="text-base sm:text-lg mb-8 text-gray-400">
                Arrendamento • Venda • Permuta • Trespasse • Concessão • Gestão • Avaliação • Leilões
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
                <div className="flex items-center flex-1 px-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Talatona, Maianga, Ilha..."
                    className="flex-1 py-4 bg-transparent text-gray-900 focus:outline-none placeholder:text-gray-500"
                  />
                </div>
                <button className="bg-kubicoo-cyan text-white px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                  <Search className="w-5 h-5 sm:mr-2" />
                  <span className="hidden sm:inline">Buscar</span>
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <span className="text-gray-400">Popular:</span>
                {['Talatona', 'Maianga', 'Ilha de Luanda', 'Viana'].map(area => (
                  <Link 
                    key={area}
                    href={`/properties?area=${area}`}
                    className="bg-white/10 hover:bg-kubicoo-cyan hover:text-white px-4 py-2 rounded-full text-white transition-all border border-white/20 hover:border-kubicoo-cyan"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Logo Display */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-kubicoo-cyan opacity-20 blur-3xl rounded-full"></div>
                <Image
                  src="/images/logo-full.jpg"
                  alt="Kubicoo - Digital que abre portas"
                  width={500}
                  height={400}
                  className="relative rounded-2xl shadow-2xl border-4 border-kubicoo-cyan/30"
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
                <div className="text-kubicoo-cyan mb-3">{stat.icon}</div>
                <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-sm lg:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 15 Transaction Types */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              15 Tipos de Transações
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Do arrendamento ao leilão. Todas as soluções imobiliárias numa só plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactionTypes.map((type, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-kubicoo-cyan/30 group relative overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-3 right-3 bg-kubicoo-cyan/10 text-kubicoo-cyan text-xs font-bold px-3 py-1 rounded-full border border-kubicoo-cyan/20">
                  {type.badge}
                </div>

                <div className="text-kubicoo-cyan mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {type.title}
                </h3>
                <p className="text-sm font-semibold text-kubicoo-cyan mb-2">
                  {type.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.description}
                </p>
                <Link 
                  href={`/services/${type.title.toLowerCase()}`}
                  className="mt-4 inline-flex items-center text-kubicoo-cyan font-semibold text-sm hover:underline"
                >
                  Saber mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kubicoo */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher o Kubicoo?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              A plataforma que revoluciona o mercado imobiliário angolano
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((feature, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-kubicoo-cyan/30 group"
              >
                <div className="text-kubicoo-cyan mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-kubicoo-navy via-kubicoo-dark to-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
              Junte-se a milhares de proprietários e inquilinos que confiam no Kubicoo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup"
                className="bg-kubicoo-cyan text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block text-lg"
              >
                Criar Conta Grátis
              </Link>
              <Link 
                href="/services"
                className="border-2 border-kubicoo-cyan text-kubicoo-cyan px-8 py-4 rounded-lg font-bold hover:bg-kubicoo-cyan hover:text-white transition-all inline-block text-lg"
              >
                Ver Todos os Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kubicoo-navy text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Kubicoo"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-white text-xl font-bold">KUBICOO</h3>
                  <p className="text-xs text-gray-400 italic">Digital que abre portas</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                A plataforma mais completa para todas as suas necessidades imobiliárias.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/arrendamento" className="hover:text-kubicoo-cyan transition-colors">Arrendamento</Link></li>
                <li><Link href="/services/venda" className="hover:text-kubicoo-cyan transition-colors">Venda</Link></li>
                <li><Link href="/services/gestao" className="hover:text-kubicoo-cyan transition-colors">Gestão</Link></li>
                <li><Link href="/services/avaliacao" className="hover:text-kubicoo-cyan transition-colors">Avaliação</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-kubicoo-cyan transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contact" className="hover:text-kubicoo-cyan transition-colors">Contacto</Link></li>
                <li><Link href="/careers" className="hover:text-kubicoo-cyan transition-colors">Carreiras</Link></li>
                <li><Link href="/blog" className="hover:text-kubicoo-cyan transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-kubicoo-cyan flex-shrink-0" />
                  <a href="mailto:info@kubicoo.com" className="hover:text-kubicoo-cyan transition-colors">
                    info@kubicoo.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-kubicoo-cyan flex-shrink-0" />
                  <a href="tel:+244XXXXXXXXX" className="hover:text-kubicoo-cyan transition-colors">
                    +244 XXX XXX XXX
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-kubicoo-cyan flex-shrink-0" />
                  <span>Luanda, Angola</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Kubicoo. Todos os direitos reservados.</p>
            <p className="text-gray-500 mt-2 text-xs italic">
              Digital que abre portas. Destinos que transcendem.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

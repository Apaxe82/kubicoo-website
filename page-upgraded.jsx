'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, Home, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Kubicoo Logo"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-kubicoo-navy">KUBICOO</div>
                <div className="text-xs text-gray-500 italic -mt-1">Digital que abre portas</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/properties" className="text-gray-700 hover:text-kubicoo-cyan font-medium transition-colors">
                Propriedades
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
                className="bg-kubicoo-cyan text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      {showWhatsApp && (
        <a
          href="https://wa.me/244XXXXXXXXX?text=Olá%20Kubicoo,%20gostaria%20de%20mais%20informações"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
          aria-label="Contactar via WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
          <span className="absolute right-16 top-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Precisa de ajuda? Fale conosco!
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
                Encontre o Imóvel Perfeito em{' '}
                <span className="text-kubicoo-cyan">Angola</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                A plataforma mais moderna e segura para arrendar ou vender propriedades em Luanda
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
              { icon: <Home className="w-8 h-8" />, number: '10,000+', label: 'Propriedades', color: 'blue' },
              { icon: <Users className="w-8 h-8" />, number: '5,000+', label: 'Proprietários', color: 'green' },
              { icon: <TrendingUp className="w-8 h-8" />, number: '2,000+', label: 'Transações', color: 'purple' },
              { icon: <DollarSign className="w-8 h-8" />, number: '95%', label: 'Satisfação', color: 'cyan' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className={`text-kubicoo-cyan mb-3`}>{stat.icon}</div>
                <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-sm lg:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher o Kubicoo?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              A plataforma que revoluciona o mercado imobiliário angolano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Pagamentos Seguros',
                description: 'Sistema Escrow protege compradores e vendedores. Seu dinheiro só é liberado após confirmação.',
                color: 'blue'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Transparência Total',
                description: 'Sem taxas escondidas. Todas as comissões são claras desde o início.',
                color: 'green'
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: 'Suporte Rápido',
                description: 'Nossa equipa está sempre disponível para ajudar via WhatsApp, email ou telefone.',
                color: 'cyan'
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-kubicoo-cyan/30 group"
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

      {/* How It Works */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Simples, rápido e seguro em 4 passos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Cadastre-se', description: 'Crie sua conta gratuita em menos de 1 minuto' },
              { step: '2', title: 'Busque', description: 'Encontre a propriedade perfeita com nossos filtros' },
              { step: '3', title: 'Reserve', description: 'Faça sua reserva online de forma segura' },
              { step: '4', title: 'Pague', description: 'Pague via Multicaixa e receba confirmação instantânea' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-kubicoo-cyan to-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-kubicoo-cyan to-transparent -z-10"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Landlords */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-kubicoo-navy via-kubicoo-dark to-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Você é Proprietário?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
              Anuncie sua propriedade gratuitamente e alcance milhares de potenciais inquilinos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup"
                className="bg-kubicoo-cyan text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Começar Gratuitamente
              </Link>
              <Link 
                href="/pricing"
                className="border-2 border-kubicoo-cyan text-kubicoo-cyan px-8 py-4 rounded-lg font-bold hover:bg-kubicoo-cyan hover:text-white transition-all inline-block"
              >
                Ver Planos Premium
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
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-white text-xl font-bold">KUBICOO</h3>
                  <p className="text-xs text-gray-400 italic">Digital que abre portas</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                A plataforma mais moderna para o mercado imobiliário angolano.
              </p>
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

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-kubicoo-cyan transition-colors">Central de Ajuda</Link></li>
                <li><Link href="/terms" className="hover:text-kubicoo-cyan transition-colors">Termos de Uso</Link></li>
                <li><Link href="/privacy" className="hover:text-kubicoo-cyan transition-colors">Privacidade</Link></li>
                <li><Link href="/faq" className="hover:text-kubicoo-cyan transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-kubicoo-cyan" />
                  <a href="mailto:info@kubicoo.com" className="hover:text-kubicoo-cyan transition-colors">
                    info@kubicoo.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-kubicoo-cyan" />
                  <a href="tel:+244XXXXXXXXX" className="hover:text-kubicoo-cyan transition-colors">
                    +244 XXX XXX XXX
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-kubicoo-cyan" />
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

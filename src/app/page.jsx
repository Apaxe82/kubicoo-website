'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Home, TrendingUp, Shield, Clock, MapPin, DollarSign, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Kubicoo Logo"
                width={40}
                height={40}
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">KUBICOO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/properties" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">
              Propriedades
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">
              Planos
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">
              Sobre
            </Link>
            <Link href="/auth/login" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">
              Entrar
            </Link>
            <Link 
              href="/auth/signup" 
              className="bg-teal-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg"
            >
              Criar Conta
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section with Brand Colors */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] text-white py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo in Hero */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-20 h-20 animate-pulse">
                <Image
                  src="/logo.png"
                  alt="Kubicoo"
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Encontre o Imóvel Perfeito em Angola
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Digital que abre portas. Destinos que transcendem.
            </p>
            <p className="text-lg mb-8 text-gray-400">
              A plataforma mais moderna e segura para arrendar ou vender propriedades em Luanda
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
              <div className="flex items-center flex-1 px-4 bg-gray-50 rounded-lg border-2 border-transparent focus-within:border-teal-500 transition-colors">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Talatona, Maianga, Ilha..."
                  className="flex-1 py-4 bg-transparent text-gray-900 focus:outline-none placeholder:text-gray-500"
                />
              </div>
              <button className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-gray-400">Popular:</span>
              {['Talatona', 'Maianga', 'Ilha de Luanda', 'Viana'].map(area => (
                <Link 
                  key={area}
                  href={`/properties?area=${area}`}
                  className="bg-white/10 hover:bg-teal-500/20 border border-white/20 hover:border-teal-400 px-4 py-2 rounded-full text-white transition-all backdrop-blur-sm"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Home className="w-8 h-8" />, number: '10,000+', label: 'Propriedades' },
              { icon: <Users className="w-8 h-8" />, number: '5,000+', label: 'Proprietários' },
              { icon: <TrendingUp className="w-8 h-8" />, number: '2,000+', label: 'Transações' },
              { icon: <DollarSign className="w-8 h-8" />, number: '95%', label: 'Satisfação' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-teal-500 mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-3xl font-extrabold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Kubicoo?
            </h2>
            <p className="text-xl text-gray-600">
              A plataforma que revoluciona o mercado imobiliário angolano
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Pagamentos Seguros',
                description: 'Sistema Escrow protege compradores e vendedores. Seu dinheiro só é liberado após confirmação.',
                color: 'teal'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Transparência Total',
                description: 'Sem taxas escondidas. Todas as comissões são claras desde o início.',
                color: 'teal'
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: 'Suporte Rápido',
                description: 'Nossa equipe está sempre disponível para ajudar via WhatsApp, email ou telefone.',
                color: 'teal'
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:border-teal-200"
              >
                <div className="text-teal-500 mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simples, rápido e seguro em 4 passos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Cadastre-se', description: 'Crie sua conta gratuita em menos de 1 minuto' },
              { step: '2', title: 'Busque', description: 'Encontre a propriedade perfeita com nossos filtros' },
              { step: '3', title: 'Reserve', description: 'Faça sua reserva online de forma segura' },
              { step: '4', title: 'Pague', description: 'Pague via Multicaixa e receba confirmação instantânea' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Landlords */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1e293b] to-[#334155] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Você é Proprietário?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Anuncie sua propriedade gratuitamente e alcance milhares de potenciais inquilinos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Começar Gratuitamente
            </Link>
            <Link 
              href="/pricing"
              className="border-2 border-teal-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-500 hover:border-teal-500 transition-all inline-block"
            >
              Ver Planos Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Logo */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Kubicoo" width={32} height={32} />
                <h3 className="text-white text-xl font-bold">KUBICOO</h3>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Digital que abre portas.<br />
                Destinos que transcendem.
              </p>
              <p className="text-xs text-gray-500">
                A plataforma mais moderna para o mercado imobiliário angolano.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-teal-400 transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contacto</Link></li>
                <li><Link href="/careers" className="hover:text-teal-400 transition-colors">Carreiras</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-teal-400 transition-colors">Central de Ajuda</Link></li>
                <li><Link href="/terms" className="hover:text-teal-400 transition-colors">Termos de Uso</Link></li>
                <li><Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacidade</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span>📧</span> info@kubicoo.com
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span> +244 XXX XXX XXX
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span> Luanda, Angola
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="text-gray-500">&copy; 2026 Kubicoo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

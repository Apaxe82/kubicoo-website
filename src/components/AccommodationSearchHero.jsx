'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, Home, Building2, TrendingUp, Shield, Clock, MapPin, DollarSign, Users, MessageCircle, Phone, Mail, ArrowRight, Key, FileText, Briefcase, RefreshCcw, Scale, Hammer, Calculator, PiggyBank } from 'lucide-react';

export default function HomePage() {
  // All 15 transaction types from Kubicoo scope
  const transactionTypes = [
    { icon: '🏠', title: 'Arrendamento', subtitle: 'Residencial & Comercial', description: 'Aluguel de longo prazo, curto prazo, por quarto', badge: '10% comissão' },
    { icon: '💰', title: 'Venda', subtitle: 'Residencial & Comercial', description: 'Compra e venda de propriedades e terrenos', badge: '2-3% comissão' },
    { icon: '🔄', title: 'Permuta', subtitle: 'Troca de Propriedades', description: 'Troca direta ou com torna entre propriedades', badge: '1.5% comissão' },
    { icon: '💼', title: 'Trespasse', subtitle: 'Transferência de Negócio', description: 'Restaurantes, cafés, lojas em funcionamento', badge: '5-8% comissão' },
    { icon: '📄', title: 'Concessão', subtitle: 'Terrenos do Estado', description: 'Direito de uso temporário 1-60 anos', badge: '2% comissão' },
    { icon: '🏢', title: 'Direito de Superfície', subtitle: 'Construir em Terreno Alheio', description: 'Separação entre terreno e construção', badge: '2.5% comissão' },
    { icon: '👥', title: 'Usufruto', subtitle: 'Vitalício ou Temporário', description: 'Direito de usar propriedade de outrem', badge: '1-2% comissão' },
    { icon: '🔑', title: 'Gestão de Propriedade', subtitle: 'Property Management', description: 'Gestão completa para investidores', badge: '8-12% mensal' },
    { icon: '🏦', title: 'Leasing Imobiliário', subtitle: 'Arrendamento c/ Opção', description: 'Arrendar com opção de compra', badge: '3.5% comissão' },
    { icon: '📊', title: 'Avaliação Imobiliária', subtitle: 'Perito Certificado', description: 'Valor de mercado oficial', badge: 'A partir 50K' },
    { icon: '⚖️', title: 'Consultoria Jurídica', subtitle: 'Apoio Legal Completo', description: 'Verificação, contratos, regularização', badge: 'A partir 100K' },
    { icon: '🔨', title: 'Leilões Imobiliários', subtitle: 'Judicial & Voluntário', description: 'Venda ao melhor licitante', badge: '8% comissão' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - FIXED */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Kubicoo Logo"
                width={95}
                height={90}
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

      {/* Hero - Accommodation Search */}
      <section className="relative bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Reserve a sua estadia em Angola 
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                com total segurança.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Hotéis • Airbnb • Hospedarias • Resorts
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span><span>Reserva em 2 minutos</span></div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span><span>Confirmação imediata</span></div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span><span>Pagamento seguro</span></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              
              {/* Accommodation Types */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-b border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['🏨 Hotéis', '🏠 Airbnb', '🛏️ Hospedarias', '🏖️ Resorts'].map((type) => (
                    <button key={type} className="p-4 rounded-xl bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-cyan-300 transition-all text-center font-semibold">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Fields */}
              <div className="p-6">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Localização</label>
                    <input type="text" placeholder="Luanda, Benguela, Huambo..." className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 transition-all" />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in</label>
                    <input type="date" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 transition-all" />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out</label>
                    <input type="date" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Hóspedes</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 transition-all bg-white">
                      <option>1 pessoa</option>
                      <option>2 pessoas</option>
                      <option>3+ pessoas</option>
                    </select>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg">
                  <Search className="w-6 h-6" />
                  Buscar Acomodação
                </button>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-2xl">⚡</span>
                    <div><div className="font-semibold">Reserva Rápida</div><div className="text-gray-500">1.000 AOA/dia</div></div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-2xl">🔒</span>
                    <div><div className="font-semibold">Sem Registo</div><div className="text-gray-500">Para não registados</div></div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-2xl">🎁</span>
                    <div><div className="font-semibold">Premium: Grátis</div><div className="text-gray-500">+ 10% desconto</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">10.000+</div>
                <div className="text-gray-300 text-sm mt-1">Propriedades</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">18</div>
                <div className="text-gray-300 text-sm mt-1">Províncias</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">50.000+</div>
                <div className="text-gray-300 text-sm mt-1">Reservas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-gray-300 text-sm mt-1">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Transaction Types */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">15 Tipos de Transações</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Do arrendamento ao leilão. Todas as soluções imobiliárias numa só plataforma.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactionTypes.map((type, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-cyan-300 group relative">
                <div className="absolute top-3 right-3 bg-cyan-50 text-cyan-600 text-xs font-bold px-3 py-1 rounded-full border border-cyan-200">{type.badge}</div>
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{type.title}</h3>
                <p className="text-sm font-semibold text-cyan-600 mb-2">{type.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                <Link href={`/services/${type.title.toLowerCase()}`} className="mt-4 inline-flex items-center text-cyan-600 font-semibold text-sm hover:underline">
                  Saber mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kubicoo */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Por que escolher o Kubicoo?</h2>
            <p className="text-lg text-gray-600">A plataforma que revoluciona o mercado imobiliário angolano</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-12 h-12" />, title: 'Sistema Escrow', description: 'Seu dinheiro protegido até confirmação. Sistema de garantia único em Angola.' },
              { icon: <TrendingUp className="w-12 h-12" />, title: 'Transparência Total', description: 'Todas as comissões claras desde o início. Sem taxas escondidas.' },
              { icon: <Clock className="w-12 h-12" />, title: 'Suporte 24/7', description: 'Equipa disponível via WhatsApp, email ou telefone sempre que precisar.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-cyan-300">
                <div className="text-cyan-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                <Image src="/images/logo.png" alt="Kubicoo" width={90} height={90} className="w-12 h-12" />
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
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#06B6D4]" /><a href="tel:+244XXXXXXXXX" className="hover:text-[#06B6D4]">+244 XXX XXX XXX</a></li>
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

      {/* WhatsApp Button */}
      <a href="https://wa.me/244XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-bounce">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold">1</span>
        <span className="absolute right-20 top-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">💬 Precisa de ajuda? Fale conosco!</span>
      </a>
    </div>
  );
}

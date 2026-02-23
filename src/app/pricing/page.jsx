'use client';

import React from 'react';
import { Check, Shield, Zap, Star, ArrowRight, Clock, Search } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: "PAYG (Acesso Rápido)",
      price: "Gratis",
      period: "para pesquisar",
      description: "Ideal para hóspedes e inquilinos que procuram estadias temporárias & aluguer.",
      features: [
        "Pesquisa ilimitada de imóveis",
        "Reserva imediata por hora/dia",
        "Pagamento via Multicaixa",
        "Suporte Escrow incluído",
        "Sem taxas de adesão"
      ],
      buttonText: "Começar a Pesquisar",
      link: "/properties",
      highlight: false,
      icon: <Clock className="w-6 h-6 text-orange-500" />
    },
    {
      name: "Standard Pro",
      price: "10.000",
      period: "por 30 dias",
      description: "Para proprietários que querem listar um imóvel com segurança.",
      features: [
        "Listagem em 1 categoria",
        "Até 10 fotos HD",
        "Proteção de Pagamento Escrow",
        "Selo de Imóvel Verificado",
        "Painel de Reservas"
      ],
      buttonText: "Anunciar Imóvel",
      link: "/auth/signup",
      highlight: true,
      icon: <Zap className="w-6 h-6 text-[#06B6D4]" />
    },
    {
      name: "Premium Luanda",
      price: "25.000",
      period: "por 30 dias",
      description: "Destaque máximo para imobiliárias e condomínios.",
      features: [
        "Destaque no topo das buscas",
        "Fotos ilimitadas + Vídeo",
        "Anúncio nas Redes Sociais",
        "Gestão de Visitas Pro",
        "Relatórios de Performance"
      ],
      buttonText: "Ser Premium",
      link: "/auth/signup",
      highlight: false,
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Escolha o seu plano</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Seja para uma estadia rápida ou para vender o seu imóvel, temos a solução certa.
        </p>
      </section>

      {/* Grid de 3 Colunas */}
      <section className="py-20 container mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2.5rem] border transition-all hover:translate-y-[-5px] ${
                plan.highlight 
                ? 'border-[#06B6D4] shadow-2xl bg-white ring-4 ring-cyan-50' 
                : 'border-slate-100 shadow-lg bg-slate-50'
              }`}
            >
              <div className="mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium">AOA {plan.period}</span>
              </div>
              <p className="text-slate-600 mb-8 text-sm">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-[#06B6D4]' : 'text-green-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={plan.link} className={`w-full py-4 rounded-2xl font-bold text-center block transition-all ${
                plan.highlight 
                ? 'bg-[#06B6D4] text-white hover:bg-cyan-600' 
                : 'bg-slate-900 text-white hover:bg-black'
              }`}>
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info de Taxas (Melhorado para PAYG) */}
      <section className="pb-20 container mx-auto px-4 max-w-4xl">
        <div className="bg-cyan-50 p-8 rounded-[2.5rem] border border-cyan-100 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
             <Shield className="w-12 h-12 text-[#06B6D4]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Transparência no PAYG</h2>
            <p className="text-slate-600">
              Para quem reserva via PAYG, não há mensalidade. Cobramos apenas uma taxa de serviço de <strong>10%</strong> sobre o valor da reserva para garantir a custódia segura (Escrow) e assistência 24h.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

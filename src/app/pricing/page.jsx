'use client';

import React from 'react';
import { Check, Shield, Zap, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: "Standard",
      price: "5.000",
      period: "por 30 dias",
      description: "Ideal para quem quer arrendar ou vender rápido com segurança.",
      features: [
        "Listagem em 1 categoria",
        "Até 10 fotos HD",
        "Proteção de Pagamento Escrow",
        "Suporte via WhatsApp",
        "Selo de Imóvel Verificado"
      ],
      buttonText: "Começar Agora",
      highlight: false
    },
    {
      name: "Premium Luanda",
      price: "15.000",
      period: "por 30 dias",
      description: "Destaque máximo para imóveis de alto padrão e empresas.",
      features: [
        "Destaque no topo das buscas",
        "Fotos ilimitadas + Vídeo",
        "Gestão de visitas agendadas",
        "Relatórios de visualizações",
        "Prioridade no Suporte 24/7",
        "Anúncio nas redes sociais Kubicoo"
      ],
      buttonText: "Ser Premium",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header da Página */}
      <section className="py-20 bg-slate-900 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Planos de Visibilidade</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Escolha como quer anunciar o seu Kubico. Transparência total, sem taxas escondidas.
        </p>
      </section>

      {/* Grid de Planos */}
      <section className="py-20 container mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2.5rem] border ${
                plan.highlight 
                ? 'border-[#06B6D4] shadow-2xl bg-white scale-105 z-10' 
                : 'border-slate-100 shadow-lg bg-slate-50'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#06B6D4] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" /> MAIS POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium">AOA {plan.period}</span>
              </div>
              <p className="text-slate-600 mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-[#06B6D4]' : 'text-slate-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                plan.highlight 
                ? 'bg-[#06B6D4] text-white hover:bg-cyan-600' 
                : 'bg-slate-900 text-white hover:bg-black'
              }`}>
                {plan.buttonText} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Secção Escrow / Taxas de Serviço */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-cyan-50 p-6 rounded-3xl">
                <Shield className="w-16 h-16 text-[#06B6D4]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Taxas de Serviço e Escrow</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Para garantir que o seu dinheiro está seguro, aplicamos uma taxa de serviço fixa de <span className="font-bold text-slate-900 text-xl text-[#06B6D4]">10%</span> sobre o valor da reserva/comissão. 
                  Este valor cobre a proteção jurídica, a custódia bancária e a verificação do imóvel.
                </p>
                <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-sm">
                  <Zap className="w-4 h-4" /> Pagamento Seguro Kubicoo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


'use client';

import React from 'react';
import { ShieldCheck, Smartphone, Globe, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION: O PROBLEMA --- */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Nós Percebemos — Encontrar um Lugar em Angola é <span className="text-[#06B6D4]">Difícil</span>
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              Já passaste por isso. Encontras um apartamento no Facebook. As fotos parecem top. Envias uma mensagem no WhatsApp. 
              O senhorio diz: <span className="text-white italic">"Manda-me 2 meses de renda + caução"</span>.
            </p>
            <p className="font-medium text-white bg-white/10 py-4 px-6 rounded-2xl border border-white/10">
              Tu hesitas — e se for burla? E se o apartamento nem existir? E se eles desaparecerem depois do pagamento?
            </p>
            <p className="text-[#06B6D4] font-bold text-2xl pt-4">
              Isto acontece milhares de vezes todos os dias. Bons inquilinos dormem no sofá de amigos. Todos perdem.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECÇÃO 2: A SOLUÇÃO (ESCROW) --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <ShieldCheck className="text-[#06B6D4] w-8 h-8" /> A Kubicoo Resolve Isso
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Somos um marketplace onde a confiança faz parte do sistema, não é apenas uma promessa. 
              O teu dinheiro fica retido numa conta segura (<span className="font-bold text-slate-900">Escrow</span>) até confirmares o check-in.
            </p>
            
            <div className="grid gap-4">
              {[
                { n: "1", t: "Encontras o imóvel ideal" },
                { n: "2", t: "Reservas pelo site ou WhatsApp" },
                { n: "3", t: "Pagas via Multicaixa ou ProxyPay" },
                { n: "4", t: "O dinheiro fica seguro connosco" },
                { n: "5", t: "Fazes o check-in ou assinas contrato" },
              ].map((step) => (
                <div key={step.n} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="bg-[#06B6D4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">{step.n}</span>
                  <span className="font-medium text-slate-700">{step.t}</span>
                </div>
              ))}
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <CheckCircle2 className="text-green-500 w-8 h-8" />
                <span className="font-bold text-green-700 text-lg">Só então o proprietário recebe o valor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECÇÃO 3: DIFERENCIAIS LOCAIS --- */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Feito para a Realidade Angolana</h2>
          <p className="text-center text-slate-500 mb-12 text-lg italic">
            "Adaptamos o modelo global às necessidades de quem vive e trabalha em Angola."
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <Smartphone className="text-[#06B6D4] w-10 h-10 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">WhatsApp First</h3>
              <p className="text-slate-600">Preferes o WhatsApp em vez de apps complicadas? Nós também. Tudo é gerido onde tu já estás.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <Globe className="text-[#06B6D4] w-10 h-10 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Pagamentos Locais</h3>
              <p className="text-slate-600">Nada de cartões de crédito. Usamos Multicaixa e ProxyPay, garantindo que o teu dinheiro não sai de Angola.</p>
            </div>
          </div>
          
          <p className="mt-12 text-center font-black text-2xl text-slate-900 leading-tight">
            Construímos para a tua realidade, não para a fantasia de Silicon Valley.
          </p>
        </div>
      </section>

      {/* --- VISÃO E CTA --- */}
      <footer className="py-20 px-6 text-center">
        <h2 className="text-slate-400 font-bold tracking-[0.3em] uppercase mb-6">A Nossa Visão</h2>
        <blockquote className="text-3xl md:text-4xl font-black text-slate-900 mb-10 leading-tight max-w-3xl mx-auto italic">
          "A Kubicoo será a forma como Angola reserva e compra imóveis. Ponto final."
        </blockquote>
        <p className="text-[#06B6D4] font-bold text-lg mb-12 flex items-center justify-center gap-4">
          ANGOLA 🇦🇴 • 
        </p>
        
        <Link 
          href="/properties" 
          className="inline-flex items-center gap-2 bg-[#06B6D4] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-cyan-600 shadow-xl transition-all active:scale-95"
        >
          Encontrar o meu Kubico <ArrowRight />
        </Link>
      </footer>
    </main>
  );
}

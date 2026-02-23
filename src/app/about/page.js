import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 max-w-4xl mx-auto p-6 leading-relaxed">
      
      {/* SECÇÃO 1: O PROBLEMA (Texto agora bem escuro) */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Nós Percebemos — Encontrar um Lugar para Ficar em Angola é Difícil</h1>
        <div className="space-y-4 text-lg text-slate-800">
          <p>Já passaste por isso. Encontras um apartamento no Facebook. As fotos parecem top. Envias uma mensagem no WhatsApp. O senhorio diz: "Manda-me 2 meses de renda + caução". Tu hesitas — e se for burla? E se o apartamento nem existir? E se eles desaparecerem depois do pagamento?</p>
          <p className="font-medium">Então não envias o dinheiro. O senhorio passa para o próximo. O negócio cai.</p>
        </div>
        <p className="mt-6 text-red-600 font-bold text-xl">
          Isto acontece milhares de vezes todos os dias em Angola e por África fora. Boas casas ficam vazias. Bons inquilinos dormem no sofá de amigos. Todos perdem.
        </p>
      </section>

      {/* SECÇÃO 2: A SOLUÇÃO (Fundo azul muito claro para destacar o texto) */}
      <section className="mb-10 bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">A Kubicoo Resolve Isso</h2>
        <p className="mb-6 text-slate-800 font-medium text-lg">Somos um marketplace onde a confiança faz parte do sistema, não é apenas uma promessa.</p>
        <ul className="space-y-4 text-slate-700 text-lg">
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
            Encontras um imóvel que gostas (hotel, apartamento, vivenda, o que for)
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
            Reservas pelo nosso site, app ou WhatsApp
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
            Pagas via <strong>Multicaixa</strong> ou <strong>ProxyPay</strong> (métodos que já usas)
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
            O teu dinheiro fica retido numa conta segura (escrow)
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
            Fazes o check-in ou assinas o contrato
          </li>
          <li className="flex items-center gap-3 font-bold text-blue-900">
            <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">6</span>
            Então — e só então — o proprietário recebe o pagamento
          </li>
        </ul>
      </section>

      {/* SECÇÃO 3: DIFERENCIAIS (Texto adaptado conforme pediste) */}
      <section className="mb-10 border-l-8 border-blue-600 pl-6 py-2">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Por que Somos Diferentes?</h2>
        <p className="mb-6 text-slate-600 italic text-lg">
          O Airbnb é bom — Adaptamo-lo à realidade local. Pressupõe que tens um cartão Multicaixa, proteção jurídica forte e internet estável.
        </p>
        <p className="mb-4 font-bold text-blue-900 text-lg text-xl uppercase tracking-tight">A Kubicoo foi feita para Angola. Nós sabemos que:</p>
        <ul className="list-disc ml-6 space-y-2 text-slate-800 text-lg">
          <li>Preferes o WhatsApp em vez de apps complicadas</li>
          <li>Pagas com <strong>Multicaixa</strong>, não com cartões de crédito</li>
          <li>Já foste burlado antes e és (com razão) cético</li>
          <li>Queres algo simples, rápido e seguro</li>
        </ul>
        <p className="mt-6 font-black text-2xl text-slate-900">Construímos para a tua realidade, não para a fantasia de Silicon Valley.</p>
      </section>

      {/* SECÇÃO 4: VISÃO */}
      <footer className="mt-16 pt-10 border-t-2 border-slate-100 text-center pb-12">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">A Visão</h2>
        <p className="text-2xl font-extrabold text-blue-700 mb-6 italic leading-snug">
          "A Kubicoo será a forma como Angola reserva e compra imóveis. Ponto final."
        </p>
        <p className="text-slate-500 font-bold tracking-[0.2em] mb-10">ANGOLA 🇦🇴 • MOZAMBIQUE 🇲🇿 • DRC 🇨🇩</p>
        <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-black text-xl hover:bg-blue-700 shadow-xl transition-all active:scale-95">
          Começar Agora
        </button>
      </footer>
    </main>
  );
}



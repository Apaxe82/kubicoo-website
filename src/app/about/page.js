import React from 'react';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 leading-relaxed text-gray-800">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Nós Percebemos — Encontrar um Lugar para Ficar em Angola é Difícil</h1>
        <p className="mb-4">Já passaste por isso. Encontras um apartamento no Facebook. As fotos parecem top. Envias uma mensagem no WhatsApp. O senhorio diz: "Manda-me 2 meses de renda + caução". Tu hesitas — e se for burla? E se o apartamento nem existir? E se eles desaparecerem depois do pagamento?</p>
        <p className="mb-4">Então não envias o dinheiro. O senhorio passa para o próximo. O negócio cai.</p>
        <p className="mb-4 text-red-600 font-medium">Isto acontece milhares de vezes todos os dias em Angola e por África fora. Boas casas ficam vazias. Bons inquilinos dormem no sofá de amigos. Todos perdem.</p>
      </section>

      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">A Kubicoo Resolve Isso</h2>
        <p className="mb-4 text-lg">Somos um marketplace onde a confiança faz parte do sistema, não é apenas uma promessa.</p>
        <ul className="list-decimal ml-6 space-y-3">
          <li>Encontras um imóvel que gostas (hotel, apartamento, vivenda, o que for)</li>
          <li>Reservas pelo nosso site, app ou WhatsApp</li>
          <li>Pagas via <strong>Multicaixa</strong> ou <strong>ProxyPay</strong> (métodos que já usas)</li>
          <li>O teu dinheiro fica retido numa conta segura (escrow)</li>
          <li>Fazes o check-in ou assinas o contrato</li>
          <li>Então — e só então — o proprietário recebe o pagamento</li>
        </ul>
        <p className="mt-4 font-bold italic text-blue-700 underline">Sem "manda o dinheiro e reza". Sem senhorios fantasma. Sem anúncios falsos.</p>
      </section>

      <section className="mb-8 border-l-4 border-blue-600 pl-4">
        <h2 className="text-2xl font-semibold mb-4">Por que Somos Diferentes?</h2>
        <p className="mb-4 italic">O Airbnb é bom — Adaptamo-lo à realidade local . Pressupõe que tens um cartão Multicaixa, proteção jurídica forte e internet estável.</p>
        <p className="mb-4">A <strong>Kubicoo</strong> foi feita para Angola. Nós sabemos que:</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Preferes o WhatsApp em vez de apps complicadas</li>
          <li>Pagas com Multicaixa, não com cartões de crédito</li>
          <li>Já foste burlado antes e és (com razão) cético</li>
          <li>Queres algo simples, rápido e seguro</li>
        </ul>
        <p className="font-bold text-xl">Construímos para a tua realidade, não para a fantasia de Silicon Valley.</p>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4">Quem usa a Kubicoo?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">🎓 <span className="ml-2"><strong>Estudantes:</strong> quartos perto da UNIA ou Agostinho Neto.</span></li>
          <li className="flex items-start">🌍 <span className="ml-2"><strong>Expats:</strong> apartamentos mobilados para projetos curtos.</span></li>
          <li className="flex items-start">📸 <span className="ml-2"><strong>Turistas:</strong> evitando pensões duvidosas e hotéis caros.</span></li>
          <li className="flex items-start">💼 <span className="ml-2"><strong>Famílias:</strong> a mudarem do Huambo para Luanda por trabalho.</span></li>
          <li className="flex items-start">🏠 <span className="ml-2"><strong>Proprietários:</strong> fartos de "mirones" e no-shows.</span></li>
          <li className="flex items-start">🤝 <span className="ml-2"><strong>Agentes:</strong> fechando negócios com clientes reais.</span></li>
        </ul>
      </section>

      <section className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">A Nossa Promessa</h2>
        <ul className="space-y-3">
          <li className="flex items-center">✅ <span className="ml-2"><strong>Cada anúncio é verificado</strong> (confirmamos que existe)</span></li>
          <li className="flex items-center">✅ <span className="ml-2"><strong>Pagamentos seguros</strong> (dinheiro guardado até ao check-in)</span></li>
          <li className="flex items-center">✅ <span className="ml-2"><strong>Sem taxas escondidas</strong> (o preço que vês é o preço real)</span></li>
          <li className="flex items-center">✅ <span className="ml-2"><strong>Reserva em 60 segundos</strong> (web, app ou WhatsApp)</span></li>
          <li className="flex items-center">✅ <span className="ml-2"><strong>Suporte em Português</strong> (humanos, não bots)</span></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t text-center">
        <h2 className="text-2xl font-bold mb-4">A Visão</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto italic">"A Kubicoo será a forma como Angola reserva e compra imóveis. Ponto final."</p>
        <p className="text-gray-600 mb-8 text-sm uppercase tracking-widest">Angola 🇦🇴 •</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
          Começar Agora
        </button>
      </footer>
    </main>
  );
}

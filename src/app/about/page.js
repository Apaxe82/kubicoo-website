import React from 'react';

export default function AboutPage() {
  return (
    /* bg-white e text-black garantem que a página é legível mesmo em Dark Mode */
    <main className="min-h-screen bg-white text-black max-w-4xl mx-auto p-6 leading-relaxed">
      
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Nós Percebemos — Encontrar um Lugar para Ficar em Angola é Difícil</h1>
        <p className="mb-4 text-gray-700">Já passaste por isso. Encontras um apartamento no Facebook. As fotos parecem top. Envias uma mensagem no WhatsApp. O senhorio diz: "Manda-me 2 meses de renda + caução". Tu hesitas — e se for burla? E se o apartamento nem existir? E se eles desaparecerem depois do pagamento?</p>
        <p className="mb-4 text-gray-700">Então não envias o dinheiro. O senhorio passa para o próximo. O negócio cai.</p>
        <p className="mb-4 text-red-600 font-bold">Isto acontece milhares de vezes todos os dias em Angola e por África fora. Boas casas ficam vazias. Bons inquilinos dormem no sofá de amigos. Todos perdem.</p>
      </section>

      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">A Kubicoo Resolve Isso</h2>
        <p className="mb-4 text-gray-800">Somos um marketplace onde a confiança faz parte do sistema, não é apenas uma promessa.</p>
        <ul className="list-decimal ml-6 space-y-3 text-gray-700">
          <li>Encontras um imóvel que gostas (hotel, apartamento, vivenda, o que for)</li>
          <li>Reservas pelo nosso site, app ou WhatsApp</li>
          <li>Pagas via <strong>Multicaixa</strong> ou <strong>ProxyPay</strong> (métodos que já usas)</li>
          <li>O teu dinheiro fica retido numa conta segura (escrow)</li>
          <li>Fazes o check-in ou assinas o contrato</li>
          <li>Então — e só então — o proprietário recebe o pagamento</li>
        </ul>
        <p className="mt-4 font-bold italic text-blue-700 underline text-center">Sem "manda o dinheiro e reza". Sem senhorios fantasma. Sem anúncios falsos.</p>
      </section>

      <section className="mb-8 border-l-4 border-blue-600 pl-4 bg-gray-50 py-4 rounded-r-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Por que Somos Diferentes?</h2>
        <p className="mb-4 italic text-gray-600 font-medium">O Airbnb é bom — se viveres em São Francisco. Pressupõe que tens um cartão Visa, proteção jurídica forte e internet estável.</p>
        <p className="mb-4 text-gray-800">A <strong>Kubicoo</strong> foi feita para Angola. Nós sabemos que:</p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-700">
          <li>Preferes o WhatsApp em vez de apps complicadas</li>
          <li>Pagas com Multicaixa, não com cartões de crédito</li>
          <li>Já foste burlado antes e és (com razão) cético</li>
          <li>Queres algo simples, rápido e seguro</li>
        </ul>
        <p className="font-bold text-xl text-blue-800">Construímos para a tua realidade, não para a fantasia de Silicon Valley.</p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Quem usa a Kubicoo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">🎓 <span className="ml-2 text-gray-700"><strong>Estudantes:</strong> quartos perto da UNIA ou Agostinho Neto.</span></div>
          <div className="flex items-start">🌍 <span className="ml-2 text-gray-700"><strong>Expats:</strong> apartamentos mobilados para projetos curtos.</span></div>
          <div className="flex items-start">📸 <span className="ml-2 text-gray-700"><strong>Turistas:</strong> evitando pensões duvidosas e hotéis caros.</span></div>
          <div className="flex items-start">💼 <span className="ml-2 text-gray-700"><strong>Famílias:</strong> a mudarem do Huambo para Luanda por trabalho.</span></div>
          <div className="flex items-start">🏠 <span className="ml-2 text-gray-700"><strong>Proprietários:</strong> fartos de "mirones" e no-shows.</span></div>
          <div className="flex items-start">🤝 <span className="ml-2 text-gray-700"><strong>Agentes:</strong> fechando negócios com clientes reais.</span></div>
        </div>
      </section>

      <section className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">A Nossa Promessa</h2>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-800">✅ <span className="ml-2"><strong>Cada anúncio é verificado</strong> (confirmamos que existe)</span></li>
          <li className="flex items-center text-gray-800">✅ <span className="ml-2"><strong>Pagamentos seguros</strong> (dinheiro guardado até ao check-in)</span></li>
          <li className="flex items-center text-gray-800">✅ <span className="ml-2"><strong>Sem taxas escondidas</strong> (o preço que vês é o preço real)</span></li>
          <li className="flex items-center text-gray-800">✅ <span className="ml-2"><strong>Reserva em 60 segundos</strong> (web, app ou WhatsApp)</span></li>
          <li className="flex items-center text-gray-800">✅ <span className="ml-2"><strong>Suporte em Português</strong> (humanos, não bots)</span></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200 text-center pb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 italic">"A Kubicoo será a forma como África reserva e compra imóveis. Ponto final."</h2>
        <p className="text-gray-500 mb-8 text-sm uppercase tracking-widest font-bold">Angola 🇦🇴 • Mozambique 🇲🇿 • DRC 🇨🇩</p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 shadow-lg transform transition active:scale-95">
          Começar Agora
        </button>
      </footer>
    </main>
  );
}


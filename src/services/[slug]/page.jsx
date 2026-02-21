'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  CheckCircle2, Calculator, ShieldCheck, 
  ArrowRight, FileText, Calendar, Clock 
} from 'lucide-react';

export default function ServicePage() {
  const { slug } = useParams();
  const serviceName = slug ? slug.replace(/-/g, ' ').toUpperCase() : 'SERVIÇO';

  // --- ESTADOS ---
  const [propertyValue, setPropertyValue] = useState('');
  const [formData, setFormData] = useState({
    client_name: '',
    whatsapp: '',
    province: 'Luanda',
    details: ''
  });
  const [loading, setLoading] = useState(false);

  // --- LÓGICA DE NEGÓCIO ---
  const calculateCommission = (val) => {
    const num = parseFloat(val) || 0;
    if (slug?.includes('arrendamento')) return num * 0.10; // 10%
    if (slug?.includes('venda')) return num * 0.03;      // 3%
    return num * 0.05;                                  // Padrão 5%
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.kubicoo.com/api/services/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service_type: slug
        }),
      });

      if (response.ok) {
        alert('Pedido enviado com sucesso! A equipa Kubicoo entrará em contacto via WhatsApp.');
        setFormData({ client_name: '', whatsapp: '', province: 'Luanda', details: '' });
      } else {
        throw new Error('Falha no servidor');
      }
    } catch (error) {
      alert('Erro ao enviar o pedido. Por favor, tente novamente ou contacte o suporte.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero do Serviço */}
      <section className="bg-[#0F172A] pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            {serviceName}
          </h1>
          <p className="text-cyan-400 text-xl font-bold uppercase tracking-widest animate-pulse">
            Soluções Profissionais Kubicoo
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Lado Esquerdo: Conteúdo Educativo */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">O que é este serviço?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O {serviceName} no Kubicoo é processado através do nosso sistema de 
              <strong> Garantia Escrow</strong>, assegurando que todas as partes 
              cumprem as obrigações contratuais antes da libertação de fundos. 
              Garantimos transparência total e segurança jurídica em Angola.
            </p>
          </section>

          {/* Widget de Cálculo */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-cyan-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-gray-900">Simulador de Transação</h3>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Valor Estimado do Imóvel (AOA)</label>
              <input 
                type="number" 
                placeholder="Ex: 50000000"
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 outline-none transition-all text-xl font-bold"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
              />
              <div className="bg-white p-6 rounded-2xl shadow-inner border border-gray-100 flex justify-between items-center">
                <span className="font-bold text-gray-500 uppercase text-xs">Comissão Estimada:</span>
                <span className="text-3xl font-black text-cyan-600">
                  {Number(calculateCommission(propertyValue)).toLocaleString()} Kz
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário de Lead */}
        <div className="lg:col-start-3">
          <div className="sticky top-28 bg-white p-8 rounded-[2.5rem] border-2 border-cyan-50 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight text-center">Solicitar {serviceName}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                required
                type="text" 
                name="client_name"
                placeholder="Seu Nome Completo" 
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-cyan-500 transition-all border border-transparent focus:bg-white" 
                value={formData.client_name}
                onChange={handleInputChange}
              />
              <input 
                required
                type="tel" 
                name="whatsapp"
                placeholder="Telemóvel (WhatsApp)" 
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-cyan-500 transition-all border border-transparent focus:bg-white" 
                value={formData.whatsapp}
                onChange={handleInputChange}
              />
              <select 
                name="province"
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-cyan-500 transition-all border border-transparent focus:bg-white"
                value={formData.province}
                onChange={handleInputChange}
              >
                <option value="Luanda">Luanda</option>
                <option value="Benguela">Benguela</option>
                <option value="Huíla">Huíla</option>
                <option value="Namibe">Namibe</option>
                <option value="Outra">Outra Província</option>
              </select>
              <textarea 
                required
                name="details"
                placeholder="Descreva brevemente a propriedade ou o seu objetivo..." 
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-cyan-500 transition-all border border-transparent focus:bg-white h-32"
                value={formData.details}
                onChange={handleInputChange}
              />
              
              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-cyan-600 text-white font-black py-5 rounded-2xl hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Enviar Pedido'} <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-[10px] text-gray-400 mt-6 text-center leading-tight uppercase font-bold tracking-tighter">
              Ao enviar, aceita os termos de privacidade e o sistema de Escrow do Kubicoo Digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { 
  MessageCircle, Phone, Mail, MapPin, 
  Instagram, Facebook, Linkedin, Youtube, 
  Send, Clock, ShieldCheck, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const socialLinks = [
    { name: 'WhatsApp', icon: <MessageCircle className="w-6 h-6" />, href: 'https://wa.me/244923000000', color: 'hover:bg-green-500', label: 'Suporte Instantâneo' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: '#', color: 'hover:bg-pink-600', label: '@kubicoo_angola' },
    { name: 'TikTok', icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.72.12-.65.4-.1.39-1.14 1.17-.6.54-.87 1.38-.79 2.18.06 1.02.66 1.97 1.57 2.45.67.37 1.45.47 2.2.4 1.25-.11 2.42-.88 2.97-2.01.27-.58.35-1.24.35-1.89V.02z"/></svg>, href: '#', color: 'hover:bg-black', label: '@kubicoo' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, href: '#', color: 'hover:bg-blue-700', label: 'Kubicoo Angola' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, href: '#', color: 'hover:bg-blue-600', label: 'Kubicoo' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, href: '#', color: 'hover:bg-red-600', label: 'Kubicoo TV' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Profissional */}
      <section className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Estamos Aqui para Ajudar</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Dúvidas sobre Escrow, visitas ou anúncios? A nossa equipa local responde em minutos.
        </p>
      </section>

      <div className="container mx-auto px-4 -mt-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Coluna 1 & 2: Formulário e Canais Diretos */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Enviar Mensagem</h2>
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Nome Completo</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" placeholder="Ex: André Paxe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">WhatsApp / Telefone</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" placeholder="+244..." />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Assunto</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all appearance-none">
                    <option>Dúvida sobre Arrendamento</option>
                    <option>Suporte com Pagamento Escrow</option>
                    <option>Anunciar Propriedade</option>
                    <option>Parcerias Profissionais</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase">Sua Mensagem</label>
                  <textarea rows="4" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="md:col-span-2 bg-[#06B6D4] hover:bg-cyan-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-cyan-200 transition-all flex items-center justify-center gap-2 text-lg">
                  Enviar Agora <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Informação Local */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] flex items-start gap-4">
                <MapPin className="text-[#06B6D4] w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Escritório Central</h3>
                  <p className="text-slate-400">Talatona, Via AL4, Edifício One, Luanda, Angola</p>
                </div>
              </div>
              <div className="bg-cyan-50 border border-cyan-100 p-8 rounded-[2rem] flex items-start gap-4">
                <Clock className="text-[#06B6D4] w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Horário de Atendimento</h3>
                  <p className="text-slate-600">Segunda - Sábado: 08:00 - 19:00</p>
                  <p className="text-[#06B6D4] font-bold">Suporte Escrow 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais "Social Wall" */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 px-2">Siga o Kubicoo</h2>
            <div className="grid gap-4">
              {socialLinks.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className={`group flex items-center justify-between p-5 bg-white border border-slate-100 rounded-3xl transition-all hover:shadow-xl ${social.color} hover:text-white`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white/20 transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-white">{social.name}</p>
                      <p className="text-xs text-slate-500 group-hover:text-white/80">{social.label}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>

            {/* Selo de Confiança */}
            <div className="mt-8 p-8 bg-green-50 rounded-[2rem] border border-green-100 text-center">
              <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-2">Canal Verificado</h3>
              <p className="text-green-600 text-sm">
                Todos os nossos contactos sociais são verificados para garantir que você nunca fala com impostores.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

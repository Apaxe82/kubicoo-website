'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, MapPin, Calendar, Users, Home, DollarSign, 
  RefreshCcw, Shield, Clock, ArrowRight, Filter, SlidersHorizontal 
} from 'lucide-react';
import { WhatsAppFloatingButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    location: '',
    type: 'arrendamento',
    guests: '1'
  });

  // Tipos de transação da "Page 2" integrados como filtros rápidos
  const transactionTypes = [
    { icon: <Home className="w-6 h-6"/>, title: 'Arrendamento', slug: 'arrendamento', badge: '10%' },
    { icon: <DollarSign className="w-6 h-6"/>, title: 'Venda', slug: 'venda', badge: '8-10%' },
    { icon: <RefreshCcw className="w-6 h-6"/>, title: 'Permuta', slug: 'permuta', badge: '2.5%' },
    { icon: <Shield className="w-6 h-6"/>, title: 'Escrow', slug: 'seguro', badge: 'Proteção' }
  ];

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/accommodation/search?limit=3');
      const data = await res.json();
      setProperties(data.accommodations || []);
    } catch (err) {
      console.error("Erro ao carregar pré-visualização", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO COM PESQUISA INTEGRADA (Fusão da Função de Search) */}
      <section className="relative h-[700px] flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000" 
          alt="Luxury Home Angola" 
          fill 
          className="object-cover brightness-[0.45]"
          priority
        />
        
        <div className="relative z-10 w-full max-w-5xl px-4">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              O Seu Novo Kubico <span className="text-[#06B6D4]">Começa Aqui</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A imobiliária digital pioneira em Angola com pagamentos seguros e verificados.
            </p>
          </div>

          {/* Search Bar "Professional Grade" */}
          <div className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl grid md:grid-cols-4 gap-2 items-center">
            <div className="flex items-center gap-3 px-4 border-r">
              <MapPin className="text-[#06B6D4] w-5 h-5" />
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-gray-400">Localização</p>
                <input 
                  type="text" 
                  placeholder="Onde quer morar?" 
                  className="w-full outline-none text-gray-700 font-medium"
                  onChange={(e) => setSearchQuery({...searchQuery, location: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-4 border-r">
              <Home className="text-[#06B6D4] w-5 h-5" />
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-gray-400">Tipo</p>
                <select className="w-full outline-none bg-transparent font-medium text-gray-700">
                  <option>Arrendamento</option>
                  <option>Venda</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 border-r">
              <Users className="text-[#06B6D4] w-5 h-5" />
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-gray-400">Pessoas</p>
                <select className="w-full outline-none bg-transparent font-medium text-gray-700">
                  <option>1 Pessoa</option>
                  <option>2+ Pessoas</option>
                </select>
              </div>
            </div>

            <Link 
              href={`/properties?location=${searchQuery.location}`}
              className="bg-[#06B6D4] hover:bg-cyan-600 text-white h-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all"
            >
              <Search className="w-5 h-5" /> Pesquisar
            </Link>
          </div>
        </div>
      </section>

      {/* 2. GRID DE TRANSAÇÕES (A estrutura da Page 1) */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Serviços Especializados</h2>
            <p className="text-gray-500">Tudo o que precisa para o seu património imobiliário</p>
          </div>
          <Link href="/properties" className="text-[#06B6D4] font-bold flex items-center gap-2 hover:underline">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {transactionTypes.map((type, i) => (
            <Link key={i} href={`/properties?type=${type.slug}`} className="group p-8 border rounded-3xl hover:border-[#06B6D4] hover:shadow-2xl transition-all">
              <div className="bg-cyan-50 w-14 h-14 rounded-2xl flex items-center justify-center text-[#06B6D4] mb-6 group-hover:bg-[#06B6D4] group-hover:text-white transition-colors">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-sm text-gray-500">Comissão reduzida: {type.badge}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. SECÇÃO DE FOTOS / PROPERTY PREVIEW (Fusão da Page 2) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Destaques em Luanda</h2>
            <p className="text-gray-600">Propriedades verificadas pela nossa equipa com visita virtual</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              [1,2,3].map(i => <div key={i} className="h-[400px] bg-gray-200 animate-pulse rounded-3xl" />)
            ) : (
              properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </div>
  );
}

// Componente de Card Refinado (Foto Section da Page 2)
function PropertyCard({ property }) {
  const mainImage = property.photos?.[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800';
  
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
      <div className="relative h-72 overflow-hidden">
        <Image 
          src={mainImage} 
          alt={property.title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-[#06B6D4] shadow-lg">
          {Number(property.price).toLocaleString()} AOA
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 text-[#06B6D4]" />
          {property.neighbourhood || 'Luanda, Angola'}
        </div>
        <h3 className="text-2xl font-bold mb-6 group-hover:text-[#06B6D4] transition-colors line-clamp-1">
          {property.title}
        </h3>
        <Link 
          href={`/booking/${property.id}`}
          className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#06B6D4] transition-all"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}


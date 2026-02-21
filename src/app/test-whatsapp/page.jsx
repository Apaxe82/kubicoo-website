// src/app/test-whatsapp/page.jsx
import WhatsAppButton, { WhatsAppFloatingButton } from '@/components/WhatsAppButton';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">WhatsApp Components Test</h1>
        
        <div className="space-y-6 bg-white p-8 rounded-lg shadow">
          <div>
            <h2 className="text-xl font-semibold mb-4">Primary Button</h2>
            <WhatsAppButton 
              link="https://wa.me/244923456789?text=Olá%20Kubicoo!"
              text="Contactar via WhatsApp"
              variant="primary"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Secondary Button</h2>
            <WhatsAppButton 
              link="https://wa.me/244923456789"
              text="Fale Conosco"
              variant="secondary"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Outline Button</h2>
            <WhatsAppButton 
              link="https://wa.me/244923456789"
              text="Precisa de Ajuda?"
              variant="outline"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Large Button</h2>
            <WhatsAppButton 
              link="https://wa.me/244923456789"
              text="Agendar Visita"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </div>
      
      {/* Floating button */}
      <WhatsAppFloatingButton phoneNumber="244923456789" />
    </div>
  );
}

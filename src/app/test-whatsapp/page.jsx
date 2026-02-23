import WhatsAppButton, { WhatsAppFloatingButton } from '../../components/WhatsAppButton';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">WhatsApp Components Test</h1>
      
      <div className="space-y-6 bg-white p-8 rounded-lg">
        <WhatsAppButton 
          link="https://wa.me/244923456789"
          text="Test Primary"
        />
        
        <WhatsAppButton 
          link="https://wa.me/244923456789"
          variant="secondary"
          text="Test Secondary"
        />
      </div>
      
      <WhatsAppFloatingButton phoneNumber="244923456789" />
    </div>
  );
}

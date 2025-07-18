import React, { useState } from 'react';
import Logo from './components/Logo';
import VSLPlayer from './components/VSLPlayer';
import Testimonials from './components/Testimonials';
import CredibilitySeals from './components/CredibilitySeals';
import { UTMHandler } from './utils/utmHandler';

function App() {
  const [showButton, setShowButton] = useState(true);
  const [utmHandler] = useState(() => new UTMHandler());

  // Log UTM parameters for debugging
  React.useEffect(() => {
    utmHandler.logUTMParams();
  }, [utmHandler]);

  const handleCheckoutClick = () => {
    const baseUrl = "https://pay.kirvano.com/51c9da2f-ca9e-4fa4-ae34-f0e646202aba";
    const finalUrl = utmHandler.getCheckoutUrl(baseUrl);
    
    // Log para debug
    console.log('Redirecting to:', finalUrl);
    console.log('UTM String:', utmHandler.getUTMString());
    
    window.location.href = finalUrl;
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 md:py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight px-4">
            <span className="block mb-2 md:mb-4">
              Você sente dores no JOELHO ao andar ou na COLUNA ao se abaixar?
              <span className="block text-green-600 mt-2">
                Isso pode NÃO ser culpa da sua idade.
              </span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 font-medium">
            Descubra o protocolo caseiro que está devolvendo a liberdade de milhares de brasileiros, 
            <strong className="text-green-600 font-bold"> sem remédios caros nem efeitos colaterais.</strong>
          </p>

          <VSLPlayer onVideoEnd={() => setShowButton(true)} />

          {showButton && (
            <div className="px-4">
              <button 
                onClick={handleCheckoutClick}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-sm mx-auto block border-2 border-green-500"
              >
                SIM, QUERO ALÍVIO IMEDIATO!
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* Selos de Credibilidade */}
      <CredibilitySeals />

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-10 md:py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 text-sm md:text-base">
              <a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Termos de Uso</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Política de Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Suporte</a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm md:text-base px-4 leading-relaxed">
            © 2024 Protocolo Alívio Já. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

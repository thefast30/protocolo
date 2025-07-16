import React, { useState } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutos em segundos

  // Timer effect
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, [timeLeft]);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-2 md:py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-protocolo-alivio-ja.png" 
              alt="Protocolo Alívio Já" 
              className="h-6 md:h-10 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section com VSL */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-12 bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-6 md:mb-8 leading-tight font-playfair tracking-tight">
            Você sente dores nas<br className="hidden sm:block" />
            <span className="block mt-1 md:mt-2">articulações?</span><br />
            <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent drop-shadow-sm">
              Isso pode NÃO ser culpa<br className="hidden sm:block" />
              <span className="block mt-1 md:mt-2">da sua idade.</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            Descubra o protocolo caseiro que está devolvendo a liberdade de milhares de brasileiros, 
            <strong className="text-green-600"> sem remédios caros nem efeitos colaterais.</strong>
          </p>

          {/* Video Player Embed */}
          <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-8 md:mb-10">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                <vturb-smartplayer 
                  id="vid-6877d2e30fe8209acf4cca58" 
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    width: '100%',
                    maxWidth: '400px'
                  }}
                ></vturb-smartplayer>
              </div>
            </div>
          </div>

          {showButton && (
            <div className="px-4">
              <button 
                onClick={scrollToCheckout}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-sm mx-auto block"
              >
                Quero Começar Agora
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8 md:py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-8 mb-6 text-sm md:text-base">
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Termos de Uso</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Política de Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Suporte</a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-xs md:text-sm px-4 leading-relaxed">
            © 2024 Protocolo Alívio Já. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Script do Player */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var s=document.createElement("script"); 
            s.src="https://scripts.converteai.net/0335ec20-c9d4-4221-a36e-428ccf9162ce/players/6877d2e30fe8209acf4cca58/v4/player.js"; 
            s.async=true;
            document.head.appendChild(s);
          `
        }}
      />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';

function App() {
  const [showButton, setShowButton] = useState(true);

  // --- NOVA ABORDAGEM: CONSTRUÇÃO IMEDIATA ---
  // 1. Definimos a URL base.
  const baseUrl = "https://pay.kirvano.com/51c9da2f-ca9e-4fa4-ae34-f0e646202aba";
  let finalCheckoutUrl = baseUrl; // Por padrão, a URL final é a base.

  // 2. Verificamos os parâmetros da URL da página de forma síncrona.
  //    Isso garante que o código rode antes que o script da VSL possa inicializar.
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.toString()) {
      finalCheckoutUrl = `${baseUrl}?${urlParams.toString()}`;
    }
  }
  // A variável 'finalCheckoutUrl' agora tem o link com os UTMs desde o início.
  // Não precisamos mais do useState ou useEffect para isso.

  // Carregar script da VSL (sem alterações aqui)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/0335ec20-c9d4-4221-a36e-428ccf9162ce/players/6877d2e30fe8209acf4cca58/v4/player.js";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // A função de clique usa a variável que criamos.
  const handleCheckoutClick = () => {
    window.location.href = finalCheckoutUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 md:py-6">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight px-4">
            <span className="block mb-2 md:mb-4">
              Finalmente! O Protocolo Natural que
              <span className="block text-green-600 mt-2">
                Elimina a Dor nas Costas em 7 Dias
              </span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 font-medium">
            Descubra o protocolo caseiro que está devolvendo a liberdade de milhares de brasileiros, 
            <strong className="text-green-600 font-bold"> sem remédios caros nem efeitos colaterais.</strong>
          </p>

          {/* VSL Player */}
          <div className="max-w-xs mx-auto mb-8 md:mb-10" id="vsl-container">
            {/* 3. Usamos a variável 'finalCheckoutUrl' diretamente aqui. */}
            <div 
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer 
                           id="vid-6877d2e30fe8209acf4cca58"
                           data-param-redirect_url="${finalCheckoutUrl}"
                           style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
              }}
            />
          </div>

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

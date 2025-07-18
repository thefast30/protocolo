import React, { useState } from 'react';
import Logo from './components/Logo';
import VSLPlayer from './components/VSLPlayer';

// A PÁGINA-JAULA. SIMPLES E LETAL.
function App() {!
  const [showButton, setShowButton] = useState(false);

  // A FUNÇÃO BURRA E EFETIVA QUE A GENTE PRECISA
  const handleCheckoutClick = () => {
    console.log('🖱️ CLICOU NESSA PORRA');
    const baseUrl = "https://pay.kirvano.com/51c9da2f-ca9e-4fa4-ae34-f0e646202aba";
    let finalUrl = baseUrl;

    const utmKeys = [
      'utm_source', 
      'utm_medium', 
      'utm_campaign', 
      'utm_term', 
      'utm_content', 
      'click_id', 
      'fbclid', 
      'gclid',
      'src',
      'sck'
    ];
    
    const currentUrlParams = new URLSearchParams(window.location.search);
    const paramsParaAdicionar = new URLSearchParams();

    utmKeys.forEach(key => {
      let value = currentUrlParams.get(key);
      if (!value) {
        value = localStorage.getItem(`utm_${key}`);
      }
      if (value) {
        paramsParaAdicionar.append(key, value);
      }
    });

    const utmString = paramsParaAdicionar.toString();
    console.log('🏷️ UTMs que vão pro checkout:', utmString);

    if (utmString) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      finalUrl = `${baseUrl}${separator}${utmString}`;
    }

    console.log('🚀 REDIRECIONANDO PRA ISSO AQUI:', finalUrl);
    window.location.href = finalUrl;
  };

  // A ESTRUTURA É SÓ ESSA MERDA AQUI. MAIS NADA.
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* CABEÇALHO SÓ COM A LOGO */}
      <header className="py-4 md:py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <Logo />
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL: HEADLINE E VÍDEO. FIM. */}
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto text-center px-4">
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Você sente dores no JOELHO ao andar ou na COLUNA ao se abaixar?
            <span className="block text-green-600 mt-2">
              Isso pode NÃO ser culpa da sua idade.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra o protocolo caseiro que está devolvendo a liberdade de milhares de brasileiros.
          </p>

          {/* O VÍDEO É O REI. A VSLPlayer tem que chamar setShowButton(true) no tempo certo */}
          <VSLPlayer onTimeUpdate={(time) => {
            // Exemplo: Mostrar o botão aos 12 minutos (720 segundos)
            if (time >= 720 && !showButton) {
              setShowButton(true);
            }
          }} />

          {/* O BOTÃO SÓ APARECE QUANDO "showButton" FOR TRUE */}
          {showButton && (
            <div className="mt-8 animate-fade-in"> {/* Botei até uma animaçãozinha de bosta pra ti */}
              <button 
                onClick={handleCheckoutClick}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
              >
                <span className="block text-2xl">SIM, QUERO ALÍVIO IMEDIATO!</span>
                <span className="block text-sm font-normal">(Acesso completo por um pagamento único de R$ 47)</span>
              </button>
            </div>
          )}

        </div>
      </main>

       {/* NÃO TEM RODAPÉ, NÃO TEM DEPOIMENTO, NÃO TEM PORRA NENHUMA AQUI. ACABOU. */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Play, Check, Shield, Clock, Star, Heart, Users, Award, Timer } from 'lucide-react';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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

  // Formatar tempo para exibição
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-protocolo-alivio-ja.png" 
              alt="Protocolo Alívio Já" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section com VSL */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Você sente dores nas articulações?<br />
            <span className="text-green-600">Isso pode NÃO ser culpa da sua idade.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Descubra o protocolo caseiro que está devolvendo a liberdade de milhares de brasileiros, 
            <strong className="text-green-600"> sem remédios caros nem efeitos colaterais.</strong>
          </p>

          {/* Video Player */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                {!isVideoPlaying ? (
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Play className="w-12 h-12 ml-1" />
                  </button>
                ) : (
                  <div className="text-white text-center">
                    <p className="text-xl mb-4">Vídeo de Vendas (12-15 minutos)</p>
                    <div className="bg-green-600 text-white px-4 py-2 rounded">
                      ▶️ Reproduzindo: "A Verdade Sobre Dores nas Articulações"
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {showButton && (
            <button 
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero Começar Agora
            </button>
          )}
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Por que o Protocolo Alívio Já funciona?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Alívio Rápido da Dor</h3>
              <p className="text-gray-600">Resultados em até 7 dias seguindo o protocolo corretamente</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Técnica Natural e Caseira</h3>
              <p className="text-gray-600">Ingredientes simples que você já tem em casa</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sem Efeitos Colaterais</h3>
              <p className="text-gray-600">100% natural, sem químicos ou medicamentos</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Funciona em Casos Crônicos</h3>
              <p className="text-gray-600">Mesmo em dores persistentes há anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* História do João */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                A História do João - 68 anos
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                "Meu pai sofria com dores nas articulações há mais de 10 anos. Ele mal conseguia sair da cama 
                pela manhã e tinha perdido a vontade de viver."
              </p>
              
              <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-lg font-semibold text-red-800">
                  Ele gastou mais de R$ 5 mil com remédios... e só melhorou com esse protocolo.
                </p>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                "Hoje, aos 68 anos, ele caminha 5km por dia, brinca com os netos e voltou a ter qualidade de vida. 
                Tudo graças ao Protocolo Alívio Já!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Garantia de 7 dias
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                <strong>Se não funcionar pra você, devolvemos 100% do seu dinheiro.</strong>
              </p>
              
              <p className="text-lg text-gray-600">
                Sem complicações. Sem perguntas. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Checkout */}
      <section id="checkout" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              {showButton ? (
                <p className="text-5xl font-bold text-green-600 mb-8">R$ 47</p>
              ) : (
                <div className="h-16 mb-8"></div>
              )}
              
              {showButton ? (
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Garantir Meu Alívio Hoje
                </button>
              ) : (
                <div className="h-16"></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="hover:text-green-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-colors">Suporte</a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            © 2024 Protocolo Alívio Já. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
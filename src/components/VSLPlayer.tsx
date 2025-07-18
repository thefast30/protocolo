import React, { useEffect } from 'react';

interface VSLPlayerProps {
  onVideoEnd?: () => void;
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ onVideoEnd }) => {
  useEffect(() => {
    // Carregar script da VSL
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/0335ec20-c9d4-4221-a36e-428ccf9162ce/players/687a84c00379461ec9c520e1/v4/player.js";
    script.async = true;
    
    script.onload = () => {
      console.log('VSL script loaded successfully');
      
      // Verificar se há eventos de fim de vídeo disponíveis
      if (onVideoEnd) {
        // Tentar detectar fim do vídeo (pode variar dependendo do player)
        const checkVideoEnd = setInterval(() => {
          const player = document.querySelector('#vid-687a84c00379461ec9c520e1');
          if (player) {
            // Aqui você pode adicionar lógica específica do player se necessário
            // Por enquanto, vamos usar um timeout como exemplo
            setTimeout(() => {
              onVideoEnd();
              clearInterval(checkVideoEnd);
            }, 300000); // 5 minutos como exemplo
          }
        }, 1000);
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [onVideoEnd]);

  return (
    <div className="max-w-xs mx-auto mb-8 md:mb-10" id="vsl-container">
      <div 
        dangerouslySetInnerHTML={{
          __html: `<vturb-smartplayer id="vid-687a84c00379461ec9c520e1" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
        }}
      />
    </div>
  );
};

export default VSLPlayer;
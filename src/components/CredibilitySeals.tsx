import React from 'react';
import { Shield, Users, Award, TrendingUp, CheckCircle, Zap } from 'lucide-react';

const CredibilitySeals = () => {
  const stats = [
    {
      icon: Users,
      number: "+50.000",
      text: "Pessoas Beneficiadas",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      number: "94%",
      text: "Taxa de Sucesso",
      color: "text-green-600"
    },
    {
      icon: Zap,
      number: "15 dias",
      text: "Resultado Médio",
      color: "text-purple-600"
    }
  ];

  const seals = [
    {
      icon: Shield,
      title: "Baseado em Ciência",
      subtitle: "Estudos comprovados",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Award,
      title: "Aprovado por Especialistas",
      subtitle: "Fisioterapeutas recomendam",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: CheckCircle,
      title: "100% Natural",
      subtitle: "Sem efeitos colaterais",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const mediaLogos = [
    "Revista Saúde",
    "Portal Bem Estar",
    "Jornal da Medicina",
    "Saúde em Foco"
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-50 mb-2 md:mb-4`}>
                <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
              </div>
              <div className={`text-xl md:text-3xl font-bold ${stat.color} mb-1 md:mb-2`}>
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium text-xs md:text-base">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Selos de Credibilidade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {seals.map((seal, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl ${seal.color} mb-3 md:mb-4`}>
                <seal.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">{seal.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{seal.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Menções na Mídia */}
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
            Mencionado na Mídia Especializada
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="bg-gray-100 px-3 py-2 md:px-6 md:py-3 rounded-lg">
                <span className="text-gray-700 font-semibold text-xs md:text-base">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySeals;
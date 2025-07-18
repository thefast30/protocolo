import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 58,
      location: "São Paulo, SP",
      image: "https://i.imgur.com/XqJTWi8.jpeg",
      rating: 5,
      text: "Há 3 anos sofria com dores no joelho. Em 2 semanas seguindo o protocolo, voltei a caminhar sem dor!"
    },
    {
      name: "João Santos",
      age: 62,
      location: "Rio de Janeiro, RJ",
      image: "https://i.imgur.com/dLdlDrW.jpeg",
      rating: 5,
      text: "Minha coluna doía muito. Depois do protocolo, me sinto 20 anos mais jovem!"
    },
    {
      name: "Ana Costa",
      age: 54,
      location: "Belo Horizonte, MG",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Gastei muito em remédios. Este protocolo me deu em 10 dias o que não consegui em anos!"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            Veja o que nossos usuários estão dizendo
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas já recuperaram sua qualidade de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-base md:text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.age} anos • {testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic text-sm md:text-base">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

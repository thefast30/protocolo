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
      text: "Há 3 anos sofria com dores terríveis no joelho. Não conseguia nem subir escadas. Em apenas 2 semanas seguindo o protocolo, voltei a caminhar sem dor!"
    },
    {
      name: "João Santos",
      age: 62,
      location: "Rio de Janeiro, RJ",
      image: "https://i.imgur.com/dLdlDrW.jpeg",
      rating: 5,
      text: "Minha coluna doía tanto que mal conseguia me abaixar. Depois do protocolo, me sinto 20 anos mais jovem. Incrível como algo tão simples funciona!"
    },
    {
      name: "Ana Costa",
      age: 54,
      location: "Belo Horizonte, MG",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Gastei uma fortuna em remédios e fisioterapia. Este protocolo me deu em 10 dias o que não consegui em anos de tratamento. Recomendo!"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Veja o que nossos usuários estão dizendo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas já recuperaram sua qualidade de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.age} anos • {testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
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

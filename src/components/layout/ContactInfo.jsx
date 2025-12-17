import React from "react";

const contactInfoData = [
  { icon: "mail.png", title: "E-mail", info: "vooid.indm@gmail.com", text: "Para información adicional sobre envíos mediante Mercado Libre o Courier Privado, no dudes en enviarnos tu consulta." },
  { icon: "phone.png", title: "Contacto", info: "+ 54 9 11 2860-5005", text: "¡Estamos para ayudarte! Si tenés preguntas sobre nuestros productos o necesitas asistencia, llamanos con confianza." },
  { icon: "map.png", title: "Oficina", info: "Int. Alfaro 208, San Isidro", text: "¡Trabajamos de forma remota! Y disponibles para atenderte en línea y responder tus consultas por cualquier medio." },
];

function ContactInfo() {
  return (
    <section className="bg-gradient-to-b from-[#110911] to-black body-font border-t border-white/10">
      <div className="container mx-auto px-5 py-16 w-[90%]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/20">
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Contacto
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Estamos para ayudarte
          </h2>
          <div className="w-20 h-0.5 bg-white/40 mx-auto"></div>
        </div>

        {/* Cards de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactInfoData.map((item, index) => (
            <div key={index} className="group">
              <div className="relative border border-white/10 p-8 hover:border-white/30 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                {/* Icono */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 blur-lg"></div>
                    <img
                      src={item.icon}
                      className="relative h-14 w-14 opacity-80 group-hover:opacity-100 transition-opacity"
                      alt={item.title}
                    />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 text-center">
                  {item.title}
                </h3>

                {/* Línea divisoria */}
                <div className="w-12 h-0.5 bg-white/30 mx-auto mb-4"></div>

                {/* Texto descriptivo */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 text-center">
                  {item.text}
                </p>

                {/* Info de contacto */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">
                    {item.info}
                  </p>
                </div>

                {/* Esquinas decorativas */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA opcional */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            ¿Preferís hablar directamente? <a href="#" className="text-white font-semibold hover:underline">Envianos un mensaje</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
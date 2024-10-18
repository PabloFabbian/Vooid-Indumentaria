import React from "react";

const contactInfoData = [
  { icon: "mail.png", title: "E-mail", info: "vooid.indm@gmail.com", text: "Para información adicional sobre envíos mediante Mercado Libre o Courier Privado, no dudes en enviarnos tu consulta." },
  { icon: "phone.png", title: "Móvil", info: "+ 54 9 11 2860-5005", text: "¡Estamos para ayudarte! Si tenés preguntas sobre nuestros productos o necesitas asistencia, llamanos con confianza." },
  { icon: "map.png", title: "Oficina", info: "Int. Alfaro 208, San Isidro", text: "¡Trabajamos de forma remota! Y disponibles para atenderte en línea y responder tus consultas por cualquier medio." },
];

function ContactInfo() {
  return (
    <section className="body-font bg-gradient-to-br from-black to-slate-800 text-gray-400">
      <div className="container mx-auto px-5 pb-12 pt-6">
        <div className="-m-4 flex flex-wrap justify-center text-center">
          {contactInfoData.map((item, index) => (
            <div key={index} className="w-full p-4 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg px-4 py-3">
                <img src={item.icon} className="mb-6 inline-block h-12 w-12" />
                <h2 className="title-font mb-4 text-2xl font-medium text-white md:text-3xl">
                  {item.title}
                </h2>
                <p className="mb-2 text-sm md:text-base">{item.text}</p>
                <p className="leading-relaxed text-slate-300">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

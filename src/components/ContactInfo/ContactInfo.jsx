import React from 'react';

const contactInfoData = [
    { icon: 'mail.png', title: 'E-mail', info: 'vooid.indm@gmail.com', text: 'Para información adicional sobre envíos mediante Mercado Libre o Courier Privado, no dudes en enviarnos tu consulta.'},
    { icon: 'phone.png', title: 'Móvil', info: '+ 54 9 11 2860-5005', text: '¡Estamos para ayudarte! Si tenés preguntas sobre nuestros productos o necesitas asistencia, llamanos con confianza.'},
    { icon: 'map.png', title: 'Oficina', info: 'Int. Alfaro 208, San Isidro', text: '¡Trabajamos de forma remota! Y disponibles para atenderte en línea y responder tus consultas por cualquier medio.'}
];

function ContactInfo() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 pb-24 pt-10 mx-auto">
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    {contactInfoData.map((item, index) => (
                        <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-3 rounded-lg">
                                <img src={item.icon} className="w-12 h-12 mb-6 inline-block" />
                                <h2 className="title-font font-medium text-2xl md:text-3xl text-white mb-4">{item.title}</h2>
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
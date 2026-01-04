import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Cambiamos esto
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Ruler, HelpCircle, Users, Target, Heart, Award } from 'lucide-react';

const ShopInfoPage = () => {
    const { section } = useParams(); // Leemos /info/guia-talles -> section = "guia-talles"
    const navigate = useNavigate();

    // Mapeo de nombres de URL a IDs internos
    const sectionMap = {
        'como-comprar': 'how-to-buy',
        'guia-talles': 'size-guide',
        'faq': 'faq',
        'nosotros': 'about-us'
    };

    const [activeSection, setActiveSection] = useState(sectionMap[section] || 'how-to-buy');

    useEffect(() => {
        if (section && sectionMap[section]) {
            setActiveSection(sectionMap[section]);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [section]);

    const sections = [
        {
            id: 'how-to-buy',
            title: 'Cómo Comprar',
            icon: <ShoppingBag className="w-6 h-6" />,
            content: {
                intro: 'Comprar en Vooid es simple y seguro. Seguí estos pasos para completar tu pedido:',
                steps: [
                    {
                        title: 'Explorá nuestro catálogo',
                        description: 'Navegá por nuestra colección de productos y encontrá lo que buscás.',
                        details: [
                            'Usá los filtros por categoría, color y disponibilidad',
                            'Cambiá entre vista de grilla y lista',
                            'Hacé click en cualquier producto para ver detalles completos'
                        ]
                    },
                    {
                        title: 'Agregá al carrito',
                        description: 'Seleccioná tus opciones y añadí productos a tu carrito.',
                        details: [
                            'Elegí color y talle según tu preferencia',
                            'Ajustá la cantidad deseada',
                            'Revisá los detalles del producto antes de agregar'
                        ]
                    },
                    {
                        title: 'Revisá tu carrito',
                        description: 'Verificá todos los productos antes de finalizar.',
                        details: [
                            'Podés modificar cantidades o eliminar productos',
                            'Aplicá cupones de descuento si tenés',
                            'Verificá el total a pagar'
                        ]
                    },
                    {
                        title: 'Completá tus datos',
                        description: 'Ingresá la información de envío y contacto.',
                        details: [
                            'Nombre completo y documento',
                            'Dirección de entrega detallada',
                            'Email y teléfono de contacto'
                        ]
                    },
                    {
                        title: 'Elegí tu método de pago',
                        description: 'Seleccioná cómo querés pagar tu pedido.',
                        details: [
                            'Mercado Pago: tarjetas y cuotas sin interés',
                            'Transferencia: sin comisión adicional',
                            'Efectivo: Rapipago o Pago Fácil'
                        ]
                    },
                    {
                        title: 'Confirmá tu pedido',
                        description: 'Finalizá la compra y recibí tu confirmación.',
                        details: [
                            'Te enviaremos un email con los detalles',
                            'Podés seguir el estado en "Mis Pedidos"',
                            'Recibirás updates del envío'
                        ]
                    }
                ],
                tips: [
                    { text: 'Todas las compras están protegidas con encriptación SSL' },
                    { text: 'Envío gratis en compras superiores a $50.000' },
                    { text: 'Cambios sin cargo dentro de los 30 días' },
                    { text: 'Hasta 12 cuotas sin interés con tarjetas seleccionadas' }
                ]
            }
        },
        {
            id: 'size-guide',
            title: 'Guía de Talles',
            icon: <Ruler className="w-6 h-6" />,
            content: {
                intro: 'Encontrá tu talle perfecto con nuestra guía de medidas. Todas las medidas están en centímetros.',
                categories: [
                    {
                        name: 'Remeras y Tops',
                        sizes: [
                            { size: 'XS', chest: '88-92', length: '68', shoulder: '42' },
                            { size: 'S', chest: '92-96', length: '70', shoulder: '44' },
                            { size: 'M', chest: '96-102', length: '72', shoulder: '46' },
                            { size: 'L', chest: '102-108', length: '74', shoulder: '48' },
                            { size: 'XL', chest: '108-114', length: '76', shoulder: '50' },
                            { size: 'XXL', chest: '114-120', length: '78', shoulder: '52' }
                        ],
                        measurements: [
                            { label: 'Contorno de pecho', key: 'chest' },
                            { label: 'Largo total', key: 'length' },
                            { label: 'Ancho de hombros', key: 'shoulder' }
                        ]
                    },
                    {
                        name: 'Hoodies y Buzos',
                        sizes: [
                            { size: 'XS', chest: '92-96', length: '65', sleeve: '60' },
                            { size: 'S', chest: '96-102', length: '67', sleeve: '62' },
                            { size: 'M', chest: '102-108', length: '69', sleeve: '64' },
                            { size: 'L', chest: '108-114', length: '71', sleeve: '66' },
                            { size: 'XL', chest: '114-120', length: '73', sleeve: '68' },
                            { size: 'XXL', chest: '120-126', length: '75', sleeve: '70' }
                        ],
                        measurements: [
                            { label: 'Contorno de pecho', key: 'chest' },
                            { label: 'Largo total', key: 'length' },
                            { label: 'Largo de manga', key: 'sleeve' }
                        ]
                    }
                ],
                howToMeasure: [
                    {
                        title: 'Contorno de pecho',
                        description: 'Medí alrededor de la parte más ancha del pecho, pasando por las axilas.'
                    },
                    {
                        title: 'Largo total',
                        description: 'Medí desde el punto más alto del hombro hasta el borde inferior de la prenda.'
                    },
                    {
                        title: 'Ancho de hombros',
                        description: 'Medí de hombro a hombro, siguiendo la costura.'
                    },
                    {
                        title: 'Largo de manga',
                        description: 'Medí desde el hombro hasta el puño, con el brazo ligeramente flexionado.'
                    }
                ],
                tips: [
                    'Si estás entre dos talles, te recomendamos elegir el mayor para mayor comodidad',
                    'Nuestras prendas tienen un corte oversize regular fit',
                    'Todas las medidas pueden variar ±2cm debido al proceso de confección',
                    'Consultá la descripción de cada producto para información específica'
                ]
            }
        },
        {
            id: 'faq',
            title: 'Preguntas Frecuentes',
            icon: <HelpCircle className="w-6 h-6" />,
            content: {
                intro: 'Encontrá respuestas a las preguntas más comunes sobre nuestros productos y servicios.',
                categories: [
                    {
                        name: 'Compra y Pago',
                        questions: [
                            {
                                q: '¿Qué métodos de pago aceptan?',
                                a: 'Aceptamos Mercado Pago (tarjetas de crédito y débito), transferencia bancaria y pago en efectivo a través de Rapipago o Pago Fácil.'
                            },
                            {
                                q: '¿Puedo pagar en cuotas?',
                                a: 'Sí, con Mercado Pago podés pagar hasta en 12 cuotas sin interés con bancos seleccionados. Las opciones de cuotas se mostrarán al momento del pago.'
                            },
                            {
                                q: '¿Es seguro comprar en Vooid?',
                                a: 'Absolutamente. Todas nuestras transacciones están protegidas con encriptación SSL de 256 bits. No almacenamos datos de tarjetas en nuestros servidores.'
                            }
                        ]
                    },
                    {
                        name: 'Envíos',
                        questions: [
                            {
                                q: '¿Cuánto tarda el envío?',
                                a: 'Los envíos demoran entre 3 a 7 días hábiles dependiendo de tu ubicación. Recibirás un código de seguimiento por email.'
                            },
                            {
                                q: '¿Hacen envíos a todo el país?',
                                a: 'Sí, realizamos envíos a toda Argentina a través de correo privado. El costo se calcula automáticamente según tu código postal.'
                            },
                            {
                                q: '¿El envío es gratis?',
                                a: 'Sí, ofrecemos envío gratis en compras superiores a $50.000. Para montos menores, el costo se calcula en el checkout.'
                            }
                        ]
                    },
                    {
                        name: 'Cambios y Devoluciones',
                        questions: [
                            {
                                q: '¿Puedo cambiar un producto?',
                                a: 'Sí, aceptamos cambios dentro de los 30 días posteriores a la compra. El producto debe estar sin uso, con etiquetas y en su empaque original.'
                            },
                            {
                                q: '¿Los cambios tienen costo?',
                                a: 'No, el primer cambio es sin cargo. El costo de envío para la devolución corre por nuestra cuenta dentro del AMBA.'
                            },
                            {
                                q: '¿Hacen devoluciones de dinero?',
                                a: 'Sí, en caso de que el producto tenga defectos de fabricación o no sea lo que pediste. El reembolso se procesa en 5-10 días hábiles.'
                            }
                        ]
                    },
                    {
                        name: 'Productos',
                        questions: [
                            {
                                q: '¿Qué significa "Pre Order"?',
                                a: 'Los productos en pre-orden están próximos a llegar a nuestro stock. Al comprarlos, asegurás tu unidad y la recibirás cuando llegue el stock (generalmente 7-15 días).'
                            },
                            {
                                q: '¿Cómo sé si un producto es original?',
                                a: 'Todos nuestros productos son 100% originales y vienen con certificado de autenticidad. Cada prenda incluye etiquetas holográficas anti-falsificación.'
                            },
                            {
                                q: '¿Puedo ver el producto antes de comprarlo?',
                                a: 'Actualmente operamos solo online, pero podés ver todas las fotos y detalles en la página del producto. Si tenés dudas, contactanos por WhatsApp.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: 'about-us',
            title: 'Sobre Nosotros',
            icon: <Users className="w-6 h-6" />,
            content: {
                intro: 'Conoce nuestra historia, misión y valores que nos hacen únicos en el mundo de la moda.',
                story: {
                    title: 'Nuestra Historia',
                    description: 'Vooid nació en 2020 como un sueño de dos amigos apasionados por la moda y la expresión personal. Lo que comenzó como un pequeño proyecto en un garaje hoy se ha transformado en una marca reconocida por su estilo único y calidad excepcional.',
                    milestones: [
                        { year: '2020', event: 'Fundación de Vooid en Buenos Aires' },
                        { year: '2021', event: 'Primera colección "Urban Genesis"' },
                        { year: '2022', event: 'Expansión a nivel nacional' },
                        { year: '2023', event: 'Lanzamiento de línea sostenible' },
                        { year: '2024', event: '+10,000 clientes satisfechos' }
                    ]
                },
                missionVision: {
                    mission: {
                        title: 'Nuestra Misión',
                        description: 'Ofrecer prendas que no solo visten, sino que expresan. Crear moda accesible que empodere a las personas a mostrar su auténtico ser sin compromisos.',
                        icon: <Target className="w-8 h-8" />
                    },
                    vision: {
                        title: 'Nuestra Visión',
                        description: 'Ser la marca líder en moda urbana sostenible en Latinoamérica, reconocida por nuestra innovación, calidad y compromiso social.',
                        icon: <Award className="w-8 h-8" />
                    }
                },
                values: [
                    {
                        title: 'Autenticidad',
                        description: 'Cada diseño cuenta una historia real. No seguimos tendencias, las creamos.',
                        icon: '✨'
                    },
                    {
                        title: 'Calidad',
                        description: 'Materiales premium y confección meticulosa en cada prenda.',
                        icon: '⭐'
                    },
                    {
                        title: 'Sostenibilidad',
                        description: 'Compromiso con procesos éticos y materiales eco-friendly.',
                        icon: '🌱'
                    },
                    {
                        title: 'Comunidad',
                        description: 'Más que clientes, somos una familia que crece junta.',
                        icon: '🤝'
                    }
                ],
                team: {
                    title: 'Nuestro Equipo',
                    description: 'Un grupo diverso de diseñadores, artesanos y apasionados por la moda.',
                    members: [
                        { name: 'Ana López', role: 'Diseñadora Principal', expertise: 'Diseño sostenible' },
                        { name: 'Carlos Ruiz', role: 'Director Creativo', expertise: 'Trend forecasting' },
                        { name: 'María González', role: 'Producción', expertise: 'Control de calidad' },
                        { name: 'Diego Martínez', role: 'Atención al Cliente', expertise: 'Experiencia del usuario' }
                    ]
                },
                commitment: {
                    title: 'Nuestro Compromiso',
                    points: [
                        'Producción ética y condiciones laborales justas',
                        'Uso de materiales reciclados en un 40% de nuestra colección',
                        'Packaging 100% biodegradable',
                        'Programa de reciclaje de prendas usadas',
                        'Donación del 2% de utilidades a proyectos sociales'
                    ]
                }
            }
        }
    ];

    const currentSection = sections.find(s => s.id === activeSection) || sections[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0f1a] via-[#2e1c2b] to-[#110911] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="inline-block mb-3">
                        <div className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/20">
                            <span className="text-[10px] font-semibold tracking-widest text-gray-300 uppercase">
                                {activeSection === 'about-us' ? 'La Marca' : 'Centro de ayuda'}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-3">
                        {activeSection === 'about-us' ? 'Sobre Vooid' : 'Información de Compra'}
                    </h1>
                    <div className="w-20 h-0.5 bg-white/40 mb-4"></div>
                    <p className="text-sm text-gray-400">
                        {activeSection === 'about-us'
                            ? 'Descubre la esencia de nuestra marca'
                            : 'Todo lo que necesitás saber para comprar en Vooid'}
                    </p>
                </motion.div>

                {/* Navigation Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex flex-col sm:flex-row gap-3">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                // CAMBIO: Ahora navegamos a la URL en lugar de solo cambiar el estado local
                                onClick={() => navigate(`/info/${section.url}`)}
                                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 ${activeSection === section.id
                                    ? 'bg-white/10 border-white/40 text-white'
                                    : 'bg-white/5 border-white/20 text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {section.icon}
                                <span className="font-medium">{section.title}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                            <div className={`w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-lg flex items-center justify-center`}>
                                {currentSection.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">{currentSection.title}</h2>
                                <p className="text-white/60 text-sm">{currentSection.content.intro}</p>
                            </div>
                        </div>

                        {/* Renderizado Condicional de Secciones */}
                        {activeSection === 'how-to-buy' && (
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    {currentSection.content.steps.map((step, index) => (
                                        <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-purple-300 font-bold text-lg">{index + 1}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                                    <p className="text-white/70 mb-3">{step.description}</p>
                                                    <ul className="space-y-2">
                                                        {step.details.map((detail, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                                                                <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                </svg>
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
                                        <HelpCircle className="w-5 h-5" />
                                        Beneficios
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {currentSection.content.tips.map((tip, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/10">
                                                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Award className="w-4 h-4 text-blue-400" />
                                                </div>
                                                <p className="text-sm text-white/80">{tip.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'size-guide' && (
                            <div className="space-y-8">
                                {currentSection.content.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="space-y-4">
                                        <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="border-b border-white/20">
                                                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Talle</th>
                                                        {category.measurements.map((measurement, idx) => (
                                                            <th key={idx} className="text-left py-3 px-4 text-white/60 text-sm font-medium">{measurement.label}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {category.sizes.map((size, idx) => (
                                                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                                            <td className="py-3 px-4 text-white font-bold">{size.size}</td>
                                                            {category.measurements.map((measurement, midx) => (
                                                                <td key={midx} className="py-3 px-4 text-white/80">{size[measurement.key]} cm</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-purple-300 mb-4">Cómo medir correctamente</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentSection.content.howToMeasure.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-purple-300 text-xs font-bold">{index + 1}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                                    <p className="text-white/60 text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'faq' && (
                            <div className="space-y-6">
                                {currentSection.content.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="space-y-3">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500"></div>
                                            {category.name}
                                        </h3>
                                        {category.questions.map((item, qIndex) => (
                                            <details key={qIndex} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                                                <summary className="flex items-center justify-between p-5 cursor-pointer">
                                                    <h4 className="text-white font-medium pr-4">{item.q}</h4>
                                                    <ChevronDown className="w-5 h-5 text-white/60 group-open:rotate-180 transition-transform flex-shrink-0" />
                                                </summary>
                                                <div className="px-5 pb-5 pt-2">
                                                    <p className="text-white/70 leading-relaxed">{item.a}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeSection === 'about-us' && (
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-pink-400" />
                                        {currentSection.content.story.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {currentSection.content.story.description}
                                    </p>
                                    <div className="relative">
                                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                                        <div className="space-y-6 pl-10">
                                            {currentSection.content.story.milestones.map((milestone, index) => (
                                                <div key={index} className="relative">
                                                    <div className="absolute -left-14 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
                                                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                                                    </div>
                                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                                        <p className="text-white">{milestone.event}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                                <Target className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <h4 className="text-lg font-bold text-white">{currentSection.content.missionVision.mission.title}</h4>
                                        </div>
                                        <p className="text-white/70">{currentSection.content.missionVision.mission.description}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                                <Award className="w-6 h-6 text-purple-400" />
                                            </div>
                                            <h4 className="text-lg font-bold text-white">{currentSection.content.missionVision.vision.title}</h4>
                                        </div>
                                        <p className="text-white/70">{currentSection.content.missionVision.vision.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-2">¿Todavía tenés dudas?</h3>
                        <p className="text-white/60 mb-4">Nuestro equipo está disponible para ayudarte</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={() => window.location.href = 'https://wa.me/1234567890'}
                                className="px-6 py-3 bg-white text-[#2e1c2b] font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                WhatsApp
                            </button>
                            <button
                                // CAMBIO: Ruta limpia también aquí
                                onClick={() => navigate('/productos')}
                                className="px-6 py-3 border border-white/30 text-white hover:bg-white/5 transition-all duration-300"
                            >
                                Ir a la tienda
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ShopInfoPage;
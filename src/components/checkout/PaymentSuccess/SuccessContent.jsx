// src/components/checkout/PaymentSuccess/SuccessContent.jsx
import React from 'react';
import { Shield, CreditCard, Headphones, Mail, Phone, MessageSquare } from 'lucide-react';

const SuccessContent = ({ orderNumber }) => { // Agregar prop opcional
    return (
        <div className="space-y-6">
            {/* Información de soporte */}
            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                <h3 className="text-white font-medium mb-4">¿Necesitas ayuda?</h3>

                <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10">
                        <Headphones className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-white font-medium mb-1">Soporte al Cliente</p>
                            <p className="text-white/70 text-sm">
                                Contacta a nuestro equipo de soporte para cualquier consulta sobre tu pedido.
                            </p>
                            <div className="flex flex-col gap-1 mt-2">
                                <a
                                    href="mailto:soporte@vooid.com"
                                    className="text-blue-400 text-sm hover:text-blue-300 inline-flex items-center gap-2"
                                >
                                    <Mail className="w-3 h-3" />
                                    soporte@vooid.com
                                </a>
                                <a
                                    href="tel:+541112345678"
                                    className="text-blue-400 text-sm hover:text-blue-300 inline-flex items-center gap-2"
                                >
                                    <Phone className="w-3 h-3" />
                                    +54 11 1234-5678
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10">
                        <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-white font-medium mb-1">Garantía de Compra</p>
                            <p className="text-white/70 text-sm">
                                Todos nuestros productos tienen garantía de 30 días y políticas de cambio flexibles.
                            </p>
                            <p className="text-white/50 text-xs mt-2">
                                Menciona tu número de orden al contactarnos
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10">
                        <CreditCard className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-white font-medium mb-1">Pagos Seguros</p>
                            <p className="text-white/70 text-sm">
                                Tu información de pago está protegida con encriptación de nivel bancario.
                            </p>
                            <p className="text-white/50 text-xs mt-2">
                                Si tienes problemas con el pago, contáctanos inmediatamente
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Información importante */}
            <div className="p-5 bg-blue-500/10 border border-blue-500/20">
                <p className="text-blue-300 font-medium mb-2">Información importante:</p>
                <ul className="text-blue-200/80 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                        <MessageSquare className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>
                            <strong>Guarda tu número de orden</strong> ({orderNumber || 'VOOID-XXXXX'}) para futuras consultas
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <MessageSquare className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>
                            Revisa tu carpeta de spam si no recibes el email de confirmación en los próximos 5 minutos
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <MessageSquare className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>
                            Los tiempos de envío son estimados y pueden variar según tu ubicación
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <MessageSquare className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>
                            Recibirás un email con el número de seguimiento cuando tu pedido sea despachado
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SuccessContent;
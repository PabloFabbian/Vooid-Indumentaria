import React, { useState, useEffect } from 'react';
import { availableColors, availableSizes, sizeGuide, productCareDetails, additionalInfo } from './productsData';

const ProductModal = ({ product, onClose, onAddToCart, isExiting }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [showCopiedToast, setShowCopiedToast] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (product) {
            setSelectedColor(product.color || 'Negro');
            setSelectedSize('M');
        }

        return () => window.removeEventListener('resize', checkMobile);
    }, [product]);

    if (!product) return null;

    const formatPrice = (price) => `$${price.toLocaleString("es-AR")}`;

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    const handleShare = async () => {
        const productUrl = window.location.href;
        const shareText = `¡Mirá este producto de Vooid! ${product.name} - ${formatPrice(product.price)}`;

        if (isMobile && navigator.share) {
            try {
                await navigator.share({ title: product.name, text: shareText, url: productUrl });
            } catch (error) {
                fallbackCopyToClipboard(shareText);
            }
        } else {
            fallbackCopyToClipboard(shareText);
        }
    };

    const fallbackCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setShowCopiedToast(true);
                setTimeout(() => setShowCopiedToast(false), 2000);
            })
            .catch(() => {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                setShowCopiedToast(true);
                setTimeout(() => setShowCopiedToast(false), 2000);
            });
    };

    const handleSizeGuideClick = () => {
        const guideText = Object.entries(sizeGuide)
            .map(([size, measurements]) => `${size}: ${measurements}`)
            .join('\n');
        alert(`Guía de talles:\n\n${guideText}`);
    };

    const handleAddToCart = () => {
        if (product.availability === "Sin Stock") return;

        const productToAdd = {
            ...product,
            quantity,
            selectedColor,
            selectedSize
        };

        onAddToCart?.(productToAdd);
    };

    return (
        <>
            {showCopiedToast && (
                <div className="fixed top-4 right-4 z-50 bg-[#2d1b2a]/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-white/20 flex items-center gap-2 animate-fadeIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ¡Enlace copiado al portapapeles!
                </div>
            )}

            <div
                className={`relative bg-gradient-to-b from-[#2d1b2a] to-[#110911] backdrop-blur-xl rounded-lg max-w-4xl w-full shadow-2xl border border-white/10 overflow-hidden my-8 ${isExiting ? 'animate-modalToCartTransform' : 'animate-scaleIn'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none"></div>

                <button
                    className="absolute top-6 right-6 z-10 w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                    onClick={onClose}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col lg:flex-row p-8 lg:p-10 gap-8 lg:gap-10">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative overflow-hidden border border-white/10 mb-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover bg-gradient-to-br from-[#141318] to-[#2B2824]"
                            />
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40"></div>

                            {product.availability === "Pre Order" && (
                                <div className="absolute top-5 right-5 bg-[#2d1b2a]/95 backdrop-blur-md text-white text-xs font-medium px-4 py-2 border border-white/20 shadow-lg">
                                    Pre Order
                                </div>
                            )}
                            {product.availability === "En Stock" && (
                                <div className="absolute top-5 right-5 bg-green-900/80 backdrop-blur-md text-green-200 text-xs font-medium px-4 py-2 border border-green-500/20 shadow-lg">
                                    En Stock
                                </div>
                            )}
                            {product.availability === "Sin Stock" && (
                                <div className="absolute top-5 right-5 bg-gray-900/80 backdrop-blur-md text-gray-300 text-xs font-medium px-4 py-2 border border-gray-600/20 shadow-lg">
                                    Sin Stock
                                </div>
                            )}
                        </div>

                        {showDetails && product.details && (
                            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 backdrop-blur-lg flex items-center justify-center p-6 animate-fadeIn z-10 rounded-lg border border-white/20">
                                <div className="w-full h-full flex flex-col">
                                    <button
                                        onClick={() => setShowDetails(false)}
                                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full border border-white/20"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div className="flex-1 overflow-y-auto py-4 pr-2">
                                        <h3 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/20">Detalles Técnicos</h3>
                                        <div className="space-y-3">
                                            {product.details.description.map((detail, index) => (
                                                <div key={index} className="flex items-start gap-2 group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></div>
                                                    <p className="text-sm text-white/90 leading-relaxed group-hover:text-white transition-colors">{detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/20">
                                            <h4 className="text-sm font-semibold text-white/80 mb-3">Cuidado del producto</h4>
                                            <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
                                                {productCareDetails.map((care, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{care.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col relative">
                        <div className="inline-block mb-4 self-start">
                            <span className="px-4 py-1.5 bg-white/5 border border-white/20 text-gray-300 text-xs font-medium tracking-wider uppercase">
                                {product.type}
                            </span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                            {product.name}
                        </h2>

                        <div className="mb-6">
                            <p className="text-2xl lg:text-3xl font-black text-white">
                                {formatPrice(product.price)}
                            </p>
                        </div>

                        <div className="w-16 h-0.5 bg-white/30 mb-6"></div>

                        <div className="grid grid-cols-2 gap-5 mb-6">
                            <div className="relative">
                                <label className="block text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide">Color</label>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:border-white/40 transition-all appearance-none"
                                        value={selectedColor}
                                        onChange={(e) => setSelectedColor(e.target.value)}
                                    >
                                        {availableColors.map(color => (
                                            <option key={color} value={color}>{color}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="block text-xs text-gray-400 font-medium uppercase tracking-wide">Talle</label>
                                    <button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1" onClick={handleSizeGuideClick}>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Guía de talles
                                    </button>
                                </div>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:border-white/40 transition-all appearance-none"
                                        value={selectedSize}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                    >
                                        {availableSizes.map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide">Cantidad</label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={decrementQuantity}
                                    className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all font-semibold"
                                >
                                    −
                                </button>
                                <span className="text-xl font-semibold text-white min-w-[1.5rem] text-center">{quantity}</span>
                                <button
                                    onClick={incrementQuantity}
                                    className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all font-semibold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <button
                                onClick={handleAddToCart}
                                className="relative w-full py-3.5 bg-white text-[#2d1b2a] border border-white/20 font-semibold text-sm hover:bg-gray-100 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white group"
                                disabled={product.availability === "Sin Stock"}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {product.availability === "Sin Stock" ? "Agotado" : "Añadir al carrito"}
                                    {product.availability !== "Sin Stock" && (
                                        <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setShowDetails(!showDetails)}
                                    className={`py-3 backdrop-blur-sm border font-medium text-xs transition-all flex items-center justify-center gap-2 group ${showDetails ? 'bg-white/20 border-white/40 text-white' : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'}`}
                                >
                                    <svg className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : 'group-hover:scale-110'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {showDetails ? "Ocultar Detalles" : "Detalles"}
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium text-xs hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 group"
                                >
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                    Compartir
                                </button>
                            </div>
                        </div>

                        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 space-y-3">
                            {additionalInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-xs text-gray-400 leading-relaxed">{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductModal;
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Tag, Package, CheckCircle } from 'lucide-react';

const ProductList = ({ products, onProductClick, formatPrice }) => {
    if (products.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                    <Package className="w-12 h-12 text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No se encontraron productos</h3>
                <p className="text-white/60">Intenta con otros filtros o categorías</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                >
                    <div className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="flex flex-col md:flex-row">
                            {/* Imagen del producto */}
                            <div className="md:w-1/4 relative overflow-hidden cursor-pointer" onClick={() => onProductClick(product)}>
                                <div className="aspect-square bg-gradient-to-br from-[#2c1b29] to-[#1a1018] relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-3 left-3">
                                        {product.availability === 'En Stock' && (
                                            <span className="px-2 py-1 rounded text-xs bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30">
                                                En Stock
                                            </span>
                                        )}
                                        {product.availability === 'Pre Order' && (
                                            <span className="px-2 py-1 rounded text-xs bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
                                                Pre Order
                                            </span>
                                        )}
                                        {product.availability === 'Sin Stock' && (
                                            <span className="px-2 py-1 rounded text-xs bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-300 border border-red-500/30">
                                                Sin Stock
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Información del producto */}
                            <div className="md:w-2/3 p-6">
                                <div className="flex flex-col h-full">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                                    {product.name}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-white/60">{product.type}</span>
                                                    <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/80">
                                                        {product.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-white mb-1">
                                                    {formatPrice(product.price)}
                                                </div>
                                                <div className="text-xs text-white/40">ARS</div>
                                            </div>
                                        </div>

                                        {/* Descripción breve */}
                                        <p className="text-white/70 text-sm line-clamp-2">
                                            {product.details.description[0]}
                                        </p>
                                    </div>

                                    {/* Detalles */}
                                    <div className="mb-4">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                    <Tag className="w-4 h-4 text-white/60" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/40">Categoría</div>
                                                    <div className="text-sm text-white">{product.category}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.color === 'Negro' ? '#000' : product.color === 'Blanco' ? '#fff' : '#ccc' }}></div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/40">Color</div>
                                                    <div className="text-sm text-white">{product.color}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                    <CheckCircle className="w-4 h-4 text-white/60" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/40">Disponibilidad</div>
                                                    <div className={`text-sm ${product.availability === 'En Stock' ? 'text-emerald-300' : product.availability === 'Pre Order' ? 'text-amber-300' : 'text-red-300'}`}>
                                                        {product.availability}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Acciones */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                        <button
                                            onClick={() => onProductClick(product)}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white hover:border-white/40 hover:bg-white/15 transition-all duration-300 group"
                                        >
                                            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-medium">Ver detalles</span>
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-white/40">ID: {product.id}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductList;
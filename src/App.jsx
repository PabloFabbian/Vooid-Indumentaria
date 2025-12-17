import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import "./styles/globals.css";

// Layout Components (CartDrawer ahora está dentro de Navbar)
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// Common Components
import WhatsappButton from "./components/common/Whatsapp/WhatsappButton";

// Pages
import HomePage from "./components/home/HomePage";
import ProductsPage from "./components/shop/VooidShop";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-[#2e1c2b] to-[#110911] flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16 md:pt-20"> {/* Añade padding-top para el navbar fijo */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment/success" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <WhatsappButton />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
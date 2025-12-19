import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from 'sonner';
import "./styles/globals.css";

// Layout Components
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// Common Components
import WhatsappButton from "./components/common/Whatsapp/WhatsappButton";
import ScrollToTop from "./components/common/ScrollToTop";

// Pages
import HomePage from "./components/home/HomePage";
import ProductsPage from "./components/shop/VooidShop";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import PaymentSuccessPage from "./components/checkout/PaymentSuccessPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-[#2e1c2b] to-[#110911] flex flex-col">
          <Navbar />
          <ScrollToTop />
          <main className="flex-grow pt-16 md:pt-12">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment/success" element={<PaymentSuccessPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <WhatsappButton />
          <Footer />
          <Toaster position="top-center" />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
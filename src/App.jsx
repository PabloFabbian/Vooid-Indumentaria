import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar/Navbar";
import MyFooter from "./components/Footer/MyFooter";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import VooidShop from "./components/VooidShop/VooidShop";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<VooidShop />} />
      </Routes>
      <Whatsapp />
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
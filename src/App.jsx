import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/Navbar/NavBar';
import MyFooter from './components/Footer/MyFooter';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            <MyFooter />
        </BrowserRouter>
    );
}

export default App;
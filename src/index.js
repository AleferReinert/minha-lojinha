import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Cart from "./pages/Cart";
import Favorites from './pages/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';

export default function App() {
    return (
        <BrowserRouter basename='/react-commerce'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/lista-de-desejos" element={<Favorites />} />
                    <Route path="/detalhes-do-produto" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

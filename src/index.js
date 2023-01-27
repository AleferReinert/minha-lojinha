import React, {useLayoutEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import Cart from "./pages/cart/Cart";
import Favorites from './pages/favorites/Favorites';
import ProductDetails from './pages/productDetails/ProductDetails';
import Support from './pages/support/Support';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Category from './pages/category/Category';

// Rola a página para o topo ao mudar de rota
const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

export default function App() {
    return (
        <BrowserRouter basename='/react-commerce'>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="/carrinho" element={<Cart id='page-cart' />} />
                        <Route path="/lista-de-desejos" element={<Favorites />} />
                        <Route path="/produto/:name/:code" element={<ProductDetails id='page-product-details' />} />
                        <Route path="/ajuda/:tab" element={<Support />} />
                        <Route path="/sobre-nos" element={<About />} />
                        <Route path="/entrar" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/categoria/:category" element={<Category />} />
                    </Route>
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
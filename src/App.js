import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { BannerCarouselDesktop } from './components/BannerCarouselDesktop';
import { ProductList } from './components/ProductList';
import { Newsletter } from './components/Newsletter';
import { BannerCarouselMobile } from './components/BannerCarouselMobile';
import { BrandsCarousel } from './components/BrandsCarousel';
import { BackToTheTopOfThePage } from './components/BackToTheTopOfThePage';

const user = {
    firstName: 'João',
    lastName: 'da Silva',
    age: 28
}

function App() {
    return (
        <div className="App">
            <Header isLoggedIn={true} username={user.firstName} />
            <BannerCarouselMobile />
            <BannerCarouselDesktop />
            <section className='container'>
                <div className="title-section">
                    <h1>Melhores ofertas</h1>
                </div>
                <ProductList />
            </section>
            <section className='container'>
                <div className="title-section">
                    <h1>Mais vendidos</h1>
                </div>
                <ProductList />
            </section>
            <BrandsCarousel />
            <section className='container'>
                <div className="title-section">
                    <h1>Lançamentos</h1>
                </div>
                <ProductList />
            </section>
            <Newsletter />
            <Footer />
            <BackToTheTopOfThePage />
        </div>
    );
}

export default App;

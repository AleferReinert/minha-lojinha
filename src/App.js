import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ProductList } from './components/ProductList';
import { Newsletter } from './components/Newsletter';

const user = {
    firstName: 'João',
    lastName: 'da Silva',
    age: 28
}

function App() {
    return (
        <div className="App">
            <Header isLoggedIn={true} username={user.firstName} />
            <section className='container'>
                <div className="title-section">
                    <h1>Populares</h1>
                </div>
                <ProductList />
            </section>
            <section className='container'>
                <div className="title-section">
                    <h1>Melhores ofertas</h1>
                </div>
                <ProductList />
            </section>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;

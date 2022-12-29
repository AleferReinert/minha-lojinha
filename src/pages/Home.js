import { BannerCarouselMobile } from '../components/BannerCarouselMobile';
import { BannerCarouselDesktop } from '../components/BannerCarouselDesktop';
import { ProductList } from '../components/ProductList';
import { BrandsCarousel } from '../components/BrandsCarousel';
import { Newsletter } from '../components/Newsletter';

const Home = () => {
    return(
        <>
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
        </>
    )
};

export default Home;
import { BannerCarousel } from '../../components/bannerCarousel/BannerCarousel';
import { ProductList } from '../../components/productList/ProductList';
import { BrandsCarousel } from '../../components/brandsCarousel/BrandsCarousel';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { Title } from '../../components/title/Title';

const Home = () => {
    return (
        <>
            <BannerCarousel device='mobile' controls={false} />
            <BannerCarousel device='desktop' />
            <section className='container'>
                <Title type='primary' title='Melhores ofertas' />
                <ProductList />
            </section>
            <section className='container'>
                <Title type='primary' title='Mais vendidos' />
                <ProductList />
            </section>
            <BrandsCarousel />
            <section className='container'>
                <Title type='primary' title='Lançamentos' />
                <ProductList />
            </section>
            <Newsletter />
        </>
    )
};

export default Home;
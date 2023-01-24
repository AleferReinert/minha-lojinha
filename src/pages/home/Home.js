import { BannerCarousel } from '../../components/BannerCarousel';
import { ProductList } from '../../components/ProductList';
import { BrandsCarousel } from '../../components/BrandsCarousel';
import { Newsletter } from '../../components/Newsletter';
import { Title } from '../../components/Title';

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
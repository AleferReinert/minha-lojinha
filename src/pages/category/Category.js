import { useParams } from 'react-router-dom';
import { ProductList } from '../../components/productList/ProductList';
import { Title } from '../../components/title/Title';

const Category = () => {
    const { category }= useParams();

    return (
        <>
            <Title type='secondary' title={category} />
            <section className='container'>
                <ProductList />
                <ProductList />
                <ProductList />
            </section>
        </>
    )
};

export default Category;
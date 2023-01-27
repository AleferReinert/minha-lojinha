import './ProductDetails.scss';
import { ProductList } from '../../components/productList/ProductList';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { Title } from '../../components/title/Title';
import { Stars } from '../../components/stars/Stars';
import { ImagesCarousel } from './ImagesCarousel'
import { Sizes } from './Sizes';
import { Colors } from './Colors';
import { calculateParcel, formatPrice, calculateRating } from '../../components/Global';
import { Rating } from './Rating';
import { useNavigate, useParams } from "react-router-dom";
import products from '../../dataProducts.json';

// Procura o produto na lista a partir do código
function searchProduct(list, id) {
    for(let item of list) {
        if(item.code === id) {
            return item;
        }
    }
}

function ProductDetails(props) {
    const { code } = useParams();
    const product = searchProduct(products, code);

    document.body.id = props.id;
    const ProductTitle = props => <h1 id='product-title' className={props.device}>{product.name}</h1>;

    // Redireciona os formulários
    const navigate = useNavigate()
    const handleSubmitCart = () => navigate('/carrinho');
    const handleSubmitFavorites = () => navigate('/lista-de-desejos');

    return (
        <>
            <Breadcrumb />
            <div className='container grid'>
                <ProductTitle device='mobile' />
                <Stars rating={calculateRating(product.ratings)} device='mobile' />
                <ImagesCarousel images={product.images} />
                <div className='product-info'>
                    <ProductTitle device='desktop' />
                    <Stars rating={calculateRating(product.ratings)} device='desktop' />
                    <p id='price-row'>
                        <span className='price-with-discount'>{formatPrice(product.priceWithDiscount)}</span>
                        <span className='price'>{formatPrice(product.price)}</span>
                        <span className='discount'>{product.discount}</span>
                    </p>
                    <p id='parcel'>
                        ou em até
                        <span> {product.parcels}x </span>
                        de
                        <span> {formatPrice(calculateParcel(product.parcels, product.priceWithDiscount))} </span>
                        sem juros
                    </p>
                    <Sizes sizes={product.sizes} />
                    <Colors colors={product.colors} />
                    <form method='post' onSubmit={handleSubmitCart}>
                        <button id='btn-add-to-cart' type='submit' className='btn btn-success'>Adicionar ao carrinho</button>
                    </form>
                    <form method='post' onSubmit={handleSubmitFavorites}>
                        <button id='btn-add-to-favorites' type='submit' className='btn btn-outline-secondary'>Adicionar a lista de desejos</button>
                    </form>
                </div>
            </div>
            <div className='container'>
                <div id='product-description'>
                    <Title type='quaternary' title='Descrição' />
                    <p>{product.description}</p>
                </div>
                <div id='product-details'>
                    <Title type='quaternary' title='Detalhes' />
                    <ul>
                        {product.details.map((detail, i) => {
                            return (
                                <li key={i}>{detail}</li>
                            )
                        })}
                        <li>Código do ítem: {product.code}</li>
                    </ul>
                </div>
            </div>
            <section id='similar-products'>
                <div className='container'>
                    <Title type='primary' title='Você também pode gostar' />
                    <ProductList />
                </div>
            </section>
            <Rating ratings={product.ratings} />
        </>
    )
}

export default ProductDetails
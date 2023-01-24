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
import { useNavigate } from "react-router-dom";

const product = {
    title: 'Camiseta Adicolor Classics Trefoil',
    price: 149.99,
    priceWithDiscount: 129.99,
    discount: '-10%',
    parcels: 3,
    code: 'H06642',
    description:
        `O logo Trefoil é inspirado no esporte e na história do estilo. 
        Mas é mais do que isso. Ele representa uma energia indomável e um clã de 
        criadores que se esforçam para dar o seu melhor a cada passo. 
        Vista o conforto desta camiseta adidas e deixe-os fluir. 
        Ao comprar nossos produtos de algodão, você está apoiando um cultivo mais sustentável dessa matéria-prima.`,
    details: [
        'Modelagem padrão',
        'Better Cotton Initiative',
        'Gola careca canelada',
        'Malha simples 100% algodão'
    ],
    images: [
        { url: '1.webp', description: 'Frente' },
        { url: '2.webp', description: '' },
        { url: '3.webp', description: '' },
        { url: '4.webp', description: 'Lado' },
        { url: '5.webp', description: 'Costas' }
    ],
    ratings: [
        {
            user: 'Jéssica',
            date: '18/01/2023',
            rating: 5,
            title: 'Amo essa blusa',
            comment: 'Tecido incrível, estampa maravilhosa, tamanho ideal para uma mocinha rs'
        },
        {
            user: 'Amanda',
            date: '10/01/2023',
            rating: 5,
            title: 'Linda',
            comment: 'Amo estas camisetas por ser tão confortável e combinar com tudo'
        },
        {
            user: 'Flávia',
            date: '21/12/2022',
            rating: 4,
            title: 'Muito boa',
            comment: 'Ela tem um ótimo tamanho pra quem prefere blusas mais compridas e largas. Muito confortável'
        }
    ]
}

function ProductDetails(props) {
    document.body.id = props.id;
    const navigate = useNavigate()
    const ProductTitle = props => <h1 id='product-title' className={props.device}>{product.title}</h1>;

    // Redireciona os formulários
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
                    <Sizes />
                    <Colors />
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
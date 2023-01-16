import './ProductDetails.scss';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';
import { ProductList } from '../components/ProductList';
import { Breadcrumb } from '../components/Breadcrumb';
import { Title } from '../components/Title';

function ProductDetails(props) {
    document.body.id = props.id;

    return (
        <>
            <Breadcrumb />
            <div className='container grid'>
                <ImagesCarousel />
                <div className='product-info'>
                    <h1 id='product-title'>Camiseta Adicolor Classics Trefoil</h1>
                    <Rating rating={4.5} />
                    <p id='price-row'>
                        <span className='price'>R$ 129,99</span>
                        <span className='old-price'>R$ 149,99</span>
                        <span className='discount'>-10%</span>
                    </p>
                    <p id='parcel'>
                        ou em até <span>3x</span> de <span>R$ 43,34</span> sem juros
                    </p>
                    <div id='sizes'>
                        <h2>Tamanhos</h2>
                        <ul>
                            <li>
                                <label>
                                    <input type='radio' name='size' id='pp' required />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' name='size' id='p' required />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' name='size' id='m' required />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' name='size' id='g' required />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' name='size' id='gg' required />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div id='colors'>
                        <h2>Cores</h2>
                        <ul>
                            <li style={{ backgroundColor: '#ff0000'}}>
                                <label>
                                    <input type='radio' name='size' id='#ff0000' required />
                                </label>
                            </li>
                            <li style={{ backgroundColor: '#00ff00'}}>
                                <label>
                                    <input type='radio' name='size' id='#00ff00' required />
                                </label>
                            </li>
                            <li style={{ backgroundColor: '#0000ff'}}>
                                <label>
                                    <input type='radio' name='size' id='#0000ff' required />
                                </label>
                            </li>
                            <li style={{ backgroundColor: '#000'}}>
                                <label>
                                    <input type='radio' name='size' id='#000' required />
                                </label>
                            </li>
                            <li style={{ backgroundColor: '#fff'}}>
                                <label>
                                    <input type='radio' name='size' id='#fff' required />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <form action=''>
                        <button id='btn-add-to-cart' type='submit' className='btn btn-success'>Adicionar ao carrinho</button>
                    </form>
                    <form action=''>
                        <button id='btn-add-to-favorites' type='submit' className='btn btn-outline-secondary'>Adicionar a lista de desejos</button>
                    </form>
                </div>
            </div>
            <div className='container'>
                <div id='product-description'>
                    <h2 className='title'>Descrição</h2>
                    <p>O logo Trefoil é inspirado no esporte e na história do estilo. Mas é mais do que isso. Ele representa uma energia indomável e um clã de criadores que se esforçam para dar o seu melhor a cada passo. Vista o conforto desta camiseta adidas e deixe-os fluir.</p>
                    <p>Ao comprar nossos produtos de algodão, você está apoiando um cultivo mais sustentável dessa matéria-prima.</p>
                </div>
                <div id='product-details'>
                    <h2 className='title'>Detalhes</h2>
                    <ul>
                        <li>Modelagem padrão</li>
                        <li>Better Cotton Initiative</li>
                        <li>Gola careca canelada</li>
                        <li>Cor do artigo: Black / White</li>
                        <li>Malha simples 100% algodão</li>
                        <li>Código do artigo: H06642</li>
                    </ul>
                </div>
            </div>
            <section id='similar-products' className='container'>
                <Title type='primary' title='Você também pode gostar' />
                <ProductList />
            </section>
        </>
    )
}

function ImagesCarousel() {
    return (
        <div id='images-carousel'>
            <Carousel controls={false} fade={true} interval={null} indicatorLabels={[1, 2, 3, 4, 5]}>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/products/1.webp'} alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/products/2.webp'} alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/products/3.webp'} alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/products/4.webp'} alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/products/5.webp'} alt='' />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

function Rating(props) {
    return (
        <div id='rating-row' title={props.rating}>
            <div className='empty'>
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
            </div>
            <div className='full' style={{ maxWidth: (props.rating * 20) + '%' }}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
    )
}

export default ProductDetails
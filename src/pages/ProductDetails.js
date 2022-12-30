import './ProductDetails.scss';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';
import { ProductList } from '../components/ProductList';

function ProductDetails() {
    return (
        <>
            <div className='container'>
                <ImagesCarousel />
                <div className="product-info">
                    <h1 className='title'>Lorem ipsum dolor</h1>
                    <p className="short-description">
                        Nullam id neque sed massa volutpat eleifend non nec eros, aliquam erat volutpat. 
                    </p>
                    <Rating />
                    <p className='price-row'>
                        <span className='price'>R$ 59,90</span>
                        <span className='old-price'>R$ 89,90</span>
                        <span className="discount">-33%</span>
                    </p>
                    <p className="parcel">
                        ou em até <span>6x</span> de <span>R$ 9,98</span> sem juros
                    </p>
                    <form action="">
                        <button id='btn-add-to-cart' type='submit' className='btn btn-success'>Adicionar ao carrinho</button>
                    </form>
                    <form action="">
                        <button id='btn-add-to-favorites' type='submit' className='btn btn-outline-secondary'>Adicionar a lista de desejos</button>
                    </form>
                </div>
            </div>
            <section className='container'>
                <div className="title-section">
                    <h1>Você também pode gostar</h1>
                </div>
                <ProductList />
            </section>
        </>
    )
}

function ImagesCarousel() {
    return (
        <div id='images-carousel'>
            <Carousel controls={false} fade={true} interval={null}>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/product.jpg'} alt='Frente' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + '/product.jpg'} alt='Costas' />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

function Rating(){
    return(
        <div id="rating-row">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            <FontAwesomeIcon icon={faStarO} />
        </div>
    )
}

export default ProductDetails
import './ProductList.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from './Global';

export function ProductList() {
    const product = {
        name: 'Camiseta Adicolor Classics Trefoil',
        price: 149.99,
        priceWithDiscount: 129.99,
        discount: '-10%'
    };
    let list = [];
    for (let i = 0; i < 4; i++) {
        list.push(
            <li key={i}>
                <Link to="/detalhes-do-produto" title={product.name}>
                    <img src={process.env.PUBLIC_URL + '/products/1.webp'} alt={product.name} />
                    <h2 className='title'>{product.name}</h2>
                    <p className='price-row'>
                        <span className='price-with-discount'>{formatPrice(product.priceWithDiscount)}</span>
                        <span className='price'>{formatPrice(product.price)}</span>
                        <span className="discount">{product.discount}</span>
                    </p>
                </Link>
            </li>
        )
    }
    return (
        <ul className="product-list">
            {list}
        </ul>
    )
}
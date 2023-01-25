import './ProductList.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '../Global';
import products from '../../products.json';

export function ProductList() {
    return (
        <ul className="product-list">
            {products.map((product, i) => {
                let url = '/' + product.name.toLowerCase().replace(/ /g,'-') + '/' + product.code.toLowerCase();

                return (
                    <li key={i}>
                        <Link to={url} title={product.name} code={product.code}>
                            <img src={process.env.PUBLIC_URL + '/products/' + product.images[0].url} alt={product.name} />
                            <h2 className='title'>{product.name}</h2>
                            <p className='price-row'>
                                <span className='price-with-discount'>{formatPrice(product.priceWithDiscount)}</span>
                                <span className='price'>{formatPrice(product.price)}</span>
                                <span className="discount">{product.discount}</span>
                            </p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
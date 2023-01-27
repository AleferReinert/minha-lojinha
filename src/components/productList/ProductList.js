import './ProductList.scss';
import { Link } from 'react-router-dom';
import { formatPrice, formatUrl } from '../Global';
import products from '../../dataProducts.json';

export function ProductList() {
    return (
        <ul className="product-list">
            {products.map((product, i) => {
                const name = product.name;
                const url = '/produto' + formatUrl(product.name + '/' + product.code);
                const src = process.env.PUBLIC_URL + '/products/' + product.images[0].url;
                const priceWithDiscount = formatPrice(product.priceWithDiscount);
                const price = formatPrice(product.price);

                return (
                    <li key={i}>
                        <Link to={url} title={name} code={product.code}>
                            <img src={src} alt={name} />
                            <h2 className='title'>{name}</h2>
                            <p className='price-row'>
                                <span className='price-with-discount'>{priceWithDiscount}</span>
                                <span className='price'>{price}</span>
                                <span className="discount">{product.discount}</span>
                            </p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
import './ProductList.scss';
import { Link } from 'react-router-dom';

export function ProductList() {
    let list = [];
    for (let i = 0; i < 4; i++) {
        list.push(
            <li key={i}>
                <Link to="/detalhes-do-produto">
                    <img src={process.env.PUBLIC_URL + '/products/1.webp'} alt="Camiseta Adicolor Classics Trefoil" />
                    <h2 className='title'>Camiseta Adicolor Classics Trefoil</h2>
                    <p>
                        <span className='price'>R$ 129,99</span>
                        <span className='old-price'>R$ 149,99</span>
                        <span className="discount">-10%</span>
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
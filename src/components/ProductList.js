import './ProductList.scss';

export function ProductList() {
    let list = [];
    for (let i = 0; i < 4; i++) {
        list.push(
            <li key={i}>
                <a href="./">
                    <img src="./product.jpg" alt="Lorem ipsum dolor" />
                    <h2 className='title'>Lorem ipsum dolor</h2>
                    <p>
                        <span className='old-price'>R$ 59,90</span>
                        <span className='price'>R$ 89,90</span>
                        <span className="discount">-33%</span>
                    </p>
                </a>
            </li>
        )
    }
    return (
        <ul className="product-list">
            {list}
        </ul>
    )
}
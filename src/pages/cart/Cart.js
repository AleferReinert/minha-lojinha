import { Title } from '../../components/title/Title';
import './Cart.scss';
import products from '../../dataProducts.json';
import { formatPrice } from '../../components/Global';
import { InputNumber } from './InputNumber';

const Cart = (props) => {
    document.body.id = props.id;

    return (
        <>
            <Title type='secondary' title='Meu Carrinho' />
            <div className='container'>
                <div className='columns'>
                    <div className='column-left'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Valor unit.</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, i) => {
                                    const src = process.env.PUBLIC_URL + '/products/' + product.images[0].url;

                                    return (
                                        <tr key={i}>
                                            <td>
                                                <img src={src} alt={product.images[0].description} />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>
                                                <InputNumber amount={1} />
                                            </td>
                                            <td>{formatPrice(product.priceWithDiscount)}</td>
                                            <td>{formatPrice(product.priceWithDiscount)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='column-right'>
                        <aside>
                            <button className='btn btn-success'>Comprar</button>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
import { Title } from '../../components/title/Title';
import './Cart.scss';

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
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><input type='number' id='' /></td>
                                    <td></td>
                                    <td></td>
                                </tr>
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
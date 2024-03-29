import './Footer.scss';
import { Social } from '../social/Social';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import company from '../../dataCompany.json';

export function Footer() {
    return (
        <footer id='footer'>
            <div className='bar-top'>
                <nav className='container'>
                    <div className='site-map'>
                        <Accordion defaultActiveKey='-1'>
                            <Accordion.Item  eventKey='0'>
                                <Accordion.Header>
                                    Institucional
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className='list'>
                                        <li><Link to='/lojas'>Lojas</Link></li>
                                        <li><Link to='/politica-de-privacidade'>Política de privacidade</Link></li>
                                        <li><Link to='/sobre-nos'>Sobre nós</Link></li>
                                        <li><Link to='/trabalhe-conosco'>Trabalhe conosco</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  eventKey='1'>
                                <Accordion.Header>
                                    Ajuda e suporte
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className='list'>
                                        <li><Link to='/ajuda/buy' tab='buy'>Como comprar</Link></li>
                                        <li><Link to='/ajuda/payments' tab='payments'>Pagamentos</Link></li>
                                        <li><Link to='/ajuda/cancel' tab='cancel'>Cancelamentos</Link></li>
                                        <li><Link to='/ajuda/deliveries' tab='deliveries'>Entregas e frete</Link></li>
                                        <li><Link to='/ajuda/exchanges' tab='exchanges'>Trocas e devoluções</Link></li>
                                        <li><Link to='/ajuda/faq' tab='faq'>Dúvidas frequentes</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  eventKey='2'>
                                <Accordion.Header>
                                    Contato
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className='list'>
                                        <li><a href='./'>Tel.: {company.tel}</a></li>
                                        <li><a href='./'>Tel.2: {company.tel2}</a></li>
                                        <li><a href='./'>E-mail: {company.email}</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className='column-social'>
                            <h2>Social</h2>
                            <Social />
                        </div>
                    </div>
                </nav>
            </div>
            <div className='bar-social'>
                <Social />
            </div> 
            <div className='bar-middle'>
                <div className='container'>
                    <ul className='payments'>
                        <li><span className='icon icon-boleto' title='Boleto'></span></li>
                        <li><span className='icon icon-mastercard' title='Mastercard'></span></li>
                        <li><span className='icon icon-visa' title='Visa'></span></li>
                        <li><span className='icon icon-diners' title='Diners'></span></li>
                        <li><span className='icon icon-amex' title='Amex'></span></li>
                        <li><span className='icon icon-elo' title='Elo'></span></li>
                        <li><span className='icon icon-hipercard' title='Hipercard'></span></li>
                        <li><span className='icon icon-pix' title='Pix'></span></li>
                    </ul>
                    <ul className='security'>
                        <li><span className='icon icon-ssl-security'></span></li>
                        <li><span className='icon icon-google-security'></span></li>
                    </ul>
                    <p className='developed'>
                        Developed by
                        <br />
                        Alefer Reinert
                    </p>
                </div>
            </div>
            <div className='bar-bottom'>
                <div className='address'>
                    <div className='container'>
                        <p>
                            {company.address.companyName} - CNPJ {company.address.cnpj}
                        </p>
                        <address>
                            Rua {company.address.street}, {company.address.number} - 
                            Bairro {company.address.district} - 
                            {company.address.city} - {company.address.state} - CEP {company.address.zipCode}
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    )
}
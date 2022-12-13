import './Footer.scss';
import { Social } from './Social';
import { Accordion } from 'react-bootstrap';

export function Footer() {
    return (
        <footer id="footer">
            <div className="bar-top">
                <nav className="container">
                    <div className="site-map">
                        <Accordion defaultActiveKey="-1">
                            <Accordion.Item  eventKey="0">
                                <Accordion.Header>
                                    Institucional
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list">
                                        <li><a href="./">Lojas</a></li>
                                        <li><a href="./">Sobre nós</a></li>
                                        <li><a href="./">Trabalhe conosco</a></li>
                                        <li><a href="./">Blog</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  eventKey="1">
                                <Accordion.Header>
                                    Ajuda e suporte
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list">
                                        <li><a href="/prazos-de-entrega">Prazos de entrega</a></li>
                                        <li><a href="/trocas-e-devolucoes">Trocas e devoluções</a></li>
                                        <li><a href="/perguntas-frequentes">Perguntas Frequentes</a></li>
                                        <li><a href="/politica-de-privacidade">Política de privacidade</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  eventKey="2">
                                <Accordion.Header>
                                    Contato
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list">
                                        <li><a href="./">Tel.: (47) 55555-5555</a></li>
                                        <li><a href="./">Tel.2: (47) 55555-5555</a></li>
                                        <li><a href="./">E-mail: atendimento@loja.com.br</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* <div className="column">
                            <h2 data-toggle="collapse" className="collapsed" data-target="#list-about" data-parent=".site-map">
                                Institucional
                                <span className="fa fa-angle-down icon-collapsed"></span>
                                <span className="fa fa-angle-up icon-show"></span>
                            </h2>
                            <ul className="list collapse" id="list-about">
                                <li><a href="./">Lojas</a></li>
                                <li><a href="./">Sobre nós</a></li>
                                <li><a href="./">Trabalhe conosco</a></li>
                                <li><a href="./">Blog</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h2 data-toggle="collapse" className="collapsed" data-target="#list-support" data-parent=".site-map">
                                Ajuda e suporte
                                <span className="fa fa-angle-down icon-collapsed"></span>
                                <span className="fa fa-angle-up icon-show"></span>
                            </h2>
                            <ul className="list collapse" id="list-support">
                                <li><a href="/prazos-de-entrega">Prazos de entrega</a></li>
                                <li><a href="/trocas-e-devolucoes">Trocas e devoluções</a></li>
                                <li><a href="/perguntas-frequentes">Perguntas Frequentes</a></li>
                                <li><a href="/politica-de-privacidade">Política de privacidade</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h2 data-toggle="collapse" className="collapsed" data-target="#list-contact" data-parent=".site-map">
                                Contato
                                <span className="fa fa-angle-down icon-collapsed"></span>
                                <span className="fa fa-angle-up icon-show"></span>
                            </h2>
                            <ul className="list collapse" id="list-contact">
                                <li><a href="./">Tel.: (47) 55555-5555</a></li>
                                <li><a href="./">Tel.2: (47) 55555-5555</a></li>
                                <li><a href="./">E-mail: atendimento@loja.com.br</a></li>
                            </ul>
                        </div>*/}
                        <div className="column column-social">
                            <h2>Social</h2>
                            <Social />
                        </div> 
                    </div>
                </nav>
            </div>
            <div className="bar-middle">
                <div className="container">
                    <ul className="payments">
                        <li><span className="icon icon-boleto" title="Boleto"></span></li>
                        <li><span className="icon icon-mastercard" title="Mastercard"></span></li>
                        <li><span className="icon icon-visa" title="Visa"></span></li>
                        <li><span className="icon icon-diners" title="Diners"></span></li>
                        <li><span className="icon icon-amex" title="Amex"></span></li>
                        <li><span className="icon icon-elo" title="Elo"></span></li>
                        <li><span className="icon icon-hipercard" title="Hipercard"></span></li>
                        <li><span className="icon icon-pix" title="Pix"></span></li>
                    </ul>
                    <ul className="security">
                        <li><span className="icon icon-ssl-security"></span></li>
                        <li><span className="icon icon-google-security"></span></li>
                    </ul>
                    <p className="developed">
                        Developed by
                        <br />
                        Alefer Reinert
                    </p>
                </div>
            </div>
            <div className="bar-bottom">
                <div className="address">
                    <div className="container">
                        <p>E-Commerce Comércio LTDA - CNPJ 00.000.000/0000-00</p>
                        <address>Rua Ricardo Fischer Stein, 438 - Bairro Nações - Indaial - SC - CEP 89086-172</address>
                    </div>
                </div>
            </div>
        </footer>

    )
}
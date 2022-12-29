import { Categories } from "./Categories";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MenuMobile.scss';
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export function MenuMobile(props){

    function closeMenu(){
        props.setMenuMobile(null);
    }

    const navUser = () => {
        if(props.isLoggedIn){
            return(
                <ul>
                    <li>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <FontAwesomeIcon icon={faUser} />
                                    Olá, João
                                </Accordion.Header>
                                <Accordion.Body>
                                    <nav id="nav-account">
                                        <Link to="/">
                                            <span><FontAwesomeIcon icon={faUser} /></span>
                                            <span>Meus Dados</span>
                                        </Link>
                                        <Link to="/">
                                            <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                                            <span>Meus Pedidos</span>
                                        </Link>
                                        <Link to="/">
                                            <span><FontAwesomeIcon icon={faHeart} /></span>
                                            <span>Lista de Desejos</span>
                                        </Link>
                                    </nav>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </li>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sair
                        </Link>
                    </li>
                </ul>
            )
        } else {
            return(
                <ul>
                    <li><Link to="/login">Entrar</Link></li>
                    <li><Link to="/">Cadastre-se</Link></li>
                </ul>
            )
        }
    };
    return (
        <>
            <div id="menu-mobile" className={props.menuMobile}>
                <button className="btn-close" onClick={closeMenu}></button>
                <nav className="nav-user">
                    { navUser() }
                </nav>
                <Categories id="categories-mobile" />
            </div>
            <div id="overlay" className={props.menuMobile}></div>
        </>
    );
}
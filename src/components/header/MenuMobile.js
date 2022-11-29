import { Categories } from "./Categories";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MenuMobile.scss';
import { Accordion } from "react-bootstrap";

export function MenuMobile(props){

    function closeMenu(){
        props.setMenuActive(null);
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
                                        <a href="./">
                                            <span><FontAwesomeIcon icon={faUser} /></span>
                                            <span>Meus Dados</span>
                                        </a>
                                        <a href="./">
                                            <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                                            <span>Meus Pedidos</span>
                                        </a>
                                        <a href="./">
                                            <span><FontAwesomeIcon icon={faHeart} /></span>
                                            <span>Lista de Desejos</span>
                                        </a>
                                    </nav>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </li>
                    <li>
                        <a href="./">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sair
                        </a>
                    </li>
                </ul>
            )
        } else {
            return(
                <ul>
                    <li><a href="/login">Entrar</a></li>
                    <li><a href="./">Cadastre-se</a></li>
                </ul>
            )
        }
    };
    return (
        <>
            <div id="menu-mobile" className={props.menuActive}>
                <button className="btn-close" onClick={closeMenu}></button>
                <nav className="nav-user">
                    { navUser() }
                </nav>
                <Categories id="categories-mobile" />
            </div>
            <div id="overlay" className={props.menuActive}></div>
        </>
    );
}
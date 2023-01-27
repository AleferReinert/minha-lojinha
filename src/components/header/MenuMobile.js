import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSignInAlt, faSignOutAlt, faShoppingCart, faHeart, faUserPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import './MenuMobile.scss';
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import categories from '../../dataCategories.json';
import { formatUrl } from "../Global";
import { useState } from "react";

export function MenuMobile(props) {
    const [state, setState] = useState(false);
    const toggleMenu = ()=>setState(!state);
    const closeMenu = ()=>setState(false);

    const navUser = () => {
        if (props.isLoggedIn) {
            return (
                <>
                    <Dropdown.Item as={Accordion} className='dropdown-item-accordion'>
                        <Accordion.Item>
                            <Accordion.Header>
                                <FontAwesomeIcon icon={faUser} />
                                Olá, {props.username}
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link to="/minha-conta/dados" onClick={closeMenu}>
                                    <FontAwesomeIcon icon={faUser} />
                                    Meus Dados
                                </Link>
                                <Link to="/minha-conta/pedidos" onClick={closeMenu}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    Meus Pedidos
                                </Link>
                                <Link to="/lista-de-desejos" onClick={closeMenu}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    Lista de Desejos
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/logout" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Sair
                    </Dropdown.Item>
                </>
            )
        } else {
            return (
                <>
                    <Dropdown.Item as={Link} to="/entrar" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Entrar
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/cadastro" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faUserPlus} />
                        Cadastre-se
                    </Dropdown.Item>
                </>
            )
        }
    }
    return (
        <Dropdown as='nav' show={state} id='dropdown-menu-mobile'>
            <Dropdown.Toggle variant="default" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <button className='close-menu' onClick={closeMenu}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                {navUser()}
                <Dropdown.Divider />
                {categories.map((category, i) => {
                    const url = '/categoria' + formatUrl(category.name);

                    return (
                        <Dropdown.Item as={Link} to={url} key={i} onClick={closeMenu}>
                            {category.name}
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}
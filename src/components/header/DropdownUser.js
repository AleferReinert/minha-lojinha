import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart, faSignOutAlt, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function DropdownUser(props){
    if(props.isLoggedIn){
        return(
            <ul>
                <li>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle className="dropdown-account-btn" variant="default">
                            <FontAwesomeIcon icon={faUser} />
                            Olá, { props.username }
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-account" align="end">
                            <Dropdown.Item href="./">
                                <FontAwesomeIcon icon={faUser} />
                                Meus Dados
                            </Dropdown.Item>
                            <Dropdown.Item href="./">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                Meus Pedidos
                                </Dropdown.Item>
                            <Dropdown.Item href="./">
                                <FontAwesomeIcon icon={faHeart} />
                                Lista de Desejos
                                </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
                <li>
                    <Link to="/cadastro">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Cadastre-se
                    </Link>
                </li>
                <li>
                    <Link to="/entrar">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Entrar
                    </Link>
                </li>
            </ul>
        )
    }
}
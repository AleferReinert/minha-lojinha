import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart, faSignOutAlt, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

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
                <li>
                    <a href="./">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Cadastre-se
                    </a>
                </li>
                <li>
                    <a href="/login">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Entrar
                    </a>
                </li>
            </ul>
        )
    }
}
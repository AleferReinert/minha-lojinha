import { useState } from 'react';
import './Header.scss';
import { MenuMobile } from './MenuMobile';
import { TextCarousel } from './TextCarousel';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import { Categories } from './Categories';
import { DropdownUser } from './DropdownUser';
import { Link } from "react-router-dom";

export function Header(props) {
    const [menuMobile, setMenuMobile] = useState(null);
    const [searchMobile, setSearchMobile] = useState('');

    function toggleMenuMobile() {
        if (menuMobile === null) {
            setMenuMobile('active');
        } else {
            setMenuMobile(null);
        }
    }

    function toggleSearchMobile() {
        if (searchMobile === '') {
            setSearchMobile('active');
        } else {
            setSearchMobile('');
        }
    }

    const btnSearchMobile = () => {
        if (searchMobile === '') {
            return (
                <button title="Abrir busca" id="open-search-mobile" onClick={toggleSearchMobile}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            )
        }
        return (
            <button title="Fechar busca" id="close-search-mobile" onClick={toggleSearchMobile}>
                <FontAwesomeIcon icon={faClose} />
            </button>
        )
    }

    return (
        <header id="header">
            <MenuMobile isLoggedIn={props.isLoggedIn} menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
            <div className="bar-top">
                <div className="container">
                    <TextCarousel />
                    <nav>
                        <DropdownUser isLoggedIn={props.isLoggedIn} username={props.username} />
                    </nav>
                </div>
            </div>
            <div className="bar-middle">
                <div className="container">
                    <div className="column">
                        <button className='btn-menu-mobile' onClick={toggleMenuMobile}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className="column">
                        <div className="logo">
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="minha lojinha" />
                            </Link>
                        </div>
                    </div>
                    <div className="column">
                        <Search searchMobile={searchMobile} />
                    </div>
                    <div className="column">
                        { btnSearchMobile() }
                        <Link to="/lista-de-desejos" className="favorites" title="Lista de desejos (2 itens)">
                            Lista de desejos
                            <FontAwesomeIcon icon={faHeartO} />
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/carrinho" className="cart" title="Meu carrinho de compras">
                            <span className="quantity">18</span>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bar-bottom">
                <div className="container">
                    <Categories id="categories-desktop" />
                </div>
            </div>
        </header>
    )
}
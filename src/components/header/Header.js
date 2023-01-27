import { useState } from 'react';
import './Header.scss';
import { MenuMobile } from './MenuMobile';
import { TextCarousel } from './TextCarousel';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import { Categories } from './Categories';
import { DropdownUser } from './DropdownUser';
import { Link } from "react-router-dom";
import company from '../../dataCompany.json';

export function Header(props) {
    const [searchMobile, setSearchMobile] = useState('');

    function toggleSearchMobile() {
        searchMobile === '' ? setSearchMobile('active') : setSearchMobile('');
    }

    const btnSearchMobile = () => {
        let title = searchMobile === '' ? 'Abrir busca' : 'Fechar busca';
        let id = searchMobile === '' ? 'open-search-mobile' : 'close-search-mobile';;
        let icon = searchMobile === '' ? faMagnifyingGlass : faClose;

        return (
            <button title={title} id={id} onClick={toggleSearchMobile}>
                <FontAwesomeIcon icon={icon} />
            </button>
        )
    }

    return (
        <header id="header">
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
                    <MenuMobile isLoggedIn={props.isLoggedIn} username={props.username} />
                    </div>
                    <div className="column">
                        <div className="logo">
                            <Link to="/" title={company.name}>
                                <img src={process.env.PUBLIC_URL + '/' + company.logo} alt="minha lojinha" />
                            </Link>
                        </div>
                    </div>
                    <div className="column">
                        <Search searchMobile={searchMobile} />
                    </div>
                    <div className="column">
                        {btnSearchMobile()}
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
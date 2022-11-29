import React, { useState } from 'react';
import './Header.scss';
import { MenuMobile } from './MenuMobile';
import { TextCarousel } from './TextCarousel';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import { Categories } from './Categories';
import { DropdownUser } from './DropdownUser';

export function Header(props){
    const [menuActive, setMenuActive] = useState(null);

    function toggleMenuMobile(){
        if(menuActive === null){
            console.log('active')
            setMenuActive('active');
        } else {
            console.log('null')
            setMenuActive(null);
        }
    }

    return (
        <header id="header">
            <MenuMobile isLoggedIn={props.isLoggedIn} menuActive={menuActive} setMenuActive={setMenuActive} />
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
                            <a href="./">
                                <img src={ process.env.PUBLIC_URL + '/logo.png'} alt="minha lojinha" />
                            </a>  
                        </div>
                    </div>
                    <div className="column">
                        <Search />
                    </div>
                    <div className="column">
                        <button data-toggle="collapse" className="collapsed" data-target="#header-search" title="Busca">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <a href="./" className="favorites" title="Lista de desejos (2 itens)">
                            Lista de desejos
                            <FontAwesomeIcon icon={faHeartO} />
                        </a>
                    </div>
                    <div className="column">
                        <a href="./" className="cart" title="Meu carrinho de compras">
                            <span className="quantity">18</span>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
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

import React, { useState } from 'react';
import './Header.scss';
import { DropdownUser } from './DropdownUser';
import { TextCarousel } from './TextCarousel';
import { Search } from './Search';
import Dropdown from 'react-bootstrap/Dropdown';
import { Menu } from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export function Header(props){
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    const dropdownLinks = () => {
        if(props.isLoggedIn){
            return(
                <ul>
                    <li>
                        <Dropdown className="dropdown">
                            <Dropdown.Toggle className="dropdown-account-btn" variant="default">
                                <span className="fa fa-user"></span>
                                Olá, { props.username }
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-account" align="end">
                                <Dropdown.Item href="./"><span className="fa fa-user"></span>Meus Dados</Dropdown.Item>
                                <Dropdown.Item href="./"><span className="fa fa-shopping-cart"></span>Meus Pedidos</Dropdown.Item>
                                <Dropdown.Item href="./"><span className="fa fa-heart"></span>Lista de Desejos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <a href="./">
                            <span className="fa fa-sign-out-alt"></span>
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
                            <span className="fa fa-user-plus"></span>
                            Cadastre-se
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            <span className="fa fa-sign-in-alt"></span>
                            Entrar
                        </a>
                    </li>
                </ul>
            )
        }
    }

    // HEADER
    return (
        <header id="header">
            <DropdownUser isLoggedIn={props.isLoggedIn} />
            <div className="bar-top">
                <div className="container">
                    <TextCarousel />
                    <nav>
                        {dropdownLinks()}
                    </nav>
                </div>
            </div>
            <div className="bar-middle">
                <div className="container">
                    <div className="column">
                        <button className='btn-menu-mobile' onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                            <svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><g transform="translate(330.000000, 232.000000)"><polygon points="-321.8,-219 -274.3,-219 -274.3,-212.7 -321.8,-212.7" /><polygon points="-321.8,-203.2 -274.3,-203.2 -274.3,-196.8 -321.8,-196.8" /><polygon points="-321.8,-187.3 -274.3,-187.3 -274.3,-181 -321.8,-181" /></g></g></svg>
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
                            <svg className="svg-search" viewBox="0 0 32 32"><g><path d="M29.71,28.29l-10-10a10,10,0,1,0-1.42,1.42l10,10ZM4,12a8,8,0,1,1,8,8A8,8,0,0,1,4,12Z"/></g></svg>
                        </button>
                        <a href="./" className="favorites" title="Lista de desejos (2 itens)">
                            Lista de desejos
                            <FontAwesomeIcon icon={faHeart} />
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
                    <Menu />
                </div>
            </div>
        </header>
    )
}

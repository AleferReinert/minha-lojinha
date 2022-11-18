import './Menu.scss';

export function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li>
                    <a href="./categoria?category=masculino">Masculino</a>
                    <button className="collapsed" data-toggle="collapse" data-target="#category-masculino" data-parent=".menu">
                        <span className="fa fa-angle-down icon-collapsed"></span>
                        <span className="fa fa-angle-up icon-show"></span>
                    </button>
                    <div className="submenu-primary collapse hidden" id="category-masculino">
                        <ul>
                            <li>
                                <a href="./categoria?category=masculino&subcategory-primary=camisas">Camisas</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-masculino-camisas" data-parent="#category-masculino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-masculino-camisas">
                                    <li><a href="./categoria?category=masculino&subcategory-primary=camisas&subcategory-secondary=manga curta">Manga curta</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=camisas&subcategory-secondary=manga longa">Manga longa</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=camisas&subcategory-secondary=regatas">Regatas</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=camisas&subcategory-secondary=listradas">Listradas</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=camisas&subcategory-secondary=personalizadas">Personalizadas</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=camisas&subcategory-secondary=polos">Polos</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./categoria?category=masculino&subcategory-primary=calças">Calças</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-masculino-calcas" data-parent="#category-masculino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-masculino-calcas">
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calças&subcategory-secondary=jeans">Jeans</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calças&subcategory-secondary=malha">Malha</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calças&subcategory-secondary=tactel">Tactel</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calças&subcategory-secondary=moletom">Moletom</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./categoria?category=masculino&subcategory-primary=calçados">Calçados</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-masculino-calcados" data-parent="#category-masculino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-masculino-calcados">
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calçados&subcategory-secondary=tênis">Tênis</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calçados&subcategory-secondary=coturnos">Coturnos</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calçados&subcategory-secondary=chinelos">Chinelos</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=calçados&subcategory-secondary=pantufas">Pantufas</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./categoria?category=masculino&subcategory-primary=roupas íntimas">Roupas íntimas</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-masculino-roupas-intimas" data-parent="#category-masculino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-masculino-roupas-intimas">
                                    <li><a href="./categoria?category=masculino&subcategory-primary=roupas íntimas&subcategory-secondary=cuecas">Cuecas</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=roupas íntimas&subcategory-secondary=meias">Meias</a></li>
                                    <li><a href="./categoria?category=masculino&subcategory-primary=roupas íntimas&subcategory-secondary=pijamas">Pijamas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="./categoria?category=feminino">Feminino</a>
                    <button className="collapsed" data-toggle="collapse" data-target="#category-feminino" data-parent=".menu">
                        <span className="fa fa-angle-down icon-collapsed"></span>
                        <span className="fa fa-angle-up icon-show"></span>
                    </button>
                    <div className="submenu-primary collapse hidden" id="category-feminino">
                        <ul>
                            <li>
                                <a href="./categoria?category=feminino&subcategory-primary=camisas">Camisas</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-feminino-camisas" data-parent="#category-feminino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-feminino-camisas">
                                    <li><a href="./categoria?category=feminino&subcategory-primary=camisas&subcategory-secondary=manga curta">Manga curta</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=camisas&subcategory-secondary=manga longa">Manga longa</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=camisas&subcategory-secondary=regatas">Regatas</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=camisas&subcategory-secondary=listradas">Listradas</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=camisas&subcategory-secondary=personalizadas">Personalizadas</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./categoria?category=feminino&subcategory-primary=calças">Calças</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-feminino-calcas" data-parent="#category-feminino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-feminino-calcas">
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calças&subcategory-secondary=jeans">Jeans</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calças&subcategory-secondary=malha">Malha</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calças&subcategory-secondary=tactel">Tactel</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calças&subcategory-secondary=moletom">Moletom</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calças&subcategory-secondary=legging">Legging</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calças&subcategory-secondary=boca de sino">Boca de sino</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./categoria?category=feminino&subcategory-primary=calçados">Calçados</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-feminino-calcados" data-parent="#category-feminino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-feminino-calcados">
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calçados&subcategory-secondary=botas">Botas</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calçados&subcategory-secondary=saltos">Saltos</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calçados&subcategory-secondary=sapatilhas">Sapatilhas</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calçados&subcategory-secondary=tênis">Tênis</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=calçados&subcategory-secondary=sandálias">Sandálias</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./categoria?category=feminino&subcategory-primary=acessórios">Acessórios</a>
                                <button className="collapsed" data-toggle="collapse" data-target="#category-feminino-accessorios" data-parent="#category-feminino">
                                    <span className="fa fa-angle-down icon-collapsed"></span>
                                    <span className="fa fa-angle-up icon-show"></span>
                                </button>
                                <ul className="submenu-secondary collapse hidden" id="category-feminino-accessorios">
                                    <li><a href="./categoria?category=feminino&subcategory-primary=acessórios&subcategory-secondary=bolsas">Bolsas</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=acessórios&subcategory-secondary=carteiras">Carteiras</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=acessórios&subcategory-secondary=óculos">Óculos</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=acessórios&subcategory-secondary=relógios">Relógios</a></li>
                                    <li><a href="./categoria?category=feminino&subcategory-primary=acessórios&subcategory-secondary=lenços">Lenços</a></li>
                                </ul>
                            </li>
                            <li><a href="./categoria?category=feminino&subcategory-primary=vestidos">Vestidos</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="./categoria?category=infantil">Infantil</a></li>
                <li><a href="./categoria?category=básico">Básico</a></li>
                <li><a href="./categoria?category=esportes">Esportes</a></li>
                <li><a href="./categoria?category=novidades">Novidades</a></li>
                <li><a href="./categoria?category=ofertas">Ofertas</a></li>
                <li>
                    <a href="./marcas">Marcas</a>
                    <button className="collapsed" data-toggle="collapse" data-target="#category-marcas" data-parent=".menu">
                        <span className="fa fa-angle-down icon-collapsed"></span>
                        <span className="fa fa-angle-up icon-show"></span>
                    </button>
                    <div className="submenu-primary collapse hidden" id="category-marcas">
                        <ul>
                            <li><a href="./categoria?category=marcas&subcategory-primary=adidas">Adidas</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=calvin klein">Calvin Klein</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=cavalera">Cavalera</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=colcci">Colcci</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=converse">Converse</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=everlast">Everlast</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=lacoste">Lacoste</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=mizuno">Mizuno</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=mormaii">Mormaii</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=nike">Nike</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=oakley">Oakley</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=puma">Puma</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=ray ban">Ray Ban</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=reebok">Reebok</a></li>
                            <li><a href="./categoria?category=marcas&subcategory-primary=vans">Vans</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="./categoria?category=outlet">Outlet</a></li>
            </ul>
        </nav>
    )
}
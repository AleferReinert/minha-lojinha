import { Menu } from "./Menu";

export function DropdownUser(props){
    const dropdownLinks = () => {
        if(props.isLoggedIn){
            return(
                <ul>
                    <li>
                        <button type="button" className="collapsed" data-toggle="collapse" data-target="#list-profile">
                            <span className="fa fa-user"></span>
                            Olá, João
                            <span className="fa fa-angle-down icon-collapsed"></span>
                            <span className="fa fa-angle-up icon-show"></span>
                        </button>
                        <ul id="list-profile" className="collapse">
                            <li><a href="./">Meus Dados</a></li>
                            <li><a href="./">Meus Pedidos</a></li>
                            <li><a href="./">Lista de Desejos</a></li>
                        </ul>
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
                    <li><a href="/login">Entrar</a></li>
                    <li><a href="./">Cadastre-se</a></li>
                </ul>
            )
        }
    };
    return (
        <div id="menu-mobile" className="collapse hidden">
            <button className="btn-close-menu-mobile">
                Fechar menu
            </button>
            <nav className="nav-login">
                {dropdownLinks()}
            </nav>
            <Menu />
        </div>
    );
}
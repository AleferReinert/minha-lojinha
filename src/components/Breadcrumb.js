import './Breadcrumb.scss';

export function Breadcrumb(){
    return(
        <div className="container">
            <nav id="breadcrumb">
                <a href="./">Início</a>
                <a href="./">Masculino</a>
                <a href="./">Camisetas</a>
            </nav>
        </div>
    )
}
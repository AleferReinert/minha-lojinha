import './Categories.scss';

export function Categories(props) {
    return (
        <nav id={props.id}>
            <a href="./categoria?category=masculino">Masculino</a>
            <a href="./categoria?category=feminino">Feminino</a>
            <a href="./categoria?category=infantil">Infantil</a>
            <a href="./categoria?category=básico">Básico</a>
            <a href="./categoria?category=esportes">Esportes</a>
            <a href="./categoria?category=novidades">Novidades</a>
            <a href="./categoria?category=ofertas">Ofertas</a>
            <a href="./categoria?category=outlet">Outlet</a>
        </nav>
    )
}
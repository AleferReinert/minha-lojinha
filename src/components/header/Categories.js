import './Categories.scss';
import { Link } from 'react-router-dom';

export function Categories(props) {
    return (
        <nav id={props.id}>
            <Link to="/categoria/masculino">Masculino</Link>
            <Link to="/categoria/feminino">Feminino</Link>
            <Link to="/categoria/infantil">Infantil</Link>
            <Link to="/categoria/básico">Básico</Link>
            <Link to="/categoria/esportes">Esportes</Link>
            <Link to="/categoria/novidades">Novidades</Link>
            <Link to="/categoria/ofertas">Ofertas</Link>
            <Link to="/categoria/outlet">Outlet</Link>
        </nav>
    )
}
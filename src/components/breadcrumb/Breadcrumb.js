import './Breadcrumb.scss';
import { Link } from 'react-router-dom';

export function Breadcrumb(){
    return(
        <div className="container">
            <nav id="breadcrumb">
                <Link to='./'>Início</Link>
                <Link to='./'>Masculino</Link>
            </nav>
        </div>
    )
}
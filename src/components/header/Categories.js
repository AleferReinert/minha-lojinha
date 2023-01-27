import './Categories.scss';
import { Link } from 'react-router-dom';
import categories from '../../dataCategories.json';
import { formatUrl } from '../Global';

export function Categories(props) {
    return (
        <nav id={props.id}>
            {categories.map((category, i)=>{
                const url = '/categoria' + formatUrl(category.name);
                
                return(
                    <Link to={url} key={i}>
                        {category.name}
                    </Link>
                )
            })}
        </nav>
    )
}
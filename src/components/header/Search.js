import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';

export function Search(props){
    return(
        <div className={ 'search ' + props.searchMobile } id="header-search">
            <form action="">
                <input type="text" placeholder="Digite sua busca..." className="input" />
                <button type="submit" className="btn btn-submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}
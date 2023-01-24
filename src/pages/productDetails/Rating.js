import './Rating.scss';
import { Title } from '../../components/title/Title';
import { Stars } from '../../components/stars/Stars';
import { calculateRating } from '../../components/Global';

export function Rating(props) {
    const content = () => {
        if (props.ratings.length > 0) {
            return (
                <div className='columns'>
                    <div className='column-left'>
                        <Stars rating={calculateRating(props.ratings)} />
                        <span className='average'>
                            <span>{calculateRating(props.ratings)}</span> / 5
                        </span>
                        Baseado em {props.ratings.length} avaliações
                    </div>
                    <ul className='column-right'>
                        {props.ratings.map((rating, i) => {
                            return (
                                <li key={i}>
                                    <div>
                                        <p className='user'>{rating.user}</p>
                                        <span>|</span>
                                        <p className='date'>{rating.date}</p>
                                    </div>
                                    <div>
                                        <h3 className='title'>{rating.title}</h3>
                                        <Stars rating={rating.rating} />
                                        <p className='comment'>{rating.comment}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <p>Esse produto ainda não recebeu avaliações.</p>
            )
        }
    }
    return (
        <div id='rating'>
            <div className='container'>
                <Title type='quaternary' title={`Avaliações (${props.ratings.length})`} />
                {content()}
            </div>
        </div>
    )
}
import './Rating.scss';
import { Title } from '../../components/Title';
import { RatingStars } from '../../components/RatingStars';
import { calculateRating } from '../../components/Global';

export function Rating(props) {
    return (
        <div id='rating'>
            <div className='container'>
                <Title type='quaternary' title={`Avaliações (${props.ratings.length})`} />
                <div className='columns'>
                    <div className='column-left'>
                        <RatingStars rating={calculateRating(props.ratings)} />
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
                                        <RatingStars rating={rating.rating} />
                                        <p className='comment'>{rating.comment}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
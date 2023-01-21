import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';
import './RatingStars.scss'

export function RatingStars(props) {
    const rating = props.rating;

    return (
        <div title={rating} className={'rating-stars ' + props.device}>
            <div className='empty'>
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
                <FontAwesomeIcon icon={faStarO} />
            </div>
            <div className='full' style={{ maxWidth: (rating * 20) + '%' }}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
    )
}
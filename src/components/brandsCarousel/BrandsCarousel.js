import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './BrandsCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Title } from '../title/Title';
import brands from '../../dataBrands.json';
import { formatUrl } from '../Global';

function Arrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    );
}

export function BrandsCarousel() {
    const settings = {
        autoplay: false,
        autoPlaySpeed: 1000,
        arrows: true,
        dots: false,
        infinite: true,
        slidesPerRow: 8,
        slidesToScroll: 1,
        prevArrow: <Arrow icon={faChevronLeft} />,
        nextArrow: <Arrow icon={faChevronRight} />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesPerRow: 6
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesPerRow: 4
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesPerRow: 3
                }
            }
        ]
    };

    return (
        <div id='brands-carousel'>
            <div className='container'>
                <Title type='primary' title='Marcas' />
                <Slider {...settings}>
                    {brands.map((brand, i) => {
                        const name = brand.name;
                        const src = process.env.PUBLIC_URL + '/brands/' + brand.image;
                        const url = formatUrl(brand.name);

                        return (
                            <div key={i}>
                                <Link to={url} title={name}>
                                    <img src={src} alt={name} />
                                </Link>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
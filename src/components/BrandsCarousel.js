import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './BrandsCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Title } from './Title';

function Arrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    );
}

export function BrandsCarousel() {
    const brands = [
        { image: 'adidas.png', name: 'Adidas' },
        { image: 'calvin-klein.png', name: 'Calvin Klein' },
        { image: 'cavalera.png', name: 'Cavalera' },
        { image: 'colcci.png', name: 'Colcci' },
        { image: 'converse.png', name: 'Converse' },
        { image: 'everlast.png', name: 'Everlast' },
        { image: 'fila.png', name: 'Fila' },
        { image: 'lacoste.png', name: 'Lacoste' },
        { image: 'mizuno.png', name: 'Mizuno' },
        { image: 'mormaii.png', name: 'Mormaii' }, 
        { image: 'nike.png', name: 'Nike' },
        { image: 'oakley.png', name: 'Oakley' },
        { image: 'puma.png', name: 'Puma' },
        { image: 'ray-ban.png', name: 'Ray Ban' },
        { image: 'vans.png', name: 'Vans' }
    ];
    var settings = {
        autoplay: true,
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
                        return (
                            <div>
                                <Link to='./' title={brand.name} key={i}>
                                    <img src={process.env.PUBLIC_URL + '/brands/' + brand.image} alt={brand.name} />
                                </Link>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
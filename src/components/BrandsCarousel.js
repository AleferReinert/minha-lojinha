import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './BrandsCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Brand = props => {
    return (
        <Link to='/' title={props.title}>
            <img src={process.env.PUBLIC_URL + '/brands/' + props.src} alt={props.title} />
        </Link>
    )
}

function Arrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    );
}

export function BrandsCarousel() {
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
            <div className="title-section">
                    <h1>Marcas</h1>
                </div>
                <Slider {...settings}>
                    <Brand src='adidas.png' title='Adidas' />
                    <Brand src='calvin-klein.png' title='Calvin Klein' />
                    <Brand src='cavalera.png' title='Cavalera' />
                    <Brand src='colcci.png' title='Colcci' />
                    <Brand src='converse.png' title='Converse' />
                    <Brand src='everlast.png' title='Everlast' />
                    <Brand src='fila.png' title='Fila' />
                    <Brand src='lacoste.png' title='Lacoste' />
                    <Brand src='mizuno.png' title='Mizuno' />
                    <Brand src='mormaii.png' title='Mormaii' />
                    <Brand src='nike.png' title='Nike' />
                    <Brand src='oakley.png' title='Oakley' />
                    <Brand src='puma.png' title='Puma' />
                    <Brand src='ray-ban.png' title='Ray Ban' />
                    <Brand src='vans.png' title='Vans' />
                </Slider>
            </div>
        </div>
    )
}
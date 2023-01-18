import Carousel from 'react-bootstrap/Carousel';
import './BannerCarousel.scss';
import { Link } from 'react-router-dom';

export function BannerCarousel(props) {
    const dataMobile = [
        {
            image: 'banner-1-mobile.jpg',
            description: 'Confira nossas ofertas',
            url: './'
        },
        {
            image: 'banner-2-mobile.jpg',
            description: 'Linha infantil',
            url: './'
        },
        {
            image: 'banner-3-mobile.jpg',
            description: 'Lançamentos 2023',
            url: './'
        }
    ];

    const dataDesktop = [
        {
            image: 'banner-1-desktop.jpg',
            description: 'Confira nossas ofertas',
            url: './'
        },
        {
            image: 'banner-2-desktop.jpg',
            description: 'Linha infantil',
            url: './'
        },
        {
            image: 'banner-3-desktop.jpg',
            description: 'Lançamentos 2023',
            url: './'
        }
    ];

    let data = props.device === 'mobile' ? dataMobile : dataDesktop;
    
    return (
        <div className={'banner-carousel-' + props.device}>
            <Carousel fade={true} interval={3000} controls={props.controls}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <Link to={slide.url} title={slide.description}>
                                <img src={process.env.PUBLIC_URL + '/banners/' + slide.image} alt={slide.description} />
                            </Link>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}
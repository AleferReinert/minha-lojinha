import Carousel from 'react-bootstrap/Carousel';
import './BannerCarousel.scss';
import { Link } from 'react-router-dom';

export function BannerCarousel(props) {
    const bannersMobile = [
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

    const bannersDesktop = [
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

    let banners = props.device === 'mobile' ? bannersMobile : bannersDesktop;
    
    return (
        <div className={'banner-carousel-' + props.device}>
            <Carousel fade={true} interval={3000} controls={props.controls}>
                {banners.map((banner, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <Link to={banner.url} title={banner.description}>
                                <img src={process.env.PUBLIC_URL + '/banners/' + banner.image} alt={banner.description} />
                            </Link>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}
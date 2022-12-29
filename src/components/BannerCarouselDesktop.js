import Carousel from 'react-bootstrap/Carousel';
import './BannerCarouselDesktop.scss';
import { Link } from 'react-router-dom';

const Banner = props => {
    return(
        <Link to={props.url}>
            <img src={props.src} alt={props.description} />
        </Link>
    )
}

export function BannerCarouselDesktop() {
    return (
        <div className="banner-carousel-desktop">
            <Carousel fade={true} interval={3000}>
                <Carousel.Item>
                    <Banner
                        url='/'
                        src='./banners/banner-1-desktop.jpg'
                        description='Confira nossas ofertas'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Banner
                        url='/'
                        src='./banners/banner-2-desktop.jpg'
                        description='Linha infantil'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Banner
                        url='/'
                        src='./banners/banner-3-desktop.jpg'
                        description='Lançamentos 2023'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
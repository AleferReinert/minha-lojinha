import Carousel from 'react-bootstrap/Carousel';
import './BannerCarouselMobile.scss';
import { Link } from 'react-router-dom';

const Banner = props => {
    return(
        <Link to={props.url}>
            <img src={props.src} alt={props.description} />
        </Link>
    )
}

export function BannerCarouselMobile() {
    return (
        <div className="banner-carousel-mobile">
            <Carousel controls={false} fade={true} interval={3000}>
                <Carousel.Item>
                    <Banner
                        url='/'
                        src='./banners/banner-1-mobile.jpg'
                        description='Confira nossas ofertas'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Banner
                        url='/'
                        src='./banners/banner-2-mobile.jpg'
                        description='Linha infantil'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Banner
                        url='/'
                        src='./banners/banner-3-mobile.jpg'
                        description='Lançamentos 2023'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
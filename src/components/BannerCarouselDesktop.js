import Carousel from 'react-bootstrap/Carousel';
import './BannerCarouselDesktop.scss';

const Banner = props => {
    return(
        <a href={props.url}>
            <img src={props.src} alt={props.description} />
        </a>
    )
}

export function BannerCarouselDesktop() {
    return (
        <div className="banner-carousel-desktop">
            <Carousel>
                <Carousel.Item>
                    <Banner
                        url='./'
                        src='./banners/banner-1-desktop.jpg'
                        description='Confira nossas ofertas'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Banner
                        url='./'
                        src='./banners/banner-2-desktop.jpg'
                        description='Linha infantil'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Banner
                        url='./'
                        src='./banners/banner-3-desktop.jpg'
                        description='Lançamentos 2023'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
import Carousel from 'react-bootstrap/Carousel';
import './BannerCarousel.scss';
import { Link } from 'react-router-dom';
import dataBanners from '../../dataBanners.json';

export function BannerCarousel(props) {
    let banners = props.device === 'mobile' ? dataBanners.mobile : dataBanners.desktop;
    const settings = {
        fade: true,
        interval: 3000,
        controls: props.controls
    }
    
    return (
        <div className={'banner-carousel-' + props.device}>
            <Carousel {...settings}>
                {banners.map((banner, i) => {
                    const src = process.env.PUBLIC_URL + '/banners/' + banner.image;
                    const description = banner.description;

                    return (
                        <Carousel.Item key={i}>
                            <Link to={banner.url} title={description}>
                                <img src={src} alt={description} />
                            </Link>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}
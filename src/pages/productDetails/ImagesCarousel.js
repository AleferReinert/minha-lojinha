import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './ImagesCarousel.scss'

export function ImagesCarousel(props) {
    const [index, setIndex] = useState(0);

    return (
        <div id='images-carousel'>
            <Carousel controls={false} fade={true} interval={null} activeIndex={index}>
                {props.images.map((image, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img src={process.env.PUBLIC_URL + '/products/' + image.url} alt={image.description} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div id="thumbs">
                {props.images.map((image, i) => {
                    return (
                        <button type='button' onClick={() => { setIndex(i) }} title={image.description} key={i}>
                            <img src={process.env.PUBLIC_URL + '/products/' + image.url} alt={image.description} />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
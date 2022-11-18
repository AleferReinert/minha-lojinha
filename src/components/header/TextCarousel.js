import './TextCarousel.scss';
import Carousel from 'react-bootstrap/Carousel';

export function TextCarousel(){
    return(
        <Carousel className="carousel-header" indicators={false} controls={false}>
            <Carousel.Item>
                <div>Frete grátis para sul e sudeste</div>
            </Carousel.Item>
            <Carousel.Item>
                <div>Produtos com até 70% de desconto</div>
            </Carousel.Item>
            <Carousel.Item>
                <div>Parcele em até 10x sem juros no cartão</div>
            </Carousel.Item>
        </Carousel>
    )
}
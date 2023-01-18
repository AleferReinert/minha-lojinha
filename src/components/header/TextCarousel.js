import './TextCarousel.scss';
import Carousel from 'react-bootstrap/Carousel';

export function TextCarousel() {
    const data = [
        'Frete grátis para sul e sudeste',
        'Produtos com até 70% de desconto',
        'Parcele em até 10x sem juros no cartão'
    ]

    return (
        <Carousel className="carousel-header" indicators={false} controls={false}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <div>{slide}</div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
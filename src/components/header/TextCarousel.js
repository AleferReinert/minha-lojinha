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
            {data.map((text, i) => {
                return (
                    <Carousel.Item key={i}>
                        <div>{text}</div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
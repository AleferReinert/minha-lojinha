import { Accordion } from "react-bootstrap";

let questions = [
    {
        question: 'Quais as formas de pagamento disponíveis?',
        answer: 'Aliquam eu velit ex. Proin ultricies dolor nec viverra tempus. Sed dolor massa, interdum a congue id, mollis non turpis. Mauris elementum varius nisl sed commodo. Aliquam vel gravida diam, eget elementum ante. Etiam non libero est. Duis a ligula et est commodo cursus.'
    },
    {
        question: 'Como mudar o endereço de entrega após a compra?',
        answer: 'Nunc nec sodales ligula. Sed tempus libero risus, fringilla finibus elit malesuada ut. Maecenas sed aliquet quam. Curabitur vel quam ut neque dictum commodo a a odio. Pellentesque placerat augue nec pretium accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tincidunt et urna vitae auctor.'
    },
    {
        question: 'Como rastrear meu pedido?',
        answer: 'Nullam vitae ligula dapibus, feugiat felis ut, euismod orci. Vivamus ac sollicitudin justo, ac posuere tortor. Nam in tortor sit amet nisl pharetra consectetur. Praesent lacus tortor, efficitur sollicitudin lacus sit amet, dignissim maximus augue.'
    },
    {
        question: 'Qual o prazo máximo para fazer devolução?',
        answer: 'Etiam tempus nisi ac eros suscipit, a finibus mi ornare. Nullam egestas, ex ut dignissim vulputate, elit orci ullamcorper mi, eget placerat eros augue at enim.'
    },
    {
        question: 'O que fazer se meu pagamento não foi reconhecido?',
        answer: 'Praesent sagittis augue in sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ultrices cursus mollis. Nullam vel pulvinar felis. Mauris vehicula tincidunt hendrerit. Etiam laoreet dolor id odio euismod ullamcorper. Curabitur quis nibh at orci tincidunt tempus. Nunc auctor consectetur elit in iaculis. Suspendisse placerat consectetur suscipit.'
    }
];

let list = [];
for (let i = 0; i < questions.length; i++) {
    list.push(
        <Accordion.Item eventKey={i}>
            <Accordion.Header>
                { questions[i].question }
            </Accordion.Header>
            <Accordion.Body as='p'>
                { questions[i].answer }
            </Accordion.Body>
        </Accordion.Item>
    )
}

const Faq = () => {
    return (
        <>
            <div className='container'>
                <h1>Perguntas frequentes</h1>
                <Accordion defaultActiveKey="-1">
                    {list}
                </Accordion>
            </div>
        </>
    )
}

export default Faq;
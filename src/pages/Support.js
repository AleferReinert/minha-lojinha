import { Title } from "../components/Title";
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faShoppingBag, faQuestion, faUsd, faExchange, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Support.scss';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AccordionItem = props => {
    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>
                {props.question}
            </Accordion.Header>
            <Accordion.Body as='p'>
                {props.answer}
            </Accordion.Body>
        </Accordion.Item>
    )
}

const Support = () => {
    const { tab } = useParams();
    const [tabParam, setTabParam] = useState(tab);
    const [title, setTitle] = useState(tab);
    const [currentTab, setCurrentTab] = useState(tab);
    const changeTab = e => {
        setCurrentTab(e.target.value);
        setTitle(e.target.textContent);
    }
    useEffect(() => {
        setTabParam(tab);
        if(tabParam === tab){
            document.querySelector(`button[value="${tabParam}"]`).click();
            document.getElementById('support-select').value = tabParam;
        }
    }, [tab, tabParam]);

    const NavItem = props => {
        return (
            <button onClick={changeTab} value={props.eventKey} className={currentTab === props.eventKey ? 'active' : ''}>
                <FontAwesomeIcon icon={props.icon} />
                {props.title}
            </button>
        )
    }

    return (
        <>
            <Title type='secondary' title='Ajuda e suporte' />
            <div className='container support-container'>
                <Form.Select id='support-select' onChange={changeTab}>
                    <option value="buy">Como comprar</option>
                    <option value="payments">Pagamentos</option>
                    <option value="cancel">Cancelamentos</option>
                    <option value="deliveries">Entregas e frete</option>
                    <option value="exchanges">Trocas e devoluções</option>
                    <option value="faq">Dúvidas frequentes</option>
                </Form.Select>
                <nav id="support-nav">
                    <NavItem eventKey='buy' title='Como comprar' icon={faShoppingBag} />
                    <NavItem eventKey='payments' title='Pagamentos' icon={faUsd} />
                    <NavItem eventKey='cancel' title='Cancelamentos' icon={faTimes} />
                    <NavItem eventKey='deliveries' title='Entregas e frete' icon={faTruck} />
                    <NavItem eventKey='exchanges' title='Trocas e devoluções' icon={faExchange} />
                    <NavItem eventKey='faq' title='Dúvidas frequentes' icon={faQuestion} />
                </nav>
                <div id='support-tabs'>
                    <Title type='tertiary' title={title} />
                    <Accordion>
                        <Tab.Container activeKey={currentTab}>
                            <Tab.Content>
                                <Tab.Pane eventKey="buy">
                                    <AccordionItem
                                        eventKey='0'
                                        question='Como escolher meu tamanho?'
                                        answer='Aliquam eu velit ex. Proin ultricies dolor nec viverra tempus.'
                                    />
                                    <AccordionItem
                                        eventKey='1'
                                        question='Como utilizar meu cupom de desconto?'
                                        answer='Sed dolor massa, interdum a congue id, mollis non turpis. Mauris elementum varius nisl sed commodo.'
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="deliveries">
                                    <AccordionItem
                                        eventKey='2'
                                        question='Como é feita a entrega de produtos?'
                                        answer='Etiam non libero est. Duis a ligula et est commodo cursus. Nunc nec sodales ligula. Sed tempus libero risus, fringilla finibus elit malesuada ut.'
                                    />
                                    <AccordionItem
                                        eventKey='3'
                                        question='Quais são os tipos de frete disponíveis?'
                                        answer='Maecenas sed aliquet quam. Curabitur vel quam ut neque dictum commodo a a odio.'
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="payments">
                                    <AccordionItem
                                        eventKey='4'
                                        question='Quais formas de pagamento disponíveis?'
                                        answer='Praesent non ex tristique lorem ultrices vehicula. Donec vel tortor nulla. Nam eget lectus nulla.'
                                    />
                                    <AccordionItem
                                        eventKey='5'
                                        question='O que fazer se o pagamento não for reconhecido?'
                                        answer='Praesent non ex tristique lorem ultrices vehicula. Donec vel tortor nulla. Nam eget lectus nulla.'
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="cancel">
                                    <AccordionItem
                                        eventKey='6'
                                        question='Posso cancelar o pedido após o envio?'
                                        answer='Suspendisse egestas lorem nec enim lacinia, sit amet feugiat neque pretium. In commodo justo feugiat ligula dapibus vulputate.'
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="exchanges">
                                    <AccordionItem
                                        eventKey='7'
                                        question='O produto não serviu, posso efetuar a troca?'
                                        answer='Fusce molestie aliquam condimentum. In hac habitasse platea dictumst.'
                                    />
                                    <AccordionItem
                                        eventKey='8'
                                        question='Tenho que pagar frete para fazer a devolução?'
                                        answer='Nunc finibus ipsum sit amet blandit ornare.'
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="faq">
                                    <AccordionItem
                                        eventKey='9'
                                        question='Como atualizar meu endereço?'
                                        answer='Cras viverra posuere diam, non dapibus ante egestas non.'
                                    />
                                    <AccordionItem
                                        eventKey='10'
                                        question='Como recuperar minha senha?'
                                        answer='Vestibulum commodo justo ex, in pulvinar est faucibus sit amet. Integer volutpat pulvinar sem tempor suscipit.'
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Support;
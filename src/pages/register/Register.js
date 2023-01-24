import { Title } from '../../components/title/Title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.scss';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';

const Registration = () => {
    // Controla a escolha entre pessoa física e jurídica no topo
    const [typePerson, setTypePerson] = useState('natural-person');
    function naturalPerson() {
        setTypePerson('natural-person');
    }
    function legalPerson() {
        setTypePerson('legal-person');
    }

    // Renderiza e controla a visibilidade dos campos de pessoa física e jurídica
    function Field(props) {
        const condition = typePerson === props.typePerson || typeof props.typePerson === 'undefined';
        if (condition && props.type === 'select-genre') {
            return (
                <Form.Group>
                    <Form.Label className='required'>Sexo</Form.Label>
                    <Form.Select required>
                        <option>Selecione</option>
                        <option value="men">Masculino</option>
                        <option value="women">Feminino</option>
                        <option value="other">Outro</option>
                    </Form.Select>
                </Form.Group>
            )
        } else if (condition) {
            return (
                <Form.Group>
                    <Form.Label className='required'>{props.title}</Form.Label>
                    <Form.Control as={IMaskInput} type={props.type} placeholder={props.placeholder} mask={props.mask} required />
                </Form.Group>
            )
        }
    }

    return (
        <>
            <Title type='secondary' title='Cadastro' />
            <div id='container-register' className='container'>
                <Title type='tertiary' title='Sou novo cliente' />
                <div className="choose-type">
                    <Form.Check name='type-person' label="Pessoa Física" type='radio' id='natural-person' onClick={naturalPerson} defaultChecked />
                    <Form.Check name='type-person' label="Pessoa Jurídica" type='radio' id='legal-person' onClick={legalPerson} />
                </div>
                <Form>
                    <Field typePerson='legal-person' title='Razão social' type='text' />
                    <Field typePerson='legal-person' title='Nome fantasia' type='text' />
                    <div className="two-columns-desktop">
                        <Field typePerson='legal-person' title='Inscrição estadual' type='text' />
                        <Field typePerson='legal-person' title='CNPJ' type='text' placeholder='00.000.000/0000-00' mask='00.000.000/0000-00' />
                    </div>
                    <Field typePerson='natural-person' title='Nome' type='text' />
                    <Field typePerson='natural-person' title='Sobrenome' type='text' />
                    <div className="two-columns-desktop">
                        <Field typePerson='natural-person' title='CPF' type='text' placeholder='000.000.000-00' mask='000.000.000-00' />
                        <Field typePerson='natural-person' title='Data de nascimento' type='date' />
                    </div>
                    <div className="two-columns-desktop">
                        <Field title='Telefone' type='tel' placeholder='(00) 00000-0000' mask='(00) 00000-0000' />
                        <Field typePerson='natural-person' title='Sexo' type='select-genre' />
                    </div>
                    <Field title='E-mail' type='email' placeholder='nome@exemplo.com' />
                    <div className="two-columns-desktop">
                        <Field title='Senha' type='password' placeholder='Mínimo de 8 caracteres' />
                        <Field title='Confirme sua senha' type='password' placeholder='Mínimo de 8 caracteres' />
                    </div>
                    <div className="checklist">
                        <div className='form-check'>
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">
                                Li e concordo com os
                                <a href="./" className='link'> termos de uso </a> e
                                <a href="./" className='link'> política de privacidade</a>.
                            </label>
                        </div>
                        <Form.Check label="Receber ofertas por e-mail?" type='checkbox' id='check-newsletter' />
                    </div>
                    <Button type='submit' variant='primary'>Cadastrar</Button>{' '}
                </Form>
                <div className="login-link">
                    <p>Já tem conta?</p>
                    <Link to='/entrar' className='link'>Entrar!</Link>
                </div>
            </div>
        </>
    )
}

export default Registration;
import { Title } from '../components/Title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.scss';
import { useState } from 'react';

const Registration = () => {
    const [typePerson, setTypePerson] = useState('natural-person');
    function naturalPerson() {
        setTypePerson('natural-person');
        console.log('físico');
    }
    function legalPerson() {
        setTypePerson('legal-person');
        console.log('jurídico');
    }
    return (
        <>
            <Title type='secondary' title='Cadastro' />
            <div id='container-register' className={`container ${typePerson}`}>
                <Title type='tertiary' title='Sou novo cliente' />
                <div className="choose-type">
                    <Form.Check name='type-person' label="Pessoa Física" type='radio' id='natural-person' onClick={naturalPerson} defaultChecked />
                    <Form.Check name='type-person' label="Pessoa Jurídica" type='radio' id='legal-person' onClick={legalPerson} />
                </div>
                <Form>
                    <Form.Group className='field-legal-person'>
                        <Form.Label className='required'>Razão social</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>
                    <Form.Group className='field-legal-person'>
                        <Form.Label className='required'>Nome fantasia</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>
                    <div className="two-columns-desktop">
                        <Form.Group className='field-legal-person'>
                            <Form.Label className='required'>Inscrição estadual</Form.Label>
                            <Form.Control type='text' required />
                        </Form.Group>
                        <Form.Group className='field-legal-person'>
                            <Form.Label className='required'>CNPJ</Form.Label>
                            <Form.Control type='text' placeholder='00.000.000/0000-00' required />
                        </Form.Group>
                    </div>
                    <Form.Group className='field-natural-person'>
                        <Form.Label className='required'>Nome</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>
                    <Form.Group className='field-natural-person'>
                        <Form.Label className='required'>Sobrenome</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>
                    <div className="two-columns-desktop">
                        <Form.Group className='field-natural-person'>
                            <Form.Label className='required'>CPF</Form.Label>
                            <Form.Control type='text' placeholder='000.000.000-00' required />
                        </Form.Group>
                        <Form.Group className='field-natural-person'>
                            <Form.Label className='required'>Data de nascimento</Form.Label>
                            <Form.Control type='date' required />
                        </Form.Group>
                    </div>
                    <div className="two-columns-desktop">
                        <Form.Group>
                            <Form.Label className='required'>Telefone</Form.Label>
                            <Form.Control type='text' placeholder='(00) 00000-0000' required />
                        </Form.Group>
                        <Form.Group className='field-natural-person'>
                            <Form.Label className='required'>Sexo</Form.Label>
                            <Form.Select required>
                                <option>Selecione</option>
                                <option value="men">Masculino</option>
                                <option value="women">Feminino</option>
                                <option value="other">Outro</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <Form.Label className='required'>E-mail</Form.Label>
                        <Form.Control type='email' placeholder='nome@exemplo.com' required />
                    </Form.Group>
                    <div className="two-columns-desktop">
                        <Form.Group>
                            <Form.Label className='required'>Senha</Form.Label>
                            <Form.Control type='password' placeholder='Mínimo de 8 caracteres' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='required'>Confirme sua senha</Form.Label>
                            <Form.Control type='password' placeholder='Mínimo de 8 caracteres' required />
                        </Form.Group>
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
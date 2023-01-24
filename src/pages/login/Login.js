import { Title } from '../../components/Title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Title type='secondary' title='Entrar' />
            <div id='container-login' className='container'>
                <Title type='tertiary' title='Já sou cliente' />
                <Form>
                    <Form.Group>
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control type='email' placeholder='nome@exemplo.com' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control type='password' placeholder='Mínimo de 8 caracteres' required />
                        <a href='./' className='recover-password link'>Esqueci minha senha</a>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Entrar</Button>{' '}
                </Form>
                <div className="registration-link">
                    <p>Não tem conta?</p>
                    <Link to='/cadastro' className='link'>Cadastre-se!</Link>
                </div>
            </div>
        </>
    )
}

export default Login;
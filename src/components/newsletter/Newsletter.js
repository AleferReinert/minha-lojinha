import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Newsletter.scss';

export function Newsletter() {
    return (
        <div className="newsletter">
            <div className="container">
                <form action="./">
                    <h6 className='title'>Newsletter</h6>
                    <p>Receba novidades e ofertas em seu e-mail.</p>
                    <InputGroup>
                        <Form.Control
                            placeholder="Seu e-mail..."
                            aria-label="Seu e-mail"
                        />
                        <Button variant="secondary" type='submit'>
                            Cadastrar
                        </Button>
                    </InputGroup>
                </form>
            </div>
        </div>
    )
}
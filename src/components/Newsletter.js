import './Newsletter.scss';

export function Newsletter(){
    return(
        <div className="newsletter">
            <form action="./">
                <h6>Newsletter</h6>
                <p>Receba novidades e descontos em seu e-mail.</p>
                <input type="email" name="email" placeholder='Seu e-mail...' />
                <button type="submit" className="btn">Cadastrar</button>
            </form>
        </div>
    )
}
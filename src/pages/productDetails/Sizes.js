import './Sizes.scss';

export function Sizes(props) {

    return (
        <div id='sizes'>
            <h2>Tamanhos</h2>
            <ul>
                {props.sizes.map((size, i) => {
                    return (
                        <li key={i}>
                            <label>
                                <input type='radio' name='size' id={size} required />
                            </label>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}
import './Colors.scss';

export function Colors(props) {

    return (
        <div id='colors'>
            <h2>Cores</h2>
            <ul>
                {props.colors.map((color, i) => {
                    return (
                        <li style={{ backgroundColor: color.color }} key={i}>
                            <label title={color.title}>
                                <input type='radio' name='color' id={color.color} required />
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
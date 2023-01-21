import './Colors.scss';

export function Colors() {
    const colors = [
        { color: '#ff0000', title: 'Vermelho' },
        { color: '#00ff00', title: 'Verde' },
        { color: '#0000ff', title: 'Azul' },
        { color: '#000', title: 'Preto' },
        { color: '#fff', title: 'Branco' }
    ]
    return (
        <div id='colors'>
            <h2>Cores</h2>
            <ul>
                {colors.map((color, i) => {
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
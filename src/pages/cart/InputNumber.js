import './InputNumber.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function InputNumber(props) {
    const [number, setNumber] = useState(props.amount);
    const less = () => {
        if (number > 1) {
            setNumber(number - 1);
        } else {
            setNumber(1);
        }
    }
    const more = () => setNumber(number + 1);

    return (
        <div className='input-number'>
            <button type='button' className='' onClick={less}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type='text' value={number} className='form-control' required />
            <button type='button' className='' onClick={more}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
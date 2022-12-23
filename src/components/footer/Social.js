import './Social.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Item = props => {
    return(
        <li>
            <a title={props.title} href={props.url} target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon={props.icon} />
            </a>
        </li>
    )
}

export function Social() {
    return (
        <ul className="social">
            <Item title="Facebook" url="https://facebook.com" icon={faFacebook} />
            <Item title="Instagram" url="https://instagram.com" icon={faInstagram} />
            <Item title="Whatsapp" url="https://web.whatsapp.com/send?phone=5599123456789" icon={faWhatsapp} />
            <Item title="Pinterest" url="https://pinterest.com" icon={faPinterest} />
            <Item title="Twitter" url="https://twitter.com" icon={faTwitter} />
        </ul>
    )
}
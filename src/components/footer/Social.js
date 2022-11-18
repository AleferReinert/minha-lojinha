import './Social.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export function Social() {
    return (
        <ul className="social">
            <li>
                <a title="Facebook" href="https://facebook.com" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a title="Instagram" href="https://instagram.com" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a title="Whatsapp" href="https://web.whatsapp.com/send?phone=5547999219066" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </li>
            <li>
                <a title="Pinterest" href="https://pinterest.com" target="_blank">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
            </li>
            <li>
                <a title="Twitter" href="https://twitter.com" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    )
}
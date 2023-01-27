import './Social.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faWhatsapp, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import company from '../../dataCompany.json';
library.add(faFacebook, faInstagram, faWhatsapp, faPinterest, faTwitter);

export function Social() {
    return (
        <ul className="social">
            {company.social.map((social, i) => {
                const icon = ['fab', social.name.toLowerCase()];

                return (
                    <li key={i}>
                        <a title={social.name} href={social.url} target="_blank" rel='noreferrer'>
                            <FontAwesomeIcon icon={icon} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
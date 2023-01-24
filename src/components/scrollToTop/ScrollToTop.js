import './ScrollToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function scroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function visibility() {
    const btn = document.getElementById('scroll-to-top');
    btn.classList.toggle('active', window.scrollY > 300);
}

window.addEventListener('scroll', () => visibility());

export function ScrollToTop() {
    return (
        <button type='button' title='Voltar ao topo' id='scroll-to-top' onClick={scroll}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    )
}
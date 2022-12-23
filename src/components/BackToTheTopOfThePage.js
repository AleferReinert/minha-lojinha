import './BackToTheTopOfThePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function visibility() {
    const btn = document.getElementById('back-to-top');
    
    if (window.scrollY > 300) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

window.addEventListener('scroll', () => {
    visibility();
});

export function BackToTheTopOfThePage() {
    return (
        <button type='button' title='Voltar ao topo' id='back-to-top' onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    )
}
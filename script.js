const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.SetAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.SetAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.SetAttribute('aria-label', 'Abrir Menu');

    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



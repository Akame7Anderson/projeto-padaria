//SCROLL REVEAL
window.sr = ScrollReveal({reset: true});
sr.reveal('#imgSR', {duration: 3000});
//ACABA O SCROLL REVEAL

function menuShow() {
    let menuMobile = document.querySelector('.container');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('icon').src = "./img/menu.png";
    }
}
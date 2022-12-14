function criarBanner(bannerUm, bannerDois) {
    return `
    <div class="banners">
        <img src="./img/${bannerUm}.png" class="img-fluid" alt="">
        <img src="./img/${bannerDois}.png" class="img-fluid" alt="">
    </div>
    `
}

function imagensSr(srUm, srDois, srTres) {
    return `
    <section class="scrollReveal">
        <h1>Algumas Delicias <br> #TimePadaria</h1>
        <div id="imgSR">
            <img class="img-fluid" id="srUm" src="./img/${srUm}.jpg" alt="">
            <img class="img-fluid" id="srDois" src="./img/${srDois}.jpg" alt="">
            <img class="img-fluid" id="srTres" src="./img/${srTres}.jpeg" alt="">
        </div>
    </section>
    `
}

document.querySelector("body").innerHTML = `
    <header>
        <section class="container">
            <img class="imgLogo" src="./img/logo.png" alt="">
            <div class="dropdown">
                <a class="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img class=".icon" src="./img/menu.png" alt="">
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="https://benjaminpadaria.com.br/padaria/">A Padaria</a></li>
                    <li><a class="dropdown-item" href="https://benjaminpadaria.com.br/padarias/">Nossas Lojas</a></li>
                    <li><a class="dropdown-item" href="https://benjaminpadaria.com.br/fale-conosco/">Fale Conosco</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Trabalhe Conosco</a></li>
                    <li>
                    <li class="dropdown-item" id="encomendas" href="https://benjaminpadaria.com.br/encomendas/">
                        Encomendas</li>
                    <ul class="imagens">
                        <img src="./img/facebook.png" alt="">
                        <img src="./img/instagram.png" alt="">
                        <img src="./img/in.png" alt="">
                    </ul>
                </ul>
            </div>
        </section>
        <section class="containerDesk">
            <a href="https://mmp5.mmp5prd.mmcafe.com.br/login/manual?clientid=5ce737a9-fc1b-4670-95fd-0246c7bdfc4f">
                <img class="imgLogoDesk" src="./img/logo.png" alt="">
            </a>
            <div class="menuDesktop">
                <a href="https://benjaminpadaria.com.br/padaria/">A Padaria</a>
                <a href="https://benjaminpadaria.com.br/padarias/">Nossas Lojas</a>
                <a
                    href="https://www.ifood.com.br/delivery/descobrir/lista/chain:656efb91-1bf9-4bff-adf2-849c0bb39ed6?shortlink=BenjaminaPadaria&c=Benjamin%20a%20Padaria&pid=lista_parceiro&af_click_lookback=7d&af_force_deeplink=true">Peça
                    Via iFood</a>
                <a href="https://benjaminpadaria.com.br/fale-conosco/">Fale Conosco</a>
                <a href="https://benjaminpadaria.com.br/encomendas/">Encomendas</a>
                <img class="imgLogoDesktop" src="./img/logoDesktop.png" alt="">
            </div>
            <div class="mobile-menu-icon">
        </section>
    </header>

    <main>
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" id="slides"><img src="./img/slideUm.svg" alt=""></div>
                <div class="swiper-slide" id="slides"><img src="./img/slideDois.png" alt=""></div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        ${criarBanner (
            "bannerUm",
            "bannerDois"
        )}
        <section class="copoComTexto">
            <div class="divSRCopoComTexto">
                <img class="img-fluid" alt="" id="#copo" style="padding: 20px; width: 100%;" src="./img/imgCopo.webp">
            </div>
            <div class="divCopoComTexto">
                <h1>
                    Presente no seu dia a dia
                </h1>
                <p>É com cheiro de pão quentinho que te damos as boas-vindas todas as manhãs. Preparamos com paixão
                    cada
                    uma
                    de nossas receitas para levar até você os sabores que valimentar a sua alma na hora do almoço,
                    do
                    lanche, do jantar e sempre que bater aquela vontade de sentir um doce gostoso desmanchando na
                    boca.
                    Aqui
                    na Benjamin, você transforma momentos do seu dia em experiências memoráveis. Venha aproveitar
                    momentos
                    deliciosos a gente!</p>
                <a class="buttonCopo" href="">#TimePadaria</a>
            </div>
        </section>
        ${imagensSr(
            "paozinhoTeste",
            "paozinhoDois",
            "boloUm"
        )}
        <div class="imgLogoDois" style="margin: 20px 0px;">
            <img class="img-fluid" src="./img/imgLogoDois.png" alt="">
        </div>
        <section class="kitPadaria">
            <img style="padding: 20px;max-width: 600px;width: 100%;" src="./img/kitPadaria.webp" alt="">
            <div class="divKitPadaria">
                <h1>
                    Para todas as ocasiões
                </h1>
                <p>Para cada momento do seu dia, tem sempre uma delícia da Benjamin esperando por você. Seja para o
                    lanche
                    da tarde, a festinha da firma ou as comemorações da família. Encontros inesquecíveis merecem sabores
                    de
                    verdade!</p>
                <a href="#">Encomende Agora ➡</a>
            </div>
        </section>
    </main>

    <footer>
        <img class="imgTopo" src="./img/logo.png" alt="">
        <section class="footerSection">
            <div class="divFooterInstitucional">
                <h2>Institucional</h2>
                <a href="">A Padaria</a>
                <a href="">Nossas Lojas</a>
                <a href="">Fale Conosco</a>
                <a href="">Trabalhe Conosco</a>
            </div>
            <div class="footerIfood">
                <h1>Peça Já</h1>
                <img class="img-fluid" src="./img/ifood-marca.png" alt="">
            </div>
            <div class="footerRedes">
                <h2>Redes Sociais</h2>
                <div>
                    <img class="img-fluid" src="./img/facebook.png" alt="">
                    <img class="img-fluid" src="./img/instagram.png" alt="">
                    <img class="img-fluid" src="./img/in.png" alt="">
                </div>
            </div>
        </section>
        <div class="divCopyright">
            <p>Copyright © 2022 Benjamin Padaria . Todos os direitos reservados . Política de privacidade</p>
            <img src="img/logotipo-j1-studio-negativo.png" alt="">
        </div>
    </footer>
`
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
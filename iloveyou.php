<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="static/css/iloveyou.css">

    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Agbalumo&display=swap');
    </style>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <title>Document</title>
</head>
<body>

<div id="coracao-container"></div>
<script src="static/js/iloveyou.js"></script>

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3PlKQNlbL4767rND3HnqSI?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>  

    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="images/1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/3.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/5.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/6.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/7.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/8.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/9.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/10.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/11.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/12.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/13.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/14.jpg" alt=""></div>

        </div>
    </div>

    <p class="contagem">Eu te amo há 
        <span id="anos"></span> anos, 
        <span id="meses"></span> meses, 
        <span id="dias"></span> dias, 
        <span id="horas"></span> horas, 
        <span id="minutos"></span> minutos e 
        <span id="segundos"></span> segundos.
    </p>
    <p class="contagem">E vou te amar para o resto de nossas vidas!</p>

    <hr>

    <div class="text">
        <p>Meu amor, essa é a minha forma de te dar um presente "feito a mão" do jeito que você sempre gostou. Aqui o nosso amor vai ser contado de segundo em segundo, para todo o sempre, do jeitinho que deve ser. </p>
        <p>A cada segundo que passa eu te amo mais, e sou mais grato por você exisitr e estar junto comigo. Só tenho a te agradecer por todos os momentos incríveis cheios de alegrias, emoções e aprendizados, afinal, ao teu lado eu melhoro cada dia mais como pessoa e como namorado. </p>
        <p>Eu estou muito feliz em poder fazer parte deste momomento na tua vida, hoje são os seus 18 anos... amanhã podemos estar morando juntos e lidando com as dificuldades da vida adulta, e quem sabe, logo estaremos na nossa casinha, montando a nossa família com as melhores pessoas ao lado. </p>
        <p>Feliz aniversário, amor da minha vida! <br> Todo o sucesso e toda a felicidade do mundo eu desejo a você, nós vamos conquistar o mundo! </p>
        <h3>O amor que eu sinto por você, cresce a cada segundo que passa. </h3>
    </div>

    <hr>

    <h3>Para que o nosso mundo volte a ser colorido:</h3>
    <div class="qrcode">
        <a href="https://drive.google.com/drive/folders/1ZVLGxnFwykfnnTLRQP705z20yD-8Ie9Z?usp=drive_link"><img src="images/qrcode.png" alt="Link da felicidade"></a>
    </div>

    <h4>Feliz Aniversário, Meu Amor!</h4>

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

        <script>
        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 10
        });

        </script>

        <script>
        function atualizarData() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    document.getElementById("anos").innerHTML = data.anos;
                    document.getElementById("meses").innerHTML = data.meses;
                    document.getElementById("dias").innerHTML = data.dias;
                    document.getElementById("horas").innerHTML = data.horas;
                    document.getElementById("minutos").innerHTML = data.minutos;
                    document.getElementById("segundos").innerHTML = data.segundos;
                }
            };
            xhttp.open("GET", "index.php", true);
            xhttp.send();
        }

        atualizarData(); // Atualiza a data imediatamente
        setInterval(atualizarData, 1000); // Atualiza a data a cada segundo
        </script>
</body>
</html>
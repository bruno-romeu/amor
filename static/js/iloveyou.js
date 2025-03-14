function criarCoracao() {
    const coracao = document.createElement('span');
    coracao.classList.add('coracao');
    coracao.innerHTML = '❤️'; // Emoji de coração
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('coracao-container').appendChild(coracao);

    coracao.addEventListener('animationend', () => {
        coracao.remove();
    });
}

setInterval(criarCoracao, 2000); 
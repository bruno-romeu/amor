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

function calcularDiferenca() {
    const dataAniversario = new Date(2022, 4, 12, 21, 43, 0); 
    const agora = new Date();

    let anos = agora.getFullYear() - dataAniversario.getFullYear();
    let meses = agora.getMonth() - dataAniversario.getMonth();
    let dias = agora.getDate() - dataAniversario.getDate();

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    if (dias < 0) {
        meses--;
        let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += ultimoMes.getDate();
    }

    const diffMilissegundos = agora - dataAniversario;
    const segundosTotais = Math.floor(diffMilissegundos / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(calcularDiferenca, 1000);

calcularDiferenca();

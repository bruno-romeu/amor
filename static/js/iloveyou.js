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
    // Definir a data de início (o dia em que vocês começaram a contar)
    const dataAniversario = new Date(2022, 4, 12, 21, 43, 0); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
    const agora = new Date();

    // Calcular a diferença em milissegundos
    const diff = agora - dataAniversario;

    // Converter a diferença em unidades de tempo
    const segundosTotais = Math.floor(diff / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    // Quebrar os valores para exibir corretamente
    const anos = Math.floor(diasTotais / 365);
    const meses = Math.floor((diasTotais % 365) / 30);
    const dias = (diasTotais % 365) % 30;
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    // Atualizar o HTML
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

// Atualizar a cada segundo
setInterval(calcularDiferenca, 1000);

// Executar imediatamente ao carregar a página
calcularDiferenca();

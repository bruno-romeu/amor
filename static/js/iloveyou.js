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
    const dataAniversario = new Date(2022, 4, 12, 21, 43, 0); // 12 de maio de 2022
    const agora = new Date();

    // Criar um objeto para calcular diferença precisa de anos, meses e dias
    const diff = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })
        .formatToParts(new Date(agora - dataAniversario))
        .reduce((acc, part) => {
            if (part.type !== 'literal') acc[part.type] = parseInt(part.value, 10);
            return acc;
        }, {});

    let anos = agora.getFullYear() - dataAniversario.getFullYear();
    let meses = agora.getMonth() - dataAniversario.getMonth();
    let dias = agora.getDate() - dataAniversario.getDate();

    // Ajustar quando os meses ou dias ficarem negativos
    if (dias < 0) {
        meses--;
        let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += ultimoMes.getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Calcular horas, minutos e segundos
    const diffMilissegundos = agora - dataAniversario;
    const segundosTotais = Math.floor(diffMilissegundos / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
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


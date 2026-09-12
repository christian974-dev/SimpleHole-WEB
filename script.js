const velcorte = [
    25, 18.5, 10, 12.5,
    25, 17.5, 50, 40,
    25, 35, 65, 40
];

const materiais = [
    "Aço baixo carbono",
    "Aço médio carbono",
    "Aço duro",
    "Aço inoxidável",
    "Ferro fundido cinzento",
    "Ferro fundido nodular",
    "Alumínio",
    "Latão",
    "Cobre",
    "Plásticos",
    "Madeira Macia",
    "Madeira dura/MDF"
];


//funções do botão e campo de pesquisa
function calcularRPM() {
    const usuario = Number(document.getElementById("material").value);
    const diametro = Number(document.getElementById("broca").value);

    // função para evitar valores em branco ou negativos
    if (diametro <= 0 || isNaN(diametro)) {
        document.getElementById("resultado").innerText =
            "Diâmetro inválido! Digite um número maior que zero.";
        return;
    }

    //fórmula
    const RPM = Math.round(
        (velcorte[usuario - 1] * 1000) /
        (diametro * Math.PI)
    );

    //exibir 
    document.getElementById("resultado").innerText =
        `A velocidade ideal para furar ${materiais[usuario - 1]} é: ${RPM} RPM`;
}

const themeBtn = document.getElementById('theme-toggle-btn');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
} else {
    themeBtn.textContent = '🌙';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙';
    }
}

themeBtn.addEventListener('click', toggleDarkMode);
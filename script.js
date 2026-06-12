// A lógica deste projeto foi gerada parcialmente por IA.
function responder(num) {

    const respostas = {
        1: "A agricultura sustentável é uma forma de produzir alimentos respeitando o meio ambiente, utilizando os recursos naturais de forma consciente e garantindo que as futuras gerações também possam produzir.",

        2: "A economia de água evita o desperdício de um recurso essencial para a vida. Além disso, ajuda a manter rios e reservas naturais, garantindo água suficiente para pessoas, animais e plantações.",

        3: "A rotação de culturas é a prática de alternar os tipos de plantio no mesmo solo. Isso ajuda a manter a fertilidade da terra, reduzir pragas e evitar o desgaste do solo.",

        4: "Práticas não sustentáveis causam poluição, desmatamento e prejudicam o solo e a água. Também podem afetar a saúde humana e contribuir para o aquecimento global.",

        5: "A agricultura pode ajudar o meio ambiente usando técnicas como o plantio sustentável, preservação de áreas naturais e redução do uso de produtos químicos, protegendo a natureza e os recursos naturais."
    };

    document.getElementById("resposta" + num).innerHTML = respostas[num];
}
// A lógica deste projeto foi gerada parcialmente por IA.

function alternarModo() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "escuro");
    } else {
        localStorage.setItem("modo", "claro");
    }
}


window.onload = function() {

    if (localStorage.getItem("modo") === "escuro") {
        document.body.classList.add("dark");
    }

    document.body.classList.add("loaded");
}


function toggleInfo(tipo) {
    let elemento = document.getElementById("extra-" + tipo);

    elemento.style.display =
        (elemento.style.display === "block") ? "none" : "block";
}

function alternarModo() {
    document.body.classList.toggle("dark");

    const botao = document.getElementById("modo-btn");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "escuro");
        botao.innerHTML = "☀️";
    } else {
        localStorage.setItem("modo", "claro");
        botao.innerHTML = "🌙";
    }
}

window.onload = function() {
    const botao = document.getElementById("modo-btn");

    if (localStorage.getItem("modo") === "escuro") {
        document.body.classList.add("dark");
        botao.innerHTML = "☀️";
    }

    document.body.classList.add("loaded");
}
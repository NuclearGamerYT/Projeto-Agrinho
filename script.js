function responder(num) {

    if (num === 1) {
        document.getElementById("resposta1").innerHTML = 
        "A agricultura sustentável é uma forma de produzir alimentos respeitando o meio ambiente, utilizando os recursos naturais de forma consciente e garantindo que as futuras gerações também possam produzir."
    }

    if (num === 2) {
        document.getElementById("resposta2").innerHTML = 
        "A economia de água evita o desperdício de um recurso essencial para a vida. Além disso, ajuda a manter rios e reservas naturais, garantindo água suficiente para pessoas, animais e plantações."
    }

    if (num === 3) {
        document.getElementById("resposta3").innerHTML =
        "A rotação de culturas é a prática de alternar os tipos de plantio no mesmo solo. Isso ajuda a manter a fertilidade da terra, reduzir pragas e evitar o desgaste do solo."
    }

     if (num === 4) {
        document.getElementById("resposta4").innerHTML =
        "Práticas não sustentáveis causam poluição, desmatamento e prejudicam o solo e a água. Também podem afetar a saúde humana e contribuir para o aquecimento global."

     }

    if (num === 5) {
        document.getElementById("resposta5").innerHTML =
        "A agricultura pode ajudar o meio ambiente usando técnicas como o plantio sustentável, preservação de áreas naturais e redução do uso de produtos químicos, protegendo a natureza e os recursos naturais."
     }
}

function alternarModo() {
    document.body.classList.toggle("dark");
}

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
}

window.onload = function() {
    document.body.classList.add("loaded");
}

function toggleInfo(tipo) {
    let elemento = document.getElementById("extra-" + tipo);

    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}


const botao = document.getElementById("veja-mais");
const animais = document.querySelectorAll(".escondido");

botao.addEventListener("click", function() {

    animais.forEach(function(animal) {
        animal.classList.remove("escondido");
    });

    botao.style.display = "none";
});
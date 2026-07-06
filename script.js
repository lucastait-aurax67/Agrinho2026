const botao = document.getElementById("modoEscuro");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function mostrarDados(){

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    document.getElementById("resultado").innerHTML =
        "Olá, " + nome + " você tem " + idade + " anos.";
}

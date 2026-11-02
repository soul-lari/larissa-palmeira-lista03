const posts = [
  { userId: 1, id: 1, title: "Primeiro post", body: "Aprendendo a manipular o DOM." },
  { userId: 1, id: 2, title: "Segundo post", body: "Arrays de objetos são parecidos com o JSON de uma API." },
  { userId: 2, id: 3, title: "Terceiro post", body: "Em breve vamos buscar estes dados no servidor." },
  { userId: 2, id: 4, title: "Quarto post", body: "O método find devolve o primeiro item encontrado." },
  { userId: 3, id: 5, title: "Quinto post", body: "Se nada for encontrado, find devolve undefined." }
];

const inputId = document.getElementById("inputId");
const btnBuscar = document.getElementById("btnBuscar");
const divResultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", () => {

    divResultado.innerHTML = "";

    const valorInput = inputId.value.trim();

    if (valorInput === "") {
        const erro = document.createElement("p");
        erro.classList.add("erro");
        erro.innerText = "Digite um ID.";
        divResultado.appendChild(erro);
        return; 
    }

    const idProcurado = Number(valorInput);

    const postEncontrado = posts.find(post => post.id === idProcurado);

    if (!postEncontrado) {
        const erro = document.createElement("p");
        erro.classList.add("erro");
        erro.innerText = `Post não encontrado (ID ${valorInput}). Os IDs válidos vão de 1 a 5.`;
        divResultado.appendChild(erro);
        return; 
    }

    const titulo = document.createElement("h2");
    titulo.innerText = postEncontrado.title;

    const corpo = document.createElement("p");
    corpo.innerText = postEncontrado.body;

    divResultado.appendChild(titulo);
    divResultado.appendChild(corpo);
});
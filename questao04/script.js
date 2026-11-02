const posts = [
  { id: 1, title: "Introdução ao DOM" },
  { id: 2, title: "Eventos em JavaScript" },
  { id: 3, title: "O que é uma API?" }
];

const comentarios = [
  { postId: 1, id: 1, name: "Ana", email: "ana@email.com", body: "Explicação muito clara!" },
  { postId: 1, id: 2, name: "Bruno", email: "bruno@email.com", body: "Gostei do exemplo do getElementById." },
  { postId: 2, id: 3, name: "Carla", email: "carla@email.com", body: "addEventListener é bem melhor que onclick." },
  { postId: 3, id: 4, name: "Diego", email: "diego@email.com", body: "A analogia do garçom ajudou muito." },
  { postId: 3, id: 5, name: "Elisa", email: "elisa@email.com", body: "Quero testar o JSONPlaceholder!" },
  { postId: 3, id: 6, name: "Fábio", email: "fabio@email.com", body: "E o método POST, como funciona?" }
];

const selectPost = document.getElementById("post");
const tituloComentarios = document.getElementById("tituloComentarios");
const containerComentarios = document.getElementById("containerComentarios");

const optionPadrao = document.createElement("option");
optionPadrao.value = "";
optionPadrao.innerText = "Selecione um post";

optionPadrao.disabled = true;
optionPadrao.selected = true;
optionPadrao.hidden = true;

selectPost.appendChild(optionPadrao);

posts.forEach((post) => {
    const option = document.createElement("option");
    option.value = post.id;
    option.innerText = post.title;
    selectPost.appendChild(option);
});

selectPost.addEventListener("change", () => {

    containerComentarios.innerHTML = "";

    const idPostSelecionado = Number(selectPost.value);

    if (!idPostSelecionado) {
        tituloComentarios.innerText = "Comentários (0)";
        return;
    }

    const comentariosFiltrados = [];
    for (const comentario of comentarios) {
        if (comentario.postId === idPostSelecionado) {
            comentariosFiltrados.push(comentario);
        }
    }

    tituloComentarios.innerText = `Comentários (${comentariosFiltrados.length})`;

    comentariosFiltrados.forEach((comentario) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card-comentario");

        const elementoNome = document.createElement("h3");
        elementoNome.innerText = comentario.name;

        const elementoEmail = document.createElement("p");
        elementoEmail.innerText = `E-mail: ${comentario.email}`;

        const elementoTexto = document.createElement("p");
        elementoTexto.innerText = comentario.body;

        divCard.appendChild(elementoNome);
        divCard.appendChild(elementoEmail);
        divCard.appendChild(elementoTexto);

        containerComentarios.appendChild(divCard);
    });
});
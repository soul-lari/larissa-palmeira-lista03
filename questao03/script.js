const formulario = document.getElementById("formCadastro");
const preJson = document.getElementById("json");
const tabelaCorpo = document.getElementById("tabelaCorpo");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(formulario);

    const dados = {};
    for (const [chave, valor] of formData.entries()) {
        dados[chave] = valor;
    }

    preJson.innerText = JSON.stringify(dados, null, 2);

    const tr = document.createElement("tr");

    const nome = document.createElement("td");
    nome.innerText = dados.nome;

    const email = document.createElement("td");
    email.innerText = dados.email;

    const idade = document.createElement("td");
    idade.innerText = dados.idade;

    const curso = document.createElement("td");
    curso.innerText = dados.curso;

    tr.appendChild(nome);
    tr.appendChild(email);
    tr.appendChild(idade);
    tr.appendChild(curso);

    tabelaCorpo.appendChild(tr);

    formulario.reset();
});
const usuarios = [ 
    {id: 1, name: "Leanne Graham", email: "Sincere@april.biz", address: {city: "Gwenborough"}, company: {name: "Romaguera-Crona"}}, 
    {id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", address: {city: "Wisokyburgh"}, company: {name: "Deckow-Crist"}},
    {id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", address: {city: "McKenziehaven"}, company: {name: "Romaguera-Jacobson"}},
    {id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", address: {city: "South Elvis"}, company: {name: "Robel-Corkery"}}
];

const containerCards = document.getElementById("cards");
const total = document.getElementById("total");

usuarios.forEach((usuario) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const nome = document.createElement("h2");
    nome.innerText = usuario.name;
    divCard.appendChild(nome);

    const email = document.createElement("p");
    email.innerText = `E-mail: ${usuario.email}`;
    divCard.appendChild(email);

    const cidade = document.createElement("p");
    cidade.innerText = `Cidade: ${usuario.address.city}`;
    divCard.appendChild(cidade);

    const empresa = document.createElement("p");
    empresa.innerText = `Empresa: ${usuario.company.name}`;
    divCard.appendChild(empresa);
    
    divCard.addEventListener("click", () => {

        const selecionarCards = document.querySelectorAll(".card");
        selecionarCards.forEach(card => card.classList.remove("selecionado"));

        divCard.classList.add("selecionado");
    });

    containerCards.appendChild(divCard);
});

total.innerText = `Total de usuários: ${usuarios.length}`;
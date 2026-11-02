const usuarios = [ 
    {id: 1, name: "Leanne Graham", email: "Sincere@april.biz", address: {city: "Gwenborough"}, company: {name: "Romaguera-Crona"}}, 
    {id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", address: {city: "Wisokyburghh"}, company: {name: "Deckow-Crist"}},
    {id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.ne", address: {city: "Mckenziehaven"}, company: {name: "Romaguera-Jacobson"}},
    {id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", address: {city: "South Elvis"}, company: {name: "Robel-Corkery"}}
]

const card = document.getElementById("cards")

const email = document.createElement("p")
const cidade = document.createElement("p")
const empresa = document.createElement("p")

usuarios.forEach((usuario) => {
    const div = document.createElement("div")
    div.classLista.add('card')
    
    const nome = usuario.name
    const l1 = document.createElement("h2")
    l1.innerText = "Email = " + nome
    div.appendChild(l1)
    
    const email = usuario.email
    const l2 = document.createElement("p")
    l2.innerText = "Email = " + email
    div.appendChild(l2)
    
    const nome = usuario.name
    const l1 = document.createElement("h2")
    l1.innerText = "Email = " + nome
    div.appendChild(l1)
    
    const nome = usuario.name
    const l1 = document.createElement("h2")
    l1.innerText = "Email = " + nome
    div.appendChild(l1)

    card.appendChild(div)
});

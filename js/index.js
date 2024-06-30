const items = [
    {
        name: "Bolo",
        price: 3.00
    },
    {
        name: "Arroz Doce",
        price: 5.00
    },
    {
        name: "Caldos",
        price: 7.00
    },
    {
        name: "Milho",
        price: 3.00
    },
    {
        name: "Cuscuz",
        price: 5.00
    },
    {
        name: "Cachorro Quente",
        price: 8.00
    },
    {
        name: "Pé de Moleque",
        price: 2.00
    },
    {
        name: "Paçoca",
        price: 1.00
    },
    {
        name: "Canjica",
        price: 6.00
    },
    {
        name: "Chá de Amendoim",
        price: 2.00
    },
    {
        name: "Refrigerante",
        price: 2.00
    },
    
]

let totalPrice = 0
let shoppingList = {}


// Fazer os cards
// fazer o total
// adicionar item
// remover item
//zerar


document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector(".items-container")
    for(const index in items){
        const item = items[index]
        const itemCard = document.createElement('div')
        itemCard.setAttribute('class', 'item-card')
        itemCard.setAttribute('id', item.name)

        const cardDom = `
            <div class="wrapper">
                <div class="wrapper-data">
                    <h5>${item.name}</h5>
                    <h6>R$ ${item.price},00</h6>
                </div>
                <h6>${shoppingList[item.name] ?? 0 }</h6>
            </div>
            <div class='buttons'>
                <button id='add-${item.name}'>+</button>
                <button id='remove-${item.name}'>-</button>
            </div>
        `
        itemCard.innerHTML = cardDom
        div.appendChild(itemCard)

        configureButtonActions(item)
    }

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', () => updateTotalValue(0))
})

const updateTotalValue = () => {
    totalPrice = 0
    for (const shoppingItem in shoppingList) {
        const quantity = shoppingList[shoppingItem]
        const itemPrice = items.find(item => item.name === shoppingItem).price
        totalPrice = totalPrice + itemPrice * quantity
    }
    const total = document.querySelector('.price')
    total.innerText = `R$ ${totalPrice},00`
}

const configureButtonActions = (item) => {
    const addButton = document.getElementById(`add-${item.name}`)
    const removeButton = document.getElementById(`remove-${item.name}`)
    addButton.addEventListener("click", () => addItem(item))
    removeButton.addEventListener("click", () => removeItem(item))
}

const addItem = (item) => {
    const shoppingItem = shoppingList[item.name]
    shoppingList[item.name] = shoppingItem ? shoppingItem + 1 : 1
    updateTotalValue()
}

const removeItem = (item) => {
    const shoppingItem = shoppingList[item.name]
    if(!shoppingItem || shoppingItem === 0) return
    shoppingList[item.name]--
    updateTotalValue()
}
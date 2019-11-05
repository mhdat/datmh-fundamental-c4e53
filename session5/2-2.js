const inventory = [
    {
        name: "HP Envy 13aq",
        price: 21000,
        brand: "HP",
        quantity: 5,
    },
    {
        name: "Dell XPS 9370",
        price: 30000,
        brand: "Dell",
        quantity: 1,
    },
    {
        name: "Dell Inspiron 3567",
        price: 9300,
        brand: "Dell",
        quantity: 12,
    },
    {
        name: "Dell Latitude E5450",
        price: 8600,
        brand: "Dell",
        quantity: 2,
    },
    {
        name: "Asus Zenbook",
        brand: "Asus",
        price: 20000,
        quantity: 4,
    },
    {
        name: "HP Pavilion",
        brand: "HP",
        price: 14000,
        quantity: 7,
    },]

// let inventoryByBrand = {
//     hp:[
//         {
//             name: "HP Envy 13aq",
//             price: 21000,
//             brand: "HP",
//             quantity: 5,
//         },
//         {
//             name: "HP Pavilion",
//             brand: "HP",
//             price: 14000,
//             quantity: 7,
//         }
//     ],
//     dell: [
//         {
//             name: "Dell XPS 9370",
//             price: 30000,
//             brand: "Dell",
//             quantity: 1,
//         },
//         {
//             name: "Dell Inspiron 3567",
//             price: 9300,
//             brand: "Dell",
//             quantity: 12,
//         },
//         {
//             name: "Dell Latitude E5450",
//             price: 8600,
//             brand: "Dell",
//             quantity: 2,
//         },
//     ],
//     asus:[
//         {
//             name: "Asus Zenbook",
//             brand: "Asus",
//             price: 20000,
//             quantity: 4,
//         } 
//     ]
// }
let inventoryByBrand ={}
let brand =[]
for (i = 0; i < inventory.length; i++) {
    brand.push(inventory[i].brand.toLowerCase())
    inventoryByBrand[brand[i]] = []
}
for (j=0; j < inventory.length; j++) {
    inventoryByBrand[brand[j]].push(inventory[j])
}
console.log(inventoryByBrand)
let totalValue = 0
let productName =``
let userInput = prompt("Which brand?").toLowerCase()
if (userInput in inventoryByBrand) {
    inventoryByBrand[userInput].forEach((i) => {
        productName += `\n${i.name}`
        totalValue += i.price * i.quantity * 1000
    })
    currency = totalValue.toLocaleString('de-DE')
    alert(`There are ${inventoryByBrand[userInput].length} generations of '${userInput.toUpperCase()}' in inventory
        ${productName} \n\nWith total value: ${currency} VND`)
}   
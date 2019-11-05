let smartPhone = [
    {
        Name: "Xiaomi portable charger 20000mah",
        Brand: "Xiaomi",
        Price: 428,
        Color: "White",
        Category: "Charger"
    },
    {
        Name: "VSmart Active 1",
        Brand: "Vsmart",
        Price: 5487,
        Color: "Black",
        Category: "Phone"
    },
    {
        Name: "iPhone X",
        Brand: "Apple",
        Price: 21490,
        Color: "Gray",
        Category: "Phone"
    },
    {
        Name: "Samsung Galaxy A9",
        Brand: "Samsung",
        Price: 8490,
        Color: "Blue",
        Category: "Phone"
    }
]
// for (let i = 0;i < smartPhone.length;i++){
// let {Brand, Color, Category, ...others} = smartPhone[i]
// console.log("-------------------------------")
// for (let y in others) {  
//     console.log(`${y}: ${others[y]}`)
// }
// }
for (let i = 0;i < smartPhone.length;i++){
    let {Brand, Color, Category, Name, ...others} = smartPhone[i]
    console.log(`#${i+1}. ${smartPhone[i].Name}`)
    for (let y in others) {  
        console.log(`${y}: ${others[y]}`)
    }
}
let userInput = prompt("Enter your category?")
for (let j = 0;j < smartPhone.length;j++){
    var {Brand,Color,Category,...rests} = smartPhone[j]
    if (userInput === Category) {
        console.log("-------------------------------")
        for (let x in rests) {
            console.log(`${x}: ${rests[x]}`)
        }
    } else if (userInput === "e") {
        console.log("Xin cảm ơn!")
        break
    } else if (userInput !== "Charger" && userInput !== "Phone"){
        alert("Hiện tại cửa hàng chưa có danh mục sản phẩm này")
        break
    }
}



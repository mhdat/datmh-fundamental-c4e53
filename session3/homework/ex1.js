let clothesShop =["T-Shirt", "Sweater"]
let loop = true
while(loop) {
let userInput = prompt("Chào mừng bạn đến với shop quần áo của chúng tôi, vui lòng lựa chọn chức năng (C, R, U, D)?")
if (userInput === "R") {
    clothesShop.forEach ((element, index) => {
        console.log(`${index+1}. ${element}`)
        })
} else if (userInput === "C"){
    let newItem = prompt("Enter new item")
    clothesShop.push(newItem)
    clothesShop.forEach ((element, index) => {
        console.log(`${index+1}. ${element}`)
        })
} else if (userInput === "U"){
    let indexValue=prompt("Bạn muôn thay đổi theo index hay value? Vui lòng nhập v hoặc i")
    if (indexValue === "i") {
        let index = Number(prompt("Nhập STT mẫu quần áo bạn muốn thay đổi"))
        if (index < 0 || index > clothesShop.length) {
            alert("404 Page not Found")
        } else {
        let updateIndex = prompt("Mẫu quần áo bạn muốn thay thế")
        clothesShop[index-1] = updateIndex
        console.log(clothesShop)
        }
    } else if (indexValue === "v") {
        let value = clothesShop.indexOf(prompt("Nhập tên mẫu quần áo bạn muốn thay đổi"))
        if (clothesShop.includes(value)) {
        let updateValue = prompt("Mẫu quần áo bạn muốn thay thế")
        clothesShop[value] = updateValue
        clothesShop.forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
        } else {
            alert("404")
        }
    } else {
        alert("404 Page not Found")
    }
} else if (userInput === "D"){
    let indexValue1 = prompt ("Bạn muốn xoá theo index hay value? Vui lòng nhập v hoặc i")
    if (indexValue1 === "i") {
        let index1 = Number(prompt("Nhập mẫu quần áo bạn muốn loại bỏ"))
        if (index1 < 0 || index1 > clothesShop.length) {
            alert("404 Page not Found")
        } else {
        clothesShop.splice(index1 - 1, 1)
        clothesShop.forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
        }
    } else if (indexValue1 === "v") {
        let value1 = clothesShop.indexOf(prompt("Nhập mẫu quần áo bạn muốn loại bỏ"))
        clothesShop.splice(value1 - 1, 1)
        clothesShop.forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
    } else {
        alert("404 Page not Found")
    }
} else {
    alert("404 Page not Found") 
}
}
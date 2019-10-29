let shoesBrand =["Adidas", "Nike", "Bitis"]
let userInput = prompt("Bạn muốn nhập C, R, U hay D")
if (userInput === "C") {
    let newShoes = prompt("Thêm hãng giày bạn muốn")
    shoesBrand.push(newShoes)
    console.log(shoesBrand)
} else if (userInput === "R"){
    shoesBrand.forEach ((element, index) => {
        console.log(`${index+1}. ${element}`)
        })
} else if (userInput === "U"){
    let indexValue=prompt("Bạn muôn sửa theo index hay value")
    if (indexValue === "i") {
        let index = Number(prompt("Nhập STT bạn muốn sửa"))
        if (index < 0 || index > shoesBrand.length) {
            alert("404 Page not Found")
        } else {
        let updateIndex = prompt("Hãng giày bạn muốn thay đổi")
        shoesBrand[index-1] = updateIndex
        console.log(shoesBrand)
        }
    } else if (indexValue === "v") {
        let value = shoesBrand.indexOf(prompt("Nhập tên hãng bạn muốn sửa"))
        if (shoesBrand.includes(value)) {
        let updateValue = prompt("Hãng giày bạn muốn thay đổi")
        shoesBrand[value] = updateValue
        shoesBrand.forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
        } else {
            alert("404")
        }
    } else {
        alert("404 Page not Found")
    }
} else if (userInput === "D"){
    let indexValue1 = prompt ("Bạn muốn sửa theo index hay value")
    if (indexValue1 === "i") {
        let index1 = Number(prompt("Nhập STT bạn muốn xoá"))
        if (index1 < 0 || index1 > shoesBrand.length) {
            alert("404 Page not Found")
        } else {
        shoesBrand.splice(index1 - 1, 1)
        shoesBrand.forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
        }
    } else if (indexValue1 === "v") {
        let value1 = shoesBrand.indexOf(prompt("Nhập tên hãng bạn muốn xoá"))
        shoesBrand.splice(value1 - 1, 1)
        shoesBrand.forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
    } else {
        alert("404 Page not Found")
    }
} else {
    alert("404 Page not Found") 
}
//let menu =["Cơm", "Phở", "Bánh đa", "Bánh Mỳ", "Bún"]

// console.log(menu)

// Đọc 1 phần tử, đọc theo index
// console.log(menu[1])
// Đọc tất cả các phần tử trong array
// for (let i = 0; i < 5; i++){
//     console.log(menu[i])
// }

let smartPhone =["iPhone X", "Galaxy S10", "Galaxy Note 10", "iPhone XS"]

//  for (let i = 0;i < smartPhone.length;i++){
//      console.log(`${i+1}. ${smartPhone[i]}`)
// }
// let userInput1 = Number(prompt("Nhập số bất kỳ"))
// console.log(menu[name - 1])

//Read all - forEach
// menu.forEach((element, index) => {
//     console.log(`${index+1} ${element}`)
// })

//Create
// let meal ="Bánh bao"
// menu.push("Cậu vàng")
// menu.push(meal)

// console.log(menu)

// let userInput2 = prompt("Nhập tên smartphone")
// smartPhone.push(userInput2)
// console.log(smartPhone)

//Update
// menu[0] ="Cơm tấm"
// smartPhone[userInput1] = userInput2
// console.log(smartPhone)
//smartPhone.indexOf("iPhone XS")

// let userInput = prompt("Nhập")
// let updateIndex = smartPhone.indexOf(userInput)
// let userInput1 = prompt("Nội dung muốn sửa")
// smartPhone[updateIndex] = userInput1
// console.log(updateIndex)
// console.log(smartPhone)

//Delete
// menu.splice(0,1)
// console.log(menu)

let userInput =prompt("Nhập nội dung muốn xoá")
let index = smartPhone.indexOf(userInput)

smartPhone.splice(index, 1)
console.log(smartPhone)


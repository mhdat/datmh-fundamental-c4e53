// 1. Khởi tạo
// 1.1Object rỗng
// let person = {}
// console.log(typeof(person))

// 1.2 Object có nhiều hơn 1 cặp property và value

let person = {
    name: "Mai Hữu Đạt",
    age: "23",
    location: "Hà Nội",
    status: true,
    lover: 1
}
console.log(person)

// Read 
// console.log(person.name)

// let userInput = prompt()
// console.log(person[userInput])
// console.log(person["lover"])

// Create
// person.school ="NEU"
// person["GPA"] = 4.0

// console.log(person)

//Update
// person.location = "Việt Nam"
// person["lover"] = 2
// console.log(person)

// let userInput = prompt("key muốn thay đổi")
// let update = prompt("value muốn thay đổi")
// person[userInput] = update
// console.log(person)

//Delete
// delete person.age
// console.log(person)

let userInput = prompt("key muốn thay đổi")
delete person[userInput]
console.log(person)
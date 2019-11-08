let score = 0
let x = [1,2,3,4,5,6,7,8,9]
let randomX = Math.floor((Math.random(x) * x.length)+1)
let y =[1,2,3,4,5,6,7,8,9]
let randomY = Math.floor((Math.random(y) * y.length)+1)
// console.log(randomX + randomY)
let r
let op =["+", "-","*","/"]
let randomOP = Math.floor(Math.random(op) * op.length)
const operation = (x,op,y) => {
    if (op == "+") {
        r = x + y 
    } else if (op == "-") {
        r = x - y
    } else if (op =="*") {
        r = x * y
    }  else if (op =="/") {
        r = x / y
    }
    return r
    
}
let result = operation(randomX, op[randomOP], randomY)

// console.log(`${randomX} ${op[randomOP]} ${randomY} = ${result}`)
// let error = Math.floor((Math.random() * 5 - 2)
let confirm
let error = [-2,-1,0,1,2,0,0]
let fakeresult = result + error[Math.floor(Math.random(error) * error.length)]
    //console.log(`${randomX} ${op[randomOP]} ${randomY} = ${fakeresult}`)

let userInput = prompt(`${randomX} ${op[randomOP]} ${randomY} = ${fakeresult}`).toLowerCase()
const answer = (fakeresult,result,userInput) => {
    if (fakeresult === result) {
        if (userInput === "t") {
            confirm = "Bạn đã trả lời đúng"
            score++
        } else if (userInput === "f") {
            confirm = "Bạn trả lời sai rồi"
        }
    } else {
        if (userInput === "t") {
            confirm = "Bạn trả lời sai rồi"
        } else if (userInput === "f") {
            confirm = "Bạn đã trả lời đúng" 
            score++
        } 
    }
    return confirm
}
alert(answer(fakeresult,result,userInput))
alert(score)
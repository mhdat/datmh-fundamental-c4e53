let acronyms = {
    btw: "by the way",
    omg: "oh my god",
    wth: "what the hell",
    lol: "laugh out loud",
    ty: "thank you"
}
let a = Object.keys(acronyms)
a.forEach ((element, index) => {
    console.log(`${index+1}. ${element}`)
    })
let loop = true
while(loop) {
let userInput = prompt("Nhập vào từ viết tắt").toLowerCase()

// if (userInput in acronyms) {}
if (Object.keys(acronyms).includes(userInput) === true) {
    console.log(acronyms[userInput])
} else if (userInput === "e") {
    console.log("Xin cảm ơn!")
    loop = false
} else {
    let userInput1 = prompt("Bạn có muốn thêm từ này không???")
    if (userInput1 === "y") {
        let userInput2 = prompt("Từ viết tắt của bạn nghĩa là gì")
        acronyms[userInput] = userInput2
       
        Object.keys(acronyms).forEach ((element, index) => {
            console.log(`${index+1}. ${element}`)
            })
    } else if (userInput1 === "n") {
        console.log("Xin cảm ơn!")

    } 
}
}



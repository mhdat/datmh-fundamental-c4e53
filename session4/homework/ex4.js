let dictionary = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
    ui_ux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
}
for (let x in dictionary) {
    console.log(`${x}: ${dictionary[x]}`)
}
let loop = true
while(loop) {
alert("Hi there, this is dev dictionary")
let userInput = prompt("Nhập vào từ viết tắt").toLowerCase()
if (userInput in dictionary) {
    alert(`${userInput} \n${dictionary[userInput]}`)
} else if (userInput === "e") {
    alert("Xin cảm ơn!")
    loop = false
// } else {
//     alert(`We could not find your word: ${userInput}`)
// }
} else {
    let userInput1 = prompt(`We could not find your word: ${userInput}, leave your explanation`)
    if (!userInput1 || userInput1.length === 0) {
        alert(`You would not explain the meaning of ${userInput}, so your acronym will not update in dev dictionary`)
    }  else {
    dictionary[userInput] = userInput1
    alert("Done")
    }
}
}
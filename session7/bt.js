const buttonAdd = document.getElementById("add")
const buttonRemove = document.getElementById("remove")
const userList = document.getElementById("user-list")
console.dir(userList)
const input = document.getElementById("input")
console.dir(input)
buttonAdd.addEventListener("click", () =>{   
    if (input.value != "") {
        userList.innerHTML += `<li> ${input.value} </li>`
        // let liElement = document.createElement("li")
        // liElement.innerText = value1
        // userList.append(liElement)
        // input.value1=""
    } else {
        alert("Please enter ur input") 
    }
})
buttonRemove.addEventListener("click", () =>{
    let value = input.value
    if (value == "") {
        userList.removeChild(userList.lastElementChild);
    } else {
        console.log(userList.children)
        let invalid = true
        for (let i = 0; i < userList.children.length; i++) {
            if(value.toLowerCase() == userList.children[i].textContent.toLowerCase()) {
                userList.removeChild(userList.children[i])
                invalid = false
            }
        }
        if (invalid) {
            alert("invalid")
        }
    }
})
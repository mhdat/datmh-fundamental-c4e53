const buttonSubmit = document.getElementById("submit")
// console.dir(buttonSubmit)
const para = document.getElementById("para")
const input = document.getElementById("input")
input.addEventListener("keyup", () => {
    console.dir(input)
})
buttonSubmit.addEventListener("click", () =>{
    para.innerText = input.value
})
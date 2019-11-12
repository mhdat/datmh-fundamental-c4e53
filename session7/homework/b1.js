const link = document.getElementById("demo-a")
const buttonClick = document.getElementById("btn-demo")
const inputField = document.getElementById("demo-input")
console.dir(link)
// inputField.addEventListener("keyup", () => {
//     console.dir(inputField)
// })
buttonClick.addEventListener("click", () =>{
   inputField.value = link.href
})

const colorList = document.getElementById("color-list")
const buttonRemove = document.getElementById("remove")
console.dir(colorList)
buttonRemove.addEventListener("click", () =>{
    colorList.removeChild(colorList.selectedOptions[0]);
})
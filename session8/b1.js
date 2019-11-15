const countUp = document.getElementById("count-up")
const countDown = document.getElementById("count-down")
const number = document.getElementById("number")
console.dir(number)
console.dir(countUp)

countUp.addEventListener("click", () =>{
    
    number.innerHTML = Number(number.innerHTML) + 1       
})
countDown.addEventListener("click", () =>{
   
    number.innerHTML = Number(number.innerHTML) - 1
})
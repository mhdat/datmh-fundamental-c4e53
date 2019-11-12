//call back function
//console.log(1)
const diAnCom = (diTam) => {
setTimeout(() => {
    console.log("Di an com")
}, 500);
}
const diTam = () => {
    console.log("Di Tam")
}
diAnCom(diTam())
//console.log(2)
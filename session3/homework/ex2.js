let sheepFlock=[5,7,300,90,24,50,75]
console.log(`Hello my name is Dat, these are my ship sizes \n[${sheepFlock}]`)
let largestSize = Math.max.apply(Math, sheepFlock)
console.log(`Now my biggest sheep has size [${largestSize}] \nLet shear it`)
sheepFlock[sheepFlock.indexOf(largestSize)] = Number(8)
console.log(`After shearing, here is my flock \n[${sheepFlock}]`)
for (let j = 0; j < 4; j++){
let sizeIncreased = 50
    for(let i=0; i < sheepFlock.length; i++){
        sheepFlock[i] += sizeIncreased 
        }
    console.log(`MONTH ${j+1}`)
    console.log(`One month has passed, now here is my flock [${sheepFlock}]`) 
    let largestSizeMonth = Math.max.apply(Math, sheepFlock)
    console.log(`Now my biggest sheep has size [${largestSizeMonth}] \nLet shear it`)
    sheepFlock[sheepFlock.indexOf(largestSizeMonth)] = Number(8)
    
    console.log(`After shearing, here is my flock \n[${sheepFlock}]`)
}
let sum = 0
for (let k = 0; k < sheepFlock.length; k++){
    sum += sheepFlock[k]
}
console.log(`My flock has size in total: ${sum}`)
// let reducer = (accumulator, currentValue) => accumulator + currentValue 
// let totalSize = sheepFlock.reduce(reducer)
// console.log(`My flock has size in total: ${totalSize}`)
console.log(`I would get ${sum} * $2 = ${sum * 2}`)
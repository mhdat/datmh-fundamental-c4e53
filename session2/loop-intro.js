//Vòng lặp for
//for(let i = 0; i < 4; i++){
//    console.log("Hello")
//}

//Vòng lặp while
//let i = 1
//while(i <= 100){
//    console.log(i)
//    i++
//  }

//0-100 số chẵn
//for(let i = 0; i <= 100; i=i+2){
//    console.log(i)
//    }

//1-100 số lẻ
//for(let i = 1; i < 100; i=i+2){
//    console.log(i)
//    }

//Tính tổng dãy số tự nhiên từ 0 => n
let s=0
let number = Number(prompt("Nhập số bất kì"))
for (let j=0; j<= number; j++){
    s=s+j
    console.log(j)
}
console.log(`Tổng từ 0 - ${number} = ${s}`)
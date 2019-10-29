let s=1
let num = Number(prompt("Nhập số bất kỳ vào đây"));
console.log(num)
if (num > 0){
    alert("Nhập đúng rồi")
if (num === 0 || num === 1) {
    console.log(`${num}! bằng 1`)
} if (num > 1){
        for (let i = num; i >= 1; i--){
        s = s * i
        }
    console.log(`${num}! bằng ${s}`)
    }
} else {
    alert("Số âm ko có giai thừa bạn ơi")
}

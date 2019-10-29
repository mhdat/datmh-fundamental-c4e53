// khai báo bằng let
let name = "Dat";

// khai báo bằng var (không khuyến khích)
var age = 23
console.log("Hello", name);
console.log(name,"đang",age);

// khai báo hằng số 
const phoneNumber= "01234567890"
// phonenumber="1234" (không bao giờ thay đổi giá trị của constant)
console.log(phoneNumber)

let number1 = 10
number1 = 15
console.log(number1)
// dấu = trong lập trình có ý nghĩa là assign (ko có chiều ngc lại)

//nhập vào 2 số và tính tổng 2 số đó
let userInput1 = Number(prompt("Nhập vào số thứ nhất"))
let userInput2 = Number(prompt("Nhập vào số thứ hai"))
console.log("Tổng hai số", userInput1+userInput2)

//string to number: Number(), PraseInt()
//function: prompt
//Camel: chữ cái đầu viết thường, chữ 2 viết hoa
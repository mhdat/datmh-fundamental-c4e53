//let loop = true
//while(loop){
//    let temp = Number(prompt("Nhập nhiệt độ vào đây"))
//    if (temp <= 10){
//        console.log("Lạnh quá")
//    } 
//   else if(temp < 15) {
//        console.log("Mát quá")
//    }
//    else {
//        console.log("Nóng quá")
//    }
//    if(temp > 50){
//        loop = false
//    }
//}

//let loop = true
//let count = 0
//while(count < 3){
//    console.log(i)

let loop = true
let count = 0
    while (count <3){
    let username = prompt("Nhập username")
    if (username === "c4e54"){
        console.log("Nhập đúng username rồi")
        let password = prompt("Nhập password")
        if (password === "codethechange"){
            alert("Đăng nhập thành công")
            break
        } else {
            count +=1
            alert("Mật khẩu không đúng")
        }
    } else {
        console.log("Tài khoản của bạn đã bị khoá")
        count +=1
    }
}
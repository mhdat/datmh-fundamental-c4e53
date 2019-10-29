//BMI
let height = Number(prompt("Nhập chiều cao (cm) vào đây:"));
console.log(`Chiều cao của bạn là ${height} cm`)
let weight = Number(prompt("Nhập cân nặng (kg) vào đây:"));
console.log(`Cân nặng của bạn là ${weight} kg`)
let BMI = weight/ ((height * height)/100**2);
console.log(`Chỉ số khối lượng cơ thể của bạn là ${BMI}`);

if (BMI < 16){
    console.log("Severly underweight")
} else if (BMI < 18.5) {
    console.log("Underweight")
} else if (BMI < 25) {
    console.log("Normal")
} else if (BMI < 30) {
    console.log("Overweight")
} else {
    console.log("Obese")
}

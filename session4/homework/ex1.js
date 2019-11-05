//1.1: from property
const product ={
    name: "Xiaomi Rice Cooker",
    price: 1700,
    brand: "Xiaomi",
    color: "white"
};
for (let x in product) {
    console.log(x);
    }

//1.2
for (let y in product) {
    console.log(`${y}: ${product[y]}`)
}
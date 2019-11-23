function randomNumber() {
    let random = Math.floor(Math.random() *11)
    console.log(random)
}
const x = randomNumber();
if (x < 0) {
  console.log("Failed: the number is smaller than 0");
} else if (x > 10) {
  console.log("Failed: the number is bigger than 10");
} else {
  console.log("Passed, bravo");
}

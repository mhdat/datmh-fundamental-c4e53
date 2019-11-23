// const promise = async () => {
//     await setTimeout(() =>{
//         console.log("Promise is da best")
//     },5000)
// }
// promise()

const promise  = new Promise(function(resolve) {
    setTimeout(() =>{
        resolve("Promise is da best");
    }, 5000)
})
promise.then((value) => {
  console.log(value);
})
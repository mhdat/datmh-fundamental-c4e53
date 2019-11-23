const fetchPromise  = new Promise(function(resolve) {
    resolve(fetch("https://reqres.in/api/users?page=2&fbclid=IwAR1HO36YPm-HEkU_nPkBFn72xdvv4HXLNXocfQhGDS1Wh93dgG3zKodGZLI"))
})
fetchPromise.then(connection => {
    console.log("Connected");
    const jsonPromise = connection.json()
    return jsonPromise
})
.then(function(response) {
    console.log(response.data)
})
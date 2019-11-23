const database ={}
const context = document.getElementById("target-id")
console.dir(context)
const getUser = async () => { //khai báo hàm bất đồng bộ

    const response = await fetch("https://reqres.in/api/users?page=2&fbclid=IwAR1HO36YPm-HEkU_nPkBFn72xdvv4HXLNXocfQhGDS1Wh93dgG3zKodGZLI")
    const db = await response.json()
    database.data = db.data
}

// let print = ""
const renderUser = async () => {

    await getUser()
    console.log(database.data)
    for (i=0; i < database.data.length; i++) {
        context.innerHTML += `
        <div style = "width:180px" id = "user_${i}">
        <img id="avatar" src="${database.data[i].avatar}" alt=""/> \n
        <p id="full-name">Name: ${database.data[i].first_name} ${database.data[i].last_name}</p>
        <p></p>
        </div>
        <hr>`
    }


}

const renderUserEmail = () => {
    for (let i=0; i<database.data.length; i++) {
        let userElement = document.getElementById(`user_${i}`)
        userElement.addEventListener("mouseover", () => {
            if(userElement.children[2].innerText =""){
                userElement.children[2].innerText = data
            }
        })
    }
}
renderUser()
// const main = async () => {
//     await getUser()
//     renderUser()
// }

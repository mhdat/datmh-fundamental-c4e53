const row = document.getElementById("row-number")
const column = document.getElementById("column-number")
const userInput = document.getElementById("content")
const buttonUpdate = document.getElementById("submit")
const tableList = document.getElementById("table")
console.dir(row)
// console.dir(tableList)
// console.dir(tableList.rows[0].cells[0])
// console.dir(userInput)
buttonUpdate.addEventListener("click",() => {
	if (Number(row.value) <= tableList.rows.length && Number(row.value) > 0) {
        let selectedColumn = tableList.rows[Number(row.value) - 1].cells
		if(Number(column.value) <= selectedColumn.length && Number(column.value) > 0) {
			let update = tableList.rows[Number(row.value) - 1].cells[Number(column.value) - 1]
			update.innerText = userInput.value
		} else {
			alert("Error 404")
		}
	} else {
		alert("Error 404")
	}
})
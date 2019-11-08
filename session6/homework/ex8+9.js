let integerList = [1,4,5,-1,10]
const get_even_list = (l) => {
	let evenList = []
	for (let i = 0; i <l.length; i++) {
		if (l[i] % 2 == 0) {
			evenList.push(l[i])
		}
	}
	return evenList
}
evenList = get_even_list(integerList)
console.log(get_even_list(evenList))

even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])) {
	console.log("Your function is correct")
} else{
	console.log("Ooops, bugs detected")
}

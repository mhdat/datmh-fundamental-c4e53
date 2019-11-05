let wordLists =["to", "be", "that", "of", "elon", "to", "this", "now", "back", "cool", "hey", "love", "of", "life", "that", 
                "rain", "summer", "color", "now", "of", "hat", "late", "sorry", "my", "team"]
let occurrences ={}

for (let i = 0; i < wordLists.length; i++) {
    if (occurrences[wordLists[i]] == undefined) {
        occurrences[wordLists[i]] = 1       
    } else {
        occurrences[wordLists[i]]++
    }
}
console.log(occurrences)  

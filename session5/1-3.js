let quizzes = [
    {
    Question: "Which fiction detective lived at 21b Baker Street?",
    Choices: ["Watson", "Sam Spade", "Scubidu", "Sherlock Holmes"],
    rightChoice: "Sherlock Holmes"
    },
    {
    Question: "What sweet food made by bees using nectar from flowers?",
    Choices: ["Bread", "Honey", "Sugar", "Potent"],
    rightChoice: "Honey"
    },
    {
    Question: "How many legs do an octopus has?",
    Choices: ["4 legs", "no legs", "8 legs", "2 legs"],
    rightChoice: "8 legs"
    },
    {
    Question: "Which country is home to the kangaroos?",
    Choices: ["Australia", "Austria", "New Zealand", "US"],
    rightChoice: "Australia"
    }
]
let loop = true
let score = 0
let quizzesLength = quizzes.length
while (loop) {
    let choices = ``
    let newQuizzes = quizzes[Math.floor(Math.random()*quizzes.length)]
    let {Question, Choices, rightChoice} = newQuizzes
    for (let j = Choices.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [Choices[j], Choices[k]] = [Choices[k], Choices[j]];
    }
    for (let l = 0; l < Choices.length; l++) {
        choices += `\n${l+1}. ${Choices[l]}`
    }
    let userInput = Number(prompt(`${Question} ${choices}`))
    if (Choices[userInput-1] === rightChoice) {
        alert("Bravo!!!")
        score++
    } else {
        alert("Good luck next time")
    }
    quizzes.splice(quizzes.indexOf(newQuizzes),1)
    if (quizzes.length == 0) {
         alert("We are out of question")
         alert (`You answer correctly ${score} out of ${quizzesLength} question`)
         loop = false
    } 
}
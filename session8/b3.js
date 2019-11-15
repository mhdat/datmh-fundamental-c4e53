const quoteList = [
    {
    quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas Edison"
    },
    {
    quoteText: "You can observe a lot just by watching.",
    quoteAuthor: "Yogi Berra"
    },
    {
    quoteText: "A house divided against itself cannot stand.",
    quoteAuthor: "Abraham Lincoln"
    },
    {
    quoteText: "Difficulties increase the nearer we get to the goal.",
    quoteAuthor: "Johann Wolfgang von Goethe"
    },
    {
    quoteText: "Fate is in your hands and no one elses",
    quoteAuthor: "Byron Pulsifer"
    },
    {
    quoteText: "Be the chief but never the lord.",
    quoteAuthor: "Lao Tzu"
    },
    {
    quoteText: "Nothing happens unless first we dream.",
    quoteAuthor: "Carl Sandburg"
    }
]

const reloadButton = document.getElementById("reload");
const quote1 = document.getElementById("quote1");
const quote2 = document.getElementById("quote2");

console.dir(quote1)

reloadButton.addEventListener("click", () => {
    let randomQuote = quoteList[Math.floor(Math.random()*quoteList.length)]
    quote1.innerHTML = randomQuote.quoteText 
    quote2.innerHTML = randomQuote.quoteAuthor
})


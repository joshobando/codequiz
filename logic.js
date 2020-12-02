// make an array
// need objects
// event listener to start quiz and buttons
// the event.listener will tell you if the selection is right and the same for the wrong answer
// has to reveal answer and keep score, but it needs to go away for the next questio
// 
// 
// 
// 

const starScreen = document.getElementById("start-screen");
const resultsDiv = document.getElementById("results");
const startBttn = document.getElementById("start");
const nextBttn = document.getElementById("next-button");
const quest1 = document.getElementById("question1");
const quest2 = document.getElementById("question2")
const quest3 = document.getElementById("question3");
const quest4 = document.getElementById("question4");
const quest5 = document.getElementById("question5")
const questionDivs = document.querySelectorAll(".questions");
let currentIndex = 0;
startBttn.addEventListener("click", makeStartInvisible);

function makeStartInvisible() {
    starScreen.classList.add("invisible");
    questionDivs[currentIndex].classList.add("visible");
    nextBttn.classList.add("visible");
    //make the quiz div invisible
}

nextBttn.addEventListener("click", displayNext);

function displayNext() {
    currentQuestion = questionDivs[currentIndex++]
    questionDivs[currentIndex].classList.add("visible");
    questionDivs[currentIndex -1].classList.remove("visible");
    currentIndex++
}


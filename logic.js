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

startBttn.addEventListener("click", makeStartInvisible);

function makeStartInvisible() {
    console.log("Hi there!")
    starScreen.classList.add("invisible");
    quest1.classList.add("visible");
    //make the quiz div invisible
}

//nextBttn.addEventListener("click", )


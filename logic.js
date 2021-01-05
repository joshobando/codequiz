// make an array
// need objects
// event listener to start quiz and buttons
// the event.listener will tell you if the selection is right and the same for the wrong answer
// has to reveal answer and keep score, but it needs to go away for the next questio
// 
// 
// 
// 

// const starScreen = document.getElementById("start-screen");
// const resultsDiv = document.getElementById("results");
// const startBttn = document.getElementById("start");
// const nextBttn = document.getElementById("next-button");
// const quest1 = document.getElementById("question1");
// const quest2 = document.getElementById("question2")
// const quest3 = document.getElementById("question3");
// const quest4 = document.getElementById("question4");
// const quest5 = document.getElementById("question5")
// const questionDivs = document.querySelectorAll(".questions");
// let currentIndex = 0;
// startBttn.addEventListener("click", makeStartInvisible);

// function makeStartInvisible() {
//     starScreen.classList.add("invisible");
//     questionDivs[currentIndex].classList.add("visible");
//     nextBttn.classList.add("visible");
//     //make the quiz div invisible
// }

// nextBttn.addEventListener("click", displayNext);

// function displayNext() {
//     currentQuestion = questionDivs[currentIndex++]
//     questionDivs[currentIndex].classList.add("visible");
//     questionDivs[currentIndex -1].classList.remove("visible");
//     currentIndex+0;
// }



// if (question1 == "John"){
//     console.log("Correct");
// } //else{
// //     console.log("Wrong")
// // }

let timer;
let time = 117;
let score = 0;

let questionIndex = 0;

const questionArray = [{
        question: "What is the Master Chief's real name?",
        choices: ["Jack", "John", "Edwin"],
        answer: "John"
    },
    {
        question: "What is the name of the AI that assists the Master Chief's on his missions",
        choices: ["Cortana", "Corvega", "Cecilia"],
        answer: "Cortana"
    },
    {
        question: "What is the name of the ship that the Master Chief and crew escaped in after the destruction of Alpha Halo?",
        choices: ["The Pillar of Autumn", "UNSC Infinity", "Forward Unto Dawn"],
        answer: "Forward Unto Dawn"
    },
    {
        question: "What is the name of the greatest threat to all living species in the galaxy?",
        choices: ["The Locust", "The Flood", "The Insurrectionists"],
        answer: "The Flood"
    },
    {
        question: "What is the name of the species that built the Halo rings and all related to them?",
        choices: ["The Forerunners", "The Precursors", "The Covenant"],
        answer: "The Forerunners"
    },
];

//on start button
const startQuiz = () => {
    //hide start elements
    document.querySelector("#start-screen").classList.add("hide");
    //start the timer
    timer = setInterval(function () {
        //reduce time
        time--;
        //show the updated time
        document.querySelector("#time").textContent = time
    }, 1000)
    //show question element
    document.querySelector("#questions").classList.remove("hide");
    //first question to how
    createQuestion();
}

const createQuestion = () => {
    //create markup question elment
    const questionMarkup = `
        <h2 id="question-title">${questionArray[questionIndex].question}</h2>
        <div id="choices" class="choices">
            <div class="choice">${questionArray[questionIndex].choices[0]}</div>
            <div class="choice">${questionArray[questionIndex].choices[1]}</div>
            <div class="choice">${questionArray[questionIndex].choices[2]}</div>
        </div>
    `;
    //add the question elelmemnt to the page
    document.querySelector("#questions").innerHTML = questionMarkup;
    //
}

//show next question()
const handleAnswerChoice = (event) => {
    //check if the answer is right
    if (event.target.textContent === questionArray[questionIndex].answer) {
        //increase score
        score++;
    } else {
        time = time - 10;
    }
    questionIndex++;

    //increase questionIndex
    if (questionIndex !== questionArray.length) {
        //show next question 
        createQuestion()
    } else {
        endsQuiz();
    }
}

const endsQuiz = () => {
    //stop the timer
    clearInterval(timer);
    //show end html
    document.querySelector("#end-screen").classList.remove("hide");
    //hide questions
    document.querySelector("#questions").classList.add("hide");
    //display score
    document.querySelector("#final-score").textContent = score;
}

const submitScore = () => {
    //add functionality to submit
    document.querySelector("#submit").addEventListener("click",function)
}

document.querySelector("#questions").addEventListener("click", function (event) {
    if (event.target.className.indexOf("choice") > -1) {
        handleAnswerChoice(event);
    }
});
document.querySelector("#start").addEventListener("click", startQuiz);

localStorage.setItem("score","");
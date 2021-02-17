let secondsLeft = 75;
let ask = document.getElementById("quiz-questions");
let questionOptions = document.getElementsByClassName("quest");
let count = document.getElementById("time-left");
// let wins = document.querySelector("#score");
let go = document.getElementById("begin");
let main = document.getElementById("main");
let index = 0;
let score;
let time;

go.addEventListener("click", startGame);

function startGame() {
    console.log("started");
    // shuffeledQuestions = questions.sort(() => Math.random() - .5)
    // nextQuestion();
    // increaseScore();
    buildQuestionCard();
    // if (questions.answers === true) {
        count.textContent = secondsLeft;
        time = setInterval(runClock, 1000)

        if (score < 10) {
            score++;
        } 
    // }

}

function buildQuestionCard() {
    // index = 0;
    ask.textContent = questions[index].question;
    let answerBox = document.getElementById("answer-box"); 
    answerBox.innerHTML = "";

    questions[index].answers.forEach(answer => {
        var button = document.createElement("button");
        button.textContent = answer;
        button.setAttribute("value", answer);
        answerBox.appendChild(button);
        button.onclick = checkAnswer
    });

}

function checkAnswer() {
    console.log(this.value);

    if (this.value !== questions[index].correct) {
        console.log("incorrect");
        // score++;
        secondsLeft - 10;

        if (secondsLeft <= 0) {
            endGame();
        }
    } else {
        score++;
    }
    
    index++;

    if (index === questions.length) {
        endGame();
    } else {
        buildQuestionCard();
    }
    // if (questions >= 2) {
        // nextQuestion;
    // }
}

function endGame() {
    main.innerHTML = "";
    clearInterval(time);
}

// let startQuestions = 0;
// let startScore = 0;

let questions = [
    {
        question: "How many questions are there?",

        answers: [
            "1",
            "2",
            "3",
            "4",
        ],
        correct: "4"
    },
    {
        question: "Where are the questions?",

        answers: [
            "hiding",
            "missing",
            "over there",
            "there aren't any",
        ],
        correct: "over there"
    },
]

// for (let i = 0; i < array.length; i++) {
//     let index = Math.floor(Math.random() * ask.length);
//     return ask[index]
// }



function runClock() {
    secondsLeft--;
    count.textContent = secondsLeft;

    if (secondsLeft <= 0) {
        secondsLeft = 0;
    }
}

function increaseScore() {
    if (questions === correct) {
        count++
    } else {
        count--
    }
    increaseScore();
}
// let countdown = document.querySelector("#time-left");
// let begin = document.querySelector("#time-left")


// let playerWin = false;

// function startTimer() {
//     let timerInterval = setInterval(function() {

//         secondsLeft--;
//         // countdown.innerHTML = secondsLeft;
//         console.log (secondsLeft + " second left")
//         startTimer()
//         if(secondsLeft >= 0) {
//             if(playerWin === true && secondsLeft > 0) {
//                 // return ("You won!")
//                 console.log("You won!")
//                 startTimer()
//             }
//         };

//         if(secondsLeft === 0) {

//             console.log("Sorry, out of time");
//             clearInterval(timerInterval);

//         }
//     }, 1000)
// };

// startTimer();

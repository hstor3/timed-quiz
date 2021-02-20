let secondsLeft;
// let secondsLeft = 50;
let ask = document.getElementById("quiz-questions");
let questionOptions = document.getElementsByClassName("quest");
let count = document.getElementById("time-left");
// let wins = document.querySelector("#score");
let go = document.getElementById("begin");
let main = document.getElementById("main");
let nameScore = document.getElementById("winner-name");
let nameList = document.getElementById("winner-list");
let index;
// let index = 0;
let myName = document.getElementById("name-input");
let score = document.getElementById("score-value");
let nameBtn = document.getElementById("name-btn");
let time;

go.addEventListener("click", startGame);

// localStorage.setItem("score", JSON.stringify(score));
// let scoreValue = localStorage.getItem("score");
// console.log("scoreValue: ", JSON.parse(scoreValue));

// start game function
function startGame() {
    console.log("started");
    secondsLeft = 50;
    index = 0;
    // shuffeledQuestions = questions.sort(() => Math.random() - .5)
    // nextQuestion();
    // increaseScore();
    buildQuestionCard();
    // if (questions.answers === true) {
    startTimer();

    if (score < 10) {
        score++;
        // increaseScore();
    } 
    // }

    // go.on('click', function() {
    // location.reload();
    // })
}

// function to start the timer
function startTimer() {
    console.log(secondsLeft)
    count.textContent = secondsLeft;
    time = setInterval(runClock, 1000);

}

// sorts through the questions
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

// checks if answers are correct
function checkAnswer() {
    console.log(this.value);

    if (this.value !== questions[index].correct) {
        console.log("incorrect");
        // runClock(time -= 1000);
        // score++;
        // secondsLeft - 10;
        console.log(secondsLeft)
        secondsLeft -= 10;
        count.textContent = secondsLeft;
        // clearInterval();
        // startTimer();

        if (secondsLeft <= 0) {
            endGame();
        }
    } else {
        score.textContent++;
        console.log(score);
        // score++;
        // increaseScore();
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
    // if (questions === question.answers.correct) {
    //         count++
    //     } else {
    //         count--
    // increaseScore();
    // }
}
// increaseScore();

function endGame() {
    main.innerHTML = "";
    clearInterval(time);
    // go.addEventListener('click', startGame);
    // if (endGame) {
        // location.reload(go.addEventListener("click", startGame))
    // }
}

// let startQuestions = 0;
// let startScore = 0;

let questions = [
    {
        question: "How do you link a JavaScript file in an HTML file?",
    
        answers: [
            "<scripting>",
            "<HTML.JS>",
            "<script>",
            "js"
        ],
        correct: "<script>"
        },
    {
        question: "A boolean typically represents true or false.",

        answers: [
            "true",
            "false",
        ],
        correct: "true"
    },

    {
        question: "Which is the correct way to log something to the console?",

        answers: [
            "log.console()",
            "console,log[]",
            "add.to.console()",
            "console.log()"
        ],
        correct: "console.log()"
    },

    {
        question: "Where do you link your JavaScript file in your HTML file?",

        answers: [
            "the <div>",
            "the <footer>",
            "the <body>",
            "the <title>"
        ],
        correct: "the <body>"
    },
    {
        question: "JavaScrips is the same as Java",

        answers: [
            "true",
            "false"
        ],
        correct: "false"
    }
]

// for (let i = 0; i < array.length; i++) {
//     let index = Math.floor(Math.random() * ask.length);
//     return ask[index]
// }



function runClock() {
    secondsLeft--;
    count.textContent = secondsLeft;

    if (secondsLeft <= 0) {
        secondsLeft = 1;
    }
}

nameBtn.addEventListener("click", saveScore);

// saves score
function saveScore() {
    
    savedScores = JSON.parse(localStorage.getItem("savedScores") || "[]");
    savedScores.push({
        "name": myName.value,
        "score": score.innerHTML,
    })

    localStorage.setItem("savedScores", JSON.stringify(savedScores));
    location.reload();
};

document.addEventListener("DOMContentLoaded", function() {

    savedScores = JSON.parse(localStorage.getItem("savedScores") || "[]");

    for (let i = 0; i < savedScores.length; i++) {
        var node = document.createElement('li');
        let text = `${savedScores[i]["name"]} - ${savedScores[i]["score"]}` 
        node.appendChild(document.createTextNode(text));
        nameList.appendChild(node);
    }  
});


// function submitHandler(event) {
// function nameBtn(event) {
// event.preventDefault();

// let name = document.getElementById("name-input").val();
// let li = document.getElementsByTagName("li");
// li.text(name);
// nameList.append(li);
// document.getElementById("name-input").val("");

// if (submitHandler) {
// }
// }
// localStorage.submitHandler();
// function submitHandler() {
//     let savedScore = {
//         name: myName.value,
//         score: score.value
//     }
// }

// function renderLastScore() {
//     let lastScore = JSON.parse(localStorage.getItem("savedScore"));

//     if (lastScore !== null) {
//         myName.innerHTML = lastScore.name;
//         score.innerHTML = lastScore.score;
//     } else {
//         return;
//     }
// }

// saveButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     submitHandler();
//     renderLastScore();
// });

// function init() {
//     renderLastScore();
// }
// init();


// nameScore.on("submit", submitHandler);
// nameBtn.on("submit", submitHandler);

// console.log(nameScore)

// function nameBtn() {

// }

// nameScore = "";
// function increaseScore() {
//     if (questions === correct) {
//         count++
//         // } else {
//         // count--
//     }
//     increaseScore();
// }
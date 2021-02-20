let secondsLeft;
let ask = document.getElementById("quiz-questions");
let questionOptions = document.getElementsByClassName("quest");
let count = document.getElementById("time-left");
let go = document.getElementById("begin");
let main = document.getElementById("main");
let nameScore = document.getElementById("winner-name");
let nameList = document.getElementById("winner-list");
let index;
let myName = document.getElementById("name-input");
let score = document.getElementById("score-value");
let nameBtn = document.getElementById("name-btn");
let time;

go.addEventListener("click", startGame);

// start game function
function startGame() {
    console.log("started");
    secondsLeft = 50;
    index = 0;
    buildQuestionCard();
    startTimer();

    if (score < 10) {
        score++;
    } 
}

// function to start the timer
function startTimer() {
    console.log(secondsLeft)
    count.textContent = secondsLeft;
    time = setInterval(runClock, 1000);

}

// sorts through the questions
function buildQuestionCard() {
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
        console.log(secondsLeft)
        secondsLeft -= 10;
        count.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            endGame();
        }
    } else {
        score.textContent++;
        console.log(score);
    }

    index++;

    if (index === questions.length) {
        endGame();
    } else {
        buildQuestionCard();
    }
}

function endGame() {
    main.innerHTML = "";
    clearInterval(time);
}

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
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
let score = document.getElementById("score-value");
let time;

go.addEventListener("click", startGame);

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


function startTimer() {
    console.log(secondsLeft)
    count.textContent = secondsLeft;
    time = setInterval(runClock, 1000)

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

function submitHandler(event) {
    event.preventDefault();

    let name = document.getElementById("name-input").val();
    let li = document.getElementsByTagName("li");
    li.text(name);
    nameList.append(li);
    document.getElementById("name-input").val("");
}

nameScore.on("submit", submitHandler);

// nameScore = "";
// function increaseScore() {
//     if (questions === correct) {
//         count++
//         // } else {
//         // count--
//     }
//     increaseScore();
// }
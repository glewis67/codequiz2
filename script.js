// variables
var time = 60;
var timerInterval;
var questionIndex = 0;
var score = 0;



//Selectors
var quizTimeEL = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var quizScreen = document.getElementById("quiz");
var answersEL = document.getElementById("choices");
var scoreEL = document.getElementById("score");
var scoreQuiz = document.getElementById("scoreQuiz");
var showResults = document.getElementById("showResult");
var submitButton = document.getElementById("submitButton");
var resultsContainer = document.getElementById("resultContainer");
var finalScore = document.getElementById("finalScore");

//Questions for quiz

var questions = [
  {
    Q: "Header <h1>, <h2>, <h3> what are they?",
    A: ["boolean", "Elements", "Objects", "Array"],
    C: "Elements",
  },

  {
    Q: "Which command allows the developer to make short comments in git bash ?",
    A: ["Git add comment", "Git Add", "Git commit -m", "Git comment"],
    C: "Git commit -m",
  },
  {
    Q: "To create a file or folder which command is used?",
    A: ["Mkdir", "File", "New Folder", "Touch"],
    C: "Touch",
  },

  {
    Q: "Which direction is the flex-direction set for a row?",
    A: ["Y-axix", "X-axis", "Vertical", "Horizatal"],
    C: "X-axis",
  },
  {
    Q: "What prints and displays the user message in javascript?",
    A: ["Alert", "Print", "Display", "console.log"],
    C: "Console.log",
  },
];

// Initiate the quiz timer.
function start() {
  timerInterval = setInterval(function () {
    time--;
    quizTimeEL.textContent = time;
    if (time <= 0) {
      endGame();
    }
  }, 1000);

  var startScreen = document.getElementById("start");
  startScreen.setAttribute("class", "hide");

  quizScreen.removeAttribute("class", "hide");

  generateQuiz();
}

function endGame() {
  clearInterval(timerInterval);
  showFinalScore()
}

//Generate each quize question

function generateQuiz() {
  var currentQ = questions[questionIndex];
  var questionTitle = document.getElementById("question");
  questionTitle.textContent = currentQ.Q;

  answersEL.innerHTML = "";

  currentQ.A.forEach(function (choice, i) {
    // console.log(questions)
    // console.log(questionIndex)
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "choice");
    answerBtn.setAttribute("value", choice);

    answerBtn.textContent = choice;

    answerBtn.onclick = checkAnswer;

    answersEL.appendChild(answerBtn);
  });
}
// Evaluate the answer to each question//

function checkAnswer() {
  if (this.value !== questions[questionIndex].C) {
    console.log("this is wrong");
     time -= 10;
     if (time < 0) {
       time = 0;
     }
    quizTimeEL.textContent = time;
  } else {
     time += 5; 
     score++;
    quizTimeEL.textContent = time;
   }



  questionIndex++;
  if (questionIndex === questions.length) {
    endGame();
  } else {
    generateQuiz();
  }

}

  
function showFinalScore(){
  quizScreen.setAttribute("class", "hide");
  scoreEL.removeAttribute("class","hide");
  finalScore.textContent = score;

}
  





startBtn.addEventListener("click", start);

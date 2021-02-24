var questions = [
    {
    question: `What is the largest country in the world?`,
        choiceA: "Canada",
        choiceB: "China",
        choiceC: "Russia",
    correct: "C",
    }, {
    question: `What is the 100th digit of Pi?`,
        choiceA: "9",
        choiceB: "5",
        choiceC: "3",
    correct: "A",
    }, {
    question: `What year did World War I begin?`,
        choiceA: "1919",
        choiceB: "1926",
        choiceC: "1914",
    correct: "C",
    }, {
    question: `Which of these countries is NOT a part of the Asian continent?`,
        choiceA: "Russia",
        choiceB: "Suriname",
        choiceC: "Georgia",
    correct: "B",
    }, {
    question: `Which is the largest freshwater lake in the world?`,
        choiceA: "Lake Superior",
        choiceB: "Caspian Sea",
        choiceC: "Lake Michigan",
    correct: "Caspian Sea",
    }, {
    question: `What is the scientific name of the knee cap?`,
        choiceA: "Foramen Magnum",
        choiceB: "Scapula",
        choiceC: "Patella",
    correct: "C",
    }, {
    question: `What is the fastest land animal?`,
        choiceA: "Cheetah",
        choiceB: "Lion",
        choiceC: "Patella",
    correct: "C",
    }, {
    question: `What is the Italian word for "Tomato"?`,
        choiceA: "Cipolla",
        choiceB: "Pomodoro",
        choiceC: "Peperoncino",
    correct: "B",
    }, {
    question: `Which of these fruits is NOT a berry?`,
        choiceA: "Blueberry",
        choiceB: "Banana",
        choiceC: "Strawberry",
    correct: "C",
    }, {
    question: `What is the oldest Disney Film?`,
        choiceA: "Pinocchio",
        choiceB: "Snow White",
        choiceC: "Dumbo",
    correct: "B"
    }];

var start = document.getElementById("start");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("timeLeft");


function startQuiz() {
    start.classList.add("hidden");
    renderQuestion();
    quiz.classList.remove("hidden");
    timerInterval = setInterval(renderTimer, 1000);
  }

  start.addEventListener("click", startQuiz);

function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
  }

  var lastQuestion = questions.length - 1;
  var runningQuestion = 0;
  var count = 0;
  var timeLeft = 80;
  var timeInterval;
  
  
function renderTimer() {
    timeLeft = timeLeft - 1;
    counter.innerText = timeLeft;
    if (timeLeft <= 0) {
      end();
    }
    
  }
  function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
      console.log("+1 Correct!")
    } else {
      console.log("-1 Incorrect!");
      timeLeft = timeLeft - 10;
      counter.innerText = timeLeft;
    }
  
    count = 0;
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      end();
    }
  }
  
  function end() {
    clearInterval(timerInterval);
    quiz.classList.add("hidden");
    scores.classList.remove("hidden");
    userScore.innerHTML = timeLeft;
  }

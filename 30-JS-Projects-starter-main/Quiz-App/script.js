const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Girrafe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world ?",
        answers: [
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Ityl", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
        ]
    },
    {
        question: "What is the size of your PP?",
        answers: [
            { text: "10'", correct: false },
            { text: "6'", correct: false },
            { text: "4'", correct: false },
            { text: "1'", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
let answerBtn = document.getElementById("answerBtn");
const next = document.getElementById("next");

let index = 0;
let score = 0;

function startQuiz() {
    index = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQues = questions[index];
    let questionNum = index + 1;
    questionElement.innerHTML = questionNum + ". " + currentQues.question;

    currentQues.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    next.style.display = "none"
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    next.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    next.innerHTML = "Play Again";
    next.style.display = "block"
}

function handleNextBtn(){
    index++;
    if(index < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

next.addEventListener("click", ()=>{
    if(index < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();
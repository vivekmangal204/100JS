const questions = [

    {
        question:  "What does HTML Stands for ?",
        answers: [
            {text: "Home Tool Markup Language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyperlinks and Text Markup Language", correct: false},
            {text: "Hyper Transfer Mail Langauge", correct: false},
        ]
    },
    {
        question:  "Who is making the Web standards?",
        answers: [
            {text: "Microsoft", correct: false},
            {text: "Mozilla", correct: false},
            {text: "The World Wide Web Consortium", correct: true},
            {text: "Google", correct: false},
        ]
    },
    {
        question:  "Choose the correct HTML element for the largest heading:",
        answers: [
            {text: "head", correct: false},
            {text: "heading", correct: false},
            {text: "h1", correct: true},
            {text: "h6", correct: false},
        ]
    },
    {
        question:  "What is the correct HTML element for inserting a line break?",
        answers: [
            {text: "break", correct: false},
            {text: "lb", correct: false},
            {text: "br", correct: true},
            {text: "li", correct: false},
        ]
    },
    {
        question:  "Choose the correct HTML element to define important text",
        answers: [
            {text: "strong", correct: true},
            {text: "important", correct: false},
            {text: "i", correct: false},
            {text: "b", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion()
{
    //Question
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    //Answer
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState()
{
    nextBtn.style.display="none";
    while(answerBtn.firstChild)
    {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display="block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display = "block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
        showQuestion();
    else
        showScore();
}

nextBtn.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length)
        handleNextButton();
    else
    startQuiz();
}),
startQuiz();

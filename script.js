const startBtn=document.getElementById('start-btn');
const nextBtn=document.getElementById('next-btn');
const  restartBtn = document.getElementById('restart-btn');
const questionContainer=document.getElementById('quiz-screen');
const questionElement=document.getElementById('question');
const answerButtons=document.getElementById('answer-buttons');
const startScreen=document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const scoreText=document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

const questions =[
    {
        question:"What is my Name?",
        answers:[
            {text:"Ayesha", correct: false},
            {text:"Zahra", correct: true},
            {text:"Akhtar Shah", correct: false},
            {text:"Khan Baba", correct: false},

        ]
    },
     {
        question:"What do bees collect from flowers?",
        answers:[
            {text:"Opinion", correct: false},
            {text:"Secrets", correct: false},
            {text:"Pollen", correct: true},
            {text:"Money", correct: false},

        ]
    },
     {
        question:"Which country invented ice cream??",
        answers:[
            {text:"Pakistan", correct: false},
            {text:"China", correct: true},
            {text:"Japan", correct: false},
            {text:"England",correct: false},

        ]
    },
     {
        question:"What planet do we live on??",
        answers:[
            {text:"Earth", correct: true},
            {text:"Mars (you sure?🤔)", correct: false},
            {text:"Pluto", correct: false},
            {text:"My School", correct: false},

        ]
    },
     {
        question:"Which animal can't jump?",
        answers:[
            {text:"Panda", correct: false},
            {text:"Elephant", correct: true},
            {text:"Me", correct: false},
            {text:"Donkey", correct: false},

        ]
    }

];

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click',() =>{
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener('click', () => location.reload());

function startQuiz(){
    startScreen.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex=0;
    score=0;
    setNextQuestion();
}
function setNextQuestion(){
    resetState();
    if(currentQuestionIndex < questions.length){
        showQuestion(questions[currentQuestionIndex]);
    }
    else{
        showResult();
    }
}
function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach(answer =>{
        const btn = document.createElement('button');
        btn.innerText=answer.text;
        btn.classList.add('btn');
        btn.addEventListener('click', () =>selectAnswer(answer.correct));
        answerButtons.appendChild(btn);
    });
}
function resetState(){
    nextBtn.classList.add('hide');
    answerButtons.innerHTML = '';
}
function selectAnswer(correct){
    if(correct) score++;
    nextBtn.classList.remove('hide')
}
function showResult(){
    questionContainer.classList.add('hide');
    resultScreen.classList.remove('hide');
    scoreText.innerText=`${score} / ${questions.length}`;

      if (score === questions.length) {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
     const victoryImg = document.getElementById('victory-img');

if (score === questions.length) {
    // confetti stuff
    victoryImg.src ="5score.jpg";
    victoryImg.style.display = "block";
} else if(score===4) {
     victoryImg.src = "4score.jpg";
    victoryImg.style.display = "block";
}else if(score===3) {
     victoryImg.src = "3score.jpg";
    victoryImg.style.display = "block";
}
else if(score===2) {
     victoryImg.src = "2score.jpg";
    victoryImg.style.display = "block";
}
else if(score===1) {
     victoryImg.src = "1score.jpg";
    victoryImg.style.display = "block";
}
else if(score===0) {
    
     victoryImg.src = "0score.jpg";
    victoryImg.style.display = "block";
}
else{
     victoryImg.style.display = "none";
}
}

const startButton = document.getElementById('start_btn');
const nextButton = document.getElementById('next_btn');
const questionContainerElement = document.getElementById('question_container'); // fixed id
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer_buttons');
const scoreElement = document.getElementById('right_answer'); // fixed id

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5); // initialize
    currentQuestionIndex = 0;
    quizScore = 0;
    scoreElement.innerText = quizScore; // reset score display
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach((answer) => {
        const button = document.createElement('button'); // create element
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true'; // boolean check
    
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    
    if (correct) {
        quizScore++;
        scoreElement.innerText = quizScore;
    }
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Questions array remains the same
const questions = [
    {
        question: 'Which one is a JavaScript framework?',
        answer: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Eclipse', correct: false }
        ]
    },
    {
        question: 'Which HTML tag is used to create a hyperlink?',
        answer: [
            { text: '<p>', correct: false },
            { text: '<link>', correct: false },
            { text: '<a>', correct: true },
            { text: '<href>', correct: false }
        ]
    },
    {
        question: 'Which of the following is not a programming language?',
        answer: [
            { text: 'Python', correct: false },
            { text: 'Java', correct: false },
            { text: 'HTML', correct: true },
            { text: 'C++', correct: false }
        ]
    },
    {
        question: 'Which CSS property controls the text size?',
        answer: [
            { text: 'font-style', correct: false },
            { text: 'text-size', correct: false },
            { text: 'font-size', correct: true },
            { text: 'text-style', correct: false }
        ]
    },
    {
        question: 'Which one is a version control system?',
        answer: [
            { text: 'Node.js', correct: false },
            { text: 'Git', correct: true },
            { text: 'Bootstrap', correct: false },
            { text: 'JavaScript', correct: false }
        ]
    },
    {
        question: 'Which company developed JavaScript?',
        answer: [
            { text: 'Microsoft', correct: false },
            { text: 'Netscape', correct: true },
            { text: 'Google', correct: false },
            { text: 'Oracle', correct: false }
        ]
    },
    {
        question: 'What does CSS stand for?',
        answer: [
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Creative Style System', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Control Styling System', correct: false }
        ]
    },
    {
        question: 'Which symbol is used for comments in JavaScript?',
        answer: [
            { text: '#', correct: false },
            { text: '//', correct: true },
            { text: '<!-- -->', correct: false },
            { text: '%', correct: false }
        ]
    },
    {
        question: 'Which method is used to output something in JavaScript?',
        answer: [
            { text: 'cout', correct: false },
            { text: 'print()', correct: false },
            { text: 'echo', correct: false },
            { text: 'console.log()', correct: true }
        ]
    },
    {
        question: 'Which of the following is a backend language?',
        answer: [
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: false },
            { text: 'Python', correct: true },
            { text: 'Figma', correct: false }
        ]
    }
];
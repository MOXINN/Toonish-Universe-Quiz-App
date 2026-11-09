const startBtn = document.getElementById('start-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultScreen = document.getElementById('result-screen');

const category = document.getElementById('category');
const question = document.getElementById('question');
const questionLabel = document.getElementById('question-label');
const optionBtn = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');

const cartoonPoster = document.getElementById('cartoon-poster');
const posterCaption = document.getElementById('poster-caption');

const scores = document.getElementById('score');
const questionCount = document.querySelector('.question-count');
const progress = document.getElementById('progress');

const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

const totalQuestions = 20;

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let hasAnswered = false;

// Fallback poster image if a link is missing or fails to load
const FALLBACK_POSTER = "https://images.openai.com/static-rsc-4/AYzR13aUJbWr6_VHu2OnG_zbzZQAInN-yAzN7Y9eo4Q3-fE8EXKf_jH7BGgibp8TY3TR0IgPKmdECSlp5v0_AneVxHZ1iYPJUh4IKt-StJa1vv_n5FhyPYCTCuVEJNL3T8QTYoowXyQE-4MjQryOqiRVlfkczKPqpVyOLW5u0Uw7Mut-eGiY7oSfflDcq7wu?purpose=fullsize";

// SHUFFLE QUESTIONS
function shuffleQue() {
    let shuffled = [...quizData];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    selectedQuestions = shuffled.slice(0, Math.min(totalQuestions, shuffled.length));
}

// START / RESTART QUIZ
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    hasAnswered = false;

    shuffleQue();

    scores.innerHTML = `0 <span>/ 100</span>`;
    progress.style.width = '0%';

    welcomeScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizContainer.style.display = 'flex';

    loadQuestion();
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

// UPDATE LEFT CARTOON POSTER
function updateCategoryPoster(categoryName) {
    const rawURL = (typeof categoryImages !== 'undefined' && categoryImages[categoryName])
        ? categoryImages[categoryName]
        : null;

    const isPlaceholder = !rawURL || rawURL.includes('example.com');

    cartoonPoster.onerror = () => {
        cartoonPoster.onerror = null;
        cartoonPoster.src = FALLBACK_POSTER;
    };

    cartoonPoster.src = isPlaceholder ? FALLBACK_POSTER : rawURL;
    cartoonPoster.alt = `${categoryName} Poster`;
    posterCaption.innerText = `${categoryName} ✦`;
}

// LOAD QUESTION
function loadQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const formattedNumber = String(currentQuestionIndex + 1).padStart(2, '0');

    category.innerText = currentQuestion.category;
    updateCategoryPoster(currentQuestion.category);

    question.innerText = currentQuestion.question;
    questionCount.innerText = `${formattedNumber} / ${selectedQuestions.length}`;
    questionLabel.innerText = `QUESTION ${formattedNumber}`;

    const letters = ['A', 'B', 'C', 'D'];

    optionBtn.forEach((btn, index) => {
        btn.innerHTML = `<span>${letters[index]}</span> ${currentQuestion.options[index]}`;
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong', 'selected');
    });

    selectedAnswer = null;
    hasAnswered = false;
    nextBtn.disabled = true;
}

// CHECK ANSWER
optionBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (hasAnswered) return;

        const currentQuestion = selectedQuestions[currentQuestionIndex];
        selectedAnswer = currentQuestion.options[index];
        hasAnswered = true;

        if (selectedAnswer === currentQuestion.correctAnswer) {
            score++;
            btn.classList.add('correct');
        } else {
            btn.classList.add('wrong');

            optionBtn.forEach((option, i) => {
                if (currentQuestion.options[i] === currentQuestion.correctAnswer) {
                    option.classList.add('correct');
                }
            });
        }

        // Update progress bar
        progress.style.width = `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%`;

        // Update score (5 points per question)
        scores.innerHTML = `${score * 5} <span>/ 100</span>`;

        // Enable next button & disable all options
        nextBtn.disabled = false;
        optionBtn.forEach(option => {
            option.disabled = true;
        });
    });
});

// NEXT QUESTION
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// SHOW RESULT
function showResult() {
    quizContainer.style.display = 'none';
    resultScreen.style.display = 'flex';

    const total = selectedQuestions.length;
    const wrongAnswers = total - score;
    const percentage = Math.round((score / total) * 100);

    finalScore.innerText = score * 5;
    document.getElementById('correct-answers').innerText = score;
    document.getElementById('wrong-answers').innerText = wrongAnswers;
    document.getElementById('accuracy').innerText = `${percentage}%`;

    const resultMessage = document.getElementById('result-message');
    if (percentage >= 90) {
        resultMessage.innerText = 'Cartoon Legend!';
    } else if (percentage >= 70) {
        resultMessage.innerText = 'Amazing Work!';
    } else if (percentage >= 50) {
        resultMessage.innerText = 'Good Job!';
    } else {
        resultMessage.innerText = 'Keep Watching Cartoons!';
    }

    document.getElementById('result-description').innerText =
        `You answered ${score} out of ${total} questions correctly!`;

    document.querySelector('.score-circle').style.setProperty(
        '--score-angle',
        `${percentage * 3.6}deg`
    );
}
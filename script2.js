const questions = [
    {
        question: "What is the capital of France?",
        options: ["A. Paris", "B. London", "C. Berlin", "D. Rome"],
        answer: "A. Paris"
    },
    {
        question: "Question 2?",
        options: ["A. 1", "B. 2", "C. 3","D. 4"],
        answer: "B. 2"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const resultDiv = document.getElementById('result');
const videoContainer = document.getElementById('video-container');
const gameContainer = document.getElementById('game-container');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    optionsList.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', checkAnswer);
        optionsList.appendChild(li);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestionIndex)

    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
    
        if (selectedOption === currentQuestion.answer) {
            showResult("Chocolate time, good job Süßmaus")
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    resultDiv.textContent = "Congratulations! You've won!";
                }
            }, 2000);
        } else {
            // resultDiv.style.display = "flex";
            // resultDiv.textContent = "Wrong answer! Try again.";
            // resultDiv.classList.remove('flash');
            // resultDiv.classList.add('flash');
            showResult("WRONG, Drink up!!")
            
        }
    }
    else {
        console.error('Invalid question index or questions array is empty.');
        window.location.href = "index.html";
    }
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    const rightSound = document.getElementById('right-sound')
    const wrongSound = document.getElementById('wrong-sound')

    if (message != "WRONG, Drink up!!"){
        rightSound.play();

    }
    else {
        wrongSound.play();
    }
    resultDiv.textContent = message;
    resultDiv.style.display = 'flex'; 
    if (message != "WRONG, Drink up!!"){
        resultDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        

    }
    else {
        resultDiv.style.backgroundColor = 'rgba(255,0,0,0.8)';
        
    }

    setTimeout(function() {
        resultDiv.style.display = 'none'; 
    }, 2000);
}

function startGame() {
    videoContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    loadQuestion();
}

function playVideo() {
    const videoContainer = document.getElementById('video-container');
    const sideimg1 = document.getElementById('img1')
    const sideimg2 = document.getElementById('img2')
    const videoPlayer = document.createElement('video');
    videoPlayer.src = 'assets/intro2.mp4'; // Replace 'your-video-url.mp4' with your video URL
    videoPlayer.controls = false;
    videoPlayer.autoplay = false;
    videoPlayer.muted = false;
    videoContainer.appendChild(videoPlayer);

    

    const playButton = document.createElement('div');
    playButton.classList.add('play-button');
    playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M24 44V20l20 12z" fill="#fff"/></svg>';
    playButton.addEventListener('click', function() {
        videoPlayer.play();
        playButton.style.display = 'none';
    });
    videoContainer.appendChild(playButton);

    videoPlayer.addEventListener('ended', function() {
        videoContainer.style.display = 'none';
        sideimg1.style.display = 'flex';
        sideimg2.style.display = 'flex';
        startGame();
    });
   
}

function skipVideoAndStartGame() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'none';
    startGame();
}

// Call skipVideoAndStartGame() function to skip the video and start the game directly
// skipVideoAndStartGame();

// Initial load
playVideo();
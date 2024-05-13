const questions = [
    {
        question: "In true German fashion, whose bike was stolen after 5 days of it being bought?",
        options: ["A. Maria", "B. Julius", "C. Shardul", "D. Hannah"],
        answer: "A. Maria"
    },
    {
        question: "Whose grandfather had only 13 siblings?",
        options: ["A. Shardul", "B. Hannah", "C. Maria","D. Julius"],
        answer: "D. Julius"
    },
    {
        question: "Trams and buses are this person's natural enemies, as they always seem to fall in them:",
        options: ["A. Hannah", "B. Julius", "C. Shardul","D. Maria"],
        answer: "C. Shardul"
    },
    {
        question: "Whose mother bought her own German citizenship for the meager price of 100 mark at the age of 15?",
        options: ["A. Julius", "B. Hannah", "C. Maria","D. Shardul"],
        answer: "A. Julius"
    },
    {
        question: "Who had to pick up their phone from the police two times? Yes, it was the same phone.",
        options: ["A. Maria", "B. Shardul", "C. Julius","D. Hannah"],
        answer: "D. Hannah"
    },
    {
        question: "Who is also known as the chicken slayer? They have killed 10 chickens (so far).",
        options: ["A. Hannah", "B. Maria", "C. Julius","D. Shardul"],
        answer: "B. Maria"
    },
    {
        question: "This person really likes the sea. So much that they lost their car keys in the sea once.",
        options: ["A. Shardul", "B. Maria", "C. Hannah","D. Julius"],
        answer: "C. Hannah"
    },
    {
        question: "Who was their city's slow cycling champion?",
        options: ["A. Maria", "B. Shardul", "C. Julius","D. Hannah"],
        answer: "B. Shardul"
    },
    {
        question: "This person loves hiking. So much so that they have hiked for 24 hours straight once.",
        options: ["A. Julius", "B. Shardul", "C. Maria","D. Hannah"],
        answer: "A. Julius"
    },
    {
        question: "This person makes migratory birds' lives look stable, as they have moved 10 times in less than 5 years",
        options: ["A. Julius", "B. Shardul", "C. Hannah","D. Maria"],
        answer: "D. Maria"
    },
    {
        question: "Who has a cat named Krümel?",
        options: ["A. Shardul", "B. Maria", "C. Julius","D. Hannah"],
        answer: "D. Hannah"
    },
    {
        question: "This person was on the Panamanian news a few years ago. Was it related to the Panama Papers? We can't legally disclose that",
        options: ["A. Maria", "B. Hannah", "C. Julius","D. Shardul"],
        answer: "C. Julius"
    },
    {
        question: "Who once lost a quiz because they couldn't name the most famous and longest river in their nation?",
        options: ["A. Maria", "B. Julius", "C. Shardul","D. Hannah"],
        answer: "C. Shardul"
    },
    {
        question: "This maus is definitely on the correct floor, because they had mice in their house.",
        options: ["A. Julius", "B. Maria", "C. Shardul","D. Hannah"],
        answer: "B. Maria"
    },
    {
        question: "Who has never been defeated so far in bowling? (probably will change at the upcoming floor excursion)",
        options: ["A. Shardul", "B. Maria", "C. Julius","D. Hannah"],
        answer: "A. Shardul"
    },
    {
        question: "Everyone loses their self control a little bit when they drink. But this person has lost even more. Their glasses. Twice.",
        options: ["A. Maria", "B. Shardul", "C. Hannah","D. Julius"],
        answer: "D. Julius"
    },
    {
        question: "The first thing this person saw when they entered the highway in their driver's exam was a wrong-way driver coming right at them.",
        options: ["A. Hannah", "B. Julius", "C. Shardul","D. Maria"],
        answer: "D. Maria"
    },
    {
        question: "This person was once interviewed by the media, and is on record saying they want to be a soldier when they grew up. They can't recall saying it.",
        options: ["A. Hannah", "B. Shardul", "C. Julius","D. Maria"],
        answer: "B. Shardul"
    },
    {
        question: "Whose favorite color is red?",
        options: ["A. Julius", "B. Shardul", "C. Hannah","D. Maria"],
        answer: "C. Hannah"
    },
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
            showResult("Candy time, good job Süßmaus")
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
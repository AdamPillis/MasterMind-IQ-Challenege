//Calling the form element to collect player name and use within handleSubmit function
let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);
/**Function to collect playerName from form section in #start-screen.
 * Hides start-screen and opens menu-screens.
 * PlayerName added to welcome message. 
 */
function handleSubmit(event) {

    event.preventDefault();

    let player = form.elements.playername;
    let menuScreen = document.getElementById('menu-screen');
    let startScreen = document.getElementById('start-screen')
    let welcomeMessage = document.getElementsByClassName('welcome-message')[0];

     welcomeMessage.innerText = `Welcome to MasterMindsIQ ${player.value} !`;

     startScreen.style.display = 'none';
     menuScreen.style.display = 'unset';
}
// blank variable to which the checkDifficultyLevel puts difficulty level
let difficultyLevel = '';
/** to check which radio button is 'checked'
 * different string for each level which is placed into the difficultyLevel variable. 
 */
function checkDifficultyLevel() {
    
    let easyButton = document.getElementById('easy-level');
    let mediumButton = document.getElementById('medium-level');
    let hardButton = document.getElementById('hard-level');

    if (easyButton.checked) {
        difficultyLevel = 'easy';
    } else if (mediumButton.checked) {
            difficultyLevel = 'medium';
        } else if (hardButton.checked) {
                difficultyLevel = 'hard'; }
            else {
                alert("Unknown difficulty level");
                }
    }
// call category buttons list by class name
let categoryButtons = document.getElementsByClassName('answers-area');
// indexing movies button and adding a click event listener to it
let moviesButton = categoryButtons[0];
moviesButton.addEventListener('click', checkMoviesLevel);
/** checkMoviesLevel() checks what the difficulty level is 
 * and calls an individual function for each category level
 */
function checkMoviesLevel() {
    checkDifficultyLevel(difficultyLevel);

    if (difficultyLevel == 'easy') {

        startEasyMovieQuestions();

    } else if (difficultyLevel == 'medium') {
            alert('You chose medium movies');
        } else if (difficultyLevel == 'hard') {
            alert('You chose hard movies');
        } else {
            alert('Unknown category level');
        }
    }
/**
 * displayRules function hides menu screen and calls rules screen to display
 */
function displayRules() {
    
    let menuScreen = document.getElementById('menu-screen');
    let rulesScreen = document.getElementById('rules-screen');

     menuScreen.style.display = 'none';
     rulesScreen.style.display = 'unset';
}
// click event listener attached to button in rules screen section
let rulesButton = document.getElementById('rules-button');
rulesButton.addEventListener('click', hideRules);
/**
 * hide rules screen and load game screen section
 */
function hideRules() {
    let rulesScreen = document.getElementById('rules-screen');
    let gameScreen = document.getElementById('game-screen');

    rulesScreen.style.display = 'none';
    gameScreen.style.display = 'unset';
}
// finish button on final question of each game calling function to show end screen
let finishButton = document.getElementById('finish-button');
finishButton.addEventListener('click', displayEndScreen);
/**
 * called when finish button is clicked on final question
 * shows a final score and a message with a button to the main menu
 */
function displayEndScreen() {
    let gameScreen = document.getElementById('game-screen');
    let endScreen = document.getElementById('end-screen');

    gameScreen.style.display = 'none';
    endScreen.style.display = 'unset';
}
// event listener attached to menu button to take user back to main menu
let menuButton = document.getElementById('end-button');
menuButton.addEventListener('click', backToMenu)
/**
 * function called when Menu button is clicked in end-screen
 */
function backToMenu() {
    let endScreen = document.getElementById('end-screen');
    let menuScreen = document.getElementById('menu-screen');

    endScreen.style.display = 'none';
    menuScreen.style.display = 'unset';
}
// when button on the right within the header is clicked during game.
let headerButton = document.getElementById('header-button');
headerButton.addEventListener('click', displayDoorScreen)
/**
 * when headerButton is clicked above
 * function hides game-screen and shows door-screen section
 */
function displayDoorScreen() {
    let doorScreen = document.getElementById('door-screen');
    let gameScreen = document.getElementById('game-screen');

    doorScreen.style.display = 'unset';
    gameScreen.style.display = 'none';
}

let yesButton = document.getElementById('button-yes');
yesButton.addEventListener('click', exitGame)
let noButton = document.getElementById('button-no');
noButton.addEventListener('click', closeDoorScreen)

function exitGame() {
    let doorScreen = document.getElementById('door-screen');
    let menuScreen = document.getElementById('menu-screen');

    doorScreen.style.display = 'none';
    menuScreen.style.display = 'unset';
}

function closeDoorScreen() {
    let doorScreen = document.getElementById('door-screen');
    let gameScreen = document.getElementById('game-screen');

    doorScreen.style.display = 'none';
    gameScreen.style.display = 'unset';
}

// variable including Easy Movie Questions
    let easyMovieQuestions = [
        {
            question: "Which film won the Oscar for ‘best picture’ in 2019?",
            answers: [
                {text: 'A Star is Born', correct: false},
                {text: 'Vice', correct: false},
                {text: 'Green Book', correct: true},
                {text: 'The Favourite', correct: false}
            ]
        },
        {
            question: "Jurassic Park is based on the novel by which author?",
            answers: [
                {text: 'Stephen King', correct: false},
                {text: 'John Grisham', correct: false},
                {text: 'Michael Crichton', correct: true},
                {text: '"Harlan Coben', correct: false}
            ]
        },
        {
            question: "Home Alone is set in which city?",
            answers: [
                {text: 'Boston', correct: false},
                {text: 'New York', correct: false},
                {text: 'Chicago', correct: true},
                {text: 'Pittsburgh', correct: false}
            ]
        },
        {
            question: "The gang members in Reservoir Dogs were given names based on what?",
            answers: [
                {text: 'Months', correct: false},
                {text: 'Numbers', correct: false},
                {text: 'Presidents', correct: false},
                {text: 'Colours', correct: true}
            ]
        },
        {
            question: "When was the first Star Wars film released?",
            answers: [
                {text: '1967', correct: false},
                {text: '1977', correct: true},
                {text: '1987', correct: false},
                {text: '1957', correct: false}
            ]
        },
        {
            question: "Who directed the film Alien?",
            answers: [
                {text: 'Ridley Scott', correct: true},
                {text: 'James Cameron', correct: false},
                {text: 'Brian De Palma', correct: false},
                {text: '"Oliver Stone', correct: false}
            ]
        },
        {
            question: "Uma Thurman and John Travolta had an iconic dance scene in which movie?",
            answers: [
                {text: 'Saturday Night Fever', correct: false},
                {text: 'Face Off', correct: false},
                {text: 'Pulp Fiction', correct: true},
                {text: 'Kill Bill', correct: false}
            ]
        },
        {
            question: "Who played James Bond in ‘You Only Live Twice'",
            answers: [
                {text: 'Sean Connery', correct: true},
                {text: 'Roger Moore', correct: false},
                {text: 'Timothy Dalton', correct: false},
                {text: 'George Lazenby', correct: false}
            ]
        },
        {
            question: "For what movie did Tom Hanks get his first Academy Award nomination?",
            answers: [
                {text: 'Saving Private Ryan', correct: false},
                {text: 'Big', correct: true},
                {text: 'Forrest Gump', correct: false},
                {text: 'Cast Away', correct: false}
            ]
        },
        {
            question: "In which year was ‘E.T the Extra Terrestrial’ released?",
            answers: [
                {text: '1962', correct: false},
                {text: '1972', correct: false},
                {text: '1982', correct: true},
                {text: '1992', correct: false}
            ]
        }
    ];
    // variable containing question and answers
    let quizContainer = document.getElementById('quiz-container');
    //setting variables to undefined for now
    let questionContainer = document.getElementById('question');
    let optionButtons = document.getElementById('option-buttons');

    let nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;

        setNextEasyMovieQuestion();
        
    })

    let shuffledEasyMovieQuestions, currentQuestionIndex

function startEasyMovieQuestions() {
    //display easy movie questions randomly
    shuffledEasyMovieQuestions = easyMovieQuestions;
    currentQuestionIndex = 0;

    displayRules();

    setNextEasyMovieQuestion();
}
/**
 * sets next question and optional answers using a random index
 */
function setNextEasyMovieQuestion() {

    resetState();

    showQuestion(shuffledEasyMovieQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionContainer.textContent = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button') // create a new button for each answer using same button class/style
        button.textContent = answer.text; // add answer content to each new button
        button.classList.add('game-button')
        if (answer.correct) {
            button.dataset.correct = answer.correct /** add correct dataset attribute only if answer is correct */
        }
        button.addEventListener('click', checkAnswer) // if player clicks on an answer, call checkAnswer function 
        optionButtons.appendChild(button); // append new buttons as child of optionButtons
    })
}
/**
 * Will reset game-screen to default every time a new question is called
 * next question button will disappear
 * checks if optionButtons have any first children and if so, remove them. 
 */
function resetState(){
    nextButton.style.display = 'none';
    
    while (optionButtons.firstChild) {
        optionButtons.removeChild (optionButtons.firstChild)
    }
    
}
/**
 * checks which button is selected
 * compares button clicked with correct answer
 */
function checkAnswer(event) {
    let playerAnswer = event.target;
    let correct = playerAnswer.dataset.correct;

    setBodyClass(document.body, correct)
    Array.from(optionButtons.children).forEach(button => {
        setBodyClass(button, button.dataset.correct)
    })
    if (currentQuestionIndex <= 8) {
    nextButton.style.display = 'unset'; 
    } else {
        finishButton.style.display = 'unset';
        nextButton.style.display = 'none';
    }
}
/**
 * checks if option clicked is correct
 * if correct, set body class to correct (green)
 * if incorrect, set body class to incorrect (red)
 */
function setBodyClass(element, correct) {
    
    clearBodyClass(element);

    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}
/**
 * to clear body class set after next button clicked
 */
function clearBodyClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}
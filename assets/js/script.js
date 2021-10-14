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
    let moviesButton = document.getElementById('movies');
    moviesButton.addEventListener('click', checkMoviesLevel);
/** checkMoviesLevel() checks what the difficulty level is 
 * and calls an individual function for each category level
 */
function checkMoviesLevel() {
    checkDifficultyLevel(difficultyLevel);

    if (difficultyLevel == 'easy') {
        nextButton.innerText = 'Next Easy Movie Question'

        startEasyMovieQuestions();

        } else if (difficultyLevel == 'medium') {
            nextButton.innerText = 'Next Medium Movie Question';

            startMediumMovieQuestions();

            } else if (difficultyLevel == 'hard') {
                nextButton.innerText = 'Next Hard Movie Question'

                startHardMovieQuestions();

                } else {
                    alert('Unknown category level');
                    }
    }
    // indexing sport button and adding a click event listener to it
    let sportButton = document.getElementById('sport');
    sportButton.addEventListener('click', checkSportLevel);
/** checkMoviesLevel() checks what the difficulty level is 
 * and calls an individual function for each category level
 */
function checkSportLevel() {
    checkDifficultyLevel(difficultyLevel);

    if (difficultyLevel == 'easy') {
        // nextButton.innerText = 'Next Easy Movie Question'
          alert('easy sport questions')
        // startEasyMovieQuestions();

        } else if (difficultyLevel == 'medium') {
           // nextButton.innerText = 'Next Medium Movie Question';
            alert('medium sport questions')
           // startMediumMovieQuestions();

            } else if (difficultyLevel == 'hard') {
                // nextButton.innerText = 'Next Hard Movie Question'
             alert('hard sport questions')
                // startHardMovieQuestions();

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
    clearBodyClass(document.body);
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
    finishButton.style.display = 'none';
    resetQuestionNumber();
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
    clearBodyClass(document.body);
    resetQuestionNumber()
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
    let easyMovieQuestionsArray = [
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
                {text: 'Harlan Coben', correct: false}
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
                {text: 'Oliver Stone', correct: false}
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
// variable including Medium Movie Questions
    let mediumMovieQuestionsArray = [
        {
            question: "'In space, no one can hear you scream' is the famous tagline from which film?",
            answers: [
                {text: 'The Martian', correct: false},
                {text: 'Alien', correct: true},
                {text: 'Pitch Black', correct: false},
                {text: 'Pitch Perfect', correct: false}
            ]
        },
        {
            question: "What's the first dinosaur seen by the visitors in Jurassic Park?",
            answers: [
                {text: 'Spinosaurus', correct: false},
                {text: 'T.rex', correct: false},
                {text: 'Brachiosaurus', correct: true},
                {text: 'Velociraptor', correct: false}
            ]
        },
        {
            question: "What does Neo first take to leave The Matrix?",
            answers: [
                {text: 'A red pill', correct: true},
                {text: 'A phone call', correct: false},
                {text: 'A blue pill', correct: false},
                {text: 'None of the above', correct: false}
            ]
        },
        {
            question: "What's the name of the necklace in Titanic?",
            answers: [
                {text: 'The Black Soul', correct: false},
                {text: 'The Heart of the Ocean true', correct: true},
                {text: 'The Jewel of the Night', correct: false},
                {text: 'The Diamond of the Sea', correct: false}
            ]
        },
        {
            question: "In Lord of the Rings, how many Rings of Power are there?",
            answers: [
                {text: '1', correct: false},
                {text: '20', correct: true},
                {text: '50', correct: false},
                {text: '100', correct: false}
            ]
        },
        {
            question: "In which James Bond film does Jane Seymour appear?",
            answers: [
                {text: 'Live and Let Die true', correct: true},
                {text: 'Octopussy', correct: false},
                {text: 'Moonraker', correct: false},
                {text: 'No Time to Die', correct: false}
            ]
        },
        {
            question: "Which city is cop Axel Foley from in Beverly Hills Cop?",
            answers: [
                {text: 'Los Angeles', correct: false},
                {text: 'Chicago', correct: false},
                {text: 'Detriot', correct: true},
                {text: 'New York', correct: false}
            ]
        },
        {
            question: "What movie did Steven Spielberg win his first Oscar for?",
            answers: [
                {text: 'Savin Private Ryan', correct: false},
                {text: 'The Sugarland Express', correct: false},
                {text: 'Jaws', correct: false},
                {text: 'Schindlers List', correct: true}
            ]
        },
        {
            question: "How many 'Hunger Games' movies have been released up to date?",
            answers: [
                {text: '2', correct: false},
                {text: '3', correct: false},
                {text: '4', correct: true},
                {text: '5', correct: false}
            ]
        },
        {
            question: "What is the famous actor, Jimmy Carrey's year of birth?",
            answers: [
                {text: '1960', correct: false},
                {text: '1962', correct: true},
                {text: '1964', correct: false},
                {text: '1966', correct: false}
            ]
        }
    ];
// variable including Hard Movie Questions
    let hardMovieQuestionsArray = [
    {
        question: "Which famous British comedian voiced Zazu in The Lion King?",
        answers: [
            {text: 'Stephen Fry', correct: false},
            {text: 'Rowan Atkinson', correct: true},
            {text: 'Jimmy Carr', correct: false},
            {text: 'Alan Carr', correct: false}
        ]
    },
    {
        question: "Which of the following is NOT true about Star Wars: A New Hope?",
        answers: [
            {text: 'Almost every studio passed on making it', correct: false},
            {text: 'Harrison Ford was one of the main actors.', correct: false},
            {text: 'The film won the Best Picture Oscar at the 1978 Academy Awards', correct: true},
            {text: 'George Lucas gave up extra directing fees for the merchandising and sequel rights', correct: false}
        ]
    },
    {
        question: "Which actor — in one of their first roles — played a young Wendy Darling in Hook?",
        answers: [
            {text: 'Emma Stone', correct: false},
            {text: 'Gwyneth Paltrow', correct: true},
            {text: 'Cameron Diaz', correct: false},
            {text: 'Jennifer Garner', correct: false}
        ]
    },
    {
        question: "Who did Steven Spielberg originally want for the role of Dr. Alan Grant in Jurassic Park?",
        answers: [
            {text: 'Kevin Costner', correct: false},
            {text: 'Harrison Ford', correct: true},
            {text: 'Mark Hamill', correct: false},
            {text: 'Tom Hanks', correct: false}
        ]
    },
    {
        question: "Which of these facts is true about film, 'The Departed?'",
        answers: [
            {text: 'Martin Scorsese had been wanting to make it since the early 90s', correct: false},
            {text: 'It was released in 2004', correct: false},
            {text: 'It is a remake of a Hong Kong film', correct: true},
            {text: 'Robert Redford was the first choice to play Frank Costello', correct: false}
        ]
    },
    {
        question: "Which of these facts is true about The Nightmare Before Christmas?",
        answers: [
            {text: 'Tim Burton did not direct it', correct: true},
            {text: 'Danny Elfman does the speaking voice for Jack Skellington', correct: false},
            {text: 'Disney delayed the release of it because of Hocus Pocus', correct: false},
            {text: 'The film ran out of budget and had to be delayed', correct: false}
        ]
    },
    {
        question: "Which year was the very first 'Home Alone' movie released?",
        answers: [
            {text: '1989', correct: false},
            {text: '1990', correct: true},
            {text: '1992', correct: false},
            {text: '1994', correct: false}
        ]
    },
    {
        question: "Which actor was originally cast as Juliet opposite Leonardo DiCaprio in Romeo + Juliet?",
        answers: [
            {text: 'Liv Tyler', correct: false},
            {text: 'Kate Winslet', correct: false},
            {text: 'Marion Cotillard', correct: false},
            {text: 'Natalie Portman', correct: true}
        ]
    },
    {
        question: "In what year was Morgan Freeman born?",
        answers: [
            {text: '1945', correct: false},
            {text: '1943', correct: false},
            {text: '1940', correct: false},
            {text: '1937', correct: true}
        ]
    },
    {
        question: "The Wolf of Wall Street was directed by which of the following directors?",
        answers: [
            {text: 'Steven Spielberg', correct: false},
            {text: 'Ridley Scott', correct: false},
            {text: 'Martin Scorsese', correct: true},
            {text: 'Quentin Tarantino', correct: false}
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
        if(nextButton.innerText === 'Next Easy Movie Question') {
            currentQuestionIndex++;
            setNextEasyMovieQuestion();
            incrementQuestionNumber();
            } else if (nextButton.innerText === 'Next Medium Movie Question') {
                currentQuestionIndex++;
                setNextMediumMovieQuestion();
                incrementQuestionNumber();
                } else if (nextButton.innerText === 'Next Hard Movie Question') {
                    currentQuestionIndex++;
                    setNextHardMovieQuestion();
                    incrementQuestionNumber();
                }
    })

    let easyMovieQuestions, mediumMovieQuestions, hardMovieQuestions, currentQuestionIndex

function startEasyMovieQuestions() {
    //display easy movie questions in order, starting at index 0
    easyMovieQuestions = easyMovieQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextEasyMovieQuestion();
}
function startMediumMovieQuestions() {
    //display medium movie questions  in order, starting at index 0
    mediumMovieQuestions = mediumMovieQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextMediumMovieQuestion();
}
function startHardMovieQuestions() {
    //display easy movie questions randomly
    hardMovieQuestions = hardMovieQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextHardMovieQuestion();
}
/**
 * sets next question and optional answers using a random index
 */
function setNextEasyMovieQuestion() {

    resetState();

    showQuestion(easyMovieQuestionsArray[currentQuestionIndex])
}
function setNextMediumMovieQuestion() {

    resetState();

    showQuestion(mediumMovieQuestionsArray[currentQuestionIndex])
}
function setNextHardMovieQuestion() {

    resetState();

    showQuestion(hardMovieQuestionsArray[currentQuestionIndex])
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
    clearBodyClass(document.body);
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
/**
 * increases question number in controls area when next button is clicked
 */
function incrementQuestionNumber() {
    let questionNumber = parseInt(document.getElementById('question-number').innerHTML);
    document.getElementById('question-number').innerHTML = questionNumber + 1;
}
/**
 * resets questionNumber back to one for new game
 */
function resetQuestionNumber() {
    questionNumber = parseInt(document.getElementById('question-number').innerHTML);
    document.getElementById('question-number').innerHTML = 1;
}
    
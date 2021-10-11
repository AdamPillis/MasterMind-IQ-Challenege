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
// blank variable to which the checkDifficultyLevel put difficulty level
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
        
        displayRules();

        displayEasyMovies()

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
/**
 * displayEasyMovies function displays easy movies questions in order
 */

function displayEasyMovies() {
    let questions = [
        {
            question: "Which film won the Oscar for ‘best picture’ in 2019?",
            optionA: "A Star is Born",
            optionB: "Vice",
            optionC: "Green Book",
            optionD: "The Favourite",
            answer: "optionC"
        },
        {
            question: "Jurassic Park is based on the novel by which author?",
            optionA: "Stephen King",
            optionB: "John Grisham",
            optionC: "Michael Crichton",
            optionD: "Harlan Coben",
            answer: "optionC"
        },
        {
            question: "Home Alone is set in which city?",
            optionA: "Boston",
            optionB: "New York",
            optionC: "Chicago",
            optionD: "Pittsburgh",
            answer: "optionC"
        },
        {
            question: "The gang members in Reservoir Dogs were given names based on what?",
            optionA: "Months",
            optionB: "Numbers",
            optionC: "Presidents",
            optionD: "Colours",
            answer: "optionD"
        },
        {
            question: "When was the first Star Wars film released?",
            optionA: 1970,
            optionB: 1977,
            optionC: 1985,
            optionD: 1991,
            answer: "optionB"
        },
        {
            question: "Who directed the film Alien?",
            optionA: "Ridley Scott",
            optionB: "James Cameron",
            optionC: "Brian De Palma",
            optionD: "Oliver Stone",
            answer: "optionA"
        },
        {
            question: "Uma Thurman and John Travolta had an iconic dance scene in which movie?",
            optionA: "Saturday Night Fever",
            optionB: "Face Off",
            optionC: "Pulp Fiction",
            optionD: "Kill Bill",
            answer: "optionC"
        },
        {
            question: "Who played James Bond in ‘You Only Live Twice’?",
            optionA: "Sean Connery",
            optionB: "Roger Moore",
            optionC: "Timothy Dalton",
            optionD: "George Lazenby",
            answer: "optionA"
        },
        {
            question: "For what movie did Tom Hanks get his first Academy Award nomination?",
            optionA: "Saving Private Ryan",
            optionB: "Big",
            optionC: "Forrest Gump",
            optionD: "Cast Away",
            answer: "optionB"
        },
        {
            question: "In which year was ‘E.T the Extra Terrestrial’ released?",
            optionA: 1962,
            optionB: 1972,
            optionC: 1982,
            optionD: 1992,
            Answer: "optionC"
        },
    ];

    let question = document.getElementById('question');
    let optionA = document.getElementById('option-one-label');
    let optionB = document.getElementById('option-two-label');
    let optionC = document.getElementById('option-three-label');
    let optionD = document.getElementById('option-four-label');

    
    question.innerHTML = `${questions[0].question}`;
    optionA.innerHTML = `${questions[0].optionA}`;
    optionB.innerHTML = `${questions[0].optionB}`;
    optionC.innerHTML = `${questions[0].optionC}`;
    optionD.innerHTML = `${questions[0].optionD}`;

}
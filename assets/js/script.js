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
        alert('You chose easy movies');
        displayRules();
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
    let rulesButton = document.getElementById('rules-button');
    let gameScreen = document.getElementById('game-screen');
    rulesButton.addEventListener('click', )

     menuScreen.style.display = 'none';
     rulesScreen.style.display = 'unset';
    
     if (rulesButton.click) {
        rulesScreen.style.display = 'none';
        gameScreen.style.display = 'unset';
     } else {
         alert('Unable to load game');
     }
}
/**
 * displayEasyMovies function displays easy movies questions in order
 */




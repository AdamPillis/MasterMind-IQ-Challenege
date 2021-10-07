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

    let easyButton = document.getElementById('easy-button');
    let mediumButton = document.getElementById('medium-button');
    let hardButton = document.getElementById('hard-button');

    easyButton.addEventListener('click', easyLevel);
    mediumButton.addEventListener('click', mediumLevel);
    hardButton.addEventListener('click', difficultyLevel);

function easyLevel() {

    if(easyButton) {
        easyButton.style.backgroundColor = 'red';
        alert('You clicked easy');
        } else {
             alert("Unknown difficulty level");
                }
    }
function mediumLevel() {

    if(mediumButton) {
        mediumButton.style.backgroundColor = 'blue';
            alert('You clicked medium');
        } else {
            alert("Unknown difficulty level");
            }
        }



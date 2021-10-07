let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);

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
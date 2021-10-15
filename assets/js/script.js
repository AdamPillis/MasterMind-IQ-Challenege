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
 * and calls an individual function for each category type and level
 * the argument is the innerText of the next button and that's how the correct question array is located
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
/** checkSportLevel() checks what the difficulty level is first
 * and calls an individual function for each category type and level
 * the argument is the innerText of the next button and that's how the correct question array is located
 */
function checkSportLevel() {
    checkDifficultyLevel(difficultyLevel);

    if (difficultyLevel == 'easy') {
        nextButton.innerText = 'Next Easy Sport Question'
        
        startEasySportQuestions();

      } else if (difficultyLevel == 'medium') {
            nextButton.innerText = 'Next Medium Sport Question';
            
            startMediumSportQuestions();

          } else if (difficultyLevel == 'hard') {
                nextButton.innerText = 'Next Hard Sport Question'
            
                startHardSportQuestions();

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
    endPlayerMessage();
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
    resetPlayerScore();
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
    resetQuestionNumber();
    resetPlayerScore();
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
                {text: 'The Heart of the Ocean', correct: true},
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
    // variable including Easy Sport Questions
    let easySportQuestionsArray = [
    {
        question: "In motor racing, what color is the flag they wave to indicate the winner?",
        answers: [
            {text: 'White flag', correct: false},
            {text: 'Striped flag', correct: false},
            {text: 'Checkered flag', correct: true},
            {text: 'Black flag', correct: false}
        ]
    },
    {
        question: "How many holes are played in an average round of golf?",
        answers: [
            {text: '15', correct: false},
            {text: '18', correct: true},
            {text: '20', correct: false},
            {text: '21', correct: false}
        ]
    },
    {
        question: "What color are the goalposts in football?",
        answers: [
            {text: 'Yellow', correct: true},
            {text: 'White', correct: false},
            {text: 'Black and White', correct: false},
            {text: 'None of the above', correct: false}
        ]
    },
    {
        question: "In what game is “love” a score?",
        answers: [
            {text: 'Ice Hockey', correct: false},
            {text: 'Table Tennis', correct: false},
            {text: 'Baseball', correct: false},
            {text: 'Tennis', correct: true}
        ]
    },
    {
        question: "In meters, how long is an Olympic-sized swimming pool?",
        answers: [
            {text: '25 meters', correct: false},
            {text: '50 meters', correct: true},
            {text: '75 meters', correct: false},
            {text: '100 meters', correct: false}
        ]
    },
    {
        question: "In soccer, what body part can’t touch the ball?",
        answers: [
            {text: 'Hands', correct: true},
            {text: 'Fingers', correct: false},
            {text: 'Shoulders', correct: false},
            {text: 'Arms', correct: false}
        ]
    },
    {
        question: "What type of race is the Tour de France?",
        answers: [
            {text: 'Running Race', correct: false},
            {text: 'Bicycle Race', correct: true},
            {text: 'Motorbike Race', correct: false},
            {text: 'Car Race', correct: false}
        ]
    },
    {
        question: "What number sets to the right of the number ‘20’ on a standard dartboard?",
        answers: [
            {text: '1', correct: true},
            {text: '5', correct: false},
            {text: '7', correct: false},
            {text: '18', correct: false}
        ]
    },
    {
        question: "How long is a marathon?",
        answers: [
            {text: '6.2 miles', correct: false},
            {text: '16.2 miles', correct: false},
            {text: '26.2 miles', correct: true},
            {text: '36.2 miles', correct: false}
        ]
    },
    {
        question: "How much does an NFL football weigh?",
        answers: [
            {text: '1 pound', correct: true},
            {text: '3 pounds', correct: false},
            {text: '5 pounds', correct: false},
            {text: '10 pounds', correct: false}
        ]
    }
    ];
    // variable including Medium Sport Questions
    let mediumSportQuestionsArray = [
        {
            question: "In what year were women allowed to compete in the modern Olympic Games?",
            answers: [
                {text: '1888', correct: false},
                {text: '1900', correct: true},
                {text: '1924', correct: false},
                {text: '1940', correct: false}
            ]
        },
        {
            question: "How old was Tiger Woods when he won the Masters?",
            answers: [
                {text: '14', correct: false},
                {text: '21', correct: true},
                {text: '30', correct: false},
                {text: '36', correct: false}
            ]
        },
        {
            question: "How many players are on a baseball team?",
            answers: [
                {text: 'Eight', correct: false},
                {text: 'Nine', correct: true},
                {text: 'Ten', correct: false},
                {text: 'Eleven', correct: false}
            ]
        },
        {
            question: "In which winter sport are the terms “stale fish” and “mule kick” used?",
            answers: [
                {text: 'Skiing', correct: false},
                {text: 'Snowboarding', correct: true},
                {text: 'Ice Skating', correct: false},
                {text: 'Ice Hockey', correct: false}
            ]
        },
        {
            question: "What is a 6:0 6:0 score in Tennis known as?",
            answers: [
                {text: 'Double Wheel', correct: false},
                {text: 'Double Barrel', correct: false},
                {text: 'Double Bagel', correct: true},
                {text: 'Double Love', correct: false}
            ]
        },
        {
            question: "What African country was the first ever to qualify for a World Cup?",
            answers: [
                {text: 'Morocco', correct: false},
                {text: 'Angola', correct: false},
                {text: 'Egypt', correct: true},
                {text: 'South Africa', correct: false}
            ]
        },
        {
            question: "What was the first city to host the Olympics twice?",
            answers: [
                {text: 'London', correct: false},
                {text: 'Tokyo', correct: false},
                {text: 'Beijing', correct: false},
                {text: 'Paris', correct: true}
            ]
        },
        {
            question: "What sport starts with a tip-off or jump ball?",
            answers: [
                {text: 'Hand Ball', correct: false},
                {text: 'Baseball', correct: false},
                {text: 'Golf', correct: false},
                {text: 'Basketball', correct: true}
            ]
        },
        {
            question: "How many rings are there on the Olympic flag?",
            answers: [
                {text: 'Three', correct: false},
                {text: 'Four', correct: false},
                {text: 'Five', correct: true},
                {text: 'Six', correct: false}
            ]
        },
        {
            question: "What was the fastest goal in World Cup history?",
            answers: [
                {text: '5.8 seconds', correct: false},
                {text: '10.8 seconds', correct: true},
                {text: '15.8 seconds', correct: false},
                {text: '20.8 seconds', correct: false}
            ]
        }
        ];
    // variable including Hard Sport Questions
    let hardSportQuestionsArray = [
        {
            question: "What racing event is held on Phillip Island, Australia?",
            answers: [
                {text: 'Australian MotoGP', correct: true},
                {text: 'Sandown 500', correct: false},
                {text: 'Penguin Spring', correct: false},
                {text: 'Formula 1', correct: false}
            ]
        },
        {
            question: "How many consecutive misses eliminate a high jumper?",
            answers: [
                {text: 'Two', correct: false},
                {text: 'Three', correct: true},
                {text: 'Four', correct: false},
                {text: 'Five', correct: false}
            ]
        },
        {
            question: "Which team won the 2019 NFL Super Bowls?",
            answers: [
                {text: 'New England Patriots', correct: true},
                {text: 'New York Giants', correct: false},
                {text: 'Los Angeles Rams', correct: false},
                {text: 'Dallas Cowboys', correct: false}
            ]
        },
        {
            question: "How many soccer players should be on the field at the same time?",
            answers: [
                {text: '10', correct: false},
                {text: '16', correct: false},
                {text: '22', correct: true},
                {text: '26', correct: false}
            ]
        },
        {
            question: "Who was the first tennis player to achieve a Grand Slam?",
            answers: [
                {text: 'Don Budge', correct: true},
                {text: 'Fred Perry', correct: false},
                {text: 'Jack Kramer', correct: false},
                {text: 'Pancho Segura', correct: false}
            ]
        },
        {
            question: "Members of the 'Texas Rangers' play which sport?",
            answers: [
                {text: 'Baseball', correct: true},
                {text: 'Ice Hockey', correct: false},
                {text: 'Basketball', correct: false},
                {text: 'Football', correct: false}
            ]
        },
        {
            question: "Which surfing champion escaped a Great White Shark attack in 2015, during the J-Bay Open in South Africa?",
            answers: [
                {text: 'Kelly Slater', correct: false},
                {text: 'Layne Beachley', correct: false},
                {text: 'Stephanie Gilmore', correct: false},
                {text: 'Mick Fanning', correct: true}
            ]
        },
        {
            question: "Patrick Dangerfield plays for which Australian Football League Club?",
            answers: [
                {text: 'Fremantle', correct: false},
                {text: 'Essendon', correct: false},
                {text: 'Geelong', correct: true},
                {text: 'Collingwood', correct: false}
            ]
        },
        {
            question: "In which team sport can a player be penalised for 'travelling'?",
            answers: [
                {text: 'Cricket', correct: false},
                {text: 'Basketball', correct: true},
                {text: 'Ice Hockey', correct: false},
                {text: 'Volleyball', correct: false}
            ]
        },
        {
            question: "In golf, how mnay strokes below par is an Albatross?",
            answers: [
                {text: 'One under par', correct: false},
                {text: 'Two under par', correct: false},
                {text: 'Three under par', correct: true},
                {text: 'Four under par', correct: false}
            ]
        }
        ];
    // variable including Easy Science Questions
    let easyScienceQuestionsArray = [
        {
            question: "Which of the following gases is essential for us to breath?",
            answers: [
                {text: 'O2', correct: true},
                {text: 'CO2', correct: false},
                {text: 'CH4', correct: false},
                {text: 'N2', correct: false}
            ]
        },
        {
            question: "What is the largest planet in our Solar System?",
            answers: [
                {text: 'Saturn', correct: false},
                {text: 'Jupiter', correct: true},
                {text: 'Neptune', correct: false},
                {text: 'Uranus', correct: false}
            ]
        },
        {
            question: "How many teeth do adults have?",
            answers: [
                {text: '22', correct: false},
                {text: '28', correct: false},
                {text: '32', correct: true},
                {text: '36', correct: false}
            ]
        },
        {
            question: "Oncology focuses on what disease?",
            answers: [
                {text: 'Autoimmune', correct: false},
                {text: 'Diabetes', correct: false},
                {text: 'Cancer', correct: true},
                {text: 'Heart Disease', correct: false}
            ]
        },
        {
            question: "100 degrees Celsius is equal to what degreen in Fahrenheit?",
            answers: [
                {text: '0', correct: false},
                {text: '100', correct: false},
                {text: '112', correct: false},
                {text: '212', correct: true}
            ]
        },
        {
            question: "An octopus can fit through any hole larger than its what?",
            answers: [
                {text: 'Trunk', correct: false},
                {text: 'Beak', correct: true},
                {text: 'Head', correct: false},
                {text: 'Tenticles', correct: false}
            ]
        },
        {
            question: "How many bones are there in a human body?",
            answers: [
                {text: '186', correct: false},
                {text: '206', correct: true},
                {text: '226', correct: false},
                {text: '246', correct: false}
            ]
        },
        {
            question: "What is NOT found in the Shark?",
            answers: [
                {text: 'Ligaments', correct: false},
                {text: 'Skin Cells', correct: false},
                {text: 'Bones', correct: true},
                {text: 'Cartilage', correct: false}
            ]
        },
        {
            question: "How many valves are in the heart of human body?",
            answers: [
                {text: 'One', correct: false},
                {text: 'Two', correct: false},
                {text: 'Three', correct: false},
                {text: 'Four', correct: true}
            ]
        },
        {
            question: "Which planet in the solar system has the most moons?",
            answers: [
                {text: 'Venus', correct: false},
                {text: 'Earth', correct: false},
                {text: 'Jupiter', correct: true},
                {text: 'Saturn', correct: false}
            ]
        }
        ];
    // variable including Medium Science Questions
    let mediumScienceQuestionsArray = [
        {
            question: "How many approximate days our moon takes to complete the orbit around the Earth?",
            answers: [
                {text: '10 days', correct: false},
                {text: '20 days', correct: false},
                {text: '30 days', correct: true},
                {text: '40 days', correct: false}
            ]
        },
        {
            question: "Nucleons are made up of neutrons and ________?",
            answers: [
                {text: 'Nitrogen', correct: false},
                {text: 'Atoms', correct: false},
                {text: 'Protons', correct: true},
                {text: 'Carbon', correct: false}
            ]
        },
        {
            question: "How many components made up the human blood?",
            answers: [
                {text: 'Two', correct: false},
                {text: 'Three', correct: false},
                {text: 'Four', correct: true},
                {text: 'Five', correct: false}
            ]
        },
        {
            question: "What is the chemical symbol for Table Salt?",
            answers: [
                {text: 'Cl4', correct: false},
                {text: 'Zn', correct: false},
                {text: 'Fl', correct: false},
                {text: 'NaCl', correct: true}
            ]
        },
        {
            question: "At what temperature are Celsius and Fahrenheit equal?",
            answers: [
                {text: '0', correct: false},
                {text: '20', correct: false},
                {text: '-20', correct: false},
                {text: '-40', correct: true}
            ]
        },
        {
            question: "What was the first planet to be discovered by a telescope?",
            answers: [
                {text: 'Mercury', correct: false},
                {text: 'Venus', correct: false},
                {text: 'Uranus', correct: true},
                {text: 'Pluto', correct: false}
            ]
        },
        {
            question: "How many pints of blood does the average adult human body contain (closest)?",
            answers: [
                {text: '10', correct: true},
                {text: '15', correct: false},
                {text: '20', correct: false},
                {text: '25', correct: false}
            ]
        },
        {
            question: "What type of animal are frogs and toads?",
            answers: [
                {text: 'Amphibians', correct: true},
                {text: 'Nocturnal', correct: false},
                {text: 'Mammals', correct: false},
                {text: 'Reptile', correct: false}
            ]
        },
        {
            question: "What is the most commonly diagnosed cancer in men?",
            answers: [
                {text: 'Testicular', correct: false},
                {text: 'Lymphoma', correct: false},
                {text: 'Colon', correct: false},
                {text: 'Prostate', correct: true}
            ]
        },
        {
            question: "Which bone is the longest in the human body?",
            answers: [
                {text: 'Sternum', correct: false},
                {text: 'Femur', correct: true},
                {text: 'Fibula', correct: false},
                {text: 'Tibia', correct: false}
            ]
        }
        ];
    // variable including Hard Science Questions
    let hardScienceQuestionsArray = [
        {
            question: "If each time zone were one hour apart, how many time zones would there be in the world?",
            answers: [
                {text: '16', correct: false},
                {text: '20', correct: false},
                {text: '24', correct: true},
                {text: '30', correct: false}
            ]
        },
        {
            question: "What is the chemical formula for Ozone?",
            answers: [
                {text: 'H2O', correct: false},
                {text: 'O2', correct: false},
                {text: 'O3', correct: true},
                {text: 'H2O2', correct: false}
            ]
        },
        {
            question: "How many planets do we have in our solar system?",
            answers: [
                {text: '7', correct: false},
                {text: '8', correct: true},
                {text: '9', correct: false},
                {text: '12', correct: false}
            ]
        },
        {
            question: "What is the medical term for low blood sugar?",
            answers: [
                {text: 'Diaphoresis', correct: false},
                {text: 'Myocardial', correct: false},
                {text: 'Syncope', correct: false},
                {text: 'Hypoglycemia', correct: true}
            ]
        },
        {
            question: "Which animal has the logest tongue relative to its total size?",
            answers: [
                {text: 'Poison Dart Frog', correct: false},
                {text: 'Anther', correct: false},
                {text: 'Chameleon', correct: true},
                {text: 'Pangolin', correct: false}
            ]
        },
        {
            question: "Which of the following is the world's largest active volcano?",
            answers: [
                {text: 'Mauna Loa', correct: true},
                {text: 'Mount Helen', correct: false},
                {text: 'Mount Yasur', correct: false},
                {text: 'Mount Etna', correct: false}
            ]
        },
        {
            question: "How many elements are there in the periodic table?",
            answers: [
                {text: '98', correct: false},
                {text: '118', correct: true},
                {text: '128', correct: false},
                {text: '132', correct: false}
            ]
        },
        {
            question: "What is the largest internal organ of the human body?",
            answers: [
                {text: 'Lungs', correct: false},
                {text: 'Liver ', correct: true},
                {text: 'Kidney', correct: false},
                {text: 'Stomach', correct: false}
            ]
        },
        {
            question: "The inventor of the light bulb, Thomas Edison, was born in what year?",
            answers: [
                {text: '1820', correct: false},
                {text: '1837', correct: false},
                {text: '1847', correct: true},
                {text: '1877', correct: false}
            ]
        },
        {
            question: "Which of the following animals has the largest ears?",
            answers: [
                {text: 'African Elephant', correct: true},
                {text: 'Asian Elephant', correct: false},
                {text: 'Rhinoceros', correct: false},
                {text: 'Long-eared Jerboa', correct: false}
            ]
        }
        ];
    // variable including Easy Geography Questions
    let easyGeographyQuestionsArray = [
        {
            question: "",
            answers: [
                {text: '', correct: false},
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: false},
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: true}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: false},
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: false},
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: true},
                {text: '', correct: false}
            ]
        },
        {
            question: "",
            answers: [
                {text: '', correct: true},
                {text: '', correct: false},
                {text: '', correct: false},
                {text: '', correct: false}
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
                  } else if (nextButton.innerText === 'Next Easy Sport Question') {
                        currentQuestionIndex++;
                        setNextEasySportQuestion();
                        incrementQuestionNumber();   
                      } else if (nextButton.innerText === 'Next Medium Sport Question') {
                            currentQuestionIndex++;
                            setNextMediumSportQuestion();
                            incrementQuestionNumber();   
                          } else if (nextButton.innerText === 'Next Hard Sport Question') {
                                currentQuestionIndex++;
                                setNextHardSportQuestion();
                                incrementQuestionNumber();   
                              }
    })

    let easyMovieQuestions, mediumMovieQuestions, hardMovieQuestions,
        easySportQuestions, mediumSportQuestions, hardSportQuestions,
         currentQuestionIndex
/**
 * starts quiz game according to difficulty level and category type
 * question array is matched with easyMoviesQuestionsArray 
 * rules are displayed before next question is called
 * set next question function is also called here
 */
function startEasyMovieQuestions() {
    //display easy movie questions in order, starting at index 0
    easyMovieQuestions = easyMovieQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextEasyMovieQuestion();
}
/**
 * starts quiz game
 * question array is matched with mediumMovieQuestionsArray 
 * rules are displayed before next question is called
 * set next question function is also called here
 */
function startMediumMovieQuestions() {
    //display medium movie questions in order, starting at index 0
    mediumMovieQuestions = mediumMovieQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextMediumMovieQuestion();
}
/**
 * starts quiz game
 * question array is matched with hardMoviesQuestionsArray 
 * rules are displayed before next question is called
 * set next question function is also called here
 */
function startHardMovieQuestions() {
    //display hard movie questions in order, starting at index 1
    hardMovieQuestions = hardMovieQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextHardMovieQuestion();
}
/**
 * starts quiz game
 * question array is matched with easySportQuestionsArray 
 * rules are displayed before next question is called
 * set next question function is also called here
 */
 function startEasySportQuestions() {
    //display easy sport questions in order, starting at index 1
    easySportQuestions = easySportQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextEasySportQuestion();
}
/**
 * starts quiz game
 * question array is matched with mediumSportQuestionsArray 
 * rules are displayed before next question is called
 * set next question function is also called here
 */
 function startMediumSportQuestions() {
    //display medium sport questions in order, starting at index 1
    mediumSportQuestions = mediumSportQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextMediumSportQuestion();
}
/**
 * starts quiz game
 * question array is matched with hardSportQuestionsArray 
 * rules are displayed before next question is called
 * set next question function is also called here
 */
 function startHardSportQuestions() {
    //display hard sport questions in order, starting at index 1
    hardSportQuestions = hardSportQuestionsArray;
    currentQuestionIndex = 0;

    displayRules();

    setNextHardSportQuestion();
}
/**
 * sets next question from the easyMovieQuestionsArray
 */
function setNextEasyMovieQuestion() {

    resetState();

    showQuestion(easyMovieQuestionsArray[currentQuestionIndex])
}
/**
 * sets next question from the mediumMovieQuestionsArray
 */
function setNextMediumMovieQuestion() {

    resetState();

    showQuestion(mediumMovieQuestionsArray[currentQuestionIndex])
}
/**
 * sets next question from the hardMovieQuestionsArray
 */
function setNextHardMovieQuestion() {

    resetState();

    showQuestion(hardMovieQuestionsArray[currentQuestionIndex])
}
/**
 * sets next question from the easySportQuestionsArray
 */
 function setNextEasySportQuestion() {

    resetState();

    showQuestion(easySportQuestionsArray[currentQuestionIndex])
}
/**
 * sets next question from the mediumSportQuestionsArray
 */
 function setNextMediumSportQuestion() {

    resetState();

    showQuestion(mediumSportQuestionsArray[currentQuestionIndex])
}
/**
 * sets next question from the hardSportQuestionsArray
 */
 function setNextHardSportQuestion() {

    resetState();

    showQuestion(hardSportQuestionsArray[currentQuestionIndex])
}
/**
 * places question innerText inside question container
 * creates new button for each answer and existing game-button class to each 
 * if player clicks on an answer, call checkAnswer function to see if correct
 */
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
    if (correct) {
        incrementPlayerScore(); // increment score by 1 if the button the user clicked has the value of correct
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
 * increases by one when nextButton is clicked
 */
function incrementQuestionNumber() {
    let questionNumber = parseInt(document.getElementById('question-number').innerHTML);
    document.getElementById('question-number').innerHTML = questionNumber + 1;
}
/**
 * resets questionNumber back to one for new game
 * called when menu button in end-screen section
 * called when yes button in door-screen section
 */
function resetQuestionNumber() {
    questionNumber = parseInt(document.getElementById('question-number').innerHTML);
    document.getElementById('question-number').innerHTML = 1;
}
/**
 * increases score number by one if user answer is correct
 * called in checkAnswer function if answer is correct
 */
function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = playerScore + 1;
}
/**
 * function resets score number to 0 at the end of each game, when menu button is clicked in end-screen section
 *  also resets if user clicks yes in door-screen section
 */
function resetPlayerScore() {
    playerScore = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = 0;
}
/**
 * called when finish quiz button is pressed at the end of each game.
 * Gets inner value of final score and displays it along with player's name
 * final interactive message with the player is also presented depending on their final score. 
 */
function endPlayerMessage() {
    let finalScore = document.getElementById('final-score');
    let finalMessage = document.getElementById('end-comment');
    let player = form.elements.playername;

    finalScore.innerHTML = document.getElementById('score').innerHTML;

    if (parseInt(finalScore.innerHTML) <= 3) {
        finalMessage.innerHTML = `Don't be upset ${player.value}! You're probably just too tired or this category type may not be your strength. Take a break and come
        back for another round!`
      } else if (finalScore.innerHTML <= 5) {
            finalMessage.innerHTML = `Your score may not be one of the highest ${player.value} but you're still scraping a pass!
            Let's see if you're any better in a different category!`
          } else if (finalScore.innerHTML <= 7) {
                finalMessage.innerHTML = `Not too bad at all ${player.value}, still counts as a pass! Maybe your strength is awaiting
                in a different category`
              } else if (finalMessage.innerHTML <= 9) {
                    finalMessage.innerHTML = `Very good score ${player.value}! 8 or not 9 out of 10 still counts as a top score! Let's try a different category and get
                    ready for the next test!`
                }  else {
                        finalMessage.innerHTML = `You could not have done any better ${player.value}! Ready to try out a different category?`
                }
}
function resetPlayerMessage() {
    finalScore = parseInt(document.getElementById('final-score').innerHTML);
    document.getElementById('final-score').innerHTML = 0;
}



    
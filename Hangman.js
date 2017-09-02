var fellowshipMember = "";

var guessCount;
var hiddenLetters = [];

function startGame() {
    
    fellowshipMember = pickfellowshipMember(); // This function picks a secret word and displays it in console

    // Create an array of "hidden" letters the same length as the secret word, fill it with the '_' char
    for (var i = 0; i < fellowshipMember.length; i++) {
        hiddenLetters[i] = "_";
    }


    guessCount = 10;
    document.getElementById('guessCount').innerHTML = "Guesses remaining: " + guessCount;
    drawWord();
    document.getElementById('input').style.display = 'block';
    document.getElementById('button').style.display = 'none';
    document.getElementById('input').focus();
}

function guess() {
    // Get the users guess from the textbox
    var userGuess = document.getElementById('input').value;

    document.getElementById('input').value = "";
    console.log(userGuess);
    isGuessInfellowshipMember(userGuess);

    // Display how many guesses they have left
    document.getElementById('guessCount').innerHTML = "Guesses remaining: " + guessCount;

    // Check to see if they won.
    winChecker();
}

function pickfellowshipMember() {
    var fellowshipArray = [
        "aragorn",
        "frodo",
        "sam",
        "gimli",
        "legolas",
        "borimir",
        "pippin",
        "merry",
        "gandalf"
    ]; // Create an array of words
    var fellowshipChosen = Math.floor((Math.random() * fellowshipArray.length)); // Picks a random word from the array
    var hint = fellowshipChosen.valueOf(fellowshipArray);
    console.log(hint);
    console.log("Secret word: " + fellowshipArray[fellowshipChosen]) // // Testing Materials. 
    return fellowshipArray[fellowshipChosen]; // Returns the secret word back to you.
}

//This block of code is what adds the new letter to the empty underscore spaces. 
function isGuessInfellowshipMember(guess) {
    var letterInWord = false;
    for (var i = 0; i <= fellowshipMember.length; i++) {
        if (guess === fellowshipMember.charAt(i)) {
            hiddenLetters[i] = guess.toUpperCase();
            letterInWord = true;
            drawWord();
        }

        //This block of code looks at the 
    }
    if (letterInWord === false) {
        guessCount--;
    }
}

//This is what grabs the word from the array and places it into the randomizer.
function drawWord() {
    document.getElementById('hiddenWord').innerHTML = " ";
    for (var i = 0; i < fellowshipMember.length; i++) {
        document.getElementById('hiddenWord').innerHTML += hiddenLetters[i] + " ";
    }
}

//This block is SUPPOSED TO say whether you won or not, BUT IT DOESN'T. FIX LATER!!!! 
function winChecker() {
    if (hiddenLetters.join("") === fellowshipMember.length) {

        document.getElementById('result').innerHTML = "You win!";
    }
    if (guessCount <= 0) {

        document.getElementById('result').innerHTML = "Too many guesses. You lose!";
    }

}

//There was supposed to be a point where I was supposed to present a hint to left of the screen, but after a few days of not being 
//able to go over that hump, I quit. this is the code that was supposed to do something about that: 


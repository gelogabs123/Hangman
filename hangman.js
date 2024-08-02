var words = [
        ['h','o','r','s','e'],
        ['p','i','g'],
        ['d','o','g'],
        ['c','a','t'],
        ['p','a','r','r','o','t'],
        ['i','g','u','a','n','a']
    ];

var images = [
    "images/Hangman_1.png",
    "images/Hangman_2.png",
    "images/Hangman_3.png",
    "images/Hangman_4.png",
    "images/Hangman_5.png",
    "images/Hangman_6.png",
    "images/Hangman_7.png",
    "images/Hangman_8.png"
]

const HangmanGame = {
    // Word to be guessed
    secretWord: "",
    displayWord: "",
    imageIndex: 0,
    secretWordLength: 0,
    numLettersFilled: 0,


    /**
     * Initialises the secret word and word display for the game
     * @param {string} word - The secret word randomly picked
     */
    init: function(word) {
        this.secretWord = word;
        this.displayWord = this.convertWordToBlank(this.secretWord);
        this.imageIndex = 0;
        this.secretWordLength = this.secretWord.length;
        this.numLettersFilled = 0;
    },

    /**
     * Starts the game for the user by creating the HangmanGame object
     * and displaying the secret word on the UI
     */
    startGame: function() {
        this.init(this.generateWord());
        this.displayWordOnUI();
    },
    
    endGame: function() {
        this.disableKeyboard();
        document.getElementById("results-display").innerHTML = "You lose :( the word was " + this.secretWord;
    },

    checkForWin: function() {
        if (this.numLettersFilled === this.secretWordLength) {
            this.disableKeyboard();
            document.getElementById("results-display").innerHTML = " YOU WIN!!! :) "

        }
    },

    disableKeyboard: function() {
        let row1 = document.getElementById("keyboard-row1");
        let row2 = document.getElementById("keyboard-row2");
        let row3 = document.getElementById("keyboard-row3");
        let rows = [row1, row2, row3];

        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            let buttons = rows[rowIndex].getElementsByTagName("button");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }
    },

    /**
     * Displays the word to guess on the UI
     */
    displayWordOnUI: function() {
        document.getElementById('word-display').innerHTML = this.displayWord;

    },

    /**
     * Returns a random word from words
     * @returns {string} randWord - the secret to guess
     */
    generateWord: function() {
        let randWord = words[Math.floor(Math.random() * words.length)];
        return randWord;
    },

    /**
     * Hides the secret word as "_" so it can be displayed.
     * Done at the start.
     * @param {string} secretWord - The secret word randomly picked 
     * @returns {string} blank - the secret word but in a hidden form
     */
    convertWordToBlank: function(secretWord) {
        let blank = []
        for (let i = 0; i < secretWord.length; i++) {
            blank.push("_");
        }

        return blank
    },


    checkLetter: function(letterBtn) {
        const letter = letterBtn.getAttribute('data-letter');
        if (this.secretWord.includes(letter)) {
            // Reveals the correct letter in the display if letter is correct
            this.revealCorrectLetters(letter);
            this.displayWordOnUI();
            this.checkForWin();
        } else {
            // Hangman gets closer to losing 
            this.changeHangmanImage();
            if (this.imageIndex >= images.length - 1) {
                this.endGame();
            }

        }
        // Button is used
        this.clearLetter(letterBtn);
    },

    changeHangmanImage: function() {
        this.imageIndex += 1;
        document.getElementById("image").src = images[this.imageIndex];
    },

    /**
     * Adjusts displayWord to show the correctly guessed letters
     */
    revealCorrectLetters: function(letter) {
        let correctIndexes = [];
        // Find the index of the letter in the word
        for (let i = 0; i < this.secretWord.length; i++) {
            if (letter === this.secretWord[i]) {
                correctIndexes.push(i);
            }
        }
        //Reveal the letter
        for (let i = 0; i < correctIndexes.length; i++) {
            this.displayWord[correctIndexes[i]] = letter;
            this.numLettersFilled += 1;
        }
    },

    /**
     * Disables button of letter guessed.
     * @param {button} letterBtn - Letter that has been clicked on
     */
    clearLetter: function(letterBtn) {
        letterBtn.disabled = true;
    },

    




}





var words = [
        ['h','o','r','s','e'],
        ['p','i','g'],
        ['d','o','g'],
        ['c','a','t'],
        ['p','a','r','r','o','t'],
        ['i','g','u','a','n','a']
    ];

function generateWord() {
    let randWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word-display').innerHTML = randWord;
}

function checkLetter(letterbtn) {

}

function clearLetter(letterbtn) {
    letterbtn.disabled = true;
}
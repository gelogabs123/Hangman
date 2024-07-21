var words = ['Horse',
    'Pig',
    'Dog',
    'Cat',
    'Parrot',
    'Iguana'
    ];

function generateWord() {
    let randWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word-display').innerHTML = randWord;
}
//your JS code here. If required.
function mapLetters(word) {
    const letterMap = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        
        const symbolLetter = Symbol.for(letter);

        if (!(symbolLetter in letterMap)) {
            letterMap[symbolLetter] = [];
        }

        
        letterMap[symbolLetter].push(i);
    }

    return letterMap;
}
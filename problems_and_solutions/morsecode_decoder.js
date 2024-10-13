/**
    you have to write a simple Morse code decoder.
    
    For example:
        decodeMorse('.... . -.--   .--- ..- -.. .')
        should return "HEY JUDE"
*/
decodeMorse = function(morseCode){
    /**
     * @words an array or raw morse code split by words
     * @phrase the decoded phrase to be retured
     * @word the decoded morse code in english
     * @letters an array of decoded letters
     */ 
    let words = morseCode.split('   ') 
    let phrase = ''
    let word = ''
    let letters = []
   
    // Loops through every morse code and converts it into a word
    for (let i in words){
        letters = words[i].split(' ')
        word = letters.map(character => MORSE_CODE[character]).join('')
        
        // words are concatenate to make a phrase
        phrase += word + " "
    } 
  
    //returns a trimed phrase to remove leading and following spaces
    return phrase.trim()
  }
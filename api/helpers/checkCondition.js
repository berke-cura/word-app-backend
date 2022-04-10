/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
module.exports = async (word, existingLetters, nonExistingLetters, letterPlacements) => {
    const wordArray = word.split("")

    const vals = letterPlacements.map((item) => {
        
        if(letterPlacements.length > 0) {
            if (wordArray[(item.place - 1)] === item.letter
            && existingLetters.every(item => wordArray.includes(item)
                && !nonExistingLetters.some(item => wordArray.includes(item)))) {
            return true
          }
        }
        else if( existingLetters.every(item => wordArray.includes(item)  && !nonExistingLetters.some(item => wordArray.includes(item)))) {
                return true
              }
       
    })


    const checker = vals.every(v => v === true);
    return checker
};
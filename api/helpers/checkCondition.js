module.exports = async (word, existingLetters, nonExistingLetters, letterPlacements) => {
    const wordArray = word.split("")

    const vals = letterPlacements.map((item) => {
        if (wordArray[(item.place - 1)] === item.letter
            && existingLetters.every(item => wordArray.includes(item)
                && !nonExistingLetters.some(item => wordArray.includes(item)))) {
            return true
        }
    })


    let checker = vals.every(v => v === true);
    return checker
};
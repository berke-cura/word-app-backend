module.exports = async (word, existingLetters, nonExistingLetters, letterPlacements) => {
  const wordArray = word.split("")
  const nonExistingFlag = !wordArray.some(r=> nonExistingLetters.indexOf(r) >= 0)
  const existingFlag = existingLetters.every((v) => wordArray.indexOf(v) >= 0)
  const letterPlacementDummy = letterPlacements.filter((i) => {
    if (wordArray.indexOf(i.letter) === (i.place)) return true;
  })
  const letterPlacementFlag = letterPlacementDummy.length === letterPlacements.length;
  if(nonExistingFlag && existingFlag && letterPlacementFlag) return true
};
exports.main = (req, res, next) => {    
    const letterCount = req.body.letterCount;
    const existingLetter = req.body.existingLetter;
    const notExistingLetter = req.body.notExistingLetter;
    const letter_place = req.body.letter_place;
    console.log(letterCount);
    console.log(existingLetter);
    console.log(notExistingLetter);
    console.log(letter_place);
    res.status(200).json({message:'done'});
}

// REQUEST BODY EXAMPLE
/* {
    "letterCount" : "5",
    "existingLetter": ["a","s","d"],
    "notExistingLetter": ["1","2","3"],
    "letter_place": {"a":3, "d":5}
} */
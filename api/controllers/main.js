exports.main = (req, res, next) => {    
    const { letterCount, existingLetter, notExistingLetter, letterPlace} = req.body;
    const doc = require("../../data/en/en" + letterCount);

    doc.values.map((word) => {
        console.log(word)
    })
    
    res.status(200).json({message:'done'});
}

// REQUEST BODY EXAMPLE
/* {
    "letterCount" : "5",
    "existingLetter": ["a","s","d"],
    "notExistingLetter": ["1","2","3"],
    "letter_place": {"a":3, "d":5}
} */

    // TODOS
    // get data by letterCount
    // ("data/en/en" + layerCount) yaparak dosya okuyacak
    // dosyada ki bütün kelimeleri loop edecek
        // her iterasyonda 
            // layerPlace var mı bakacak
            // existingLetter var mı bakacak
            // nonExistingLetter var mı bakacak
                // Eğer tüm koşullar istenildiği gibiyse
                    // bu kelime response datasının tutulduğu bir array e eklenecek
    // loop un sonunda response olarak bu kelime array i dönecek
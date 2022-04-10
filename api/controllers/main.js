/* eslint-disable import/no-dynamic-require */
const checkCondition = require('../helpers/checkCondition')

exports.main = async (req, res) => {
    const { letterCount, existingLetter, notExistingLetter, letterPlace } = req.body;
    // eslint-disable-next-line global-require
    // eslint-disable-next-line import/no-dynamic-require
    // eslint-disable-next-line global-require
    const doc = require(`../../data/en/en${  letterCount}`);
    const array = []


    await Promise.all(doc.values.map(async (word) => {
        const isOkey = await checkCondition(word, existingLetter, notExistingLetter, letterPlace)
        if (isOkey) {
            array.push(word)
        }

    }));

    res.status(200).json({ message: 'done', words: array });
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
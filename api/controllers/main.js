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

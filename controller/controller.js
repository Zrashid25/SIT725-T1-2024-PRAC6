let model = require('../models/cat.js');

const insertCat = (req, res) => {
    let cat = req.body;
    model.insertCat(cat, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Cat Successfully Added' });
        }
    });
}

const getAllCat = (req, res) => {
    model.getAllCat((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Successful' });
        }
    });
}

module.exports = { insertCat, getAllCat }
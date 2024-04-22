var express = require('express');
var router = express.Router();
let controller = require('../controller/controller.js');

router.post('/api/cat', (req, res) => {
    controller.insertCat(req, res);
});

router.get('/api/cat', (req, res) => {
    controller.getAllCat(req, res);
});

module.exports = router;
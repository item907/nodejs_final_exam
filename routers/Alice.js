let express = require('express');
let router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time:', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send(
        '<h1>Alice\'s home page</h1>' +
        '<a href = "/user/Alice/about">About Alice</a><br>' +
        '<a href = "/user">上一頁</a>'
    );
});

router.get('/about', (req, res) => {
    res.send(
        '<h1>About Alice</h1>' +
        '<a href = "/user/Alice">上一頁</a>'
    );
});

module.exports = router;
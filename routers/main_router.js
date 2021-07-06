let express = require('express');
let router = express.Router();
router.use(express.static('./public'));

let Leo = require('./Leo.js');
let Alice = require('./Alice.js');
let Bob = require('./Bob.js');
let forms = require('./forms.js');


router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    };
    res.sendFile("index.html", options);
});

router.use('/Leo', Leo);
router.use('/Alice', Alice);
router.use('/Bob', Bob);
router.use('/forms',forms);

module.exports = router;
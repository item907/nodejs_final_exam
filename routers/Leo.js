let express = require('express');
let router = express.Router();
router.use(express.static('./public'));

router.use(function timeLog(req,res,next){
    console.log('Time:', Date.now());
    next();
});

router.get('/', (req,res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    };
    res.sendFile("Leo.html", options);
});

router.get('/about', (req,res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    };
    res.sendFile("About_Leo.html", options);
});

module.exports = router;
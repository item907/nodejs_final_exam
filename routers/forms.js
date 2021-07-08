let express = require('express');
const path = require("path");
let router = express.Router();

router.use(function timelog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req,res)=>{
    res.send(
        '表單列表<br>'+
        '<a href="/user/forms/ClassA">班級學生名單</a><br>' +
        '<a href="/user/forms/Health">自我健康檢查表</a><br>'
    );
});

//把public的檔案全部做顯示
router.use(express.static('./public'));

router.get('/ClassA',(req,res)=>{
    let options = {
        root: path.join(__dirname,"../public"),
        dotfiles: 'deny'
    };
    res.sendFile('ClassA.html',options);
})

router.get('/Health',(req,res)=>{
    let options = {
        // root: __dirname,  路徑問題??,需要將相關檔案搬至public資料夾底下才能正常運作
        root: path.join(__dirname,"../public"),
        dotfiles: 'deny'
    };
    res.sendFile('Health.html',options);
})

module.exports = router;
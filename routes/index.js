var express = require('express');
var router = express.Router();

/* 显示首页的路由配置 */
router.get('/', function (req, res, next) {
    //对网页模版进行访问,语法：response.render("/视图名称",[locals]传入模版变量,callback处理函数);
    //res.send({"username":"12346"});
    res.render('index', {title: 'Express'});
});

router.get("/",function (request, response) {

});

module.exports = router;

var express = require('express');

//初始化路由器Router
var router = express.Router();

const title = "AILSABE - 管理系统nodejs版本持续更新 version:1.0.0.010";

/**
 * Get Login.ejs Page
 */
router.get("/", function (request, response, next) {
    response.render('login.ejs', {title: title});
});

//对网页模版进行访问,语法：response.render("/视图名称",[locals]传入模版变量,callback处理函数);
//res.send({"username":"12346"});
//index.ejs 此处的视图名称可以写全名称,也可以不写前缀
/**
 * Get Index.ejs Page
 */
router.post("/index", function (request, response) {
    response.render('index.ejs', {title: title});
});

/**
 * Get Login.ejs Page
 */
router.get("/login", function (request, response) {
    response.render("login.ejs", {title: title});
});

/**
 * Get logout.ejs Page
 */
router.get("/logout", function (request, response) {
    response.render("logout.ejs", {title: title});
});

/**
 * Get Homepage.ejs Page
 */
router.post("/homepage", function (request, response) {
    //接收登录参数
    var parameters = {
        username: request.body.username,
        password: request.body.password
    };
    console.log(parameters);
    //自运行匿名函数
    (function (obj) {
        //模拟用户名与密码验证操作
        if (obj.password == "admin" && obj.username == "admin") {
            response.render("homepage.ejs", {title: title});
        }
        else {
            response.redirect("/"); //跳转页面(好像ASP.NET WEB2.0用的就是这个)
        }
    })(parameters);

});
/*标记此包可以被引用 */
module.exports = router;

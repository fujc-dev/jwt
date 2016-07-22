var express = require('express');

//初始化路由器Router
var router = express.Router();

/**
 * Get Index.ejs Page
 */
router.get("/", function (request, response, next) {
    //对网页模版进行访问,语法：response.render("/视图名称",[locals]传入模版变量,callback处理函数);
    //res.send({"username":"12346"});
    //index.ejs 此处的视图名称可以写全名称,也可以不写前缀
    response.render('index.ejs', {title: 'Express'});
});

/**
 * Get Login.ejs Page
 */
router.get("/login", function (request, response) {
    response.render("login.ejs", {title: "Login Page"});
});

/**
 * Get logout.ejs Page
 */
router.get("/logout", function (request, response) {
    response.render("logout.ejs", {title: "Logout Page"});
});

/**
 * Get Homepage.ejs Page
 */
router.post("/homepage", function (request, response) {
    //接收登录参数
    var paramenters = {
        username: request.body.username,
        password: request.body.password
    };
    console.log(paramenters);
    //预执行脚本
    (function () {
        //模拟用户名与密码验证操作
        if(paramenters.password == "admin" && paramenters.username == "admin"){
            response.render("homepage.ejs", {title: "Homepage Page"});
        }
        else {
            response.redirect("/"); //跳转页面(要下ASP.NET WEB2.0用的就是这个)
        }
    })(paramenters);

})

/*标记此包可以被引用 */
module.exports = router;

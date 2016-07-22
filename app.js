/*定义了一堆javascript变量并指向一些包和依赖,Node函数以及Routes*/

//引入依赖包
var express = require('express');
var path = require('path');
//好像是用于折腾请求网页的logo
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
var bodyParser = require('body-parser');

//引入相关路由
var routes = require('./routes/index');
var users = require('./routes/users');

//这一句话至关重要,它实例化了Express并赋值给app变量，接下来都需要用app变量来配置一堆Express的参数
var app = express();

// 视图引擎设置,设置引擎的位置
//__dirname 标识当前项目文件夹
app.set('views', path.join(__dirname, 'views'));
//视图引擎语言是ejs
app.set('view engine', 'ejs');


// 此处是设置网页的显示LOGO
//在__dirname下面的这个public本地文件去找这个favicon.ico图标,并把他设置为网页的LOGO
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*讲道理如果没有特殊设置的话,只要涉及到的路由配置都可以放置在里面*/
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    //好像此处需要用try来捕获
    err.status = 404;
    next(err);
});

// 全局异常处理部分

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// 将这个App.js 公布出去,别的地方可以require
module.exports = app;

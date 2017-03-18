var express = require('express')
var bodyParser = require('body-parser')

//multer 用于处理http提交的表单数据
var multer = require('multer')

var app = express();
// app.use(bodyParser());

var form = multer();

app.use(express.static('wwwroot'))

app.use(bodyParser.urlencoded({extended:false}))

app.get('/getAPI',function(req,res){
    
    console.log("获取请求参数:",req.query.name,req.query.age);

    console.log("获取请求头内容：",req.headers);

    //在响应头中添加一个字段
    res.set('student','xiaomei')
    res.set('Content-type','text/json')

    /**
     * json()
     * 向客户端发送json字符串
     * 参数：对象 函数内部会把这个对象转换为JSON字符串，然后发送给客户端
     */
    var obj = {err:0,msg:"接收到了您的get请求"}
    res.json(obj);

})

app.post('/postAPI',function(req,res){
    console.log(req.body);
    console.log(req.body.name,req.body.age);


    var obj = {err:0,msg:'接收到您的post请求'}
    res.json(obj);


})

/**
 * 添加接口 
 */
/**
 * 第二个参数 接收form表单（或模拟的表单）提交的数据
 * 作用：会把数据提取出来放入req.body当中
 */
app.post('/postAPI/formData',form.array(),function(req,res){
    console.log(req.body.name,req.body.age);
    
})



app.listen('3000',function(){
    console.log("服务器启动 端口3000")
})


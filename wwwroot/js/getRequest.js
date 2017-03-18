/**
 * 发送一个get请求
 */
/**
 * ajax 实现异步通讯，提升用户体验度
 * 在不重新加载整个页面的情况下，与服务器进行数据的交换，
 * 并更新部分网页内容
 * XMLHttpRequest xhr  ajax核心对象
 * 使用方式
 * 1.创建对象
 * 2.注册回调函数
 * 3.open()
 * 4.send()
 * 5.判定和服务器的交互是否完成（处理第2步当中的回调函数）
 */
//1.创建对象
var request = new XMLHttpRequest();
//2.注册回调函数 （当请求状态发生改变时触发的回调函数）
/**
 * readyState 表示xhr对象的状态
 * 0 表示未初始化（对象已创建，但是未调用open）
 * 1 表示open()方法成功调用，但是未调用send方法
 * 2 表示send()成功调用，但是尚未开始接受数据
 * 3 表示正在接受数据 http响应头信息已经开始接受，但未接受完成
 * 4 表示 完成 响应数据接受完成
 */
request.onreadystatechange = function (){
    console.log("请求状态发生了改变",request.readyState);
    if (request.readyState == 4){
        //响应状态码 200表示成功
        if (request.status = 200){
            //获取响应文本
            console.log(request.responseText);
            var obj = JSON.parse(request.responseText);
            console.log(obj.msg);
            var ele = document.createElement('div')
            ele.innerHTML = obj.msg;
            document.body.appendChild(ele);

            console.log(request.getAllResponseHeaders());
            console.log(request.getResponseHeader('student'));

        }
    }
};

//3.设置和服务器的交互参数
/**
 * open() 发送请求（并不是真的发送请求，而是启动一个请求以备发送）
 * 参数1：请求类型
 * 参数2：接口路径 GET请求时，把请求参数放在请求地址之后
 * 参数3：是否异步发送 默认true
 */
request.open('GET','/getAPI?name=xiaomei&age=23');

//4.设置向服务端发送的数据，启动和服务器的交互
/**
 * send() 真正的发送数据
 * GET请求时，不加参数，请求参数已经放在请求地址之后
 * send()向服务器发送请求，如果是异步，该方法会立即返回
 */
request.send();








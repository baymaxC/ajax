
var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    console.log("状态发生变化：",request.readyState);
    if (request.readyState == 4){

        console.log(request.responseText);
        var obj = JSON.parse(request.responseText)
        console.log(obj);
        console.log(obj.msg);

    }
}


//设置请求方法和路径
request.open('POST','/postAPI');
//设置请求头
request.setRequestHeader('Content-type','application/x-www-form-urlencoded');

//向客户端发送数据
request.send('name=xiaomei&age=23')

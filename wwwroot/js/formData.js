/**
 * FormData 对象
 * 用于模拟一个表单数据
 * append() 来添加键值对
 */
var data = new FormData();
data.append('name','sssssss')
data.append('age','23')

var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if (request.readyState == 4){
        console.log("请求完成");
    }

}

request.open('POST','/postAPI/formData')
request.send(data);


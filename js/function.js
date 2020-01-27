//检查文本框是否为空
function check(){
	var o = document.getElementById("inputText");
	var v = o.value;
	v = v.replace(/[ ]/g,""); 
	if(v == ''){
	return false;
	}
}

//title问候语
var d = new Date()
var time = d.getHours()
if (time < 24){ 
document.getElementById("title").innerHTML="一个导航 | Good evening";
}
if (time < 19){ 
document.getElementById("title").innerHTML="一个导航 | Good afternoon";
} 
if (time < 12){ 
document.getElementById("title").innerHTML="一个导航 | Good morning";
} 
if (time < 5){
 document.getElementById("title").innerHTML="一个导航 | Stay up late again";
}
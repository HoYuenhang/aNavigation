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

//导航、引擎选择器
function select(){
	if ($('#folder').css('display') == 'block') {
		$('#folder').css('display', 'none');
        $('#nav').css('display', 'block');
        document.getElementById("Select").innerHTML = "导航 <img src='img/search-change.svg?v=2ae7ab8'>";
    }else if ($('#nav').css('display') == 'block'){
        $('#nav').css('display', 'none');
        $('#folder').css('display', 'block');
        document.getElementById("Select").innerHTML = "标签 <img src='img/search-change.svg?v=2ae7ab8'>";
    }
}

// 切换搜索引擎
function baidu(){
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='img/baidu.png'>";
	$('#submitButton').css('background-color', '#3245df');
	$('#Select').css('color', '#3245df');
	$('span').css('background-color', '#3245df');
    $('#nav').css('display', 'none');
    $('#folder').css('display', 'block');
    document.getElementById("Select").innerHTML = "标签 <img src='img/search-change.svg?v=2ae7ab8'>";
}

function google(){
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='img/google.png'>";
	$('#submitButton').css('background-color', '#4285f4');
	$('#Select').css('color', '#4285f4');
	$('span').css('background-color', '#4285f4');
    $('#nav').css('display', 'none');
    $('#folder').css('display', 'block');
    document.getElementById("Select").innerHTML = "标签 <img src='img/search-change.svg?v=2ae7ab8'>";
}

function bing(){
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='img/bing.png'>";
	$('#submitButton').css('background-color', '#00868B');
	$('#Select').css('color', '#00868B');
	$('span').css('background-color', '#00868B');
    $('#nav').css('display', 'none');
    $('#folder').css('display', 'block');
    document.getElementById("Select").innerHTML = "标签 <img src='img/search-change.svg?v=2ae7ab8'>";
}

function yahoo(){
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='img/yahoo.png'>";
	$('#submitButton').css('background-color', '#5f01d1');
	$('#Select').css('color', '#5f01d1');
	$('span').css('background-color', '#5f01d1');
    $('#nav').css('display', 'none');
    $('#folder').css('display', 'block');
    document.getElementById("Select").innerHTML = "标签 <img src='img/search-change.svg?v=2ae7ab8'>";
}

function duckduckgo(){
	document.getElementById("state").innerHTML = "<img style='width:300px;' src='img/duckduckgo.png'>";
	$('#submitButton').css('background-color', '#de5833');
	$('#Select').css('color', '#de5833');
	$('span').css('background-color', '#de5833');
    $('#nav').css('display', 'none');
    $('#folder').css('display', 'block');
    document.getElementById("Select").innerHTML = "标签 <img src='img/search-change.svg?v=2ae7ab8'>";
}
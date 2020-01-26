function check(){//检查文本框是否为空
	var o = document.getElementById("inputText");
	var v = o.value;
	v = v.replace(/[ ]/g,""); 
	if(v == ''){
	return false;
	}
}
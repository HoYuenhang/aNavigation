$(document).ready(function(){
	$('#search-input').bind('keyup', function() {
		var jqueryInput = $(this);
		//用户输入
		var searchText = jqueryInput.val();
		//请求必应的服务器，获得相关搜索信息
		$.get('http://api.bing.com/qsonhs.aspx?q=' + searchText,function(json){
			//服务器返回的信息
			var data = json.AS.Results[0].Suggests;
			var html="";
			//将服务器返回的信息加到li标签里
			for(var i = 0; i < data.length; i++){
				html += '<li>' + data[i].txt + '</li>';
			}
			$('#search-result').html(html);
 
			$('#search-suggest').show().css({
			top: $('#search-form').offset().top+$('#search-form').height()+10,
			left: $('#search-form').offset().left,
			// $('#search-form').offset().left的结果是468.5 
			// 不知道为什么left不加4只有464.25的宽度
			position: 'absolute'
			});
		},'json');
	});
 
	$(document).bind('click',function(event) {
		// 隐藏搜索结果
		$('#search-suggest').hide();
	});
 
	$(document).delegate('li', 'click', function(event) {
		var li_text = $(this).text();//取到li里的文本
		//返回结果的链接
		location.href = 'http://cn.bing.com/search?q=' + li_text;
	});
});
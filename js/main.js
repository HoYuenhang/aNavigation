var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
  data = data.split(',');
  console.log(data);
  $('#state a img').attr('src', data[0]); //头图
  $('.submitButton').css('background-color', data[1]); //按钮bgc
  $('.submitButton').css('color', data[2]); //按钮文字color
  $('#inputText').attr('placeholder', data[3]);
  $('#form').attr('action', data[4]);
  $('#inputText').attr('name', data[5]);
  $('#Select').css('color', data[1]);
  $('.span').css('background-color', data[1]);
  $('.bdSug_wpr').css('box-shadow', data[1] + ' 0px 0px 5px');
}
if (storage.night != undefined) {
  night = night.split(',');
  console.log(night);
  $('#main').css('background-color', night[0]); //主界面
  $('#menu').css('background-color', night[1]); //侧栏
  document.getElementById("night").innerHTML = night[2];
  li.css('background-color', night[3]);
  li.css('color', night[4]);
  blockquote.css('color', night[5]);
}

// rgb to hex
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// search
$(function() {
  var search = {
    data: [{
      name: 'baidu',
      icon: 'img/baidu-xs.png',
      searchlink: 'https://www.baidu.com/s',
      searchname: 'wd',
      color: '#3245df',
      fontcolor: 'white',
      placeholder: '百度一下...'
    }, {
      name: 'google',
      icon: 'img/google-xs.png',
      searchlink: 'https://www.google.com/search',
      searchname: 'q',
      color: '#4285f4',
      fontcolor: 'white',
      placeholder: '咕噜咕噜...'
    }, {
      name: 'bing',
      icon: 'img/bing-xs.png',
      searchlink: 'https://cn.bing.com/search',
      searchname: 'q',
      color: '#00868B',
      fontcolor: 'white',
      placeholder: 'Bing搜索...'
    }, {
      name: 'yahoo',
      icon: 'img/yahoo-xs.png',
      searchlink: 'https://search.yahoo.com/search',
      searchname: 'p',
      color: '#5f01d1',
      fontcolor: 'white',
      placeholder: 'Yahoo~'
    }, {
      name: 'magi',
      icon: 'img/magi-xs.png',
      searchlink: 'https://magi.com/search',
      searchname: 'q',
      color: 'black',
      fontcolor: 'white',
      placeholder: 'Mag[i]...'
    }, {
      name: 'sougou',
      icon: 'img/sougou-xs.png',
      searchlink: 'https://www.sogou.com/web',
      searchname: 'query',
      color: '#f94c18',
      fontcolor: 'white',
      placeholder: '搜狗搜索...'
    }, {
      name: 'duckduckgo',
      icon: 'img/duckduckgo-xs.png',
      searchlink: 'https://duckduckgo.com',
      searchname: 'q',
      color: '#de5833',
      fontcolor: 'white',
      placeholder: '嘎嘎嘎...'
    }, {
      name: 'doge',
      icon: 'img/doge-xs.png',
      searchlink: 'https://www.dogedoge.com/results',
      searchname: 'q',
      color: '#ffca74',
      fontcolor: 'black',
      placeholder: '手动狗头.jpg'
    }, {
      name: 'wechat',
      icon: 'img/wechat-xs.png',
      searchlink: 'https://weixin.sogou.com/weixin',
      searchname: 'query',
      color: '#2ca43a',
      fontcolor: 'white',
      placeholder: '搜微信文章...'
    }, {
      name: 'seeres',
      icon: 'img/seeres-xs.png',
      searchlink: 'https://seeres.com/search',
      searchname: 'q',
      color: '#414baa',
      fontcolor: 'white',
      placeholder: 'private search...'
    }]
  }
  for (var i = 0; i < search.data.length; i++) {
    var addList = '<li onclick="' + search.data[i].name + '()" class="folder-item col-xs-3 col-sm-3"> <a id="' + search.data[i].name + '" href="#"> <div class="folder-item-box"> <img class="folder-item-img" src="' + search.data[i].icon + '" /> </div> </a> </li> '
    $('.nav ul').append(addList);
  }

  //自定义搜索引擎
  $('.folder-item').click(function() {
    var index = $(this).index();
    //获取用户数据
    var searchPho = $('#state a img').attr("src"); //搜索引擎头图
    var color = rgb2hex($('.submitButton').css('background-color')); //搜索按钮颜色和搜索框四边颜色
    var fontcolor = rgb2hex($('.submitButton').css('color')); //搜索按钮文字颜色
    var searchL = $('#form').attr("action"); //searchlink
    var searchN = $('#inputText').attr("name"); //searchname
    var placeholder = $('#inputText').attr('placeholder');
    // console.log(storage.data);
    storage.data = [searchPho, color, fontcolor, placeholder, searchL, searchN]
  })

  // 夜间模式
  $('#night').click(function() {
    if (rgb2hex($('#main').css('background-color')) == '#ffffff') {
      $('#main').css('background-color', '#2f2f33'); //主界面
      $('#menu').css('background-color', '#5C5C5C'); //侧栏
      document.getElementById("night").innerHTML = "日间模式";
      li.css({
        "background-color": "#575757",
        "color": "#DBDBDB"
      });
      blockquote.css('color', '#DBDBDB');
    } else if (rgb2hex($('#main').css('background-color')) == '#2f2f33') {
      $('#main').css('background-color', '#ffffff'); //主界面
      $('#menu').css('background-color', '#EDEDED'); //侧栏
      document.getElementById("night").innerHTML = "夜间模式";
      li.css({
        "background-color": "#E3E3E3",
        "color": "black"
      });
      blockquote.css('color', 'black');
    }
    var mainbg = rgb2hex($('#main').css('background-color'));
    var menubg = rgb2hex($('#menu').css('background-color'));
    var inner = document.getElementById("night").innerHTML;
    var libg = rgb2hex(li.css('background-color'));
    console.log(libg)
    var lico = rgb2hex(li.css('color'));
    var blockquoteco = rgb2hex(blockquote.css('color'));
    storage.night = [mainbg, menubg, inner, libg, lico, blockquoteco];
    // localStorage.clear()
  })

  //点击搜索引擎切换
  // $('.folder-item').click(function() {
  //   for (var i = 0; i < search.data.length; i++) {
  //     if ($('.folder-item a').attr('id') == search.data[i].name) {
  //       $('#state a img').attr('src', 'img/' + search.data[i].name + '.png');
  //       $('#submitButton').css('background-color', search.data[i].color);
  //       $('#submitButton').css('color', search.data[i].fontcolor);
  //       $('#Select').css('color', search.data[i].color);
  //       $('.span').css('background-color', search.data[i].color);
  //       $('#nav').css('display', 'none');
  //       $('#folder').css('display', 'block');
  //       document.getElementById("Select").innerHTML = "<hr>标签 <img src='img/search-change.svg?v=2ae7ab8'>";
  //       $("#inputText").attr("placeholder", search.data[i].placeholder);
  //     }
  //   }
  // })
})
/*
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年02月26日
 * 开发日志：https://kksan.top/posts/12023/
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com/
 * slideout：https://slideout.js.org/
 * bootstrap：https://getbootstrap.com/
 *
 * 版权所有，请勿删除！
*/

var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
  data = data.split(',');
  // console.log('已存在localStorage的数据：' + data); //已存在localStorage的数据
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
// rgb to hex结束

// 添加书签
$(function() {
  var bookmark = {
    data: [{
      name: '开发日志',
      link: 'http://kksan.top/posts/12023/',
      icon: 'img/log.png',
    }, {
      name: '酷安',
      link: 'https://www.coolapk.com',
      icon: 'img/coolapk.png',
    }, {
      name: 'Via插件',
      link: 'http://via-app.cn',
      icon: 'img/via.png',
    }, {
      name: '今日热榜',
      link: 'https://tophub.today/',
      icon: 'img/headline.png',
    }, {
      name: '知乎',
      link: 'https://www.zhihu.com/',
      icon: 'img/zhihulogo.png',
    }, {
      name: 'XDA',
      link: 'https://www.xda-developers.com/',
      icon: 'img/xda.png',
    }, {
      name: '小米商城',
      link: 'https://www.mi.com/',
      icon: 'img/mi.png',
    }, {
      name: 'unsplash',
      link: 'https://unsplash.com/',
      icon: 'img/unsplash.png',
    }, {
      name: '少数派',
      link: 'https://sspai.com/',
      icon: 'img/sspai.png',
    }, {
      name: '疫情跟踪',
      link: 'https://ncov.dxy.cn/ncovh5/view/pneumonia',
      icon: 'img/ding.png',
    }, {
      name: '疫情辟谣',
      link: 'https://vp.fact.qq.com/home',
      icon: 'img/true.png',
    }]
  }
  for (var i = 0; i < bookmark.data.length; i++) {
    var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="' + bookmark.data[i].link + '"><div class="folder-item-box"><img class="folder-item-img" src="' + bookmark.data[i].icon + '" /><p>' + bookmark.data[i].name + '</p></div></a></li>'
    $('#folder ul').append(addList);
  }
})
// 添加书签结束

// 搜索相关
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
    }, {
      name: 'quark',
      icon: 'img/quark-xs.png',
      searchlink: 'https://quark.sm.cn/s',
      searchname: 'q',
      color: '#6182f6',
      fontcolor: 'white',
      placeholder: '夸克搜索...'
    }, {
      name: 'bilibili',
      icon: 'img/bilibili-xs.png',
      searchlink: 'https://search.bilibili.com/all',
      searchname: 'keyword',
      color: '#e47494',
      fontcolor: 'white',
      placeholder: 'b站是一个学习网站...'
    }, {
      name: 'github',
      icon: 'img/github-xs.png',
      searchlink: 'https://github.com/search',
      searchname: 'q',
      color: '#24292e',
      fontcolor: 'white',
      placeholder: '全球最大的开源社区...'
    }, {
      name: 'toutiao',
      icon: 'img/toutiao-xs.png',
      searchlink: 'https://m.toutiao.com/search',
      searchname: 'keyword',
      color: '#ed2f28',
      fontcolor: 'white',
      placeholder: '搜今日头条...'
    }, {
      name: 'weibo',
      icon: 'img/weibo-xs.png',
      searchlink: 'https://s.weibo.com/weibo',
      searchname: 'q',
      color: '#e6162d',
      fontcolor: 'white',
      placeholder: '搜微博...'
    }, {
      name: 'zhihu',
      icon: 'img/zhihu-xs.png',
      searchlink: 'https://www.zhihu.com/search',
      searchname: 'q',
      color: '#1087eb',
      fontcolor: 'white',
      placeholder: '我们都是有问题的人...'
    }]
  }
  for (var i = 0; i < search.data.length; i++) { //添加搜索按钮
    var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="#"> <div class="folder-item-box"> <img id="' + search.data[i].name + '" class="folder-item-img" src="' + search.data[i].icon + '" /> </div> </a> </li> '
    $('.nav ul').append(addList);
  }

  // 切换搜索引擎
  $(document).click(function(e) {
    var id = e.target.id;
    for (var i = 0; i < search.data.length; i++) {
      if (id == search.data[i].name) {
        document.getElementById("state").innerHTML = "<a href='folder://'><img style='width:300px;' src='img/" + search.data[i].name + ".png'></a>";
        $('#submitButton').css('background-color', search.data[i].color); //按钮bg
        $('#submitButton').css('color', search.data[i].fontcolor); //按钮
        $('#Select').css('color', search.data[i].color); //选择器
        $('.span').css('background-color', search.data[i].color); //输入框四边
        $('#nav').css('display', 'none');
        $('#folder').css('display', 'block');
        document.getElementById("Select").innerHTML = "<hr>书签 <img src='img/search-change.svg?v=2ae7ab8'>";
        $("#inputText").attr("placeholder", search.data[i].placeholder);
        $("#form").attr("action", search.data[i].searchlink);
        $("#inputText").attr("name", search.data[i].searchname);
        $(".bdSug_wpr").css('box-shadow', search.data[i].color + ' 0px 0px 5px'); //提示框

        //存入用户数据
        var searchPho = $('#state a img').attr("src"); //搜索引擎头图
        var color = rgb2hex($('.submitButton').css('background-color')); //搜索按钮颜色和搜索框四边颜色
        var fontcolor = rgb2hex($('.submitButton').css('color')); //搜索按钮文字颜色
        var searchL = $('#form').attr("action"); //searchlink
        var searchN = $('#inputText').attr("name"); //searchname
        var placeholder = $('#inputText').attr('placeholder');
        storage.data = [searchPho, color, fontcolor, placeholder, searchL, searchN] //记录用户数据
        // console.log('新存入localStorage的数据：' + storage.data); //新存入localStorage的数据
        break;
      }
    }
  })
  // 搜索相关结束

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
    var lico = rgb2hex(li.css('color'));
    var blockquoteco = rgb2hex(blockquote.css('color'));
    // storage.night = [mainbg, menubg, inner, libg, lico, blockquoteco];
    // localStorage.clear()
  })
  // 夜间模式结束
})

//检查搜索框是否为空
function check() {
  var o = document.getElementById("inputText");
  var v = o.value;
  v = v.replace(/[ ]/g, "");
  if (v == '') {
    return false;
  }
}
//检查搜索框是否为空结束

//title问候语
var d = new Date();
var time = d.getHours();
if (time < 24) {
  document.getElementById("title").innerHTML = "一个导航 | Good evening";
}
if (time < 18) {
  document.getElementById("title").innerHTML = "一个导航 | Good afternoon";
}
if (time < 12) {
  document.getElementById("title").innerHTML = "一个导航 | Good morning";
}
if (time < 5) {
  document.getElementById("title").innerHTML = "一个导航 | Stay up late again";
}
//title问候语结束

//导航、引擎选择器
function select() {
  if ($('#folder').css('display') == 'block') {
    $('#folder').css('display', 'none');
    $('#nav').css('display', 'block');
    document.getElementById("Select").innerHTML = "<hr>搜索引擎 <img src='img/search-change.svg?v=2ae7ab8'>";
  } else if ($('#nav').css('display') == 'block') {
    $('#nav').css('display', 'none');
    $('#folder').css('display', 'block');
    document.getElementById("Select").innerHTML = "<hr>书签 <img src='img/search-change.svg?v=2ae7ab8'>";
  }
}
//导航、引擎选择器结束

// 加载动画相关
// function toggle(elemt, speed) {
//   speed = speed || 16.6; //默认速度为16.6ms
//   elemt.style.display = "block"
//   if (elemt.style.opacity == 1 || elemt.style.opacity != null) {
//     let num = 20;
//     let timer = setInterval(function() {
//       num--;
//       elemt.style.opacity = num / 20;
//       if (num <= 0) {
//         clearInterval(timer);
//         elemt.style.display = "none"
//       }
//     }, speed);
//   }
// }

// document.onreadystatechange = function() {
//   if (document.readyState == "complete") {
//     toggle(loading, 40);
//   }
// }
// 加载动画相关结束

/*
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年02月26日
 * 开发日志：https://kksan.top/posts/12023/
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com/
 * slideout：https://slideout.js.org/
 * bootstrap：https://getbootstrap.com/
 *
 * 版权所有，请勿删除！
*/
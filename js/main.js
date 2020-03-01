/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年03月01日
 * 开发日志：https://kksan.top/posts/12023
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */

var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var bg = storage.bg;
var closealert = storage.closealert;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
  data = data.split(',');
  // console.log('已存在localStorage的数据：' + data); //已存在localStorage的数据
  $('#state a img').attr('src', data[0]); //头图
  $('.submitButton').css('background-color', data[1]); //按钮bgc
  $('#inputText').attr('placeholder', data[2]);
  $('#form').attr('action', data[3]);
  $('#inputText').attr('name', data[4]);
  $('#Select').css('color', data[1]);
  $('.span').css('background-color', data[1]);
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

if (storage.bg != undefined) {
  bg = bg.split(',');
  $('#main').css('background-image', bg[0]);
}

if (storage.closealert != undefined) {
  closealert = closealert.split(',');
  if (closealert[0] == '4.0.8') {
    $('#alert').remove();
  }
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
      placeholder: '百度一下...'
    }, {
      name: 'google',
      icon: 'img/google-xs.png',
      searchlink: 'https://www.google.com/search',
      searchname: 'q',
      color: '#4285f4',
      placeholder: '咕噜咕噜...'
    }, {
      name: 'bing',
      icon: 'img/bing-xs.png',
      searchlink: 'https://cn.bing.com/search',
      searchname: 'q',
      color: '#00868B',
      placeholder: 'Bing搜索...'
    }, {
      name: 'yahoo',
      icon: 'img/yahoo-xs.png',
      searchlink: 'https://search.yahoo.com/search',
      searchname: 'p',
      color: '#5f01d1',
      placeholder: 'Yahoo~'
    }, {
      name: 'magi',
      icon: 'img/magi-xs.png',
      searchlink: 'https://magi.com/search',
      searchname: 'q',
      color: 'black',
      placeholder: 'Mag[i]...'
    }, {
      name: 'sougou',
      icon: 'img/sougou-xs.png',
      searchlink: 'https://www.sogou.com/web',
      searchname: 'query',
      color: '#f94c18',
      placeholder: '搜狗搜索...'
    }, {
      name: 'duckduckgo',
      icon: 'img/duckduckgo-xs.png',
      searchlink: 'https://duckduckgo.com',
      searchname: 'q',
      color: '#de5833',
      placeholder: '嘎嘎嘎...'
    }, {
      name: 'doge',
      icon: 'img/doge-xs.png',
      searchlink: 'https://www.dogedoge.com/results',
      searchname: 'q',
      color: '#ffca74',
      placeholder: '手动狗头.jpg'
    }, {
      name: 'wechat',
      icon: 'img/wechat-xs.png',
      searchlink: 'https://weixin.sogou.com/weixin',
      searchname: 'query',
      color: '#2ca43a',
      placeholder: '搜微信文章...'
    }, {
      name: 'seeres',
      icon: 'img/seeres-xs.png',
      searchlink: 'https://seeres.com/search',
      searchname: 'q',
      color: '#414baa',
      placeholder: 'private search...'
    }, {
      name: 'quark',
      icon: 'img/quark-xs.png',
      searchlink: 'https://quark.sm.cn/s',
      searchname: 'q',
      color: '#6182f6',
      placeholder: '夸克搜索...'
    }, {
      name: 'bilibili',
      icon: 'img/bilibili-xs.png',
      searchlink: 'https://search.bilibili.com/all',
      searchname: 'keyword',
      color: '#e47494',
      placeholder: 'b站是一个学习网站...'
    }, {
      name: 'github',
      icon: 'img/github-xs.png',
      searchlink: 'https://github.com/search',
      searchname: 'q',
      color: '#24292e',
      placeholder: '全球最大的开源社区...'
    }, {
      name: 'toutiao',
      icon: 'img/toutiao-xs.png',
      searchlink: 'https://m.toutiao.com/search',
      searchname: 'keyword',
      color: '#ed2f28',
      placeholder: '搜今日头条...'
    }, {
      name: 'weibo',
      icon: 'img/weibo-xs.png',
      searchlink: 'https://s.weibo.com/weibo',
      searchname: 'q',
      color: '#e6162d',
      placeholder: '搜微博...'
    }, {
      name: 'zhihu',
      icon: 'img/zhihu-xs.png',
      searchlink: 'https://www.zhihu.com/search',
      searchname: 'q',
      color: '#1087eb',
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
        $('#Select').css('color', search.data[i].color); //选择器
        $('#nav').css('display', 'none');
        $('#folder').css('display', 'block');
        document.getElementById("Select").innerHTML = "<hr>书签 <img src='img/search-change.svg?v=2ae7ab8'>";
        $("#inputText").attr("placeholder", search.data[i].placeholder);
        $("#form").attr("action", search.data[i].searchlink);
        $("#inputText").attr("name", search.data[i].searchname);

        //存入用户数据
        var searchPho = $('#state a img').attr("src"); //搜索引擎头图
        var color = rgb2hex($('.submitButton').css('background-color')); //搜索按钮颜色和搜索框四边颜色
        var searchL = $('#form').attr("action"); //searchlink
        var searchN = $('#inputText').attr("name"); //searchname
        var placeholder = $('#inputText').attr('placeholder');
        storage.data = [searchPho, color, placeholder, searchL, searchN] //记录用户数据
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

  // 更新提示框
  $('#closealert').click(function() {
    var version = '4.0.8';
    localStorage.closealert = [version];
  })
  // 更新提示框结束

})

// 显示/干掉壁纸
var width = $(document).width();
$('#bg').click(function() {
  if (width < 768) {
    $('#main').css('background-image') == 'none' ? ($('#main').css('background-image', 'url(img/bg-xs.jpg)')) : ($('#main').css('background-image', 'none'));
  }
  if (width >= 768) {
    $('#main').css('background-image') == 'none' ? ($('#main').css('background-image', 'url(img/bg.jpg)')) : ($('#main').css('background-image', 'none'));
  }
  var background = $('#main').css('background-image');
  storage.bg = [background];
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

// 搜索提示词
class jsonpDemo {
  constructor() {
    this.search = inputText;
    this.list = list;
    this.body = document.body;
    this.init();
  };
  init() {
    this.watchInput();
  };
  watchInput() {
    this.search.onkeyup = () => {
      if (this.search.value.length == 0) {
        this.list.innerHTML = '';
        return;
      }
      const script = document.createElement('script');
      script.src = "https://www.baidu.com/su?wd=" + this.search.value + "&cb=jsonp.showMsg";
      this.body.appendChild(script);
      this.body.removeChild(script);
    }
  };
  showMsg(msg) {
    var href = $('#form').attr('action');
    var name = $('#inputText').attr('name');
    var str = '';
    for (var i = 0; i < msg.s.length; i++) {
      str += '<a href=' + href + '?' + name + '=' + msg.s[i] + '><li><span>' + (i + 1) + '</span>' + msg.s[i] + '</li></a>';
    }
    this.list.innerHTML = str;
    if (str) { //有返回才显示#searchlist
      $('#searchlist').css("display", "block");
    }
    $(document).click(function() { //点击其他地方隐藏#searchlist
      $('#searchlist').css("display", "none");
    });
  }
}
const jsonp = new jsonpDemo();

//导航、引擎选择器结束

/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年03月01日
 * 开发日志：https://kksan.top/posts/12023
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */
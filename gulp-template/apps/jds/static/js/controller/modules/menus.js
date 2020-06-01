define(function(require, exports, module) {
  var jquery=require('jquery');
  var swiper=require('Swiper');
  var yer = require("yer");
  var comTpls=require('services/comTpls/menuItems.html');

  var baseData = {
    navList: []
  };

  // nav click function
  var handleNavClickFn = function() {
    var el = $('#navMe').find('.nav-info');
    el.off('click');
    el.on('click', navFn);
  };

  // 右边 上部 菜单关闭 删除
  var handleCreateNav = function(name,url) {
    var el = $('#navTop');
    if (baseData.navList.indexOf(name) === -1) {
      baseData.navList.push(name);
      if (name === '首页')
        el.append('<div class="swiper-slide r-nav-child dper-por dper-full-h">' +
        '<div class="malign-center inside-box dper-full-h">' +
        '   <span class="malign-center-text font-20 text-overflow-e">' + name +
        '</span><i class="close malign-center-right" data-name="' + name + '" data-url="' + url + '"></i></div>' + '</div>');
      else
        el.append('<div class="swiper-slide r-nav-child dper-por dper-full-h select-nav">' +
        '<div class="malign-center inside-box dper-full-h">' +
        '   <span class="malign-center-text font-20 text-overflow-e">' + name +
        '</span><i class="close malign-center-right" data-name="' + name + '" data-url="' + url + '">✗</i></div>' + '</div>');
      new Swiper('#Swiper', {
        freeMode: true,
        direction: 'horizontal',
        slidesPerView: 10,
        mousewheel: true
      });
    }
    $.each(el.find('.close'), function(idx, itm) {
      if ($(itm).data('name') === name) {
        $(itm).parent().parent().addClass('active').siblings().removeClass('active');
      }
    });
    handleContShowFn(name,url);
    el.find('.r-nav-child').off('click');
    el.find('.r-nav-child').on('click', handleNavTopClick);
    el.find('.r-nav-child:not(:first)').off('mousedown');
    el.find('.r-nav-child:not(:first)').on('mousedown', youji);
    el.find('.close').off('click');
    el.find('.close').on('click', handleCloseClick);
  };


  // nav click function
  var event = function() {
    handleNavClickFn();
    handleCreateNav('首页','/apps/jds/views/dashboard.html');
  };

  var handleInitFn = function() {
    event();
    //阻止浏览器默认右键点击事件
    document.oncontextmenu = function() {
      return false;
    };
  };


  // 左边菜单添加
  var navFn = function() {
    var name = $(this).data('name');
    var url = $(this).data('url');
    $(this).parent().parent().parent().find('.nav-info').removeClass('active');
    $(this).addClass('active');
    handleCreateNav(name,url);
  };

  // 右边 上部 菜单切换
  var handleNavTopClick = function() {
    $(this).addClass('active').siblings().removeClass('active');
    handleContShowFn($(this).find('.close').data('name'),$(this).find('.close').data('url'));
  };





  // 右边 上部 菜单关闭 删除
  var handleCloseClick = function() {
    var index = $(this).parent().parent().index(),
      $el = $(this).parent().parent();
    if (baseData.navList.indexOf($(this).data('name')) !== -1) {
      baseData.navList.splice(baseData.navList.indexOf($(this).data('name')), 1);
    }
    if ($el.hasClass('active') && index === 1) {
      $el.siblings().eq(0).addClass('active');
      // 右边下部 内容切换
      handleContShowFn($el.siblings().eq(0).find('.close').data('name'),$el.siblings().eq(0).find('.close').data('url'));
    } else if ($el.hasClass('active') && index === baseData.navList.length) {
      $el.siblings().eq(baseData.navList.length - 1).addClass('active');
      // 右边下部 内容切换
      handleContShowFn($el.siblings().eq(baseData.navList.length - 1).find('.close').data('name'),$el.siblings().eq(index - 1).find('.close').data('url'));
    } else if ($el.hasClass('active') && index !== baseData.navList.length && index !== 1) {
      $el.siblings().eq(index - 1).addClass('active');
      handleContShowFn($el.siblings().eq(index - 1).find('.close').data('name'),$el.siblings().eq(index - 1).find('.close').data('url'));
    }
    $el.remove();
  };

  //右击事件
  var youji = function(e) {
    e = e || event;
    // 鼠标点击位置坐标
    var index = $(this).index(),
      mouseX = e.pageX,
      mouseY = e.pageY,
      menuLeft = mouseX + 'px',
      menuTop = mouseY + 'px';
    // 菜单出现
    $('.right-youji').css({
      'left': menuLeft,
      'top': menuTop
    }).show();
    // 点击页面任意地方之后，右键菜单隐藏
    $(document).off('click');
    $(document).on('click', function() {
      $('.right-youji').hide();
    });

    //刷新
    $('#li1').off('click');
    $('#li1').on('click', (function() {
      handleContShowFn($(this).find('.close').data('name'));
    }).bind(this));
    //关闭当前
    $('#li2').off('click');
    $('#li2').on('click', (function() {
      var $el = $(this);
      if (baseData.navList.indexOf($(this).find('.close').data('name')) !== -1) {
        baseData.navList.splice(baseData.navList.indexOf($(this).find('.close').data('name')), 1);
      }
      if ($el.hasClass('active') && index === 1) {
        $el.siblings().eq(0).addClass('active');
        // 右边下部 内容切换
        handleContShowFn($el.siblings().eq(0).find('.close').data('name'));
      } else if ($el.hasClass('active') && index === baseData.navList.length) {
        $el.siblings().eq(baseData.navList.length - 1).addClass('active');
        // 右边下部 内容切换
        handleContShowFn($el.siblings().eq(baseData.navList.length - 1).find('.close').data('name'));
      } else if ($el.hasClass('active') && index !== baseData.navList.length && index !== 1) {
        $el.siblings().eq(index - 1).addClass('active');
        handleContShowFn($el.siblings().eq(index - 1).find('.close').data('name'));
      }
      $(this).remove();
    }).bind(this));
    //关闭其它
    $('#li3').off('click');
    $('#li3').on('click', (function() {
      // nav arr 清空 然后 添加有active 元素
      baseData.navList = [];
      $.each($(this).parent().children(), function(idx, itm) {
        if ($(itm).hasClass('active')) {
          $(itm).siblings('.select-nav').remove();
          baseData.navList.push($(itm).find('.close').data('name'));
        }
      })
    }).bind(this));
    //关闭全部
    $('#li4').off('click');
    $('#li4').on('click', (function() {
      baseData.navList = ['首页'];
      if (!$(this).parent().children().eq(0).hasClass('active')) {
        $(this).parent().children().eq(0).addClass('active').siblings().removeClass('active');
        handleContShowFn(baseData.navList[0]);
      }
      $('.r-nav-child:not(:first)').remove();
    }).bind(this));
    e.stopPropagation();
  };

  // 右边下部 内容切换
  var handleContShowFn = function(name,url) {
    var el = $('#contCut'),
        otherChild = '',
        first = '';
        el.empty();
    if (name === '首页') {
      first = '<iframe class="malign-tl dper-full-w dper-full-h" style="border: none; background-color: #fff;" src="'+url+'">' + name + '</iframe>';
      el.append(first);
    } else {
      otherChild = '<iframe class="malign-tl dper-full-w dper-full-h" style="border: none; background-color: #fff;" src="'+url+'">' + name + '</iframe>';
      el.append(otherChild);
    }
  };

  var initData=function(){
    $.get('/mock/jds/menus/list',function(data){
          var html = comTpls('comTpls/menuItems',data);
          $('#navMe-list').html(html);
          $('.left_nav li .t').click(function() {
            $(this).toggleClass('hover');
            $(this).next('.txt').slideToggle();
          });

          //导航点击事件
          $('.right-top .right-top-left .right-t2').on('click', function() {
            $('.right-t1').slideToggle();
            $(this).parent('.right-top-left').next('.right-top-right').slideToggle();
          });
          handleInitFn();
    });
  }

  exports.init = function() {
    initData();
  };

  module.exports = exports;
});

define(function (require) {
  require('jquery');
  require('easyui');
  require('layui');
  require('layerui');
  require('layer.config');
  var common = require('common');
  var tools = require('awd/jquery/tools');
  var utils = require('awd/layui/utils');
  var url = require('modules/url');
  var userinfo = require('modules/userinfo');
  var app = require('modules/app');
  var ywzd = require('modules/ywzd');
  var xwyw = require('modules/xwyw');
  var whgg = require('modules/whgg');
  var tzgg = require('modules/tzgg');
  var main = {
    init: function () {
      userinfo.init(common.info);
      app.init(common.info);
      ywzd.list(common.info.user.usertype);
      xwyw.list(common.info.user.usertype);
      whgg.list(common.info.user.usertype);
      tzgg.list(common.info.user.usertype);
      main.eventBind();
    },
    eventBind: function () {
      /**事件绑定**/

      // tab切换
      $('.tab-title').on('click', '.title-item', function () {
        var $this = $(this);
        $(this).addClass('active').siblings('.tab-title .title-item').removeClass('active');
        $(this).parent().next().children('.content-item').eq($this.index()).addClass('active').siblings('.content-item').removeClass('active');
      });

      // 点击事件
      $('.awdDesktop').on('click', function () {
        var $this = $(this);
        var alt = $this.attr('alt');
        if (tools.isUrl(alt)) {
          window.open(alt);
        } else {
          if (alt == 'AWD-MIS-SETTING') {
            // 系统设置
            main.setting();
            return false;
          }
          if (alt == 'AWD-MIS-TZGG') {
            // 系统设置
            main.tzgg();
            return false;
          }
          if (alt == 'AWD-MIS-XWYW') {
            // 系统设置
            main.xwyw();
            return false;
          }
          if (alt == 'AWD-MIS-WHGG') {
            // 系统设置
            main.whgg();
            return false;
          }
          if (alt == 'AWD-MIS-YWZD') {
            // 系统设置
            main.ywzd();
            return false;
          }
          var e = url.getWebURL + '?serverName=' + alt;
          $.ajax({
            url: e,
            method: 'post',
            dataType: 'json',
            success: function (e) {
              if (e == null || e.url == undefined) {
                utils.alert('无访问权限或应用未上架！');
                return false;
              } else {
                var url = e.url;
                window.open(url);
              }
            }
          });
        }

      });
      // 公告详情
      // 
      $(".b-item").each(function () {
        $(this).click(function () {
          window.open('/apps/platform/views/xq.html')
        });
      });
      // 搜索页面
      $('.searchBtn').click(function () {
        window.open('/apps/platform/views/ss.html')
        // window.location.href = "/apps/platform/views/ss.html"
      })
      // $('#search-keyword').bind('input propertychange', function () {
      //   window.location.href = "/apps/platform/views/ss.html"
      // })
      /**事件绑定**/
    },
    setting: function () {
      var xtszPop = layer.open({
        title: '系统设置',
        type: 2,
        area: ['80%', '100%'],
        content: ['/apps/platform/views/pages/xtsz.html', 'no'],
        maxmin: true,
        scrollbar: false,
        btn: [],
        success: function () {
        }
      });
    },
    tzgg: function () {
      var xtszPop = layer.open({
        title: '通知公告',
        type: 2,
        area: ['80%', '100%'],
        content: ['/apps/platform/views/pages/tzgg.html', 'no'],
        maxmin: true,
        scrollbar: false,
        btn: [],
        success: function () {
        }
      });
    },
    xwyw: function () {
      var xtszPop = layer.open({
        title: '新闻要闻',
        type: 2,
        area: ['80%', '100%'],
        content: ['/apps/platform/views/pages/xwyw.html', 'no'],
        maxmin: true,
        scrollbar: false,
        btn: [],
        success: function () {
        }
      });
    },
    whgg: function () {
      var xtszPop = layer.open({
        title: '维护公告',
        type: 2,
        area: ['80%', '100%'],
        content: ['/apps/platform/views/pages/whgg.html', 'no'],
        maxmin: true,
        scrollbar: false,
        btn: [],
        success: function () {
        }
      });
    },
    ywzd: function () {
      var xtszPop = layer.open({
        title: '业务指导',
        type: 2,
        area: ['80%', '100%'],
        content: ['/apps/platform/views/pages/ywzd.html', 'no'],
        maxmin: true,
        scrollbar: false,
        btn: [],
        success: function () {
        }
      });
    }


  }
  $(main.init);

})
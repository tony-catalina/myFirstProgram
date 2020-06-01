/**
 * 主页面 页面入口
 */
define(function(require){
  //公共控件、组件、工具导入
  require('jquery');
  require('easyui');
  var tools=require('awd/jquery/tools');
  var util= require('awd/easyui/util');
  var menu=require('modules/menus');
  var common=require('common')

  //界面控件
  var main={
    init:function(){
      /**界面初始化**/
      main.layout();
      main.eventBind();
      /**界面初始化**/
    },
    layout:function(){
      /**布局初始化 开发人：沙国宏 日期：2010-2-27**/
      var role=common.getFirstRole();
      menu.init(role);
      var welcomeinfo=common.info.user.jsbhString+' | '+common.info.user.loginname+'欢迎您';
      $('#welcomeinfo').html(welcomeinfo);
      /**布局初始化**/
    },
    eventBind:function(){
      /**事件绑定1**/
      window.openTab=menu.openTab;
      window.loadMenu=menu.init;
      /**事件绑定**/
    }
  };

  /**
   *运行入口
   */
  $(main.init);

});


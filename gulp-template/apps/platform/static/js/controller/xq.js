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
    var main = {
          init: function () {
              var _mode=tools.getUrlParam('mode');
              var _id=tools.getUrlParam('id');
              if(_mode=='tzgg'){
                  $.ajax({
                      url: url.tzggQuery,
                      data:{id:_id},
                      type: 'post',
                      dataType: 'json',
                      success: function (result) {
                          main.eventBind(result);
                      }
                  });
              }
              if(_mode=='whgg'){
                  $.ajax({
                      url: url.whggQuery,
                      data:{id:_id},
                      type: 'post',
                      dataType: 'json',
                      success: function (result) {
                          main.eventBind(result);
                      }
                  });
              }
              if(_mode=='xwyw'){
                  $.ajax({
                      url: url.xwywQuery,
                      data:{id:_id},
                      type: 'post',
                      dataType: 'json',
                      success: function (result) {
                          main.eventBind(result);
                      }
                  });
              }
              if(_mode=='ywzd'){
                  $.ajax({
                      url: url.ywzdQuery,
                      data:{id:_id},
                      type: 'post',
                      dataType: 'json',
                      success: function (result) {
                          main.eventBind(result);
                      }
                  });
              }
              main.eventBind();
          },
          eventBind: function (data) {
            /**事件绑定**/
            $('#title').html(data.data[0].title);
            $('#sj').html(' 发布时间：'+data.data[0].createtime+' 发布人：'+data.data[0].creator);
            $('#nrlist').html(data.data[0].content);
            /**事件绑定**/
          }
    }
    $(main.init);
  
  });
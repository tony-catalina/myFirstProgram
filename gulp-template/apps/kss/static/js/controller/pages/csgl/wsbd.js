/**
 * 业务台账 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var glws = require('modules/glws');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            linkbar.init({
                links: [
                ]
            });

            searchform.initWsbd('search', {
                query: function(param) {
                    param = $.extend({state:'R7'}, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,250,{state:'R7'},function(rybh) {
            });

            glws.init('glws', {
                files:[
                    {name:"出所登记表",label:"kss_csdjb"},
                    {name:"出狱通知书",label:"kss_cytzs"},
                    {name:"释放证明书",label:"kss_sfzms"},
                    {name:"刑满释放通知书",label:"kss_xmsftzs"},
                    {name:"刑满释放证明书",label:"kss_xmsfzms"}
                ]
            });

        },
        eventBind: function() {
            //事件绑定

        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
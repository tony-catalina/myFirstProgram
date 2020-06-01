/**
 模块名称: 校验凭证
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('modules/commFun');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
	var zcrsJypzForm = require('modules/form/_zcrsJypz')
    var jbxxgrid=require('modules/jbxxgrid');
	var common=require('common');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'bldj', name: '办理登记', icon: 'icon-taizhang', fun: function () { 
                        var data;
                        data = grid.getSelected('table')[0];
                        if (data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = {yzmj: common.info.user.loginname, yzrq:currentTime};
                            zcrsJypzForm.init(url.xyrSaveByJypz,addData, data, function () {
                                grid.reload('table');
                            });
                            
                        } else {
                            zcrsJypzForm.init(url.xyrSaveByJypz,{}, function () {
                                grid.reload('table');
                            });
                        }
                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.initLc('search', {
                
               
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'processDefinitionKey': '',
                        'taskDefinitionKey': '',
                        'czzt': '03,07'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.xyrList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                    hidden: ['rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq', 'gyts']
                })
            });
			param = {
			    'state': 'R2',
			    'processDefinitionKey': '',
			    'taskDefinitionKey': '',
			    'czzt': '03,07'
			 }
            // jbxxgrid.initXyrflow('table',false,200, param,function(rybh) {
            //  });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq', 'gyts']);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
           
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

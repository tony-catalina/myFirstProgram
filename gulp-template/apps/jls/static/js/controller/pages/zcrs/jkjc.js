/**
 模块名称: 健康检查
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    //var add = require('services/form/_zcrsJkjc.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var zcrsJkjcForm = require('modules/form/_zcrsJkjc')
    var jbxxgrid = require('modules/jbxxgrid');
    var common = require('common');
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
                    {
                        id: 'bldj', name: '办理登记', icon: 'icon-taizhang', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData = {
                                    jcrq: currentTime, tbr: common.info.user.loginname, qmrq: currentTime, tbzk: '正常', jwbs: '无', yhcrb: '无',
                                    jtbs: '无或不清楚', sss: '无', ysyj: '符合入所要求', wss: '无', zszz: '无', sbq: '无'
                                };
                                zcrsJkjcForm.init(url.saveByZcrs, addData, data, function () {
                                    grid.reload('table');
                                });

                            } else {
                                layer.alert('请选择要办理的记录!');
                            }
                        }
                    }
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
                        'processDefinitionKey': 'jls_zcrs',
                        'taskDefinitionKey': 'jls_zcrs_jkjc'
                    }, param);
                    grid.query('table', param);
                }
            });
            // jbxxgrid.initJbxxflow('table',false,200, {},function(rybh) {  
            //  });
            grid.init('table', {
                url: url.getProcessTaskList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                    hidden: ['rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq']
                })
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq']);
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

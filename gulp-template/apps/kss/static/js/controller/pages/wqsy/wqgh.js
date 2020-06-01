/**
 * 武器使用 武器归还
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/wqsyProcess');
    var url = require('modules/url');
    var wqghForm = require('modules/form/wqgh');
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
                    {
                        id: 'add', name: '武器归还', icon: 'icon-jiahao', fun: function () {
                           var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var user=common.info.user.loginname;
                                var addData = { ghsj: currentTime,  updator: user, updatetime: currentTime };
                               
                                var dataall=  Object.assign({}, addData,data);
                                wqghForm.init(url.addWqgh, dataall, function () {
                                  var  param = {
                                        'taskDefinitionKey': 'kss_wqsy_wqgh',
                                        'processDefinitionKey': 'kss_wqsy'
                                    };
                                    grid.query('table', param);
                                });
                            } else {
                                layer.alert('请选择记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name:'start',
                        title: '使用开始日期',
                        type: 'datebox'
                    }, {
                        name:'end',
                        title: '至',
                        type: 'datebox'
                    },{
                        name : 'xm', title: '申请人', type: 'textbox' 
                    }
                ]},
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_wqsy_wqgh',
                        'processDefinitionKey': 'kss_wqsy'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wqsyProcess,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'wqzl', 'syly', 'syts', 'sykssj', 'cpr'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/wqsy', ['xm', 'wqzl', 'syly', 'syts', 'sykssj', 'cpr'], []);
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

/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_gwglZyryqr.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/spdetailorder');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var gwglZyryqrForm = require('modules/form/gwglzyryqr');
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
                        id: 'add', name: '领取', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { spyj: '同意', blr: common.info.user.loginname, blsj: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                gwglZyryqrForm.init(url.spLq, addData, function () {

                                });
                            } else {
                                utils.alert('请选择要确认领取的物品!');
                            }
                        }
                    },
                    { id: 'print', name: '打印', icon: 'icon-iconSVG-'}
                ]
            });
            linkbar.init({
                links: [
                    ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url:url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': 'kss_gwgl',
                        'taskDefinitionKey': 'kss_gwgl_zyryqr',
                    }, param)
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.getProcessForGwgl,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                singleSelect:false,
                columns: clumn({
                    check: true,
                    clumns: ['ddbh', 'spmc', 'sptm', 'spsl', 'xfje'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/spdetailorder', ['ddbh', 'spmc', 'sptm', 'spsl', 'xfje'], []);
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
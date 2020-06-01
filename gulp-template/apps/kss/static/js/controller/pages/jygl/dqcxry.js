/**
模块名称： 就医管理-当前查询人员
开始时间： 2020-3-12
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jy');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    //单栏
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

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table');} },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {  } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'zdrqStart',
                        title: '诊断日期',
                        type: 'datebox'
                    }, {
                        name: 'zdrqEnd',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'swjy': '1'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.jyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rybh', 'jbxxXm', 'ysxm', 'lyString', 'brbq', 'zdqk', 'zdrq', 'cljg', 'ptmj', 'jzyy'],
                    hidden: [, 'fw', 'nr']
                })
            });
            hideshow.init('modules/clumn/jy',['rybh', 'jbxxXm', 'ysxm', 'lyString', 'brbq', 'zdqk', 'zdrq', 'cljg', 'ptmj', 'jzyy'],['fw', 'nr']);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function () {
                alert(111);
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

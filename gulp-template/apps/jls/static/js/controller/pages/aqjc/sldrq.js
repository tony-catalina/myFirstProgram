/**
 模块名称: 安全检查
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_aqjcSldqr.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/aqjc');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form= require('modules/form/_aqjcSldqr');
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
                        var data = grid.getSelected('table')[0];
                        var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
                        
                        if (data) {
                            data.dateTime=dates;
                            form.init(url.aqjcUpdate, data, function() {
                                grid.reload('table');
                            });
                        } else {
                            utils.alert('请选择人员');
                        }
                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                primary: [
                    { name: 'jlr', title: '记录人', type: 'textbox' },

                ],
                more: [

                    [
                        { name: 'jckssjStart', title: '安全检查开始时间', type: 'datebox' },
                        { name: 'jcjssjEnd', title: '至', type: 'datebox' }
                    ]
                ],
            },
                query: function (param) {
                    param = $.extend({}, {
                        'cljd': '3'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.aqjclist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jckssj', 'jcjssj', 'fw', 'cjry', 'wjp', 'aqyh', 'jpld', 'ldqrnr', 'bz', 'cjrs', 'jsbh','cljg'],
                    hidden: ['bz', 'cjrs', 'jsbh', 'jpld', 'bz', 'cjrs', 'jsbh']
                })
            });
            hideshow.init('modules/clumn/aqjc', ['jckssj', 'jcjssj', 'fw', 'cjry', 'wjp', 'aqyh', 'jpld', 'ldqrnr', 'bz','cljg', 'cjrs', 'jsbh'],
            ['bz', 'cjrs', 'jsbh', 'jpld', 'bz', 'cjrs', 'jsbh']);
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
/**
 模块名称： 安检机安检
 开始时间： 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jsswAjjaj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jssw');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jsswAjjajForm = require('modules/form/jsswAjjaj')
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
                        id: 'addTwo',
                        name: '安检',
                        icon: 'icon-jiahao',
                        fun: function () {
                            // var html = add('form/_jsswAjjaj', {});
                            // utils.showWin({
                            //     title:'安检机安检',
                            //     area: ['90%', '85%'],
                            //     content:html,
                            //     maxmin:true,
                            //     success:function(){
                            //         $.parser.parse('#fm');
                            //     },
                            //     yes:function(){
                            //         alert('第一个按钮');
                            //     }
                            // });
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {
                                    ajr: '安检人',
                                    blrq: currentTime
                                };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                jsswAjjajForm.init(url.updateJsswById, addData, function () {
                                    grid.reload('table');
                                });
                                grid.reload('table');
                            } else {
                                layer.alert('请选择要办理的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    {
                        id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {
                        }
                    }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'ywzt': '6',
                    }, param)
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.QueryJsswByYwzt,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jsbh', 'rybh', 'jbxx_xm', 'sqwp', 'sqyy', 'sqsj', 'qtblr', 'qtblsj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/jssw', ['jsbh', 'rybh', 'jbxx_xm', 'sqwp', 'sqyy', 'sqsj', 'qtblr', 'qtblsj'], []);
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

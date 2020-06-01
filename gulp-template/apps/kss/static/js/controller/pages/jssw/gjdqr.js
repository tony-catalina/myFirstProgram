/**
模块名称： 管教队确认
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_jsswGjdqr.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jssw');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');

    var gjdqrForm=require('modules/form/jsswGjdqr');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    /*{ id: 'add', name: '确认', icon: 'icon-jiahao', fun: function() {
                        var html = add('form/_jsswGjdqr', {});
                        utils.showWin({
                            title:'管教队确认',
                            area: ['90%', '85%'],
                            content:html,
                            maxmin:true,
                            success:function(){
                                $.parser.parse('#fm');
                            },
                            yes:function(){
                                alert('第一个按钮');
                            }
                        });
                     } }*/
                    {
                        id: 'edit',
                        name: '确认',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                gjdqrForm.init(url.updateJsswById + '?ywzt=4', data, function() {
                                        grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },

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
                        'ywzt': '3',
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
                    clumns: ['snbh', 'xm', 'sqyy', 'sqsj', 'sqwp', 'gjspr', 'spsj', 'spr','spnr'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/jssw',['snbh', 'xm', 'sqyy', 'sqsj', 'sqwp', 'gjspr', 'spsj', 'spr','spnr'],[]);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
           
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
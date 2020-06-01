/**
模块名称： 党建管理
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_djgl.html');
    var hideshow=require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/djgl');
    var url = require('modules/url');

    var from = require('modules/form/djgl');
    var formUpdate=require('modules/form/djglUpdate');

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
                    { id: 'add', name: '新增', icon: 'icon-jiahao', fun: function() {

                            from.init(url.djglAdd,{}, function() {
                                grid.reload('table');
                            });
                        
                     } },
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                formUpdate.init(url.djglUpdate, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                    /*{ id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function() {
                        var html = add('form/_djgl', {});
                        utils.showWin({
                            title:'党建信息',
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
                    } },*/
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name:'djkt',
                        title: '党建课题',
                        type: 'textbox'
                    }, {
                        name:'kssj',
                        title: '党建时间',
                        type: 'datebox'
                    },{
                        name:'jssj',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });
            grid.init('table', {
                url: url.djglList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['djkt', 'djlxString', 'djnr', 'djbmString', 'djsj', 'zqjcqk', 'jxjgString', 'hjqk'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/djgl',['djkt', 'djlxString', 'djnr', 'djbmString', 'djsj', 'zqjcqk', 'jxjgString', 'hjqk'],[]);
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
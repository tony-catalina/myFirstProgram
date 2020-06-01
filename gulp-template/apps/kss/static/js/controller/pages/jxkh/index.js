/**
模块名称： 绩效考核
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_jxkh.html');
    var hideshow=require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jxkh');
    var url = require('modules/url');

    var from = require('modules/form/jxkh');

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
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {khsj:currentTime};
                                from.init(url.jxkhAdd, addData1, function () {
                                    grid.reload('table');
                                });
                    } },
                    { id: 'edit', name: '修改', icon: 'icon-jiahao', ryyw:true,fun: function() {
                        var data = grid.getSelected('table')[0];      
                        if(data){
                            from.init(url.jxkhUpdate,data, function() {
                                grid.reload('table');
                            });
                        }else{
                            utils.open('请选择记录！');
                        }
                        
                     } },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table');} },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } },
                    { id: 'return', name: '页面返回', icon: 'icon-gengduo6', fun: function() { alert(3); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name:'jh',
                        title: '姓名/警号',
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
                url: url.jxkhList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jh', 'xm', 'khlxString', 'khbmString', 'khr', 'khsj', 'khjgString'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/jxkh',['jh', 'xm', 'khlxString', 'khbmString', 'khr', 'khsj', 'khjgString'],[]);
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

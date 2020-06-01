/**
模块名称： 留言簿
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });
            searchform.init('search', {
                primary: [{ name: 'jsh', title: '监室号', type: 'awdCombotree', url:url.getJqCombotree },
                    {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }
                ],
                more: [
                    [
                        { name: 'blrqstart', title: '办理日期', type: 'datebox' },
                        { name: 'blrqend', title: '至', type: 'datebox' }
                    ]
                ],
                query: function(param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.jbxxlist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: [ 'snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'rsxz', 'csrq', 'zjlx', 'zjh', 'hjdString', 'xzd', 'hyzk', 'mz', 'gj', 'whcd', 'zy', 'sf', 'tssf', 'jyrq', 'zyay'],
                    hidden: [ 'rsxz', 'csrq', 'zjlx', 'zjh', 'hjd', 'xzd', 'hyzk', 'mz', 'gj', 'whcd', 'zy', 'sf', 'tssf', 'jyrq', 'zyay']
                })
            });
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
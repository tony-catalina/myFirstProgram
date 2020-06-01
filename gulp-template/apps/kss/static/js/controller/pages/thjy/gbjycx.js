/**
模块名称： 集体教育
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');

    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/thjy');
    var url = require('modules/url');
    var jqtree = require('modules/jqtree');//监区树引用
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }, {
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }],
                    more: [
                        [
                            { name: 'fzmj', title: '谈话人', type: 'textbox' },
                            { name: 'jssj_start', title: '谈话结束时间', type: 'datebox' },
                            { name: 'jssj_end', title: '至', type: "datebox" }
                        ],
                        [
                            { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' },
                            { name: 'thyy', title: '教育类型', type: 'textbox' },
                            { name: 'thnr', title: '教育内容', type: 'textbox' }
                        ]
                    ]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,200, {
            },function(rybh) {
                console.log(rybh);
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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
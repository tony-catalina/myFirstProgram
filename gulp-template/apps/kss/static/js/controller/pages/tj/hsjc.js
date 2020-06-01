/**
模块名称：  回所安全检查
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var htmlTpl = require('services/form/_tjHsaqjc.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/tjdj');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var aqjcForm = require('modules/form/tj_aqjc');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    {
                        id: 'add',
                        name: '安全检查登记',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function() {
                            var data = grid.getSelected('table');
                            if(data.length>0) {
                                aqjcForm.init(url.tjhsaqjcAdd, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table') } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() { } }
                ]
            });
            searchform.init('search', {
                query:function(param){
                    param=$.extend({}, {
                        'taskDefinitionKey':'kss_tj_tjhsaqjc',
                        'processDefinitionKey':'kss_tj'
                    }, param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initJbxxflow('table',true,200,{'taskDefinitionKey':'kss_tj_tjhsaqjc','processDefinitionKey':'kss_tj'},function(rybh) {   //流程中的节点使用这个
            });
            // grid.init('table', {
            //     url: url.processTaskList,
            //     fit: false,
            //     width: '100%',
            //     queryParams:{'taskDefinitionKey': 'kss_tj_tjhsaqjc','processDefinitionKey': 'kss_tj'},
            //     height: window.innerHeight - 200,
            //     firstLoad: true,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'xbString', 'csrq', 'tjdw', 'tjry','tjrq','tjyyString'],
            //         hidden: []
            //     })
            // });
            jbxxgrid.initJbxxflow('table', false, 200, {'taskDefinitionKey':'kss_tj_tjhsaqjc','processDefinitionKey':'kss_tj'}, function (rybh) { 
            });
            hideshow.init('modules/clumn/tjdj',
            ['xm', 'jsh', 'xbString', 'csrq', 'tjdw', 'tjry','tjrq','tjyyString'],
            []
             );
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

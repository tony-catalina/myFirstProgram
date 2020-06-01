/**
模块名称： 公共事务-视察情况
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('modules/commFun');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree')
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/scqk');
    var url = require('modules/url');
    var ddgyDrgyjsForm = require('modules/form/ddgyDrgyjs');
    var jqtree = require('modules/jqtree');
    var jbxxgrid = require('modules/jbxxgrid');
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
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '带入关押监室', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var data = grid.getSelected('table')[0];
                                if(data) {
                                    ddgyDrgyjsForm.init(url.drgyjsAdd, data, function() {
        
                                    });
                                    grid.reload('table');
                                }else {
                                    utils.alert('请选择人员');
                                }
                            // var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            // var addData = { rq: currentTime, id: '' };
                            // ddgyZdzspForm.init(url.scqkAdd, addData, function () {
                            // });
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_ddgy_drjs',
                        'processDefinitionKey': 'kss_ddgy'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table',false,200, {
            	'taskDefinitionKey': 'kss_ddgy_ldsp',
                'processDefinitionKey': 'kss_ddgy'
            },function(rybh) {   
                $("#subtable").datagrid('reload', {   
                     "rybh": rybh
                  });
             });

             jqtree.init('jqtree','table');
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

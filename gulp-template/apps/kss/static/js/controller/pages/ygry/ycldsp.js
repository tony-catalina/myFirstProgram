/**
模块名称： 严管人员延长领导审批
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var tree = require('awd/easyui/tree');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/ygry');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_ygryycldsp.html');
    var ygryycldspForm = require('modules/form/ygryycldsp');
    var jqtree=require('modules/jqtree');//监区树引用
    var jbxxgrid=require('modules/jbxxgrid');
    var common=require('common');
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
                        id: 'add', name: '审批', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var postData = Object.assign({},data,{djsj:currentTime,djr:user});
                    if(data) {
                        ygryycldspForm .init(url.ldspAddByGj, postData, function() {

                        });
                    }else {
                        utils.alert('请选择要修改的记录!');
                    }
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
                        'taskDefinitionKey': 'kss_ygyc_ldsp',
                        'processDefinitionKey': 'kss_ygyc'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_ygyc_ldsp','processDefinitionKey':'kss_ygyc'},function(rybh) {   //流程中的节点使用这个
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

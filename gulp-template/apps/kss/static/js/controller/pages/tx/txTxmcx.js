/**
 模块名称： 监区提人
 开始时间： 2020-3-7
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var htmlTpl = require('services/form/_txJqtrdj.html');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var txJxcxForm=require('modules/form/txJxcx');
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
                    { id: 'add', name: '提讯登记', icon: 'icon-jiahao', fun: function() {
                            var data = grid.getSelected('table');
                            if(data.length>0) {
                                txJxcxForm.init(url.txTxmcx,data[0], function() {
                                    grid.reload('table')
                                });
                            }else {
                                utils.alert('请选择要出所的人员!');
                            }
                        } },

                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });

            searchform.init('search',{
                query:function(param){
                    param=$.extend({}, {
                        'taskDefinitionKey':'kss_tsdj_tsdj',
                        'processDefinitionKey':'kss_tsdj'
                    }, param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_tsdj_tsdj','processDefinitionKey':'kss_tsdj'},function(rybh){
            });
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
/**
 * 救济物品申领
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jjwpsljl');
    var url = require('modules/url');
    var formtpl = require('services/form/_jjpslLdsp.html');
    var hideshow = require('modules/showHideClumn');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/jjpslLdsp');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                        id: 'add',
                        name: '审批',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormAdd.init(url.ldspAddByGj, data, function () { 
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
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
                        'taskDefinitionKey': 'kss_jjwpsl_ldsp',
                        'processDefinitionKey': 'kss_jjwpsl'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_jjwpsl_ldsp','processDefinitionKey':'kss_jjwpsl'},function(rybh) { 
            });
            jqtree.init('jqtree','table');
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    $(main.init);

});
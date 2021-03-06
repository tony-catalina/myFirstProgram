/**
 模块名称： 延长或提前解除呈批
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');

    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/_xj');
    var url = require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_xjsyYchtqjccb.html');
    var hideshow = require('modules/showHideClumn');
    var ychjcForm = require('modules/form/xjsyYchjc');
    var jqtree = require('modules/jqtree');
    var jbxxgrid = require('modules/jbxxgrid');
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
                buttons: [{
                    id: 'add',
                    name: '延长使用呈批',
                    icon: 'icon-jiahao',
                    ryyw: true,
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        console.log(data);
                        if (data) {
                            ychjcForm.init(url.xjAddSpflow + '?type=', data, function () {
                                grid.reload('table');

                            });
                        } else {
                            utils.alert('请选择人员!');
                        }
                    }
                }, ]
            });

            linkbar.init({
                links: [{
                        id: 'list',
                        name: '数据列选择',
                        icon: 'icon-gengduo7',
                        fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1',
                        fun: function () {}
                    }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_xjsy_ycjccp',
                        'processDefinitionKey': 'kss_xjsy'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table', false, 200, {
                'taskDefinitionKey': 'kss_xjsy_ycjccp',
                'processDefinitionKey': 'kss_xjsy'
            }, function (rybh) { //流程中的节点使用这个
            });

            jqtree.init('jqtree', 'table'); //有监区树就加，没有不加
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
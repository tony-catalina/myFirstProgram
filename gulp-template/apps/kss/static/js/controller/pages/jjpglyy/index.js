/**
 * 救济物品申领
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var hdpzFormAdd = require('modules/form/jjpglyy');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jjwpgl');
    var url = require('modules/url');
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
                buttons: [
                    {
                        id: 'add',
                        name: '新增商品',
                        icon: 'icon-jiahao',
                        fun: function () {

                            // var data = grid.getSelected('table')[0];
                            // if (data) {
                            hdpzFormAdd.init(url.jjwpglSave, {}, function () {
                                grid.reload('table')
                             });
                            // } else {
                            //     utils.alert("请选择人员");
                            // }
                        }
                    },
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function () {

                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormAdd.init(url.jjwpglSave, data, function () {
                                    grid.reload('table')
                                 });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jjwpmc',
                        title: '物品名称：',
                        type: 'textbox'
                    }, {
                        name: 'jjwpid',
                        title: '物品编号：',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.jjwpgl,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jjwpmc', 'jjwpid', 'ksqsl'],
                    hidden: []
                })
            });

            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    $(main.init);

});
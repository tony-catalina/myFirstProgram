/**
 模块名称: 保管物品查询
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/wpgl');
    var url = require('modules/url');
    var formtpl=require('services/form/_bgwpcxWpxxxx.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_bgwpcxWpxxxx');

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
                        name: '物品详细信息',
                        icon: 'icon-taizhang',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                form.init('/', data, function() {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择人员');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {  hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
              pageRender:{
                primary: [{
                    name: 'jbxx_xm',
                    title: '姓名',
                    type: 'textbox'
                },
                {
                    name: 'jbxx_jsh',
                    title: '拘室号',
                    type: 'awdCombotree', url:url.jsComboxTree
                }],
                more: [
                    [
                        { name: 'jbxx_bm', title: '别名', type: 'textbox' },
                        { name: 'jbxx_ay', title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                        { name: 'jbxx_xb', title: '性别', type: 'awdCombox' ,url:url.getDictionary +'?node=XB' },
                    ],
                    [
                        { name: 'jbxx_rsrqStart', title: '入所日期', type: 'datebox' },
                        { name: 'jbxx_rsrqEnd', title: '至', type: 'datebox' }
                    ]
                ],
            },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'wply': '1'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wpgl2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm','jsh','xb','mc', 'sl', 'wpdw'],
                    hidden: ['djr']
                })
            });
            hideshow.init('modules/clumn/wpgl', ['xm','jsh','xb','mc', 'sl', 'wpdw'],['djr']);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            // $('#add').unbind('click').bind('click', function () {
            //     alert(111);
            // });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
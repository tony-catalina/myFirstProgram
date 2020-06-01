/**
模块名称： 业务登记
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
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var addForm = require('modules/form/sxrypg')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var common = require('common');
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
                        name: '涉维人员评估',
                        icon: 'icon-iconSVG-',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { pgrq: currentTime, pgr: common.info.user.loginname };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.swryAdd, addData, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert('请先选择人员!');
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
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                            { name: 'gyqx_end', title: '至', type: 'datebox' },
                            { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
                        ],
                        [
                            { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' },
                            { name: 'rsrq_start', title: '入所日期', type: 'datebox' },
                            { name: 'rsrq_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query: function (param) {
                    param.sfswry = '0';
                    grid.query('table', param);
                }

            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                console.log(rybh);
            });

            jqtree.init('jqtree', 'table');
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
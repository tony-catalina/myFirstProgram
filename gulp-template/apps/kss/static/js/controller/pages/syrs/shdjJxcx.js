/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var utils = require('awd/layui/utils');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var syrsshdjlForm = require('modules/form/syrsshrs');
    var jbxxgrid=require('modules/jbxxgrid');
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
                        id: 'jxcxAdd', name: '收回入所', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData1 = { id: data.id, zjh: data.zjh, zjlx: data.zjlx, gcbh: data.gcbh };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                syrsshdjlForm.init(url.saveAsShdj, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要收回的人员!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
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
                    param = $.extend({}, {
                        state:'R7'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.init('table',url.shdjQuery,false,true,200, {state:'R7'},function(rybh) {
                console.log(rybh);
            });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /*
     *运行入口
     */
    $(main.init);
    return main;
});
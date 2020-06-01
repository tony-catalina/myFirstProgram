/**
模块名称： 所情分析
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/sqfx');
    var url = require('modules/url');
    var sqfxswhyForm = require('modules/form/sqfxswhy');
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
                        id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = { hyjlsj: currentTime, hyjlr: common.info.user.loginname };
                            sqfxswhyForm.init(url.sqfxAdd, addData, function () {
                                grid.reload('table');
                            });
                        }
                    },
                    {
                        id: 'edit', name: '修改', icon: 'icon-daochu', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                sqfxswhyForm.init(url.sqfxUpdate+'?id=' + data.id, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                layer.alert('请选择要修改的记录!');
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
                pageRender:{
                    primary: [{
                        title: '会议开始时间',
                        type: 'datebox',
                        name:'sj_start'
                    }, {
                        title: '至',
                        type: 'datebox',
                        name:'sj_end'
                    }]
                },
                query: function (param) {
                    param=$.extend({},{
                        'hylx':'1'
                    },param);
                    grid.query('table', param);
                }

            });
            grid.init('table', {
                url: url.sqfxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['hykssj', 'hyjssj', 'cjrs', 'hyzcr', 'hynr', 'hydd', 'hylyurl'],
                    hidden: ['bz']
                })
            });
            hideshow.init('modules/clumn/sqfx', ['hykssj', 'hyjssj', 'cjrs', 'hyzcr', 'hynr', 'hydd', 'hylyurl'], ['bz']);
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

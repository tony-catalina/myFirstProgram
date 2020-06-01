/**
模块名称： 亲情电话
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入

    var jbxxgrid = require('modules/jbxxgrid');
    var common = require('common');

    require('jquery');
    require('easyui');

    require('layer.config');
    require('modules/commFun');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');

    var addForm = require('modules/form/qqdhzdzsp')
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '审批', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { gjmj: common.info.user.loginname, gjmjqmsj: currentTime, gjmjyjnr: '同意' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.qqdhexecuteflow, addData, function () {

                                });
                            } else {
                                utils.alert('必须选中一人办理!');
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
                // pageRender: {
                //     primary: [{
                //         title: '监室号',
                //         type: 'awdCombotree',url:url.getJqCombotree
                //     }, {
                //         title: '姓名',
                //         type: 'textbox'
                //     }]
                // }
                // ,
                query: function (param) {

                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_qqdh_zdzsp',
                        'processDefinitionKey': 'kss_qqdh'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table', false, 200, {
                'taskDefinitionKey': 'kss_qqdh_zdzsp',
                'processDefinitionKey': 'kss_qqdh'
            }, function (rybh) {

            });

        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
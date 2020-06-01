/**
模块名称： 巡视记录
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_xsjl.html');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/_xsjl');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_xsjl');
    var hdpzFormUp = require('modules/form/_xsjlxg');
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
                        id: 'add', name: '巡视登记', icon: 'icon-jiahao', fun: function () {
                            hdpzFormAdd.init(url.xsjlAdd, {}, function () { });
                        }
                    },
                    {
                        id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormUp.init(url.xsjlUpdate, data, function () { });
                            } else {
                                utils.alert("请选择一条记录");
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [

                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'return', name: '页面返回', icon: 'icon-gengduo6', fun: function () { alert(3); } }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'xsmj',
                        title: '巡视民警',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'xssjStartTime', title: '巡视时间', type: 'datebox' },
                            { name: 'xssjEndTime', title: '至', type: 'datebox' },
                        ]
                    ]
                },
                query: function (param) {

                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.xsjlList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xsfw', 'xssj', 'xsmj', 'xsqk', 'xslxString', 'bz'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/_xsjl', ['xsfw', 'xssj', 'xsmj', 'xsqk', 'xslxString', 'bz'], []);

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

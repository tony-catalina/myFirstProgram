/**
模块名称： 消毒日志
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
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
    var clumn = require('modules/clumn/_xdrz');
    var url = require('modules/url');
    var xdrzFormadd=require('modules/form/_xdrz');
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
                        id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () {
                            //var data = grid.getSelected('table')[0];
                                xdrzFormadd.init(url.xdrzAdd, {}, function () {
                                    grid.reload('table');
                                });
                        }
                    },
                    {
                        id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                xdrzFormadd.init(url.xdrzUpdate, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
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
                        name:'sj_start',
                        title: '消毒日期',
                        type: 'datetimebox'
                    }, {
                        name:'sj_end',
                        title: '至',
                        type: 'datetimebox'
                    }]
                }
                ,
                query: function (param) {

                    param = $.extend({}, {
                        'flag': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.xdrzList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xdrq', 'xdry', 'xddd', 'blr', 'blsj', 'bz', 'xdff'],
                    hidden: []
                }),
            });
           // hideshow.init('modules/clumn/_xdrz', [ ]);

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
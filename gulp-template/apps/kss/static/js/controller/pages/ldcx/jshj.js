/**
模块名称： 领导查询
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var tab = require('modules/tab');
    var grid = require('awd/easyui/grid');
    var hideshow = require('modules/showHideClumn');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jshj');
    var url = require('modules/url');

    var fun = function(rybh) {
        $('#jsjlTable').datagrid('reload', {
            'rybh' : rybh
        });
    };
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { alert(1); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1' }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [
                        {
                            name: 'blsjStart',
                            title: '办理时间',
                            type: 'datebox',
                        },
                        {
                            name: 'blsjEnd',
                            title: '至',
                            type: 'datebox',
                        }], more: [
                            [
                                {
                                    name: 'jsh',
                                    title: '监室号',
                                    type: 'awdCombotree',
                                    url: url.getJqCombotree
                                },
                                {
                                    name: 'sqr',
                                    title: '申请人',
                                    type: 'textbox'
                                }
                            ]
                        ]


                },

                query: function (param) {
                    grid.query('hjjlTable', param);
                }
            });
            
            grid.init('hjjlTable', {
                url: url.jshjList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['snbh', 'jsh', 'xm', 'hjsj', 'jssj'],
                    hidden: [, 'sqr', 'dcmj', 'sjmj']
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if(''!=rybh){
                        fun(rybh);
                    }

                }
            });



            grid.init('jsjlTable', {
                url: url.getShgx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jsxm', 'xb', 'gx'],
                    hidden: []
                })
            });
            //布局初始化

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

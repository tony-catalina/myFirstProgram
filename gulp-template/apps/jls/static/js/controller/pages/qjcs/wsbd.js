/**
 模块名称: 文书补打
 开始时间: 2020-3-12
 */

define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var glws = require('modules/glws');
    var clumn = require('modules/clumn/qjcs');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');

    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });

            searchform.initYwtz('search', {
                // primary: [{
                //     name: 'jbxx_xm',
                //     title: '姓名',
                //     type: 'textbox'
                // }, {
                //     name: 'jbxx_xb',
                //     title: '性别',
                //      type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' 
                // },],
                // more: [
                //     [
                //         { name: 'jbxx_ay', title: '案别',  type: 'awdCombox' ,url:url.getDictionary +'?node=XB'  },
                //         { name: 'jbxx_rsrqStart', title: '入所时间', type: 'datebox' },
                //         { name: 'jbxx_rsrqEnd', title: '至', type: 'datebox' }
                //     ], [
                //         { name: 'jbxx_csrqStart', title: '出生日期', type: 'datebox' },
                //         { name: 'jbxx_csrqEnd', title: '至', type: 'datebox' },
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'szyj': '1',
                        'zgldyj': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.qjcsList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jbxx_jsh', 'sqr', 'qjly', 'zjqx', 'qjkssj', 'qjjssj', 'gjqm'],
                    hidden: []
                })
            });

            hideshow.init('modules/clumn/qjcs',['jbxx_jsh', 'sqr', 'qjly', 'zjqx', 'qjkssj', 'qjjssj', 'gjqm'],[]);

            glws.init('glws', {
                files: [
                    { name: "被拘留人请假出所审批表",label:"jls_bjlrqjcsspb" },
                    { name: "被拘留人请假出所证明书",label:"jls_bjlrqjcszms" },
                    { name: "被拘留人请假出所到期通知书",label:"jls_bjlrqjcsdqtzs" }
                ]
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
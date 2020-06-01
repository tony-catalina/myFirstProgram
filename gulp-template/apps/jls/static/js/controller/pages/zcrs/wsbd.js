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
    var clumn = require('modules/clumn/jbxx');
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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });

            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }, {
                        name: 'xb',
                        title: '性别',
                        type: 'awdCombox' ,url:url.getDictionary +'?node=XB'
                    },],
                    more: [
                        [
                            { name: 'ay', title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB'},
                            { name: 'rsrqStart', title: '入所时间', type: 'datebox' },
                            { name: 'rsrqEnd', title: '至', type: 'datebox' },
                        ], [
                            { name: 'csrqStart', title: '出生日期', type: 'datebox' },
                            { name: 'csrqEnd', title: '至', type: 'datebox' }
                        ]
                    ],
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.jbxxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 500,
                firstLoad: false,
                columns: clumn({
                    check: false,
                     clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                     hidden: ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']
                })
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']);
            /**布局初始化**/

            glws.init('glws', {
                files: [
                    { name: "入所健康检查表",label:"jls_rsjkjcb"},
                    { name: "被拘留人暂存物品、现金收据",label:"jls_bjlrzcwpxjsj" },
                    { name: "被拘留人违禁品、涉案物品移交清单",label:"jls_bjlrwjpsawpyjqd" },
                    { name: "代为执行行政拘留通知书",label:"jls_dwzxxzjltzs" },
                    { name: "执行回执",label:"jls_zxhz" },
                    { name: "被拘留人登记表",label:"jls_bjlrdjb" },
                    { name: "恢复执行行政拘留决定书",label:"jls_hfzxxzjljds" },
                    { name: "异地执行拘留审批表",label:"jls_ydzxjlspb" },
                    { name: "临时寄押审批表",label:"jls_lsjyspb" },
                    { name: "可能错误拘留通知书",label:"jls_kncwjltzs" },
                    { name: "不予收拘通知书",label:"jls_byjltzs"}
                ],
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
/**
 模块名称: 变更处理
 开始时间: 2020-3-7
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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });

            searchform.initLc('search', {              
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'jzyj': '1',
                        'szyj': '1',
                        'csbllx': '3',
                        'jbxx_state': 'R7'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.bgclList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jsh', 'xm', 'csyy', 'csqx'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/jbxx',['jsh', 'xm', 'csyy', 'csqx'],[]);


            glws.init('glws', {
                files: [
                    { name: "解除拘留审批表",label:"jls_jcjlspb" },
                    { name: "解除拘留证明书",label:"jls_jcjlzms" },
                    { name: "建议另行处理通知书",label:"jls_jylxcltzs" }
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
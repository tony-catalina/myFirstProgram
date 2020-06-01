/**
 模块名称: 演练登记
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_yjylYldj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/yjyayl');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var form = require('modules/form/_yjylYldj');
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
                buttons: [{
                    id: 'bldj',
                    name: '办理登记',
                    icon: 'icon-taizhang',
                    fun: function () {

                        form.init(url.yjylSave, {}, function () {
                            grid.reload('table');
                        });
                    }
                }]
            });
            linkbar.init({
                links: [{
                    id: 'list',
                    name: '数据列选择',
                    icon: 'icon-gengduo7',
                    fun: function () {
                        hideshow.show('table');
                    }
                }]
            });
            searchform.initLc('search', {
                // primary: [
                //     { name: 'zcld', title: '主持领导', type: 'textbox' },
                //     { name: 'cjrs', title: '参加人数', type: 'textbox' }
                // ],
                // more: [
                //     [
                //         { name: 'kssjStart', title: '应急预演时间始', type: 'datebox' },
                //         { name: 'kssjEnd', title: '至', type: 'datebox' }
                //     ],
                //     [
                //         { name: 'jssjStart', title: '应急预演时间止', type: 'datebox' },
                //         { name: 'jssjEnd', title: '至', type: 'datebox' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.yjyllist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['kssj', 'jssj', 'zzzhz', 'yllb', 'zcld', 'cjdw', 'cjrs'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/yjyayl', ['kssj', 'jssj', 'zzzhz', 'yllb', 'zcld', 'cjdw', 'cjrs'], []);

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
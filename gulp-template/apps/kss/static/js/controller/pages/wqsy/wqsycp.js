/**
 * 武器使用呈批
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
    var clumn = require('modules/clumn/mjjbxx');
    var url = require('modules/url');
    var wqsycpForm = require('modules/form/wqsycp')
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
                        id: 'add', name: '武器使用呈批', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var user=common.info.user.loginname;
                                var addData = { sykssj: currentTime,  cprq: currentTime, cpr:user  };
                                wqsycpForm.init(url.wqsyAddFlow, addData, data, function () {
                                });
                            } else {
                                layer.alert('请选择人员!');
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
                pageRender:{
                    primary: [{
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wqsyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'],
                    hidden: ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']
                })
            });
            hideshow.init('modules/clumn/mjjbxx', ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'], ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']);
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

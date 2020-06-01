/**
 模块名称: 指纹采集
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_zwglzwcj.html');
    var form=require('modules/form/_zwglZwcj');
    var jbxxgrid=require('modules/jbxxgrid');
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
                        id: 'zwcj', name: '指纹采集', icon: 'icon-taizhang', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                form.init(url.xyrSave,data, function () {
                                grid.reload('table');
                            });
                            
                            } else {
                            utils.alert('请选择要办理的记录!');
                            }

                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.initLc('search', {
                pageRender:{
                primary: [
                    { name: 'jsh', title: '拘室号', type: 'combotree' },
                    { name: 'xm', title: '姓名', type: 'textbox' },
                ],
            },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8',
                        
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
            });
            // grid.init('table', {
            //     url: url.jbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'bm', 'cssj', 'rsrq', 'ay', 'badw', 'gyqx', 'gyts'],
            //         hidden: []
            //     })
            // });
            // hideshow.init('modules/clumn/jbxx', ['xm', 'jsh', 'bm', 'cssj', 'rsrq', 'ay', 'badw', 'gyqx', 'gyts'], []);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function () {
                alert(111);
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
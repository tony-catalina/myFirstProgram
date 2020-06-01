/**
 模块名称: 回所登记
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_lslsHsdj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_lslsHsdj');
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
                    { id: 'bldj', name: '办理登记', icon: 'icon-taizhang', fun: function () { 
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            hdpzFormAdd.init(url.lscsZxflow+'?type=4', data, function() {
                                grid.reload('table');
                            });
                            
                        } else {
                            utils.alert("请选择人员");
                        }
                     } },
                    // { id: 'jrgz', name: '进入告知', icon: '', fun: function () { alert(2); } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {  hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { alert(2); } } 
                ]
            });
            searchform.initLc('search', {
                // primary: [
                //     { name: 'xm', title: '姓名', type: 'textbox' },
                //     { name: 'jsh', title: '拘室号', type: 'combotree' }
                // ],
                // more: [
                //     [
                //         { name: 'bm', title: '别名', type: 'textbox' },
                //         { name: 'ay', title: '案别',  type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB'  },
                //         { name: 'xb', title: '性别',  type: 'awdCombox' ,url:url.getDictionary +'?node=XB'  }
                //     ],
                //     [
                //         { name: 'rsrqStart', title: '入所日期', type: 'datebox' },
                //         { name: 'rsrqEnd', title: '至', type: 'datebox' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': 'jls_lsls',
                        'taskDefinitionKey': 'jls_lsls_hsdj'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table', false, 200, {
                        'processDefinitionKey': 'jls_lsls',
                        'taskDefinitionKey': 'jls_lsls_hsdj'
            }, function (rybh) { });
            // grid.init('table', {
            //     url: url.getProcessTaskList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'rsxz', 'ay', 'badw', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'gyts', 'jlrq', 'gyqx'],
            //         hidden: ['xb', 'rsxz', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'bm', 'jlrq']
            //     })
            // });
          //  hideshow.init('modules/clumn/jbxx',['xm', 'jsh', 'bm', 'xb', 'rsrq', 'rsxz', 'ay', 'badw', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'gyts', 'jlrq', 'gyqx'],['xb', 'rsxz', 'bar', 'bardh', 'hjd', 'hyzk', 'mz']);

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

/**
 模块名称: 外来人员登记
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/wlrydj');
    var url = require('modules/url');
    var formtpl = require('services/form/_wlrydjWlrydj.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_wlrydjWlrydj');
    var jbxxgrid=require('modules/jbxxgrid');

    var common = require('common');
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
                        id: 'add',
                        name: '办理登记',
                        icon: 'icon-taizhang',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            // if (data) {
                                var currentTime=new Date().Format('yyyy-MM-dd hh:mm:ss');
                                var dataStr={dateTime:currentTime,tbr:common.info.user.loginname};
                                form.init(url.wlrydjSave, dataStr, function() {
                                    grid.reload('table');
                                });
                            // } else {
                            //     utils.alert('请选择人员');
                            // }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [{
                        id: 'list',
                        name: '数据列选择',
                        icon: 'icon-gengduo7',
                        fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1',
                        fun: function () {
                            alert(2);
                        }
                    }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [
                        { name : 'rsrqStart',title: '来所时间', type: 'datebox' },
                        { name : 'rsrqEnd',title: '至', type: 'datebox' },
                     ],
                    more: [
                        [
                            { name : 'lssy',title: '来所事由', type: 'awdCombox',url:url.getDictionary +'?node=LSSY' },
                            { name : 'bfr',title: '被访人', type: 'textbox'  },
                            { name : 'bfrbm',title: '被访人部门', type: 'textbox'  }
                        ]
                    ],
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            // jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
            //  });
            grid.init('table', {
                url: url.wlrydjList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['lssyString', 'lssj', 'sxrs', 'sxcls', 'bfr', 'bfrbm', 'jtsy', 'drmj', 'drsj', 'dcmj', 'dcsj', 'lksj'],
                    hidden: ['drsj', 'dcmj', 'dcsj', 'lksj']
                })
            });
            hideshow.init('modules/clumn/wlrydj',
                ['lssyString', 'lssj', 'sxrs', 'sxcls', 'bfr', 'bfrbm', 'jtsy', 'drmj', 'drsj', 'dcmj', 'dcsj', 'lksj'],
                ['drsj', 'dcmj', 'dcsj', 'lksj']);

            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            // $('#add').unbind('click').bind('click', function() {
            //     alert(111);
            // });
            /**事件绑定**/

            $(function () {
                $('.tab_title ul li').on('click', function () {
                    alert(11)
                })
            })




        }
    };

    /**
     *运行入口
     */
    $(main.init);





});
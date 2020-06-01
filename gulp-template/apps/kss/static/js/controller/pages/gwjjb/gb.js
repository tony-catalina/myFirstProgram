/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/gwjjb');
    var url = require('modules/url');
    var formtpl = require('services/form/_gwjjbJb.html');
    var hideshow = require('modules/showHideClumn');

    var gwjjbJbForm = require('modules/form/gwjjbJb');
    var common=require('common');
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
                        id: 'add',
                        name: '接班确认',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var postData = Object.assign({},data,{jjbsj:currentTime,jjbry:user});
                            if (data) {
                                gwjjbJbForm.init(url.gwjjbjbqr, postData, function () {
                                    grid.reload("table");
                                });
                            } else {
                                utils.alert('请选择记录!');
                            }

                            // var html = formtpl('form/_gwjjbJb', {});
                            // utils.showWin({
                            //     title: '接班确认',
                            //     area: ['90%', '85%'],
                            //     content: html,
                            //     maxmin: true,
                            //     success: function () {
                            //         $.parser.parse('#fm');
                            //     },
                            //     yes: function () {
                            //         alert('第一个按钮');
                            //     }
                            // });
                        }
                    }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });

            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jbry',
                        title: '交班人',
                        type: 'textbox'
                    }, {
                        name: 'jjbry',
                        title: '接班人',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'jbsj_start', title: '交班时间', type: 'datebox' },
                            { name: 'jbsj_end', title: '至', type: 'datebox' }
                        ], [
                            { name: 'jjbsj_start', title: '接班时间', type: 'datebox' },
                            { name: 'jjbsj_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'flag': '1',
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.gwjjbList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jbgw', 'jbry', 'jbsj', 'gzjl', 'zysx'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/gwjjb', ['jbgw', 'jbry', 'jbsj', 'gzjl', 'zysx'], []);

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
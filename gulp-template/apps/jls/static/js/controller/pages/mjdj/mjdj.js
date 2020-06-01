/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_mjdj.html');
    var xxxx = require('services/form/_mjdjJbxx.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/mjjbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var mjdjForm = require('modules/form/_mjdj');
    var mjdjJbxxForm = require('modules/form/_mjdjJbxx');
    //界面控件
    var main = {
        init: function (url, data, callback) {


            // /**界面初始化**/
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
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            // var initdata={};
                            // var selected={};

                            mjdjForm.init(url.mjdjSave, data, function () {

                            });


                        }
                    },
                    {
                        id: 'xxxx',
                        name: '民警详细信息',
                        icon: 'icon-jiahao',
                        fun: function () {
                            // var initdata={};
                            // var selected={};

                            // mjdjJbxxForm.init('保存地址修改',initdata,selected,function(){

                            // });
                            var data = grid.getSelected('table')[0];

                            if (data) {
                                mjdjJbxxForm.init(url.mjdjlist, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要显示的详细信息!');
                            }
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
                }]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                            name: 'xm',
                            title: '姓名',
                            type: 'textbox'
                        },
                        {
                            name: 'jsbh',
                            title: '拘所编号',
                            type: 'textbox'
                        }
                    ],
                    more: [
                        [{
                                name: 'jx',
                                title: '警衔',
                                type: 'awdCombox',
                                url: url.getDictionary + '?node=JX'
                            },
                            {
                                name: 'xb',
                                title: '性别',
                                type: 'awdCombox',
                                url: url.getDictionary + '?node=XB'
                            }
                        ],
                    ],
                },
                // primary: [{
                //     name: 'xm',
                //     title: '姓名',
                //     type: 'textbox'
                // }, {
                //     name: 'jsbh',
                //     title: '拘所编号',
                //     type: 'textbox'
                // }],
                // more: [
                //     [
                //         { name: 'jx', title: '警衔', type: 'textbox' },
                //         { name: 'xb', title: '性别', type: 'awdCombox' ,url:url.getDictionary +'?node=XB' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': '',
                        'taskDefinitionKey': '',
                        'sfzz': '1',
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.mjdjlist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsbh', 'mz', 'xbString', 'csny', 'xl', 'jx', 'jh', 'zzmm', 'cjgmgzsj', 'hyzk', 'jtzz', 'hjszd', 'cjgzsj', 'bm', 'bmzw', 'gbzwjb', 'lxdh', 'flag', 'sjh', 'lkrq', 'lkyy', 'state', 'scbz', 'rtsj', 'rdsj', 'jggzsj', 'jszc', 'kh', 'fzjs', 'yhssjs'],
                    hidden: ['jh', 'zzmm', 'cjgmgzsj', 'hyzk', 'jtzz', 'hjszd', 'cjgzsj', 'bm', 'bmzw', 'gbzwjb', 'lxdh', 'flag', 'sjh', 'lkrq', 'lkyy', 'state', 'scbz', 'rtsj', 'rdsj', 'jggzsj', 'jszc', 'kh', 'fzjs', 'yhssjs']
                })
            });
            hideshow.init('modules/clumn/mjjbxx',
                ['xm', 'jsbh', 'mz', 'xb', 'csny', 'xl', 'jx', 'jh', 'zzmm', 'cjgmgzsj', 'hyzk', 'jtzz', 'hjszd', 'cjgzsj', 'bm', 'bmzw', 'gbzwjb', 'lxdh', 'flag', 'sjh', 'lkrq', 'lkyy', 'state', 'scbz', 'rtsj', 'rdsj', 'jggzsj', 'jszc', 'kh', 'fzjs', 'yhssjs'],
                ['jh', 'zzmm', 'cjgmgzsj', 'hyzk', 'jtzz', 'hjszd', 'cjgzsj', 'bm', 'bmzw', 'gbzwjb', 'lxdh', 'flag', 'sjh', 'lkrq', 'lkyy', 'state', 'scbz', 'rtsj', 'rdsj', 'jggzsj', 'jszc', 'kh', 'fzjs', 'yhssjs']);
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
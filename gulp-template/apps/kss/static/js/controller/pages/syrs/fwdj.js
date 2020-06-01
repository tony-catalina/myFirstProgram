/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/processTaskList');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var syrsFwdjForm = require('modules/form/syrsFwdj');
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
                        id: 'add', name: '随身物品登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData = { djrq: currentTime, djr: common.info.user.loginname, blrq: currentTime };
                                syrsFwdjForm.init(url.syFwdj+'?sfwwp=2', addData, data, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的记录!');
                            }
                        },
                    },{
                        id: 'edit',
                        name: '无附物登记',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data){
                                cxk = layer.confirm('确认' + '<font style="color:red">' + data.params.xm  + '</font>'+'无附物？', {
                                        btn: ['确定', '取消']},
                                    function () {
                                        layer.close(cxk);
                                        util.ajax({type: "POST", url: url.noFwdjFlow,
                                            data: {
                                                rybh:data.rybh,
                                                xm : data.params.xm,
                                                jsh : data.params.jsh,
                                                snbh : data.params.snbh,
                                                taskid : data.taskId
                                            },
                                            func: function (result) {
                                                grid.reload('table');
                                                utils.alert(result.msg);
                                            },
                                        });
                                    });
                            } else{
                                utils.alert("请选择人员!");
                            }

                        }
                    },
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
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                            { name: 'gyqx_end', title: '至', type: 'datebox' },
                            { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
                        ],
                        [
                            { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' },
                            { name: 'rsrq_start', title: '入所日期', type: 'datebox' },
                            { name: 'rsrq_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },

                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_rsdj_fwdj',
                        'processDefinitionKey': 'kss_rsdj'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.fwdjList,
                fit: false,
                width: '100%',
                queryParams:{'taskDefinitionKey': 'kss_rsdj_fwdj','processDefinitionKey': 'kss_rsdj'},
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'dah', 'rsrq', 'sydw', 'jkzkString'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/processTaskList', ['xm', 'jsh', 'dah', 'rsrq', 'sydw', 'jkzkString'], []);
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

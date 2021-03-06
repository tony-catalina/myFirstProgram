/**
模块名称： 出所登记
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var utils = require('awd/layui/utils');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var htmlTpl = require('services/form/_tjCsdjtary.html');
    var addzdtary = require('services/form/_tjzdtary.html');

    var hideshow = require('modules/showHideClumn');
    var formTable = require('modules/Form_Table');
    var csdjForm = require('modules/form/tj_csdj');
    var tjtafForm = require('modules/form/tj_tjtaf');
    var jbxxgrid=require('modules/jbxxgrid');
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
                        id: 'tjtaf',
                        name: '添加同案犯',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                var currentTime = new Date().Format('yyyy-MM-dd');
                                console.log(data);
                                Object.assign(data,{createtime:currentTime,czsj:currentTime,jlr:common.info.user.loginname,czr:common.info.user.loginname});
                                tjtafForm.init(url.addTary,data,function(){
                                    grid.reload('table');
                                })
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    },
                    {
                        id: 'edit',
                        name: '撤销同案',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                // csdjForm.init('/kss/kss_sgsjdj/fssgUpdate', data, function() {

                                // });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    },
                    {
                        id: 'zd',
                        name: '转到同案人列',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var html = addzdtary('form/_tjzdtary', {});
                            layer.open({
                                title: '同案人员列表',
                                area: ['100%', '100%'],
                                content: html,
                                maxmin: true,
                                btn: [],
                                success: function () {
                                    var mainhtml = '<div style="width:100%;height:100%;display:flex;justify-content: start;flex-wrap: wrap;">'
                                    for (var i = 0; i < 10; i++) {
                                        mainhtml += '<div style="width:20%;margin:0 5% 2% 0;height:300px;border:1px solid #297aff;">' +
                                            '<div style="display: flex;justify-content: space-between;width:100%;height:250px;">' +
                                            '<div style="width:50%;height:100%;">' +
                                            '<img src="/apps/kss/static/images/cm1.png" alt="" style="width:100%;height:100%;">' +
                                            '</div>' +
                                            '<div style="width:50%;height:250px;">' +
                                            '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">state</div>' +
                                            '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">男性</div>' +
                                            '<div title="1980-12-21"  style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:49px;line-height:49px;border-bottom:1px solid #297aff;">1980-12-21</div>' +
                                            '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">0102</div>' +
                                            '<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:50px;line-height:50px;border-bottom:1px solid #297aff;" title="分裂国家案,背叛、分裂国家案,煽动分裂国家案">分裂国家案,背叛、分裂国家案,煽动分裂国家案</div>' +
                                            '</div>' +
                                            '</div>' +
                                            '<div style="width:100%;height:50px;line-height:50px;padding-left:5%;">2019-10-23</div>' +
                                            '</div>'
                                    }
                                    mainhtml += '</div>'
                                    mainhtml += ''
                                    $.parser.parse('#fm');
                                    $('#maincontent').append(mainhtml)

                                }
                            })

                        }
                    }

                ]
            });

            linkbar.init({
                links: [
                    {
                        id: 'add', name: '增加人员', icon: 'icon-jiahao', fun: function () {
                            var html = htmlTpl('form/_tjCsdjtary', {});
                            layer.open({
                                title: '提解-提解登记',
                                area: ['40%', '68%'],
                                content: html,
                                btn: ['清空', '删除'],
                                maxmin: true,
                                shade: [0],
                                success: function () {
                                    $("#taryTable").datagrid({
                                        url: url.processTaskList,
                                        width: '100%',
                                        // height: '300px',
                                        firstLoad: false,
                                        columns: [[
                                            { field: 'rybh', title: '人员编号', width: 200 },
                                            { field: 'xm', title: '姓名', width: 200 },
                                            { field: 'jsh', title: '监室号', width: 200 }
                                        ]]
                                    })
                                }
                            })
                        }
                    },
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_tj_tjcsdj',
                        'processDefinitionKey': 'kss_tj'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_tj_tjcsdj','processDefinitionKey':'kss_tj'},function(rybh) {   //流程中的节点使用这个

            });
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
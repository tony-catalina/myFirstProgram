/**
模块名称： 监区提人
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var htmlTpl = require('services/form/_txJqtrdj.html');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var txTjtaForm=require('modules/form/txTjta');
    var addzdtary = require('services/form/_txZdtary.html');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'del', name: '撤销同案', icon: 'icon-jiahao', fun: function() {
                        var sjjs = $("#table").datagrid('getSelected');
                        if (sjjs) {
                            $.messager.confirm('提示', '您确定要撤销选中人员吗？', function (r) {
                                if (r) {
                                    var data = "";
                                    var rows = $('#table').datagrid('getSelections');
                                    for (var i = 0; i < rows.length; i++) {
                                        data += rows[i].rybh;
                                        if (i + 1 != rows.length) {
                                            data += ",";
                                        }
                                    }
                                    $.ajax({
                                        type: "POST",  // 提交方式
                                        url: url.removeTaf,// 路径
                                        data: { "rybh": data },
                                        success: function (data) {
                                            console.log(data)
                                            if (data.success) {
                                                utils.alert(data.msg);
                                            } else {
                                                utils.alert(data.msg);
                                            }
                                        }
                                    });
                                }
                            });
                        } else {
                            utils.alert('请选择要撤销选中人员!');
                        }
                     } },
                     { id: 'add', name: '添加同案', icon: 'icon-jiahao', fun: function() {
                        var data = grid.getSelected('table');
                        if(data.length>0) {
                            txTjtaForm.init(url.addTary,data, function() {
                            });
                        }else {
                            utils.alert('请选择要出所的人员!');
                        }
                 } },
                 { id: 'change', name: '转到同案人列表', icon: 'icon-jiahao', fun: function() {
                            var html = addzdtary('form/_txZdtary', {}); 
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
                    } },
                  
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search',{
                query:function(param){
                    param=$.extend({}, {
                        'taskDefinitionKey':'kss_tsdj_tsdj',
                        'processDefinitionKey':'kss_tsdj'
                    }, param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initJbxxflow('table',true,200,{'taskDefinitionKey':'kss_tsdj_tsdj','processDefinitionKey':'kss_tsdj'},function(rybh) {   //流程中的节点使用这个
            });
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var glws = require('modules/glws');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '确定', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var selected = grid.getSelected('table')[0];
                            if (selected) {
                                console.log('selected.taskid')
                                console.log(selected.taskid)
                                util.ajax({
                                    type: "POST",  //提交方式
                                    url: url.deleteFlowSfz,
                                    data: { "taskid": selected.taskid, "rybh": selected.rybh, "xm": selected.xm, "jsh": selected.jsh, "snbh": selected.snbh },
                                    func: function (data) {
                                        if (data.success) {
                                            utils.alert(data.msg);
                                            var param={'taskDefinitionKey':'kss_csgl_wsbd','processDefinitionKey':'kss_csgl'};
                                            grid.query('table', param);
                                        } else {
                                            utils.alert(data.msg);
                                        }
                                    }
                                });
                            } else {
                                utils.alert('请选择人员!');
                            }

                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                ]
            });

            searchform.initWsbd('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': 'kss_csgl',
                        'taskDefinitionKey': 'kss_csgl_wsbd'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,250,{'taskDefinitionKey':'kss_csgl_wsbd','processDefinitionKey':'kss_csgl'},function(rybh) {   //流程中的节点使用这个

            });

            glws.init('glws', {
                files:[
                    {name:"刑满释放证",label:"kss_xmsftzs"},
                    {name:"刑满释放证明书",label:"kss_xmsfzms"}
                ]
            });

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
/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var utils = require('awd/layui/utils');
     var util = require('awd/easyui/util');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        wfwthflow: function (jbxx) {
            //var jbxx = $('#table').datagrid('getSelected');

            if (jbxx) {
                util.ajax({
                    type: "POST",  //提交方式
                    url:url.setWcshf,
                    data: jbxx,//数据，这里使用的是Json格式进行传输
                    func: function (result) {
                        if (result.success) {
                            utils.alert('办理成功');
                            $('#table').datagrid('reload')
                        } else {
                            utils.alert('办理失败');
                        }
                        // grid.reload('table');
                    }
                });
            } else {
                utils.alert("请选择操作人员！");
            }
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                        id: 'wcshfAdd', name: '误出所恢复', icon: 'icon-jiahao', ryyw:true,fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                $.messager.confirm('提示','你确定要执行误出所恢复吗?',function(btn1){
                                    if(btn1==1){
                                        main.wfwthflow(data);

                                    }else{
                                        grid.closeWin('popwin');
                                    }
                                });
                            } else {
                                utils.alert('请选择要办理的人员');
                            }
                        }
                    }]
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
                        state:'R7',
                        processDefinitionKey: 'kss_rsdj',
                        taskDefinitionKey: 'kss_rsdj_xxbl',
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.init('table',url.shdjQuery,false,true,200, {state:'R7'},function(rybh) {
                console.log(rybh);
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
    return main;

});
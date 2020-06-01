/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var lscsclumn = require('modules/clumn/jsbjd');
    var url = require('modules/url');
    var addForm = require('modules/form/jsbjdjdksdj')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');//监区树引用
    var common = require('common');
    var combox = require('awd/easyui/combox');
        
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
                        id: 'add', name: '鉴定开始登记', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd");
                                var addData1 = { blsj: currentTime, ksrq: currentTime, blr: common.info.user.loginname };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.jsbjdAdd, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, { state: 'R8' }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table', false, 400, { state: 'R8' }, function (rybh) {   //流程第一个节点，或不是流程的但是查询的是犯人的基本信息的
                $("#subtable").datagrid('reload', {    //这里边的如果没有子查询框则去掉
                    "rybh": rybh
                });
            },
            [{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.jsbjdList,
                             fit: false,
                             width: '100%',
                             height: '300',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: lscsclumn({
                                 check: false,
                                 clumns: ['ksrq', 'jsrq', 'ygyqx', 'xgyqx', 'blr'],
                                 hidden: []
                             })
                         });

                     }
                 })
             }}
         ]
         );
          

            jqtree.init('jqtree', 'table');//有监区树就加，没有不加

            // grid.init('subtable', {
            //     url: url.jsbjdList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 250,
            //     firstLoad: false,
            //     columns: lscsclumn({
            //         check: false,
            //         clumns: ['ksrq', 'jsrq', 'ygyqx', 'xgyqx', 'blr'],
            //         hidden: []
            //     })
            // }
            // );
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
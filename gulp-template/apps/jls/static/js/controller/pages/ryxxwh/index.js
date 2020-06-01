/**
 模块名称: 人员信息维护
 开始时间: 2020-3-7
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl=require('services/form/_ryxxwh.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_ryxxwh');


    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_ryxxwh');
    var jbxxgrid=require('modules/jbxxgrid');
    var common=require('common');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'add', name: '信息维护',  icon: 'icon-jiahao', fun: function() {
                        
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData1 = {tbrq: currentTime,tbr: common.info.user.loginname};
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            form.init(url.ryxxblSave,data,function () {
                                grid.reload('table');
                            });
                        } else {
                            layer.alert('请选择要办理的记录!');
                        }
                     } },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name : 'jsh',
                        title: '拘室号',
                        type: 'awdCombotree', url:url.jsComboxTree
                    }, {
                        name : 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name : 'dah',title: '档案编号', type: 'textbox' },
                            { name : 'rsrqStart',title: '入所日期', type: 'datebox' },
                            { name : 'rsrqEnd',title: '至', type: 'datebox' }
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R8',
                                     'processDefinitionKey':'',
                                     'taskDefinitionKey':''
                                 }, param);
                 grid.query('table',param);
              }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {   
             });
            // grid.init('table', {
            //     url: url.jbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'rsrq', 'ayString', 'badw', 'gyqx', 'gyts'],
            //         hidden: []
            //     })
            // });
            hideshow.init('modules/clumn/jbxx',['xm', 'jsh', 'rsrq', 'ayString', 'badw', 'gyqx', 'gyts'],[]);

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
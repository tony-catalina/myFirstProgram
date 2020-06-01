/**
 模块名称: 业务登记
 开始时间: 2020-3-11
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
    var clumn = require('modules/clumn/lkrywh');
    var url = require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl=require('services/form/_lkrywh.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_lkrywh');
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
                    { id: 'add', name: '办理登记', icon: 'icon-jiahao', fun: function() {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = {tbrq: currentTime,tbr: common.info.user.loginname};
                            form.init(url.lkrywhSave,addData, data, function () {
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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name : 'zjhm',
                        title: '被布控人证件号码',
                        type: 'textbox'
                    }, {
                        name : 'bbkrxm',
                        title: '被布控人姓名',
                        type: 'textbox'
                    }],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R2',
                                 }, param);
                 grid.query('table',param);
              }
            });
            grid.init('table', {
                url: url.lkrywhList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'zjhm', 'ajlb', 'xzdxz', 'sqrxm', 'lxdh', 'sqrdw','id' ,'bbkray','hjdxz','csrq','bdsj','sdm'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/lkrywh',['xm', 'zjhm', 'ajlb', 'xzdxz', 'sqrxm', 'lxdh', 'sqrdw','id' ,'bbkray','hjdxz','csrq','bdsj','sdm'],[]);

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
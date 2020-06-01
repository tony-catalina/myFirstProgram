/**
 模块名称: 核对凭证
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var formtpl=require('services/form/_lshjHdpz.html');
    var form=require('modules/form/_lshjHdpz');
    var common = require('common');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_lshjHdpz');
    var jbxxgrid=require('modules/jbxxgrid');
    var hideshow=require('modules/showHideClumn');
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
                    {
                        id: 'add',
                        name: '办理登记',
                        icon: 'icon-taizhang',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd");
                                var logName = common.info.user.loginname;
                                var addData1 = {tbr:logName,tbrq:currentTime};
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                hdpzFormAdd.init(url.lshjaddflow+'?snbh='+data.snbh, addData, function() {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                  
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {  hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search', {
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
        },
        eventBind:function(){
            /**事件绑定**/
            // $('#add').unbind('click').bind('click', function() {
            //     alert(333);
            // });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
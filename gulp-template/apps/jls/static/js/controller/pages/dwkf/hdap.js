/**
 模块名称: 活动安排
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var formtpl=require('services/form/_dwkfHdap.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/dwkfYwlc');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_dwkfHdap');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    { id: 'add', name: '办理登记', icon: 'icon-taizhang', fun: function() {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                form.init(url.dwkfSaveBySzyj, data, function() {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择人员');
                            }
                     } }
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
                    primary: [
                        { name : 'dwkf_kflx', title: '开放类型', type: 'awdCombox' ,url:url.getDictionary+"?node=DWKFLX" },
                        { name : 'dwkf_cgdx',title: '开放对象', type: 'textbox' },
                    ],
                    more: [
                        [
                            { name : 'dwkf_cgrs',title: '参观人数', type: 'textbox' },
                            { name : 'dwkf_dwmc',title: '单位名称', type: 'textbox' },
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'processDefinitionKey':'jls_dwkf',
                                     'taskDefinitionKey':'jls_dwkf_hdap'
                                 }, param);
                 grid.query('table',param);
              }
            });
            // jbxxgrid.initJbxxflow('table',false,200, {},function() {
            //  });
            grid.init('table', {
                url: url.processTaskList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['kfsj','dwkf_kflxString','cgdx','cgrs','dwmc','sqly','szyj','szyjnr','szqm','szqmsj','sjldyj','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr','sqdh'],
                    hidden: ['szyj','szyjnr','szqm','szqmsj','sjldyj','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr',
                    'sqdh']
                })
            });
            hideshow.init('modules/clumn/dwkfYwlc',
                ['kfsj','kflx','cgdx','cgrs','dwmc','sqly','szyj','szyjnr','szqm','szqmsj','sjldyj','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr','sqdh'],
                ['szyj','szyjnr','szqm','szqmsj','sjldyj','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr',
            'sqdh']);
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
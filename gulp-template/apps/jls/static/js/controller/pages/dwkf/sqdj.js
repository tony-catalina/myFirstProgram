/**
 模块名称: 申请登记
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/dwkf');
    var url = require('modules/url');
    var formtpl=require('services/form/_dwkfSqdj.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_dwkfSqdj');
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
                    {
                        id: 'add',
                        name: '办理登记',
                        icon: 'icon-taizhang',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            // if (data) {
                                form.init(url.saveBySqdj, data, function() {
                                    grid.reload('table');
                                });
                            // } else {
                            //     utils.alert('请选择人员');
                            // }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table');  } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search', {
                pageRender:{
                    primary: [{
                        name : 'kfsjStart',
                        title: '开放时间',
                        type: 'datebox'
                    }, {
                        name : 'kfsjEnd',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            { name : 'kflx', title: '开放类型', type: 'awdCombox' ,url:url.getDictionary+"?node=DWKFLX" },
                            { name : 'cgrs',title: '参观人数', type: 'textbox' },
                            { name : 'dwmc',title: '单位名称', type: 'textbox' },
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'processDefinitionKey':'',
                                     'taskDefinitionKey':''
                                 }, param);
                 grid.query('table',param);
              }
            });
            // jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
            //  });
            grid.init('table', {
                url: url.dwkfList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['kfsj','kflxString','cgdx','cgrs','dwmc','sqly','szyjString','szyjnr','szqm','szqmsj','sjldyjString','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr','sqdh'],
                    hidden: ['szyj','szyjnr','szqm','szqmsj','sjldyjString','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr','sqdh']
                })
            });
            hideshow.init('modules/clumn/dwkf',
                ['kfsj','kflxString','cgdx','cgrs','dwmc','sqly','szyjString','szyjnr','szqm','szqmsj','sjldyjString','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr','sqdh'],
                ['szyj','szyjnr','szqm','szqmsj','sjldyjString','sjldyjnr','sjldqm','sjldqmsj','kskfsj','kfdd','sqr','sqdh']);

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            // $('#add').unbind('click').bind('click', function() {
            //     alert(111);
            // });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
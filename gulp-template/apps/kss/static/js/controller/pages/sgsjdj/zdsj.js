/**
模块名称： 事故事件登记-重大事件
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_sgsjdjZdsj.html');
    var hideshow=require('modules/showHideClumn');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/fssg');
    var url = require('modules/url');

    var zdsjFormAdd = require('modules/form/sgsjdj_zdsjAdd');
    var zdsjFormModify = require('modules/form/sgsjdj_zdsjModify');
    //单栏
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
                    {id:'add',name:'新增',icon:'icon-jiahao',fun:function(){

                            zdsjFormAdd.init(url.fssgAdd,{}, function() {
                                grid.reload('table');
                            });
                        }},
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                zdsjFormModify.init(url.fssgUpdate, data, function() {
                                        grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name:'sjry',
                        title: '涉及人员',
                        type: 'textbox'
                    }, {
                        name:'sjlx',
                        title: '事件类型',
                        type: 'awdCombox' ,url:url.getDictionary+'?node=FSSGLX' 
                    }],
                    more: [
                        [
                            { name:'sgdd', title: '事故地点', type: 'textbox' },
                            { name:'sgsj_satrt', title: '事故时间', type: 'datebox' },
                            { name:'sgsj_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query:function(param){
                    param.qklx='03';
                    grid.query('table',param);
                }
            });
            grid.init('table', {
                url: url.fssgList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['sjlxString', 'sgdd', 'sjry', 'jyqk', 'sgsj','cljg'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/fssg',['sjlxString', 'sgdd', 'sjry', 'jyqk', 'sgsj','cljg'],[]);
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
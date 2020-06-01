/**
模块名称： 事故事件登记-一般事件
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_sgsjdjYbsj.html');
    var hideshow=require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/fssg');
    var url = require('modules/url');

    var ybsjFormAdd = require('modules/form/sgsjdj_ybsjAdd');

    var ybsjFormModify = require('modules/form/sgsjdj_ybsjModify');

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
                            //var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");

                            ybsjFormAdd.init(url.fssgAdd,{}, function() {
                            });
                        }},
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                ybsjFormModify.init(url.fssgUpdate, data, function() {

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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table');  } },
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
                        name:'sgdd',
                        title: '事故地点',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name:'cljg', title: '处理结果', type: 'textbox' },
                            { name:'sgsj_start', title: '事故时间', type: 'datebox' },
                            { name:'sgsj_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query:function(param){
                    param.qklx='02';
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
                    clumns: ['sgdd', 'sjry', 'jyqk', 'cljg'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/fssg',['sgdd', 'sjry', 'jyqk', 'cljg'],[]);
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
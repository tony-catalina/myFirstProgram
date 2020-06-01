/**
模块名称： 视察情况
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/scqk');
    var url=require('modules/url');

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
                buttons:[
                    {id:'add',name:'新增',icon:'icon-jiahao',fun:function(){alert(1);}},
                    {id:'edit',name:'修改',icon:'icon-daochu',fun:function(){alert(2);}},
                    {id:'del',name:'删除',icon:'icon-iconSVG-',fun:function(){alert(3);}}
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){alert(1);}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){alert(2);}},
                    {id:'return',name:'页面返回',icon:'icon-gengduo6',fun:function(){alert(3);}}
                ]
            });
            searchform.init('search',{
                primary: [{
                    title: '姓名',
                    type: 'textbox'
                }, {
                    title: '监室号',
                    type: 'combotree'
                }],
                more: [
                    [
                        { title: '开始谈话时间', type: 'datetimebox' },
                        { title: '结束谈话时间', type: 'datetimebox' },
                        { title: '收押编号', type: 'textbox' },
                        { title: '负责人', type: 'textbox' }
                    ], [
                        { title: '谈话主题', type: 'textbox' },
                        { title: '谈话内容', type: 'textbox' }
                    ]
                ]
            });
            grid.init('table',{
                url: url['/kss_jssw/QueryJsswByYwzt'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['rq','tt','cy','jdr','ldxm','ldzw','scnr','yjjy','zgqk','jlr'],
                    hidden:['ldxm','ldzw','yjjy','zgqk','jlr']})
            });
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
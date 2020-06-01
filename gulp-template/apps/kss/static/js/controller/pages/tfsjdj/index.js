/**
模块名称： 突发事件登记
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_tfsjDj.html');
    var cl = require('services/form/_tfsjCl.html');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree')
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/tfsjdj');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var tfsjForm = require('modules/form/tfsjdj');
    var tfsjClForm = require('modules/form/tfsjcl');
    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){

            //布局初始化
            toolbar.init({
                buttons:[

                    {id:'add',name:'登记',icon:'icon-jiahao',fun:function(){
                                var jqhstring=util.getTreeSelectionNos($('#jqtree'));
                                var data = grid.getSelected('table')[0];
                                if(jqhstring!=''){
                                    tfsjForm .init(url.tfsjdjAdd, {jqh:jqhstring},data, function() {
                                    });
                                }else{
                                    utils.alert('请先选择监室!');
                                }

                    }},
                    {id:'edit',name:'处理',icon:'icon-jiahao',fun:function(){
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                tfsjClForm .init(url.tfsjdjUpdate, data, function() {

                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                    }},
                ]
            });

            linkbar.init({
                links:[

                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table'); }},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'clzt',
                        title: '处理状态',
                        type: 'awdCombox', url: url.getDictionary + '?node=CLZT'
                    }]
                }
                ,
                query:function(param){
                    grid.query('table',param);
                 }
            });

            tree.initTree('jqtree',{
                url:url.jqtree,
                checkbox:true,
                select:function(){
                    grid.query('table',{jsh:util.getTreeSelected($(this),'监区树').id});
                },
                BeforeExpand: function(node) {
                    $('#jqtree').tree('options').url = url.jqtree + '?id=' + node.id;
                }
            });

            grid.init('table',{
                url: url.tfsjdjList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jqh','tfsj','tfnr','clr','clsj','clztString'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/tfsjdj',['jqh','tfsj','tfnr','clr','clsj','clztString'],[]);


        },
        eventBind:function(){
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

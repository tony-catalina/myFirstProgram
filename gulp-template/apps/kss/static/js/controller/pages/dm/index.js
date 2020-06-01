/**
模块名称： 点名
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_dm.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/dm');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var qybzdmform= require('modules/form/dm');
    var jqtree=require('modules/jqtree');//监区树引用
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
                    {id:'add',name:'点名',icon:'icon-jiahao',ryyw:true,fun:function(){
                            var data = grid.getSelected('table')[0];
                            console.log(data,555)
                            if(data) {
                                Object.assign(data);
                                qybzdmform.init(url.dmAdd+'?wdrybh='+data.wdrybh, data,function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员');
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
                        name:'dmr',
                        title: '点名人',
                        type: 'textbox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                 }
            });

            grid.init('table',{
                url: url.dmList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jsh','wdrybh','kssj','jssj','wdrs','dmr'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/dm',['jsh','wdrybh','kssj','jssj','wdrs','dmr'],[]);

            // jqtree.init('jqtree','table');//有监区树就加，没有不加
            
            tree.initTree('jqtree',{
                url:url.jqtree,
                checkbox:true,
                select:function(){
                },
                BeforeExpand: function(node) {
                    $('#jqtree').tree('options').url = url.jqtree + '?id=' + node.id;
                }
            });
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
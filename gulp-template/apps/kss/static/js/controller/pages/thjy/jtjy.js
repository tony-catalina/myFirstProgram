/**
模块名称： 集体教育
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');

    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn = require('modules/clumn/jtjy');
    var hideshow=require('modules/showHideClumn');
    var url=require('modules/url');
    var formtpl=require('services/form/_thjyJtjy.html');
    var jqtree=require('modules/jqtree');//监区树引用

    var thjyJtjy = require('modules/form/thjyJtjy');
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
                    {id:'add',name:'集体教育登记',icon:'icon-jiahao',fun:function(){
                            //var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            thjyJtjy.init(url.thjyjtjyAdd,{}, function() {});
                    }},
                ]
            });

            linkbar.init({
                links:[
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
 
            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jysjBegin',
                        title: '时间',
                        type: 'datebox'
                    }, {
                        name: 'jysjEnd',
                        title: '至',
                        type: 'datebox'
                    },
                    {
                        name: 'skrxm',
                        title: '授课人姓名',
                        type: 'textbox'
                    },
                    {
                        name: 'skrzw',
                        title: '授课人职务',
                        type: 'textbox'
                    }
                    ,
                    {
                        name: 'kt',
                        title: '课题',
                        type: 'textbox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jtjyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jyr','zw','cjrs','kt','nr','xyfy','sj'],
                                 hidden:[]})
            });

            hideshow.init('modules/clumn/jtjy',['jyr','zw','cjrs','kt','nr','xyfy','sj'],[]);
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

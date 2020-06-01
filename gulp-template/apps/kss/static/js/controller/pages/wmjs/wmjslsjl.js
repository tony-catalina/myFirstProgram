/**
 模块名称： 文明监室历史记录
 开始时间： 2020-3-9
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/wmjs');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
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

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'xssj1',
                        title: '登记时间',
                        type: 'datebox'
                    }, {
                        name: 'xssj2',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    param = $.extend({}, {
                        'bllx': '01',
                        'psbz': '1'
                    }, param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.wmjsList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jsh','ly','blrq','jzyj','bllxString','blr','bz'],
                    hidden:[]})
            });

            hideshow.init('modules/clumn/wmjs',['jsh','ly','blrq','jzyj','bllxString','blr','bz'],[]);

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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

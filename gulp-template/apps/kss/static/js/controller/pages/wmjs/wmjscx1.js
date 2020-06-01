/**
 模块名称： 文明监室撤销
 开始时间： 2020-3-9
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/js');
    var url=require('modules/url');
    var formtpl=require('services/form/_wmjsWmjscx.html')
    var hideshow=require('modules/showHideClumn');
    var wmjscxForm = require('modules/form/wmjs_cx');
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
                    // {
                    //     id: 'add',
                    //     name: '文明监室撤销',
                    //     icon: 'icon-jiahao',
                    //     fun: function () {
                    //         var html=formtpl('form/_wmjsWmjscx',{});
                    //         utils.showWin({
                    //             title:'文明监室撤销',
                    //             area: ['90%', '85%'],
                    //             content:html,
                    //             maxmin:true,
                    //             success:function(){
                    //                 $.parser.parse('#fm');
                    //             },
                    //             yes:function(){
                    //                 alert('第一个按钮');
                    //             }
                    //         });
                    //     }
                    // },
                    {
                        id: 'addTwo',
                        name: '文明监室撤销',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0]; 
                            console.log(data);
                            if(data) {
                                wmjscxForm.init(url.wmjsszDelete, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择监室!');
                            }
                        }
                    }
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'xssj1',
                        title: '时间',
                        type: 'datebox'
                    }, {
                        name: 'xssj2',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    param=$.extend({},{
                        'shfo':'1',
                    },param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jsList,
                method:'post',
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jsh','typeString','zgmj','xgmj'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/js',['jsh','typeString','zgmj','xgmj'],[]);
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

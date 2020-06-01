/**
 * 业务台账 页面入口
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/gwjjb');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');

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
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jbry',
                        title: '交班人',
                        type: 'textbox'
                    }, {
                        name: 'jjbry',
                        title: '接班人',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'jbsj_start', title: '交班时间', type: 'datebox' },
                            { name: 'jbsj_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.gwjjbList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jbgw','jbry','jbsj','gzjl','zysx','jjbry','jjbsj'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/gwjjb',['jbgw','jbry','jbsj','gzjl','zysx','jjbry','jjbsj'],[]);
           
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
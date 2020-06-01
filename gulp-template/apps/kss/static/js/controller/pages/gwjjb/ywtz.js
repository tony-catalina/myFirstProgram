/**
 * 业务台账 页面入口
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
    var clumn=require('modules/clumn/gwjjb');
    var url=require('modules/url');

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
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });

            linkbar.init({
                links:[
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jbry',
                        title: '交班人员',
                        type: 'textbox'
                    }, {
                        name: 'jjbry',
                        title: '接班人员',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'jbsj_start', title: '交班时间', type: 'datebox' },
                            { name: 'jbsj_end',title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query:function(param){
                    param=$.extend({},{
                        //'jbgw':'sygw'
                    },param);
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
                                 clumns:['jbgw','jbry','jbsj','gzjl','jjbgw','jjbry','jjbsj','jbldps'],
                                 hidden:[]})
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
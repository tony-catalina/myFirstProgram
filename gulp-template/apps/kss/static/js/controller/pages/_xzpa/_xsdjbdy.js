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
    var clumn=require('modules/clumn/_xzpa');
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
            toolbar.init({
                buttons:[
                    {id:'print',name:'线索打印',icon:'icon-iconSVG-'}
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                query:function(param){
                    param=$.extend({},{
                        'taskDefinitionKey':'kss_xzpa_ldsp',
                        'processDefinitionKey':'kss_xzpa'
                    },param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.processTaskList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jsh','jbxx_xm','process_sar','process_sars','process_afsj','process_afdd','process_jjrq'],
                    hidden:[]})
            });

            hideshow.init('modules/clumn/_xzpa',['jsh','jbxx_xm','process_sar','process_sars','process_afsj','process_afdd','process_jjrq'],[]);
          
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
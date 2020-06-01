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
    var glws=require('modules/glws');
    var clumn=require('modules/clumn/_xzpa');
    var url=require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    //上下两栏
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
                ]
            });

            searchform.initWsbd('search',{
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.xzpaYwtz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jbxx_xm','jsh','sar','afsjString','tbjurqString','cddw','phxsaj','zwdw','pastable'],
                    hidden:[,'fw','nr']})
            });

            glws.init('glws', {
                files:[
                    {name:"材料转递函",label:''},
                    {name:"深挖犯罪情况记录",label:'kss_swfzqkjl'},
                    {name:"深挖犯罪线索登记",label:'kss_swfzxsdj'},
                    {name:"提供情报登记表",label:'downloadFile'},
                    {name:"违法犯罪线索登记表",label:'kss_wffzxsdjb'}
                ]
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
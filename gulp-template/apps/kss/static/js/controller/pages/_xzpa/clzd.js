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
    var utils=require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/_xzpa');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var clzdForm=require('modules/form/xzpa_clzd')
    var jbxxgrid =require('modules/jbxxgrid');
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
                    {id:'edit',name:'领导意见',icon:'icon-jiahao',fun:function(){
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { rq: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                clzdForm.init(url.clzdflow, addData, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                    }}
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
                        'taskDefinitionKey':'kss_xzpa_clzd',
                        'processDefinitionKey':'kss_xzpa'
                    },param);
                    grid.query('table',param);
                }
            });

            // jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_xzpa_clzd','processDefinitionKey':'kss_xzpa'},function(rybh) {   //流程中的节点使用这个
            // });
            grid.init('table',{
                url: url.processTaskList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jbxx_xm','jsh','xzpa_sar','xzpa_sars','xzpa_afsj','xzpa_afdd','xzpa_tbjurq'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/_xzpa',['jbxx_xm','jsh','xzpa_sar','xzpa_sars','xzpa_afsj','xzpa_afdd','xzpa_tbjurq'],[]);
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
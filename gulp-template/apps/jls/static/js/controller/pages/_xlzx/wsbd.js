/**
 模块名称: 心理咨询
 开始时间: 2020-3-7
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
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            linkbar.init({
                links: [
                   
                ]
            });

            searchform.initYwtz('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.xlzxList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['snbh','xm','jsh','bahjString','rsrq','gyqx','badw'],
                                 hidden:[]})
            });

            glws.init('glws', {
                files:[
                    {name:"审批表",label:"kss_zyrycsjczlspb"},
                    {name:"决定书",label:"kss_zxjyzfhjjds"}
                ],
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

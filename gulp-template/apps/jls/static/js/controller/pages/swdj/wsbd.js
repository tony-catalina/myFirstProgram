/**
 模块名称: 文书补打
 开始时间: 2020-3-12
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
                links:[
                ]
            });

            searchform.init('search', {
                pageRender:{
                    primary: [{
                        title: '姓名',
                        type: 'textbox'
                    },{
                        title: '性别',
                        type: 'combotree'
                    },],
                    more: [
                        [
                            { title: '案别', type: 'combotree' },
                            { title: '入所时间', type: 'datetimebox' },
                            { title: '至', type: 'datetimebox' }
                        ], [
                            { title: '出生日期', type: 'datetimebox' },
                            { title: '至', type: 'datetimebox' },
                        ]
                    ],
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.jbxxlist,
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
                    {name:"被拘留人死亡通知书",label:"被拘留人死亡通知书"}
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
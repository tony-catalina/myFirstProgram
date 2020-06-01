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
    var clumn=require('modules/clumn/scqk');
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
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'ldxm',
                        title: '领导姓名',
                        type: 'textbox'
                    },{
                        name: 'jdr',
                        title: '接待人',
                        type: 'textbox'
                    },],
                    more: [
                        [
                            { name: 'rqStart', title: '视察日期', type: 'datetimebox' },
                            { name: 'rqEnd', title: '至', type: 'datetimebox' },
                            { name: 'jlr', title: '记录人', type: 'textbox' }
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'processDefinitionKey':'',
                                     'taskDefinitionKey':''
                                 }, param);
                 grid.query('table',param);
              }
            });

            grid.init('table',{
                url: url.scqkList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns: ['rq','ldxm','ldzwString','cy','jdr','scnr','cdsj','yjjy','jlr','sfls','tt','zgqk'],
                    hidden: ['cdsj','jlr','sfls','tt']
                                })
            });

            hideshow.init('modules/clumn/scqk',
                ['rq','ldxm','ldzwString','cy','jdr','scnr','cdsj','zgqk','yjjy','jlr','sfls','tt'],
                ['cdsj','jlr','sfls','tt']);
           
            glws.init('glws', {
                files:[
                    {name:"工作检查视察记录表",label:"jls_gzjcscjlb"},
                    {name:"应急预案演练记录",label:"jls_yjyayljl"}
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
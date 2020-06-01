/**
模块名称： 安全检查
开始时间： 2020-2-25
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
    var hideshow=require('modules/showHideClumn');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            toolbar.init({
                buttons:[
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jbry',
                        title: '交班人员',
                        type: 'textbox'
                    }, {
                        name: 'jbgw',
                        title: '交班岗位',
                        type: 'textbox'
                    }],
                    more: [
                        [
    
                            { name: 'jbsjStart', title: '交班时间', type: 'datebox' },
                            { name: 'jbsjEnd', title: '至', type: 'datebox' },
                            { name: 'abry', title: '接班人员', type: 'textbox' }
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R2',
                                 }, param);
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
                                 clumns:['jbgw','jbry','jbsj','gzjl','zysx','abry','absj'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/gwjjb',['jbgw','jbry','jbsj','gzjl','zysx','abry','absj'],[]);

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/

            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
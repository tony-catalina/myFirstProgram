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
    var clumn=require('modules/clumn/zdry');
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
            searchform.initYwtz('search',{
                // primary: [{
                //     name:'rygllb',
                //     title: '人员管理类别',
                //     type: 'awdCombox' ,url:url.getDictionary +'?node=RYGLLB'
                // }, {
                //     name:'ly',
                //     title: '理由',
                //     type: 'textbox'
                // }],
                // more: [
                //     [
                       
                //         {  name:'cpr',title: '呈批人', type: 'textbox' },
                //         { name:'cpsjStart', title: '呈批时间', type: 'datebox' },
                //         { name:'cpsjEnd', title: '至', type: 'datebox' }
                //     ],
                //     [
                //         { name:'jgcs', title: '监管措施', type: 'textbox' },
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table',{
                url: url.zdryList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['rygllb','ly','jgcs','qzcs','cpr','cpsj','bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj'],
                                 hidden:['bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj']
                                })
            });
            hideshow.init('modules/clumn/zdry',
                ['rygllb','ly','jgcs','qzcs','cpr','cpsj','bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj'],
                ['bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj']);
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
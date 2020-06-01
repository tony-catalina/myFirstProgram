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
    var clumn=require('modules/clumn/jbjl');
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
                    title: '交班人员',
                    type: 'textbox'
                }, {
                    title: '交班组长',
                    type: 'textbox'
                }],
                more: [
                    [

                        { title: '交班时间', type: 'datebox' },
                        { title: '至', type: 'datebox' }
                    ]
                ]
               },
               query: function (param) {
                param = $.extend({}, {
                    'state': 'R2',
                }, param);
                grid.query('table', param);
            }
            });
            grid.init('table',{
                url: url.jbjlList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['whsnum','yhsnum','todayinnum','dbcsnum','todayoutnum','jbr','jiaobzz','jiaobsj'],
                                 hidden:['aqxxynum','bgcsnum','byjlnum','cqnum','jiaobldyj','jiaobld','jjbsj',
                                 'jiaobzzyj','jiebldyj','jiebld','jiebsj','jiebzz','jlqnnum','jlscnum','jshjnum','jtdqnum',
                                 'lshjnum','lslsnum','mtdqnum','nannum','nvnum','qjnum','qmnum','qtnum','sfjlnum','snjynum',
                                 'swjynum','syjjnum','tsnum','wgjnum','wgnum','xzjlnum','ygnum',
                                 'zdbhnum','zsrynum']})
            });
            hideshow.init('modules/clumn/jbjl',['whsnum','yhsnum','todayinnum','dbcsnum','todayoutnum','jbr','jiaobzz','jiaobsj'],['aqxxynum','bgcsnum','byjlnum','cqnum','jiaobldyj','jiaobld','jjbsj',
            'jiaobzzyj','jiebldyj','jiebld','jiebsj','jiebzz','jlqnnum','jlscnum','jshjnum','jtdqnum',
            'lshjnum','lslsnum','mtdqnum','nannum','nvnum','qjnum','qmnum','qtnum','sfjlnum','snjynum',
            'swjynum','syjjnum','tsnum','wgjnum','wgnum','xzjlnum','ygnum',
            'zdbhnum','zsrynum']);
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
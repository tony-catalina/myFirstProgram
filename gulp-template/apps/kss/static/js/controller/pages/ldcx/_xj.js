/**
模块名称： 领导查询-械具
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var hideshow=require('modules/showHideClumn');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/_xj');
    var url=require('modules/url');

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

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                primary: [{
                    name: 'kssj',
                    title: '开始时间',
                    type: 'datebox'
                }, {
                    name: 'jssj',
                    title: '至',
                    type: 'datebox'
                }],
                more: [
                    [
                        {
                            name: 'jsh', title: '监室号', type: 'awdCombotree',
                            url: url.getJqCombotree
                        },
                        { name: 'jbr', title: '经办人', type: 'awdCombox', url: url.getUsers },
                    ]
                ],
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.getXjList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                detailviewshow: true,
                detailFormatter: function (index, data) {
                    return '使用原因:' + data.lyString;
                },
                columns: clumn( {check:false,
                    clumns:['snbh','jbxx_xm','jbxx_jsh','xjmcString','lyString','kssjString','jssjString'],
                    hidden:['blr','syts','psbz','jjsl','zdzyj','ldyj']})
            });
            hideshow.init('modules/clumn/_xj',
            ['snbh','jbxx_xm','jbxx_jsh','xjmcString','lyString',,'kssjString','jssjString'],['blr','syts','psbz','jjsl','zdzyj','ldyj']);
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

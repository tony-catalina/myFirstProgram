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
    var clumn=require('modules/clumn/wmpb');
    var url=require('modules/url');
    var url=require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl=require('services/form/_wmpbWmjsdj.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_wmpbWmjsdj');
    var common = require('common');
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
                    {id:'add',name:'办理登记',icon:'icon-jiahao',fun:function(){
                            var pxsj = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var tbrq = new Date().Format("yyyy-MM-dd");
                            var logName = common.info.user.loginname;
                            var data = {pxsj: pxsj,tbrq:tbrq,tbr:logName};
                            form.init(url.wmpbSave, data, function() {
                                grid.reload('table');
                            });
                    }}
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search',{
                // pageRender:{
                //     primary: [{
                //         name : 'jsh',
                //         title: '拘室号',
                //         type: 'awdCombox' ,url: url.jsComboxTree
                //     }, {
                //         name : 'gjmj',
                //         title: '管教民警',
                //         type: 'textbox'
                //     }],
                //     more: [
                //         [   
                //             { name: 'pxyy', title: '评选原因', type: 'textbox' },
                //             { name: 'rsrqStart', title: '评选日期', type: 'datebox' },
                //             { name: 'rsrqEnd', title: '至', type: 'datebox' },
                //         ]
                //     ],
                // },
				query:function(param){
					   param=$.extend({}, {
										 'state': 'R2',
										 'pblx':'02',
									}, param);
				    grid.query('table',param);
				 }
            });
            grid.init('table',{
                url: url.wmpbList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jsh','pxsj','gjmj','psr','sfpdbzString','pxyy','jlcs'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/wmpb',['jsh','pxsj','gjmj','psr','sfpdbzString','pxyy','jlcs'],[]);

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
               /*   */
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

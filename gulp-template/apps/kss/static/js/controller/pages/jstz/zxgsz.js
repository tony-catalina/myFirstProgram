/**
模块名称： 主协管设置
开发时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/mjjbxx');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var formtpl=require('services/form/_jstzZxgsz.html');
    var jstzZxgszForm=require('modules/form/jstzZxgsz');
    var common=require('common');
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
                    {
                        id: 'add',
                        name: '办理监室设置',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            console.log(data);
                            if(data) {
                                var addData1 = { updator:common.info.user.loginname};
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                jstzZxgszForm.init(url.JsAndzxg, addData, function() {
                                });
                            }else {
                                utils.alert('请选择要办理的记录!');
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'xb',
                        title: '性别',
                        type: 'awdCombox', url:url.getDictionary+ '?node=XB'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'bmzw', title: '职务', type: 'textbox' },
                            { name: 'rdsj_start', title: '入党时间', type: 'datebox' },
                            { name: 'rdsj_end', title: '至', type: 'datebox' }
                        ]
                    ]
                }
                ,
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.zxgsz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['xm','xb','csny','mz','cjgmgzsj','bmzw'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/mjjbxx',['xm','xbString','csny','mzString','cjgmgzsj','bmzw'],[]);
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

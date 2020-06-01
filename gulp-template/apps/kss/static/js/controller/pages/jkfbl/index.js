/**
模块名称： 加扣分处理
开始时间： 2020-2-29
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
    var clumn=require('modules/clumn/jbxx');
    var clumn2=require('modules/clumn/jkfjl');
    var url=require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    var jkfForm = require('modules/form/jkfjl');

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
                    {id:'add',name:'加扣分办理',icon:'icon-jiahao',fun:function(){
                        var data = grid.getSelected('table')[0];
                        if(data) {
                            jkfForm.init('', data, function() {
                                
                            });
                        }else {
                            utils.alert('请选择要修改的记录!');
                        }  
                    }
                },
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){showhide.show('table')}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){alert(2);}}
                ]
            });

            searchform.init('search',{
                primary: [{
                    title: '姓名',
                    type: 'textbox'
                }, {
                    title: '监室号',
                    type: 'combotree'
                }],
                more: [
                    [
                    	{ title: '别名', type: 'textbox' },
                        { title: '关押期限', type: 'datebox' },
                        { title: '至', type: 'datebox' }
                    ],
                    [
                    	{ title: '性别', type: 'combobox' },
                    	{ title: '入所日期', type: 'datebox' },
                    	{ title: '至', type: 'datebox' }
                    ],
                    [
                    	{ title: '办案环节', type: 'textbox' },
                    ]
                ]
            });

            grid.init('table',{
                url: url['/kss_jssw/QueryJsswByYwzt'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['snbh','xm','jsh','bahj','rsrq','gyqx','badw','xb'],
                                 hidden:['csrq','rsxz','dwlx','zjlx','zjh','hjd','xzd','mz','gj','whcd','zy','sf','tssf','ay','jyrq']})
            });

            grid.init('tsTable',{
                url: url['/kss_jssw/QueryJsswByYwzt'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn2( {check:false,
                                 clumns:['type','jkffs','jkfz','jkfsy','jbr','szrq'],
                                 hidden:[]})
            });
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
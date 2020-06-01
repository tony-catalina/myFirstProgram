  /**
模块名称：名单打印
开发时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jstz');
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
                    {id:'print',name:'名单打印',icon:'icon-jiahao'},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                            { name: 'gyqx_end', title: '至', type: 'datebox' },
                            { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
                        ],
                        [
                            { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' },
                            { name: 'rsrq_start', title: '入所日期', type: 'datebox' },
                            { name: 'rsrq_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query:function(param){
                    param=$.extend({},{
                        'taskDefinitionKey':'kss_jstz_mddy',
                        'processDefinitionKey':'kss_jstz'
                    },param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jstzList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                singleSelect:false,
                columns: clumn( {check:true,
			                	clumns:['jbxx_xm','jbxx_xb','jbxx_sxzm','jbxx_dabh','yjsh','xjsh','yyString','tjr'],
			                    hidden:[]})
            });
            hideshow.init('modules/clumn/jstz',['jbxx_xm','jbxx_xb','jbxx_sxzm','jbxx_dabh','yjsh','xjsh','yyString','tjr'],[]);
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
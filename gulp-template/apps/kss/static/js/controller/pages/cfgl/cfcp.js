/**
模块名称： 处罚呈批
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');

    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var addForm = require('modules/form/cfglcfcb')
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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
                        name: '处罚呈报',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { creator: common.info.user.loginname, createtime: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.cfcpAdd, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('必须选中一人办理!');
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                query:function(param){
                    param = $.extend({}, {state:'R8'}, param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {state:'R8'},function(rybh) {
                console.log(rybh);
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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
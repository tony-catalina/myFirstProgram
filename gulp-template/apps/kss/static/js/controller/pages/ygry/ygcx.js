/**
模块名称： 严管撤销
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var util= require('awd/easyui/util');
    var tree=require('awd/easyui/tree');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var clumn1=require('modules/clumn/ygry');
    var url=require('modules/url');
    var formtpl=require('services/form/_ygryYgcx.html');
    var hideshow=require('modules/showHideClumn');
    var ygryYgcxForm = require('modules/form/ygryYgcx');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                        name: '新增',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            console.log(data);
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var postData = Object.assign({},data,{blsj:currentTime,blr:user});
                            if(data) {
                                ygryYgcxForm.init(url.ygryjcAdd,postData);
                            }else  {
                                utils.alert("请选择人员");
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
                    param=$.extend({},{
                        'ygry':'02',
                        'taskDefinitionKey': 'kss_ygcx_cx',
                        'processDefinitionKey': 'kss_ygcx'
                    },param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {   
                $("#subtable").datagrid('reload', {    
                     "rybh": rybh
                  });
             },[{
                id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                    layer.open({
                        title:"业务信息",
                        area: ['90%', '600px'],
                        content:"<table id='subtable'></table>",
                        btn: ['取消'],
                        success: function () {
                            grid.init('subtable', {
                                url: url.ygryszList,
                                fit: false,
                                width: '100%',
                                height: '450',
                                queryParams:{ "rybh": data[0].rybh},
                                firstLoad: true,
                                columns: clumn1({
                                    check: false,
                                    clumns: ['lyString','blr','kssj','bllxString','blrq','bz'],
                                    hidden: []
                                })
                            });

                        }
                    })
                }
             }]);
            
            jqtree.init('jqtree','table');

            // grid.init('subtable',{
            //     url: url.ygryszList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn1( {check:false,
            //         clumns:['lyString','blr','kssj','bllxString','blrq','bz'],
            //         hidden:[]})
            // });
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

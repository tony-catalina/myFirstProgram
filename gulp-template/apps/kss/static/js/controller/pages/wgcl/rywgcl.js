/**
模块名称： 人员违规事件处理
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    require('layer.config');
    var utils=require('awd/layui/utils'); 
    var add = require('services/form/_rywgcl.html');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/wgsjcl');
    var url=require('modules/url');

    var sgFormModify = require('modules/form/wgclRywgcl');
    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            toolbar.init({
                buttons:[
                    {id:'add',name:'人员违规处理',icon:'icon-jiahao',fun:function(){
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                sgFormModify.init(url.wgsjclUpdate, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                    }},
                    {id:'edit',name:'已阅',icon:'icon-jiahao',fun:function(){
                        var data = grid.getSelected('table')[0];
                        if(data) {
                            util.ajax({
                                url: url.wgsjclyyUpdate,
                                data: {id:data.id},
                                func: function(data) {
                                    if (data.success) {
                                        utils.alert(data.msg);
                                        if (tools.isFunction(callback)) {
                                            callback();
                                            utils.closeWin(popwin);
                                        }
                                    } else {
                                        utils.alert(data.msg);
                                    }
                                }
                            });
                        }else {
                            utils.alert('请选择要办理的记录!');
                        }
                    }},
                ]
            });

            linkbar.init({
                links:[
                    {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'wgsj_start',
                        title: '违规时间',
                        type: 'datebox'
                    }, {
                        name: 'wgsj_end',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    param=$.extend({},{
                        'clzt':'',
                        'wglx':'3',
                        'dhlx':'11000'
                    },param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.wgclList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['xm','jqjs','clr','wgsj','wgqk','wgqkcon'],
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
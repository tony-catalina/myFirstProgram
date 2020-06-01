/**
模块名称： 人员违规
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils=require('awd/layui/utils');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var rywgForm = require('modules/form/wgdj_rywg')
    var clumn = require('modules/clumn/jbxx');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                buttons: [
                    {
                        id: 'add', name: '登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData = { wgsj: currentTime };
                                var dataall={};
                                Object.assign(dataall, addData,data);
                                rywgForm.init(url.wgsjclAdd, dataall, function () {
                                    grid.reload('table');
                                });
                            } else {
                                layer.alert('请选择人员!');
                            }

                        }

                    }

                ]


            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { alert(1); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [
                        { 
                            name: 'jsh', 
                            title: '监室号', 
                            type: 'awdCombotree', 
                            url:url.getJqCombotree
                        },
                        {
                            name: 'xm',
                            title: '姓名',
                            type: 'textbox'
                        }
                    ]
                },
                query: function(param) {
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {   
                
            });

            jqtree.init('jqtree','table');
            /**布局初始化**/
        },
        eventBind:function(){
            // /**事件绑定**/
            /**事件绑定**/

        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

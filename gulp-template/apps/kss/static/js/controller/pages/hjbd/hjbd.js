/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var tree = require('awd/easyui/tree');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_hjbdbahj.html');
    var hjbdForm = require('modules/form/hjbd');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');
    var hideshow = require('modules/showHideClumn');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    {
                        id: 'add',
                        name: '办案登记',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function() {
                            var data = grid.getSelected('table'); 
                            if(data) {
                                hjbdForm.init(url.hjbdPlAdd, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1' }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary:[
                        {
                            name: 'snbh',
                            title: '人员编号',
                            type: 'textbox' 
                        },{
                            name: 'xm',
                            title: '姓名',
                            type: 'textbox'
                        }
                    ]
                   
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',true,200, {},function(rybh) { 
            });

            jqtree.init('jqtree','table');

        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

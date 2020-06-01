/**
模块名称： 管教确认
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/spdetailorder');
    var urls = require('modules/url');
    var url = require('modules/url');
    var gjqrAddForm = require('modules/form/gwgl_gjqr');
    var hideshow=require('modules/showHideClumn');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'add', name: '确认通过', icon: 'icon-jiahao', fun: function () {}
                         },
                    { id: 'print', name: '打印', icon: 'icon-iconSVG-' }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search', {
                primary: [{
                    name:'sptm',
                    title: '商品条码',
                    type: 'textbox'
                }],
                query: function (param) {
                    param = $.extend({}, {
                        'status': ' 01',
                        'shzt': '0',
                        'processDefinitionKey': 'kss_gwgl',
                        'taskDefinitionKey': 'kss_gwgl_gjqr',
                    }, param)
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: urls.getProcessForGwgl,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['ddbh','spmc', 'sptm', 'spsl', 'xfje', 'status', 'creator'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/spdetailorder',['ddbh','spmc', 'sptm', 'spsl', 'xfje', 'status', 'creator'],[]);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function() {
                var rows = grid.getSelected('table');
                console.log("==========="+JSON.stringify(rows));
                var postData={};
                postData.list=JSON.stringify(rows);
                postData.shzt='1';
                postData.shyj='批示通过!';

                if(rows!=""){
                    console.log("===444===="+JSON.stringify(rows));
                    console.log("===435===="+JSON.stringify(postData));
                    util.ajax({
                        url: urls.spdetailorderUpdateByList,
                        data: postData,
                        func: function(data) {
                            if (data.success) {
                                utils.alert(data.msg);
                            } else {
                                utils.alert(data.msg);
                            }
                        }
                    });
                }else{
                    $.messager.alert("确定","请选择确认订单","info");
                }

            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
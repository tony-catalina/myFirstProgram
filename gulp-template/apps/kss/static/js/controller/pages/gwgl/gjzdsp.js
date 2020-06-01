/**
模块名称： 管教中队审批
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_gwglGjzdsp.html');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/spdetailorder');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var gjzdspForm=require('modules/form/gwglgjzdsp')
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
                    { id: 'add', name: '审批', icon: 'icon-jiahao', fun: function() { 
                        var data = grid.getSelected('table')[0];
                        var rows=grid.getSelected('table');
                            if(data) {
                                gjzdspForm.init(url.gwglGjzdsp, data,rows, function() {
                                    grid.reload('table');
                                });
                             }else {
                                 utils.alert('请选择要修改的记录!');
                             }
                     } },
                    { id: 'print', name: '打印', icon: 'icon-iconSVG-' }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table');} },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name:'sptm',
                        title: '商品条码',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'status': '01',
                        'shzt': '0',
                        'processDefinitionKey': 'kss_gwgl',
                        'taskDefinitionKey': 'kss_gwgl_gjzdsp',
                    }, param)
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.getProcessForGwgl,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['spmc','spsl', 'xfje', 'sfje', 'gjzdblr', 'gjzdshsj', 'status'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/spdetailorder',['spmc','spsl', 'xfje', 'sfje', 'gjzdblr', 'gjzdshsj', 'status'],[]);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
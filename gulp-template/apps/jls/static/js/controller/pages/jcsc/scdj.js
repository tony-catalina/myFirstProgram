/**
 模块名称: 视察登记
 开始时间: 2020-3-11
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/scqk');
    var url = require('modules/url');
    var formtpl = require('services/form/_jcscScdj.html');
    var hideshow = require('modules/showHideClumn');
    var form = require('modules/form/_jcscScdj');
    var jbxxgrid = require('modules/jbxxgrid');
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
                buttons: [{
                    id: 'add',
                    name: '办理登记',
                    icon: 'icon-taizhang',
                    fun: function() {
                        var data = grid.getSelected('table')[0];
                        // if (data) {
                        form.init(url.scqkSave, data, function() {
                            grid.reload('table');
                        });
                        
                        // } else {
                        //     utils.alert('请选择人员');
                        // }
                    }
                }]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1' }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'ldxm',
                        title: '领导姓名',
                        type: 'textbox'
                    },{
                        name: 'jdr',
                        title: '接待人',
                        type: 'textbox'
                    },],
                    more: [
                        [
                            { name: 'rqStart', title: '视察日期', type: 'datetimebox' },
                            { name: 'rqEnd', title: '至', type: 'datetimebox' },
                            { name: 'jlr', title: '记录人', type: 'textbox' }
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'processDefinitionKey':'',
                                     'taskDefinitionKey':''
                                 }, param);
                 grid.query('table',param);
              }
            });
            /*jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
             });*/
            grid.init('table', {
                url: url.scqkList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rq', 'tt', 'cy', 'jdr', 'ldxm', 'ldzwString','cdsj','scnr','yjjy','zgqk'],
                    hidden: ['cdsj','scnr','yjjy','zgqk']
                })
            });
            hideshow.init('modules/clumn/scqk', ['rq', 'tt', 'cy', 'jdr', 'ldxm', 'ldzwString', 'cdsj', 'scnr', 'yjjy', 'zgqk', 'jlr', 'sfls', 'tt'], ['cdsj', 'scnr', 'yjjy', 'zgqk', 'jlr', 'sfls']);

            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            // $('#add').unbind('click').bind('click', function() {
            //     alert(111);
            // });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
/**
 模块名称: 落实工作
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/szjdjl');
    var url = require('modules/url');
    var formtpl=require('services/form/_ldjfLsgz.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_ldjfLsgz');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_ldjfLsgz');
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
                        id: 'add',
                        name: '办理登记',
                        icon: 'icon-taizhang',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormAdd.init(url.ldjfUpdate, data, function() {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [
                        { name: 'sldxm', title: '所领导姓名', type: 'textbox' },
                        { name: 'jdsjStart', title: '接待时间', type: 'datebox' },
                        { name: 'jdsjEnd', title: '至', type: 'datebox' }
                    ],
                    more: [
                        [
                            { name: 'lfrxm', title: '来访人姓名', type: 'textbox' },
                            { name: 'lfsjStart', title: '来访时间', type: 'datebox' },
                            { name: 'lfsjEnd', title: '至', type: 'datebox' }
                        ],

                    ],
                },
                query:function(param){
                    grid.query('table',param);
                }
            });
            grid.init('table', {
                url: url.szjdjllist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['sldxm','jdsj','zlfxm','lxfs','clqk','lfsj','jdmj','fywt','lfrs','lfxb','lfnl','lfgzdw','lsdz','dfyj'],
                    hidden: ['clqk','jdmj','lfrs','lfxb','lfnl','lfgzdw','lsdz','dfyj']
                })
            });
            hideshow.init('modules/clumn/szjdjl',
                ['sldxm','jdsj','zlfxm','lxfs','clqk','lfsj','jdmj','fywt','lfrs','lfxb','lfnl','lfgzdw','lsdz','dfyj'],
                ['clqk','jdmj','lfrs','lfxb','lfnl','lfgzdw','lsdz','dfyj']);

            /**布局初始化**/
        },
        eventBind:function(){
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
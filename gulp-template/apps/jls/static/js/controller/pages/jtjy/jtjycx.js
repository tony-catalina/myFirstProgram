/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jtjy');
    var url=require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl=require('services/form/_jtjyCx.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_jtjyCx');
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
                    {id:'add',name:'详细信息',icon:'icon-jiahao',fun:function(){
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                form.init('保存路径修改', data, function() {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择人员');
                            }
                    }}
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table'); }},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search',{
                // primary: [{
                //     name: 'jyr',
                //     title: '授课人姓名',
                //     type: 'textbox'
                // }, {
                //     name: 'zw',
                //     title: '授课人职务',
                //     type: 'textbox'
                // }],
                // more: [
                //     [
                //         { name: 'sjStart', title: '时间', type: 'datebox' },
                //         { name: 'sjEnd', title: '至', type: 'datebox' },
                //         { name: 'pzr', title: '批准人', type: 'textbox' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table',{
                url: url.jtjyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jyr','fw','cjrs','sj','bjryfy','bz','jsbh','jyjssj','jykssj','nr','xs','zw'],
                                 hidden:['bjryfy','bz','jsbh','jyjssj','jykssj','nr','xs','zw']})
            });
            hideshow.init('modules/clumn/jtjy',
                ['jyr','fw','cjrs','sj','bjryfy','bz','jsbh','jyjssj','jykssj','nr','xs','zw'],
                ['bjryfy','bz','jsbh','jyjssj','jykssj','nr','xs','zw']);

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
              /*    */
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
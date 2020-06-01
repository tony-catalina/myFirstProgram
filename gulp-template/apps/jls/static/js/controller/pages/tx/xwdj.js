/**
 模块名称: 讯完登记
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_txXwdj');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    { id: 'add', name: '办理登记', icon: 'icon-taizhang', fun: function() { 
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            hdpzFormAdd.init(url.xwdjSave, data, function() {
                                grid.reload('table');
                            });
                        } else {
                            utils.alert("请选择人员");
                        }
                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                primary: [{
                    name: 'xm',
                    title: '姓名',
                    type: 'textbox'
                },{
                    name: 'jsh',
                    title: '拘室号',
                    type: 'combotree'
                }],
                more: [
                    [
                        {name: 'bm', title: '别名', type: 'textbox'},
                        {name: 'ay', title: '案别', type: 'combotree'},
                        { name: 'xb', title: '性别', type: 'combotree'}
                    ],
                    [
                        { name: 'rsrqStart', title: '入所日期', type: 'datetimebox'},
                        { name: 'rsrqEnd', title: '至', type: 'datetimebox' },
                    ]
                ],
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R8',
                                     'processDefinitionKey':'jls_tx',
                                     'taskDefinitionKey':'jls_tx_xwdj'
                                 }, param);
                 grid.query('table',param);
              }
            });
            jbxxgrid.initJbxxflow('table',false,200, {
                'processDefinitionKey':'jls_tx',
                'taskDefinitionKey':'jls_tx_xwdj'
            },function(rybh) {
            });
            // grid.init('table', {
            //     url: url.processTaskList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm','jsh','bm','xb','ayString','rsrq','rsxz','badw','bar','bardh','gyqx','gyts','hjd',
            //         'hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh','zy','zzmm','gzdw','hjdxz',
            //         'jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg','sdnjcjsj','sdnjdw','sdnjjcr',
            //         'sypz','sypzwsh','syr'],
            //         hidden: ['rsxz','bar','bardh','hjd','hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh',
            //         'zy','zzmm','gzdw','hjdxz','jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg',
            //          'sdnjcjsj','sdnjdw','sdnjjcr','sypz','sypzwsh','syr']
            //     })
            // });
            // hideshow.init('modules/clumn/jbxx',
            // ['xm','jsh','bm','xb','ayString','rsrq','rsxz','badw','bar','bardh','gyqx','gyts','hjd',
            // 'hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh','zy','zzmm','gzdw','hjdxz',
            // 'jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg','sdnjcjsj','sdnjdw','sdnjjcr',
            // 'sypz','sypzwsh','syr'],
            // ['rsxz','bar','bardh','hjd','hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh',
            // 'zy','zzmm','gzdw','hjdxz','jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg',
            //  'sdnjcjsj','sdnjdw','sdnjjcr','sypz','sypzwsh','syr']
            //  );
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
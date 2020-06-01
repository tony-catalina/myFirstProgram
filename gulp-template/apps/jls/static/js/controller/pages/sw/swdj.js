/**
 模块名称: 送物登记
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
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var formtpl=require('services/form/_swSwdj.html');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_swSwdj');
    var jbxxgrid=require('modules/jbxxgrid');
    var common=require('common')
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
								var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
								var addData = {tbr:common.info.user.loginname,tbrq:currentTime};
                                form.init(url.songwdjSave,addData, data, function() {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择人员');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search', {
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R8',
                                 }, param);
                 grid.query('table',param);
              }
            });
            // grid.init('table', {
            //     url: url.jbxxList,
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
            //         hidden: ['xb','rsxz','bar','bardh','hjd','hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh',
            //         'zy','zzmm','gzdw','hjdxz','jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg',
            //          'sdnjcjsj','sdnjdw','sdnjjcr','sypz','sypzwsh','syr']
            //     })
            // });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
             });
            // hideshow.init('modules/clumn/jbxx',['xm','jsh','bm','xb','ayString','rsrq','rsxz','badw','bar','bardh','gyqx','gyts','hjd',
            // 'hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh','zy','zzmm','gzdw','hjdxz',
            // 'jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg','sdnjcjsj','sdnjdw','sdnjjcr',
            // 'sypz','sypzwsh','syr'],['xb','rsxz','bar','bardh','hjd','hyzk','mz','sf','tssf','whcd','xzd','zjlx','zjh',
            // 'zy','zzmm','gzdw','hjdxz','jljdjg','jlrq','jyaq','pzajbh','pzflwsh','pzrybh','sdnjccjg',
            //  'sdnjcjsj','sdnjdw','sdnjjcr','sypz','sypzwsh','syr']);

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
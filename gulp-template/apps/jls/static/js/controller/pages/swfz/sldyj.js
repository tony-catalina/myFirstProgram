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
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl=require('services/form/_swfzSldyj.html');
    var hideshow=require('modules/showHideClumn');
    var swfzSldyjForm=require('modules/form/_swfzSldyj');
    var common = require('common');
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
                buttons:[
                    {id:'add',name:'办理登记',icon:'icon-jiahao',fun:function(){
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime=new Date().Format('yyyy-MM-dd hh:mm:ss');
                                var dataStr={sldqmsj:currentTime,sldqm:common.info.user.loginname};
                                var newDate={};
                                Object.assign(newDate,dataStr,data);
                                swfzSldyjForm.init(url.swfzExecuteflow, newDate, function() {
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
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search',{
              pageRender:{
                primary: [{
					name : 'xm',
                    title: '姓名',
                    type: 'textbox'
                }, {
					name : 'jsh',
                    title: '拘室号',
                    type: 'awdCombotree', url:url.jsComboxTree
                }],
                more: [
                    [
                        { name : 'bm',title: '别名', type: 'textbox' },
                        { name : 'ay',title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                        { name : 'xb',title: '性别', type: 'awdCombox' ,url:url.getDictionary +'?node=XB' }
                    ],[
                       
                        { name : 'rsrqStart',title: '入所日期', type: 'datebox' },
                        { name : 'rsrqEnd',title: '至', type: 'datebox' }
                    ]
                ],
            },
				query:function(param){
					   param=$.extend({}, {
										 'state': 'R8',
										 'processDefinitionKey':'jls_swfz',
										 'taskDefinitionKey':'jls_swfz_sldyj'
									}, param);
				    grid.query('table',param);
				 }
            });
            jbxxgrid.initJbxxflow('table',false,200, {'taskDefinitionKey':'jls_swfz_sldyj',
                'processDefinitionKey':'jls_swfz',},function(rybh) {
            });
            // grid.init('table', {
            //     url: url.processTaskList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'ay', 'rsxz', 'badw', 'bar', 'bardh', 'gyqx', 'gyts', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj'],
            //         hidden: ['xb', 'rsxz', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj']
            //     })
            // });
            // hideshow.init('modules/clumn/jbxx', ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'ay', 'rsxz', 'badw', 'bar', 'bardh', 'gyqx', 'gyts', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj'], ['xb', 'rsxz', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj']);
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
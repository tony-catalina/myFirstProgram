/**
 模块名称: 械具使用
 开始时间: 2020-3-7
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var formtpl=require('services/form/_xjsyTqjcdj.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_xjsyTqjcdj');
    var common=require('common');
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
                            $.ajax({
                                url:url.jjList,
                                type:"POST",
                                data:{
                                    "rybh":data.rybh,
                                    "bllxNOT":"03",
                                    "szyj":"1",
                                    "sort":"createtime",
                                    "order":"desc",
                                },
                                success : function(result) {
                                  var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                  var addData = Object.assign({tbrq: currentTime,tbr: common.info.user.loginname},data,result.result.rows[0]);
                                  form.init(url.jjycAndjc,addData, function() {
                                    grid.reload('table');
                                  });
                                },
                            });
                           
                        } else {
                            utils.alert('请选择人员');
                        }
                        
                            // var data = grid.getSelected('table')[0];
                            // if (data) {
                            //     form.init('/jls/jj/jjycAndjc', data, function() {});
                            // } else {
                            //     utils.alert('请选择人员');
                            // }
                    }}
                ]
            });
            linkbar.init({
                links:[
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search',{
                // primary: [{
            	// 	name : 'xm',
                //     title: '姓名',
                //     type: 'textbox'
                // }, {
            	// 	name : 'jsh',
                //     title: '拘室号',
                //     type: 'awdCombotree', url:url.jsComboxTree
                // }],
                // more: [
                //     [
                //         { name : 'bm',title: '别名', type: 'textbox' },
                //         { name : 'ay',title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                //         { name : 'xb',title: '性别', type: 'awdCombox' ,url:url.getDictionary +'?node=XB' }
                //     ],[
                       
                //         { name : 'rsrqStart',title: '入所日期', type: 'datebox' },
                //         { name : 'rsrqEnd',title: '至', type: 'datebox' }
                //     ]
                // ],
            	query:function(param){
            		   param=$.extend({}, {
            							 'state': 'R8',
            							 'jj':'02',
            						}, param);
            	    grid.query('table',param);
            	 }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
            });
            // grid.init('table',{
            //     url: url.jbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn( {check:false,
            //                      clumns:['xm','jsh','bm','rsrq','ayString','badw','gyqx','gyts'],
            //                      hidden:[]})
            // });
            // hideshow.init('modules/clumn/jbxx',['xm','jsh','bm','rsrq','ayString','badw','gyqx','gyts'],[]);

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
              
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
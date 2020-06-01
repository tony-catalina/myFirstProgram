/**
 模块名称： 信件管理
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
    var clumn=require('modules/clumn/_xjgl');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
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
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initYwtz('search',{
                // primary: [{
				// 	name : 'zjtxry',
                //     title: '转交通讯人员',
                //     type: 'textbox'
                // }, {
				// 	name : 'txdw',
                //     title: '通讯单位',
                //     type: 'textbox'
                // }],
                // more: [
                //     [
                //         { name : 'jsr',title: '接收人', type: 'textbox' },
                       
                //         { name : 'jbrqStart',title: '经办日期', type: 'datebox' },
                //         { name : 'jbrqEnd',title: '至', type: 'datebox' }
                //     ],
                //     [
                //         { name : 'xjclqk',title: '处理情况',  type: 'awdCombox' ,url:url.getDictionary +'?node=WGCLQK'},
                //     ]
                // ],
				query:function(param){
					   param=$.extend({}, {
										 'state': 'R2',
									}, param);
				    grid.query('table',param);
				 }
            });
            grid.init('table',{
                url: url.xjglList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jbxx_xm','jbxx_jsh','txdw','xjdz','jsr','lxdm','wtsj','xjclqk'],
                                 hidden:['jbr','jbrq','zjtxry']})
            });
            hideshow.init('modules/clumn/_xjgl',['jbxx_xm','jbxx_jsh','txdw','xjdz','jsr','lxdm','wtsj','xjclqk'],['jbr','jbrq','zjtxry']);

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
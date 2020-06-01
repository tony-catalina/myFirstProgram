/**
 模块名称: 文书补打
 开始时间: 2020-3-12
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
    var glws = require('modules/glws');
    var clumn=require('modules/clumn/fxpg');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');

    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });

            searchform.init('search',{
               pageRender:{
                primary: [{
                    name: 'jbxx_xm',
                    title: '姓名',
                    type: 'textbox'
                }, {
                    name: 'jbxx_jsh',
                    title: '拘室号',
                    type: 'awdCombotree', url:url.jsComboxTree
                }],
                more: [
                    [
                        { name: 'pgr', title: '评估人', type: 'textbox' },
                        { name: 'pgrqStart', title: '评估日期', type: 'datebox' },
                        { name: 'pgrqEnd', title: '至', type: 'datebox' }
                    ]
                ],
               },
                query: function (param) {
                    param = $.extend({}, {
                        'jbxx_state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.fxpglistjbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jbxx_xm', 'jbxx_jsh','jbxx_xb','jbxx_rsrq','jbxx_ay', 'xfxdj', 'pgrq', 'szyj'],
                                 hidden:[]})
            });

            hideshow.init('modules/clumn/fxpg',['jbxx_xm', 'jbxx_jsh', 'pglx', 'xfxdj', 'pgrq', 'szyj'],[]);
           
            glws.init('glws', {
                files:[
                    {name:"审批表",label:'kss_zyrycsjczlspb'},
                    {name:"决定书",label:'kss_zxjyzfhjjds'}
                ]
            });

        }, 
        eventBind:function(){
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
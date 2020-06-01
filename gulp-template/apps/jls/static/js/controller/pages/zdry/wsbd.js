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
    var glws=require('modules/glws');
    var clumn=require('modules/clumn/zdry');
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
                        name: 'jsh',
                        title: '拘室号',
                        type: 'awdCombotree', url:url.jsComboxTree
                    }, {
                      
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'bm', title: '别名', type: 'textbox' },
    
                            { name: 'rsrqStart', title: '线索登记日期', type: 'datetimebox' },
                            { name: 'rsrqEnd', title: '至', type: 'datetimebox' }
                        ], [
                            { name: 'ay', title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                            { name: 'xb', title: '性别', type: 'awdCombox' ,url:url.getDictionary +'?node=XB'}
                        ]
                    ],
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.zdryList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['rygllb','ly','jgcs','qzcs','cpr','cpsj','bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj'],
                                 hidden:['bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj']})
            });
            hideshow.init('modules/clumn/zdry',
                ['rygllb','ly','jgcs','qzcs','cpr','cpsj','bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj'],
                ['bllx','bz','jsbh','ldyj','sldqm','sldqmrq','sldyj','sldyjnr','zdqm','zdqmrq','zdyjnr','zdyj']);
            glws.init('glws', {
                files:[
                    {name:"审批表",label:"kss_zyrycsjczlspb"},
                    {name:"决定书",label:"kss_zxjyzfhjjds"}
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
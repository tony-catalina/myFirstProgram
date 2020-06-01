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
    var clumn=require('modules/clumn/jtjy');
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
                        name: 'jyr',
                        title: '授课人姓名',
                        type: 'textbox'
                    }, {
                        name: 'zw',
                        title: '授课人职务',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'sjStart', title: '时间', type: 'datebox' },
                            { name: 'sjEnd', title: '至', type: 'datebox' },
                            { name: 'pzr', title: '批准人', type: 'textbox' }
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
            grid.init('table', {
                url: url.jtjyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jyr', 'fw', 'cjrs', 'sj','bjryfy', 'bz', 'jsbh', 'jyjssj', 'jykssj', 'nr', 'xs', 'zw'],
                    hidden: ['bjryfy', 'bz', 'jsbh', 'jyjssj', 'jykssj', 'nr', 'xs', 'zw']
                })
            });
            hideshow.init('modules/clumn/jtjy',
                ['jyr', 'fw', 'cjrs', 'sj','bjryfy', 'bz', 'jsbh', 'jyjssj', 'jykssj', 'nr', 'xs', 'zw'],
                ['bjryfy', 'bz', 'jsbh', 'jyjssj', 'jykssj', 'nr', 'xs', 'zw']);

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
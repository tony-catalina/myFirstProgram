/**
 * 业务台账 页面入口
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
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    var hideshow = require('modules/showHideClumn');
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
                    ]
            });

            searchform.init('search',{
                primary: [{
                    name: 'jsh',
                    title: '监室号',
                    type: 'awdCombotree',
                    url: url.getJqCombotree
                }, {
                    name: 'xm',
                    title: '姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                        { name: 'gyqx_end', title: '至', type: 'datebox' }
                    ],
                    [
                        { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' }
                    ]
                ],
                query: function (param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.jbxx,
                fit: false,
                width: '100%',
                height:"250%",
                firstLoad: false,
                //detailviewshow:true,
                columns: clumn({
                    check: false,
                    clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrqString', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                    hidden: ['xbString', 'dwlxString', 'rsxzString', 'rsrqString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
                }),
            });
            hideshow.init('modules/clumn/jbxx',['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);


            glws.init('glws', {
                files:[
                    {name:"在押人员出所检查 、治疗审批表",label:"kss_zyrycsjczlspb"},
                    {name:"准许拘役罪犯回家决定书",label:"kss_zxjyzfhjjds"},
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
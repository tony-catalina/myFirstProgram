/**
模块名称： 文秘宣传
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_wxgs.html');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/qybz');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var qybzwxgsform= require('modules/form/wxgs');
    var jqtree=require('modules/jqtree');//监区树引用
    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            toolbar.init({
                buttons:[
                    {id:'add',name:'新增',icon:'icon-jiahao',ryyw:true,fun:function(){
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                Object.assign(data);
                                qybzwxgsform.init(url.qybzAdd, data,function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员');
                            }

                        }},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table'); }},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'dcsj_start',
                        title: '开始时间',
                        type: 'datebox'
                    }, {
                        name:'dcsj_end',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            {name:'mjxm', title: '民警姓名', type: 'textbox' }
                        ]
                    ]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'bzlx': '维修跟随'
                    }, param)
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.wxgsqybzList+'?bzlx=维修跟随',
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['bzlx','jsh','kssj','jssj','mjxm','dlr','dd'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/qybz',['bzlx','jsh','kssj','jssj','mjxm','dlr','dd'],[]);

            // jqtree.init('jqtree','table');//有监区树就加，没有不加
            tree.initTree('jqtree',{
                url:url.jqtree,
                checkbox:true,
                select:function(){
                },
                BeforeExpand: function(node) {
                    $('#jqtree').tree('options').url = url.jqtree + '?id=' + node.id;
                }
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
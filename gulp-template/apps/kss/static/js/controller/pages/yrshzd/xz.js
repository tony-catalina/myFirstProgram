/**
模块名称： 一日生活制度
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_yrshzd.html');
    var hideshow=require('modules/showHideClumn');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/qybz');
    var url=require('modules/url');
    var yrshzdXzForm = require('modules/form/yrshzd');
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
                    {id:'add',name:'新增',icon:'icon-jiahao',fun:function(){
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            yrshzdXzForm.init(url.qybzAdd, data, function () {
                            });
                        } else {
                            utils.alert('请选择要洗澡的人员!');
                        }
                        // var html = add('form/_yrshzd', {});
                        // utils.showWin({
                        //     title:'洗澡',
                        //     area: ['90%', '85%'],
                        //     content:html,
                        //     maxmin:true,
                        //     success:function(){
                        //         $.parser.parse('#fm');
                        //     },
                        //     yes:function(){
                        //         alert('第一个按钮');
                        //     }
                        // });
                    }},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'StartTime',
                        title: '开始时间',
                        type: 'datebox'
                    }, {
                        name:'EndTime',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            { name:'dcmj', title: '带出民警', type: 'textbox' },
                        ]
                    ]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'bzlx': '洗澡'
                    }, param)
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.qybzList+'?bzlx=洗澡',
                fit: false,
                width: '100%',
                height: '350',
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['bzlx','jsh','kssj','jssj','dcmj','dd'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/qybz',['bzlx','jsh','kssj','jssj','dcmj','dd'],[]);
            jqtree.init('jqtree','table');//有监区树就加，没有不加
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
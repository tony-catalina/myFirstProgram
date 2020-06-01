/**
 模块名称： 文明监室设置
 开始时间： 2020-3-9
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_wmjsSzOrCx.html');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/js');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var wmjsForm = require('modules/form/wmjs_sz');
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
                    {
                        id: 'addTwo',
                        name: '文明监室设置',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                             console.log(data);
                             var nodes = $('#jqtree').tree('getChecked');
                             console.log("+++++++++++"+JSON.stringify(nodes));

                            
                             if(nodes.length == 0){
                                utils.alert("请选择监室！");
                             }else if (nodes.length>1) {
                                 utils.alert("只能选择一个监室！");
                             }else{
                                 for(var i=0;i<nodes.length;i++){
                                     if(nodes[i].id.length < 4){
                                         utils.alert("请正确选择监室！");
                                         return;
                                     }
                                 }
                                 wmjsForm.init(url.wmjsszAdd, nodes[0], function() {
                                     grid.reload('table');

                                 });
                             }






                            //  if(nodes.length>0) {
                            //     wmjsForm.init(url.wmjsszAdd, nodes, function() {
                            //         grid.reload('table');

                            //     });
                            //  }else {
                            //     utils.alert('请选择监室!');
                            //  }


                        }
                    }
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
                        name: 'xssj1',
                        title: '巡视时间',
                        type: 'datebox'
                    }, {
                        name: 'xssj2',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    param=$.extend({},{
                        'shfo':'0',
                    },param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jsList,
                method: 'post',
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jsh','typeString','zgmj','xgmj'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/js',['jsh','typeString','zgmj','xgmj'],[]);

            tree.initTree('jqtree', {
                checkbox: true,
                url: url.jqtree,
                select: function () {
                    grid.query('table', { jsh: util.getTreeSelected($(this), '监区树').id });
                },
                BeforeExpand: function(node) {
                    $("#jqtree").tree('options').url = url.jqtree + "?id=" + node.id;
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

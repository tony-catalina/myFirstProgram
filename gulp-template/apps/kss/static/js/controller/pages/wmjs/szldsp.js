/**
 模块名称： 文明监室设置领导审批
 开始时间： 2020-3-9
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/wmjs');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var tree=require('awd/easyui/tree');
    var wmjsLdspForm = require('modules/form/wmjs_ldsp');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');
    var common=require('common');
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
                        name: '审批',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            console.log(data);
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var postData = Object.assign({},data,{blsj:currentTime,djr:user});
                            if(data) {
                                wmjsLdspForm.init(url.ldspAddByGj, postData, function() {

                                });
                            }else {
                                utils.alert('请选择监室!');
                            }
                        }
                    }
                ]
            });

            linkbar.init({
                links:[
                    //{id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){alert(1);}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){alert(2);}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                }
                ,
                query:function(param){
                    param=$.extend({},{
                        'taskDefinitionKey':'kss_wmjssz_ldsp',
                        'processDefinitionKey':'kss_wmjssz'
                    },param);
                    grid.query('table',param);
                }
            });


            grid.init('table',{
                url: url.processTaskList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['process_jsh','process_sqrq','process_sqr','process_sqyyString'],
                    hidden:[]})
            });

            jqtree.init('jqtree', 'table');

            hideshow.init('modules/clumn/wmjs',['process_jsh','process_sqrq','process_sqr','process_sqyyString'],[]);
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

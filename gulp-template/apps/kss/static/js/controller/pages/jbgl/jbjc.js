/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var clumns=require('modules/clumn/jb');
    var url=require('modules/url'); 
    var hideshow=require('modules/showHideClumn');
    var rightmenu=require('modules/rightmenu');
    var jbxxgrid=require('modules/jbxxgrid');
    var jbgljbjcForm=require('modules/form/jbglJbjc');
    var jqtree=require('modules/jqtree');//监区树引用

    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    {
                        id: 'add',
                        name: '禁闭解除',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData = {};
                                Object.assign(addData, data);
                                jbgljbjcForm.init(url.jbjcAdd, data, function () {
                                    
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'jb': '02',
                        'processDefinitionKey': 'kss_jbjc',
                        'taskDefinitionKey': 'kss_jbjc_jc'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,250, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                    "bllx_in":"01,03"
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                    layer.open({
                        title:"业务信息",
                        area:['90%','600px'],
                        content:"<table id = 'subtable'></table>",
                        btn:['取消'],
                        success: function(){
                            grid.init('subtable', {
                                url: url.jbList,
                                fit: false,
                                width: '100%',
                                height: '300',
                                queryParams:{ "rybh": data[0].rybh},
                                firstLoad: true,
                                columns: clumns({
                                    check: false,
                                    clumns: ['bllx','kssj', 'jssj', 'jbqx', 'syts' ],
                                    hidden: []
                                })
                            });
                        }
                    })
               }} 
          ]);
          
            jqtree.init('jqtree', 'table');

            
        },
        eventBind: function () {
            //事件绑定

        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

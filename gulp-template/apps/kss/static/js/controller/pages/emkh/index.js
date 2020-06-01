define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/emdj');
    var url = require('modules/url');
    var formtpl = require('services/form/_emkhEmkh.html');
    var hideshow = require('modules/showHideClumn');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/emkhEmkh');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var jqtree=require('modules/jqtree');//监区树引用
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                    id: 'add',
                    name: '耳目考核',
                    icon: 'icon-jiahao',
                    ryyw:true,
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                        var postData = Object.assign({}, data, { szrq: currentTime });
                        if (data) {
                            hdpzFormAdd.init(url.emkhAdd, postData, function () {
                                // grid.reload('table')
                             });
                        } else {
                            utils.alert("请选择人员");
                        }
                    }
                }]
            });
            linkbar.init({
                links: [{
                    id: 'list',
                    name: '数据列选择',
                    icon: 'icon-gengduo7',
                    fun: function () {
                        hideshow.show('table');
                    }
                },
                {
                    id: 'color',
                    name: '分色示例',
                    icon: 'icon-gengduo1',
                    fun: function () {

                    }
                }
                ]
            });
            searchform.init('search', {
                query:function(param){
                    param=$.extend({},{
                        'emlx_in':'01,02'
                    },param);
                    grid.query('table',param);
                }
            });


            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url:url.emdjList,
                             fit: false,
                             width: '100%',
                             height: '300',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: clumn1({
                                 check: false,
                                 clumns: ['rybh', 'jbxxXm','jnbx','xlzy',  'emlxString','khpjString'],
                                 hidden: []
                             })
                         });

                     }
                 })
             }}
         ]);

            jqtree.init('jqtree','table');//有监区树就加，没有不加
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});

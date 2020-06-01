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
    var formtpl=require('services/form/_jbglJbsz.html');
    var hideshow=require('modules/showHideClumn');
    var jbglJbszForm=require('modules/form/jbglJbsz')
    var jbxxgrid=require('modules/jbxxgrid');
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
                        name: '禁闭设置',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jbglJbszForm.init(url.jbszAdd, data, function () {
                                });
                            } else {
                                utils.alert('请选择人员!');
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
                        'jb': '01',
                        'taskDefinitionKey': 'kss_jbsz_sz',
                        'processDefinitionKey': 'kss_jbsz'
                    }, param);
                    grid.query('table', param);
                }
            });
            /*jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            });

            jqtree.init('jqtree', 'table');

            jbxxgrid.initjbxx('table',false,250, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                });
            });
            
            grid.init('subtable',{
                url: url.jbList,
                fit: false,
                width: '100%',
                height: '300',
                firstLoad: false,
                columns: clumns( {check:false,
                                 clumns:['bllx','sqyy','jbqx','jbr','kssj','syts','jssj','zdzyj','ldyj','bz'],
                                 hidden:['fw','nr']})
            });*/

            jbxxgrid.initjbxx('table', false, 250, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                        layer.open({
                            title:"业务信息",
                            area: ['90%', '600px'],
                            content:"<table id='subtable'></table>",
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.jbList,
                                    fit: false,
                                    width: '100%',
                                    height: '300',
                                    queryParams:{ "rybh": data[0].rybh},
                                    firstLoad: true,
                                    columns: clumns({
                                        check: false,
                                        clumns:['bllx','sqyy','jbqx','jbr','kssj','syts','jssj','zdzyj','ldyj','bz'],
                                        hidden:['fw','nr']
                                    })
                                });

                            }
                        })
                    }}
            ]);

            // hideshow.init('modules/clumn/jbxx',
            //     ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            //     ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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

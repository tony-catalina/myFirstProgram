/**
模块名称： 接济物品管理
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var formtpl = require('services/form/_jjwpgl.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree= require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jjpglForm=require('modules/form/jjpgl');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    //ref start


    var ryxxAjqkTpl = require('services/com/ryxxajqk.html'); //引入基本信息案件情况HTML模板
    var ryxxJkqkTpl = require('services/com/ryxxjkqk.html'); //引入基本信息健康情况HTML模板
    var ryxxLshjTpl = require('services/com/ryxxlshj.html'); //引入基本信息历史环节HTML模板
    var ryxxTpl = require('services/com/ryxxjbxx.html');
    var ajqkTpl = require('services/com/ryxxajqk.html');
    var jkqkTpl = require('services/com/ryxxjkqk.html');
    var combox = require('awd/easyui/combox');
    var clumnPjdj = require('modules/clumn/pjdj');//引入判决登记clumn
    var clumnTaf = require('modules/clumn/taf');//同案犯clumn
    var clumnJjfjl = require('modules/clumn/jkfjl');//加减分记录clumn
    var clumnJb = require('modules/clumn/jb');//禁闭表格clumn
    var clumnHjbd = require('modules/clumn/hjbd');//历史环节clumn
    var clumnXqbd = require('modules/clumn/jjx');//刑期变动clumn
    var clumnYqxx = require('modules/clumn/yq');//延期信息clumn
    var clumnJy = require('modules/clumn/jy');//就医clumn
    var clumnLshj = require('modules/clumn/lshj');//律师会见clumn
    var clumnTsdj = require('modules/clumn/tsdj');//提审登记clumn
    var clumnDjjl = require('modules/clumn/jstz');//监室调整clumn

    //ref end

    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    {
                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                jjpglForm.init(url.wpjsAddBycw, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } },
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'zszt': '',
                        'cljg': '',
                        'processDefinitionKey': '',
                        'taskDefinitionKey': '',
                    }, param)
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
                // $("#ylqtable").datagrid('reload', {
                //     'rybh': rybh,
                // });
                // $("#wlqtable").datagrid('reload', {
                //     'rybh': rybh,
                // });

            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                layer.tab({
                    area: ['1200px', '600px'],
                    btn: ['取消'],
                    tab: [{
                        title: '已领取接济物品',
                        content: '<table id="ylqTable" class="grid"></table>',
                        
                    }, {
                        title: '未领取接济物品',
                        content: '<table id="wlqTable" class="grid"></table>'
                    }],
                    success: function () {
                        // console.log(rowData)

                        grid.init('ylqTable', {
                            url: url.jbxx,
                            fit: false,
                            width: '1000px',
                            queryParams: { "rybh": data[0].rybh },
                            height: window.innerHeight - 200,
                            firstLoad: true,
                            columns: clumn({
                                check: false,
                                clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'gyqx', 'gyqx', 'badw', 'sykzrq', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                                hidden: [, 'sykzrq', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
                            })


                        });

                        // $("#ylqTable").datagrid('reload', {
                        //     "rybh": data[0].rybh
                        // });

                        grid.init('wlqTable', {
                            url: url.wpcxList,
                            fit: false,
                            width: '1000px',
                            queryParams: { "rybh": data[0].rybh },
                            height: '450',
                            firstLoad: true,
                            columns: clumn({
                                check: false,
                                clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'gyqx', 'gyqx', 'badw', 'sykzrq', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                                hidden: ['sykzrq', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
                            })
                        });

                        $(".layui-layer-title span").each(function(){
                            $(this).click(function(){
                                grid.reload('wlqTable');
                            })
                        })


                        // $("#wlqTable").datagrid('reload', {
                        //     "rybh": data[0].rybh
                        // });
                        $(".layui-layer-content").css("margin-left","30px")
                        $(".layui-layer-tabli").css('margin-top','30px')
                    }
                });
             }
         }
         ]
            );
            
            // grid.init('ylqTable', {
            //     url: url.jbxx,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'gyqx', 'gyqx', 'badw', 'sykzrq', 'xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString'],
            //         hidden: [, 'sykzrq', 'xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString']})
            // });

            // grid.init('wlqTable', {
            //     url: url.wpcxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'gyqx', 'gyqx', 'badw', 'sykzrq', 'xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString'],
            //         hidden: ['sykzrq', 'xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString']})
            // });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
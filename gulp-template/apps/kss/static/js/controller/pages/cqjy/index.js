/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');

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
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            searchform.init('search',{
                query:function(param){
                    param=$.extend({},{
                        'zszt_in':'11,12',
                    },param);
                    grid.query('table',param);
                }
            });

            $('#title').html('已超期人员');
            jbxxgrid.init('table',url.cqjyList,false,true,200, {
            },function(rybh) {
                console.log(rybh);
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                        layer.open({
                            title:'未来7日超期人员',
                            area: ['90%', '600px'],
                            content:'<table id="subtable"></table>',
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.cqjySevenList,
                                    fit: false,
                                    width: '100%',
                                    height: '450',
                                    queryParams:{ 'rybh': data[0].rybh},
                                    firstLoad: true,
                                    columns: clumn({
                                        check: false,
                                        clumns:  ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                                        hidden:  ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString','bahjString'],
                                    })
                                });

                            }
                        });
                    }
                }
            ]);

            // $('#subtitle').html('未来7日超期人员');
            // jbxxgrid.init('subtable',url.cqjySevenList,false,true,500, {
            // },function(rybh) {
            //     console.log(rybh);
            // });
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

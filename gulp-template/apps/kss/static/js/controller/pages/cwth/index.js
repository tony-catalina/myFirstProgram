/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_cwth.html');    //界面控件
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var tree = require('awd/easyui/tree');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumndown = require('modules/clumn/cwth');
    var url = require('modules/url');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var cwthForm = require('modules/form/cwth');
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

    var selectFun;
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
                        name: '现金退还',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                cwthForm.init(url.xjthAdd, data, function () {

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
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8',
                    }, param)
                    grid.query('table', param);
                }
            });


            jbxxgrid.initjbxx('table', false, 250, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                });
                selectFun(rybh)
            }, [{id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                    layer.open({
                        title: "业务信息",
                        area: ['90%', '600px'],
                        content: "<table id='subtable'></table>",
                        btn: ['取消'],
                        success: function () {
                            grid.init('subtable', {
                                url: url.xjzcList,
                                fit: false,
                                width: '100%',
                                height: '500',
                                queryParams: { "rybh": data[0].rybh },
                                firstLoad: true,
                                columns: clumndown({
                                    check: false,
                                    clumns: ['thrq', 'xfje', 'blr', 'zy', 'ksscjrs', 'wjcjrs', 'jskcjrs', 'fw', 'nr'],
                                    hidden: []
                                })
                            });

                        }
                    })
                }
            }
            ]);

            // grid.init('subtable', {
            //     url: url.xjzcList,
            //     fit: false,
            //     width: '100%',
            //     height: '300',
            //     firstLoad: false,

            //     columns: clumn({
            //         check: false,
            //         clumns: ['thrq', 'xfje', 'blr', 'zy', 'ksscjrs', 'wjcjrs', 'jskcjrs', 'fw', 'nr'],
            //         hidden: [, 'fw', 'nr']
            //     })
            // });

            jqtree.init('jqtree', 'table');//有监区树就加，没有不加
        },

        eventBind: function () {
            //事件绑定
            selectFun = function (rybh) {
                $.ajax({
                    url: url.getYeWithRybhAndBz,
                    type: "POST",
                    data: { "rybh": rybh },
                    success: function (res) {
                        console.log(res,8)
                        $('#money').text(res.result)
                        localStorage.setItem("xjth", res.result);
                    }
                })
            }
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
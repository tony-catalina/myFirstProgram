/**
 模块名称: 死亡鉴定
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var form = require('modules/form/_swdjswjd')
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
                buttons: [
                    {
                        id: 'bldj',
                        name: '办理登记',
                        icon: 'icon-taizhang',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                form.init(url.swdjUpdate, data, function () {
                                    grid.reload('table');
                                 });
                            } else {
                                utils.alert('请选择要办理的记录');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.initLc('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'sfjd':'0',
                        'processDefinitionKey': 'jls_swgl',
                        'taskDefinitionKey': 'jls_swgl_swjd'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.swdjList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'ay', 'rsxz', 'badw', 'bar', 'bardh', 'gyqx', 'gyts', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj'],
                    hidden: ['xb', 'rsxz', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj']
                })
            });
            hideshow.init('modules/clumn/jbxx', ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'ay', 'rsxz', 'badw', 'bar', 'bardh', 'gyqx', 'gyts', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj'], ['xb', 'rsxz', 'bar', 'bardh', 'hjd', 'hyzk', 'mz', 'sf', 'tssf', 'whcd', 'xzd', 'bjlrjl', 'zjlx', 'zjh', 'zy', 'zzmm', 'dwdz', 'dwlx', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyy', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypz', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'cwh', 'crjbj']);
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
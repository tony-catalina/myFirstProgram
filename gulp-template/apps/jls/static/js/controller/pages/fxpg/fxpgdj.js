/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_fxpgDj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var fxpgdjform= require('modules/form/_fxpgDj');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    { id: 'add', name: '办理登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                var pgrq = new Date().Format("yyyy-MM-dd");
                                var addData1 = {pgrq: pgrq };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                fxpgdjform.init(url.fxpgaddflow, addData,function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员');
                            }
                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.initLc('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8',
                        'processDefinitionKey': '',
                        'taskDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
            });
            // grid.init('table', {
            //     url: url.jbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'ay', 'badw', 'gyqx', 'gyts','jsbh', 'rybh', 'tbr', 'tbrq', 'wbrybh', 'gcbh', 'ywlcid', 'taskid', 'snbh',
            //             'zjlxString', 'zjh', 'gj', 'whcd', 'sf', 'tssf', 'mz', 'zzmm', 'csrq', 'hyzk','hjd', 'hjdxz', 'jg', 'xzd', 'xzdxz', 'gzdw', 'zy', 'jljdjg', 'bar', 'rsxz', 'syr',
            //             'sypz', 'barjh', 'bardh', 'czdh', 'xb', 'jlrq', 'sdnjccjg', 'sdnjdw','sdnjcjsj', 'sdnjjcr', 'jyaq', 'dah', 'hzflwsh', 'pzrybh', 'pzajbh', 'pzflwsh',
            //             'czzt', 'jsly', 'byjswsh', 'jsrq', 'zxf', 'aqdj', 'rygllb', 'lscsyy', 'lscssj','lscshssj', 'crjbj', 'rkbhgbj', 'rkbhgyy', 'lrsfjs', 'cssj', 'csyy', 'csqx',
            //             'jj', 'jb', 'zdzy', 'ygry', 'yfh', 'cwh', 'fwh', 'rsldsp', 'rsldspnr', 'rsldqm','rsldqmsj', 'state', 'scbz', 'dwlx', 'wfdd', 'sydw', 'creator', 'createtime',
            //             'updator', 'updatetime', 'bhlx', 'csd', 'ky', 'lxdh', 'hjdszpcs', 'tmtbtz','dwdz', 'bjlrjl', 'bjlrjscfqk', 'wfsj', 'fxdj'],
            //         hidden: ['jsbh', 'rybh', 'tbr', 'tbrq', 'wbrybh', 'gcbh', 'ywlcid', 'taskid', 'snbh','zjlxString', 'zjh', 'gj', 'whcd', 'sf', 'tssf', 'mz', 'zzmm', 'csrq', 'hyzk',
            //             'hjd', 'hjdxz', 'jg', 'xzd', 'xzdxz', 'gzdw', 'zy', 'jljdjg', 'bar', 'rsxz', 'syr','sypz', 'barjh', 'bardh', 'czdh', 'xb', 'jlrq', 'sdnjccjg', 'sdnjdw',
            //             'sdnjcjsj', 'sdnjjcr', 'jyaq', 'dah', 'hzflwsh', 'pzrybh', 'pzajbh', 'pzflwsh','czzt', 'jsly', 'byjswsh', 'jsrq', 'zxf', 'aqdj', 'rygllb', 'lscsyy', 'lscssj',
            //             'lscshssj', 'crjbj', 'rkbhgbj', 'rkbhgyy', 'lrsfjs', 'cssj', 'csyy', 'csqx','jj', 'jb', 'zdzy', 'ygry', 'yfh', 'cwh', 'fwh', 'rsldsp', 'rsldspnr', 'rsldqm',
            //             'rsldqmsj', 'state', 'scbz', 'dwlx', 'wfdd', 'sydw', 'creator', 'createtime','updator', 'updatetime', 'bhlx', 'csd', 'ky', 'lxdh', 'hjdszpcs', 'tmtbtz',
            //             'dwdz', 'bjlrjl', 'bjlrjscfqk', 'wfsj', 'fxdj']
            //     })
            // });
            // hideshow.init('modules/clumn/jbxx',
            //     ['xm', 'jsh', 'bm', 'xb', 'rsrq', 'ay', 'badw', 'gyqx', 'gyts','jsbh', 'rybh', 'tbr', 'tbrq', 'wbrybh', 'gcbh', 'ywlcid', 'taskid', 'snbh',
            //         'zjlxString', 'zjh', 'gj', 'whcd', 'sf', 'tssf', 'mz', 'zzmm', 'csrq', 'hyzk','hjd', 'hjdxz', 'jg', 'xzd', 'xzdxz', 'gzdw', 'zy', 'jljdjg', 'bar', 'rsxz', 'syr',
            //         'sypz', 'barjh', 'bardh', 'czdh', 'xb', 'jlrq', 'sdnjccjg', 'sdnjdw','sdnjcjsj', 'sdnjjcr', 'jyaq', 'dah', 'hzflwsh', 'pzrybh', 'pzajbh', 'pzflwsh',
            //         'czzt', 'jsly', 'byjswsh', 'jsrq', 'zxf', 'aqdj', 'rygllb', 'lscsyy', 'lscssj','lscshssj', 'crjbj', 'rkbhgbj', 'rkbhgyy', 'lrsfjs', 'cssj', 'csyy', 'csqx',
            //         'jj', 'jb', 'zdzy', 'ygry', 'yfh', 'cwh', 'fwh', 'rsldsp', 'rsldspnr', 'rsldqm','rsldqmsj', 'state', 'scbz', 'dwlx', 'wfdd', 'sydw', 'creator', 'createtime',
            //         'updator', 'updatetime', 'bhlx', 'csd', 'ky', 'lxdh', 'hjdszpcs', 'tmtbtz','dwdz', 'bjlrjl', 'bjlrjscfqk', 'wfsj', 'fxdj'],
            //     ['jsbh', 'rybh', 'tbr', 'tbrq', 'wbrybh', 'gcbh', 'ywlcid', 'taskid', 'snbh','zjlxString', 'zjh', 'gj', 'whcd', 'sf', 'tssf', 'mz', 'zzmm', 'csrq', 'hyzk',
            // 'hjd', 'hjdxz', 'jg', 'xzd', 'xzdxz', 'gzdw', 'zy', 'jljdjg', 'bar', 'rsxz', 'syr','sypz', 'barjh', 'bardh', 'czdh', 'xb', 'jlrq', 'sdnjccjg', 'sdnjdw',
            // 'sdnjcjsj', 'sdnjjcr', 'jyaq', 'dah', 'hzflwsh', 'pzrybh', 'pzajbh', 'pzflwsh','czzt', 'jsly', 'byjswsh', 'jsrq', 'zxf', 'aqdj', 'rygllb', 'lscsyy', 'lscssj',
            // 'lscshssj', 'crjbj', 'rkbhgbj', 'rkbhgyy', 'lrsfjs', 'cssj', 'csyy', 'csqx','jj', 'jb', 'zdzy', 'ygry', 'yfh', 'cwh', 'fwh', 'rsldsp', 'rsldspnr', 'rsldqm',
            // 'rsldqmsj', 'state', 'scbz', 'dwlx', 'wfdd', 'sydw', 'creator', 'createtime','updator', 'updatetime', 'bhlx', 'csd', 'ky', 'lxdh', 'hjdszpcs', 'tmtbtz',
            // 'dwdz', 'bjlrjl', 'bjlrjscfqk', 'wfsj', 'fxdj']);

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

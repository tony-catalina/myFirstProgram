/**
模块名称： 解除呈批
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/zdry');
    var url = require('modules/url');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/zdryJccp');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
    var common=require('common');
    var hideshow = require('modules/showHideClumn');
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
                        id: 'add', name: '解除呈批', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { jbr: common.info.user.loginname, blrq: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                hdpzFormAdd.init(url.zdryjcAdd, addData, function () {
                                  var  param = $.extend({}, {
                                        // 1 重点 2 秘密 9其他 0 非重点
                                        'zdry': '1'
                                    });
                                    grid.query('table', param);
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function(){hideshow.show('table');}},
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                      // 1 重点 2 秘密 9其他 0 非重点
                        'zdry': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.zdryList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jbxx_xm','snbh','ayString','xbString','rygllbString','lyString','kzcs','csrq','fzss','blrq','creator','createtime','hjd','bm','rsrq','rybh','bllx','bz','id','jbr','state','jsh','jsbh'
                    ],
                    hidden: [
                        'rygllb','csrq','creator','createtime','hjd','bm','rsrq','rybh','bllx','bz','id','jbr','state','jsbh'
                    ]
                })

            });
            hideshow.init('modules/clumn/jbxx',
                ['jbxx_xm','snbh','ayString','xbString','rygllbString','lyString','kzcs','csrq','fzss','blrq','creator','createtime','hjd','bm','rsrq','rybh','bllx','bz','id','jbr','state','jsh','jsbh'
                ],
                ['rygllb','csrq','creator','createtime','hjd','bm','rsrq','rybh','bllx','bz','id','jbr','state','jsbh'
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

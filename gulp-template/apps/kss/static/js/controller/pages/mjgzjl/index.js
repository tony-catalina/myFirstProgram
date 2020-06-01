/**
模块名称： 民警工作经历
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('modules/commFun');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/mjjbxx');
    var clumn1 = require('modules/clumn/mjgzjl');
    var url = require('modules/url');
    var mjjyjlAddForm = require('modules/form/mjgzjl');
    var mjjyjlUpdateForm = require('modules/form/mjgzjlModify');
    var mjjbxxgrid=require('modules/mjjbxxgrid');
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
                    { id: 'add', name: '新增', icon: 'icon-jiahao',ryyw:true,fun:function(){
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                // var qsny = new Date().Format("yyyy-MM-dd");
                                // var addData = {};
                                // var addData1 = { qsny: qsny, creator: '' };
                                // Object.assign(addData, data,addData1);
                                mjjyjlAddForm.init(url.mjgzjlAdd,data,{},function () {
                                    grid.reload('subtable');
                                });
                            } else {
                                layer.alert('必须选中一人办理!');
                            }
                        }}
                    // { id: 'edit', name: '修改', icon: 'icon-jiahao',fun:function(){
                    //         var dataall = grid.getSelected('subtable')[0];
                    //         if (dataall) {
                    //             var data1 = grid.getSelected('table')[0];
                    //             var data2 = {jlid: dataall.id};
                    //             var addData = {};
                    //             Object.assign(addData, data1, data2);
                    //             mjjyjlUpdateForm.init(url.mjgzjlUpdate, addData, dataall, function () {
                    //                 grid.reload('subtable');
                    //             });
                    //         } else {
                    //             layer.alert('请选择要修改的记录!');
                    //         }
                    //     }}
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {

                    param = $.extend({}, {
                        'flag': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            mjjbxxgrid.init('table', false, 250, function (rybh) {
                
            },
            [{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     zIndex: 100,
                     type:1,
                     content:'<div class="section-container">' +
                     '<div class="section-item section-item-one section-item-padding">' +
                     '<div class="section-header" style="margin-bottom:1%;">' +
                     '<div class="section-controls single-colors" id="tools">' +
                     '<button type="button" id="edit">' +
                     '<span class="iconfont icon-jiahao"></span>修改' +
                     '</button>' +
                     '</div>' +
                     ' </div>' +
                     ' <div class="section-item-content border-top">' +
                     '<form id="search" class="search-form"></form>' +
                     '<table id="subtable" ></table>' +
                     '</div>' +
                     '</div>' +
                     ' </div> ',
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.mjgzjlList,
                             fit: false,
                             width: '100%',
                             height: '300',
                             queryParams:{ "jh": data[0].jh},
                             firstLoad: true,
                             columns: clumn1({
                                 check: false,
                                 clumns: ['qsny', 'zzny', 'dwmc', 'zw', 'zmr'],
                                 hidden: []
                             })
                         });
                         $('#edit').on('click', function () {
                            var dataall = grid.getSelected('subtable')[0];
                            if (dataall) {
                                var data1 = grid.getSelected('table')[0];
                                var data2 = {jlid: dataall.id};
                                var addData = {};
                                Object.assign(addData, data1, data2);
                                mjjyjlUpdateForm.init(url.mjgzjlUpdate, addData, dataall, function () {
                                    grid.reload('subtable');
                                });
                            } else {
                                layer.alert('请选择要修改的记录!');
                            }
                        });

                     }
                 })
             }
         }
         ]);
            hideshow.init('modules/clumn/mjjbxx', ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'], ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']);
            // grid.init('subtable', {
            //     url: url.mjgzjlList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['qsny', 'zzny', 'dwmc', 'zw', 'zmr'],
            //         hidden: []
            //     })
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

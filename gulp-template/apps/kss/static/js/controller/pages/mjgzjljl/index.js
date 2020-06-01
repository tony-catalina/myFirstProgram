/**
模块名称： 民警工作记录
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
    var mjjbxxgrid=require('modules/mjjbxxgrid');
    var clumn = require('modules/clumn/mjjbxx');
    var clumn1 = require('modules/clumn/mjgzjl');
    var url = require('modules/url');
    var mjgzjljlFormAdd = require('modules/form/mjgzjljl')
    var add = require('services/form/_mjgzjljl.html');
    var rybh_ = "";
    var selectFun = function (rybh) {
        if (!rybh == rybh_) {
            $("#subtable").datagrid('reload', {
                'jh': rybh,
            });
            rybh_ = rybh;
        } else {
            rybh_ = "";
        }

    }
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
                        id: 'add', name: '新增', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                mjgzjljlFormAdd.init(url.xljkList, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                    // {
                    //     id: 'edit', name: '修改', icon: 'icon-jiahao', ryyw: true, fun: function () {
                    //         // var data = grid.getSelected('table')[0];
                    //         // if (data) {
                    //         mjgzjljlFormAdd.init(url.xljkList, {}, function () {
                    //             // grid.reload('subtable');
                    //         });
                    //         // } else {
                    //         // utils.alert("请选择人员");
                    //         // }
                    //     }
                    // }
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
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'sj', title: '时间', type: 'datebox' },
                            { name: 'sj_end', title: '至', type: 'datebox' }
                        ],
                       
                    ],
                },

                query: function (param) {

                    param = $.extend({}, {
                        'flag': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            mjjbxxgrid.init('table', false, 250, function (rybh) {
                
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                layer.open({
                    title:"业务信息",
                    zIndex:1000,
                    type:1,
                    area: ['90%', '600px'],
                    content: '<div class="section-container">' +
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
                        grid.init('subtable',{
                        url: url.mjgzjlList,
                        fit: false,
                        width: '100%',
                        queryParams:{ "jh": data[0].jh},
                        height: window.innerHeight - 200,
                        firstLoad: true,
                        columns: clumn1( {check:false,
                            clumns:['gzgw', 'sj', 'gzlx', 'gzqk', 'bz'],
                            hidden:[]})
                    });
                    $("#edit").click(function(){
                        var data = grid.getSelected('subtable')[0];
                        if(data) {
                            mjgzjljlFormAdd.init(url.xljkList, data, function() {
                                grid.reload("table");
                            });
                        }else {
                            utils.alert('请选择要修改的记录!');
                        }
                        })
                    }
                })
             }
         }
         ])
            hideshow.init('modules/clumn/mjjbxx',
                ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'],
                ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']);

        //     grid.init('subtable', {
        //         url: url.mjgzjlList,
        //         fit: false,
        //         width: '100%',
        //         height: window.innerHeight - 200,
        //         firstLoad: false,
        //         columns: clumn1({
        //             check: false,
        //             clumns: ['gzgw', 'sj', 'gzlx', 'gzqk', 'bz'],
        //             hidden: []
        //         })
        //     });
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
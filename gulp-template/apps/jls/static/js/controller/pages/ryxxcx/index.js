/**
 模块名称: 人员信息查询
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_ryxxcx.html');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar')
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
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
                    {
                        id: 'add', name: '本页照片显示', icon: 'icon-icon-chaxun', fun: function () {
                            var rowss = $("#table").datagrid('getRows');
                            console.log("=====" + JSON.stringify(rowss));
                            var rybh = '';
                            for (var i = 0; i < rowss.length; i++) {
                                rybh += rowss[i].rybh + ',';
                            }
                            console.log("===" + rybh);
                            rybh = rybh.substring(0, rybh.length - 1);

                            var html = add('form/_ryxxcx', {});
                            utils.showWin({
                                title: '数据录入',
                                area: ['90%', '85%'],
                                content: html,
                                // maxmin: true,
                                success: function () {
                                    $.parser.parse('#fm');

                                    $.ajax({
                                        type: "post",  //提交方式
                                        url: "/jls/jbxx/listByPhoto",//路径
                                        data: {
                                            "state": "R8",
                                            "rybhIN": rybh,
                                        },
                                        success: function (result) {
                                            $("#page").pagination({
                                                total: result.total,
                                            })


                                            var mainhtml = '<div style="width:100%;height:100%;display:flex;justify-content: start;flex-wrap: wrap;">'
                                            for (var i = 0; i < result.result.rows.length; i++) {
                                                // alert(i)
                                                // console.log(result.result.rows[i].photoUrl)
                                                var zpurl;
                                                // var ss=JSON.stringify(result.result.rows[i].photosModel.photourl);


                                                /*if (result.result.rows[i].photoUrl != null && result.result.rows[i].photoUrl != '' ) {
                                                    zpurl = result.result.rows[i].photoUrl;
                                                } else {
                                                    zpurl = '/apps/jls/static/images/cm1.png';
                                                }*/
                                                if(result.result.rows[i].photosModel!=null){
                                                    if (result.result.rows[i].photosModel.photourl != '0' ) {
                                                        zpurl = result.result.rows[i].photosModel.photourl;
                                                    } else {
                                                        zpurl = '/apps/jls/static/images/cm1.png';
                                                    }
                                                }else {
                                                    zpurl = '/apps/jls/static/images/cm1.png';
                                                }




                                                mainhtml += '<div style="width:28%;margin:0 5% 3% 0;height:300px;border:1px solid #297aff;">' +
                                                    '<div style="display: flex;justify-content: space-between;width:100%;height:250px;">' +
                                                    '<div style="width:55%;height:100%;">' +
                                                    '<img src="' + zpurl + '" alt="" style="width:100%;height:100%;">' +
                                                    '</div>' +
                                                    '<div style="width:45%;height:250px;">' +
                                                    '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">' + result.result.rows[i].jbxxModel.xm + '</div>' +
                                                    '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">' + result.result.rows[i].jbxxModel.xbString + '</div>' +
                                                    '<div title="1980-12-21"  style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:49px;line-height:49px;border-bottom:1px solid #297aff;">' + result.result.rows[i].jbxxModel.rsrq + '</div>' +
                                                    '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">' + result.result.rows[i].jbxxModel.jsh + '</div>' +
                                                    '<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:50px;line-height:50px;border-bottom:1px solid #297aff;" title="">' + result.result.rows[i].jbxxModel.ayString + '</div>' +
                                                    '</div>' +
                                                    '</div>' +
                                                    '<div style="width:100%;height:50px;line-height:50px;padding-left:5%;">关押期限：' + result.result.rows[i].jbxxModel.gyqx + '</div>' +
                                                    '</div>'
                                            }
                                            mainhtml += '</div>'
                                            mainhtml += ''
                                            $.parser.parse('#fm');
                                            $('#maincontent').append(mainhtml)


                                            /* $('#maincontent').append(
                                                 '<img src="'+result.result.rows[i].photourl+'" alt="" style="width:100%;height:100%;">'+
                                                 //         '</div>' +
                                                 //         '<div style="width:45%;height:250px;">' +
                                                         '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">'+result.result.rows[i].jbxxModel.xm+'</div>'
                                                 //         '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">'+result.result.rows[i].jbxxModel.xbString+'</div>' +
                                                 //         '<div title="1980-12-21"  style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:49px;line-height:49px;border-bottom:1px solid #297aff;">'+result.result.rows[i].jbxxModel.rsrq+'</div>' +
                                                 //         '<div style="height:50px;line-height:50px;border-bottom:1px solid #297aff;">'+result.result.rows[i].jbxxModel.jsh+'</div>' +
                                                 //         '<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:50px;line-height:50px;border-bottom:1px solid #297aff;" title="">'+result.result.rows[i].jbxxModel.ayString+'</div>' +
                                                 //         '</div>' +
                                                 //         '</div>' +
                                                 //         '<div style="width:100%;height:50px;line-height:50px;padding-left:5%;">关押期限：'+result.result.rows[i].jbxxModel.gyqx+'</div>' +
                                                 //         '</div>'


                                             )*/

                                        }

                                    });

                                },
                                yes: function () {
                                    alert('第一个按钮');
                                }
                            });


                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    {
                        id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '拘室号',
                        type: 'awdCombotree',
                        url: url.jsComboxTree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            {name: 'dah', title: '档案编号', type: 'textbox'},
                            {name: 'rsrqStart', title: '入所日期', type: 'datebox'},
                            {name: 'rsrqEnd', title: '至', type: 'datebox'}
                        ]
                    ],
                },
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': '',
                        'taskDefinitionKey': '',
                        'state': 'R8'
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
            //         clumns: ['xm', 'jsh', 'bm', 'rsrq', 'ayString', 'dah', 'badw', 'gyqx', 'gyts'],
            //         hidden: []
            //     })
            // });
            // hideshow.init('modules/clumn/jbxx', ['xm', 'jsh', 'bm', 'rsrq', 'ayString', 'dah', 'badw', 'gyqx', 'gyts'], []);
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
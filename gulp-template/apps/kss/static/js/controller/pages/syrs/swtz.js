/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var Subclumn = require('modules/clumn/shff');
    var clumn = require('modules/clumn/jbxx');
    var Thrclumn = require('modules/clumn/photos');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var addForm = require('modules/form/syrsswtz');
    var jbxxgrid = require('modules/jbxxgrid');
    var common = require('common');
    var rightmenu=require('modules/rightmenu');
    var util = require('awd/easyui/util');
    var popwin;
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
                        id: 'add', name: '指纹', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            console.log(data)
                            if (data) {
                                var addData1 = { btnid: 'zw' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init('', addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                    {
                        id: 'edit', name: '虹膜', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData1 = { btnid: 'hm' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init('', addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                    {
                        id: 'del', name: '人脸', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData1 = { btnid: 'rl' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init('', addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                    {
                        id: 'cri', name: '手环', icon: 'icon-jiahao', ryyw: true, ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { btnid: 'sh', bdsj: currentTime, bdr: common.info.user.loginname };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.shffAdd, addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                    {
                        id: 'pic', name: '人像', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData1 = { btnid: 'tp' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.saveSwtz, addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                    {
                        id: 'jia', name: '人像(佳能)', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData1 = { btnid: 'tpjn' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.saveSwtz, addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                    {
                        id: 'fin', name: '已采集完成', icon: 'icon-jiahao', fun: function () {
                            var row = grid.getSelected('table')[0];
                            if (row) {
                                $.messager.confirm('提示', '确定要进入下一流程？', function (r) {
                                    if (r) {
                                        var data = { "taskid": row.taskid, "rybh": row.rybh, "snbh": row.snbh, "xm": row.xm, "jsh": row.jsh };
                                        util.ajax({
                                            type: "POST",
                                            url: url.OutSwtz,
                                            data: data,
                                            func: function (result) {
                                                if (result.success) {
                                                    utils.alert("采集成功");
                                                } else {
                                                    utils.alert("跳过失败");
                                                }
                                                grid.reload('table');
                                            }
                                        });
                                    }
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
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

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_rsdj_swtzcj',
                        'processDefinitionKey': 'kss_rsdj'
                    }, param);
                    grid.query('table', param);
                }
            });

            // jbxxgrid.initJbxxflow('table', false, 400, {
            //     'taskDefinitionKey': 'kss_rsdj_swtzcj',
            //     'processDefinitionKey': 'kss_rsdj'
            // }, function (rybh) {
            //     $("#zpwhTable").datagrid('reload', {
            //         "rybh": rybh
            //     });
            //     $("#shglTable").datagrid('reload', {
            //         "rybh": rybh
            //     });
            // });

            // $(".swtz-record .tab .tab-item").click(function () {
            //     $(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background", "#5191f0");
            //     $(".products .mainCont").eq($(this).index()).show().siblings().hide();
            //     if ($(this)[0].innerText == '手环管理') {
            //         $('#shglTable').datagrid('resize');
            //     }
            //     if ($(this)[0].innerText == '照片维护') {
            //         $('#zpwhTable').datagrid('resize');
            //     }
            // })
            
            grid.init("table",{
                url: url.processTaskList,
                fit: false,
                width: '100%',
                queryParams:{ 
                    'taskDefinitionKey': 'kss_rsdj_swtzcj',
                    'processDefinitionKey': 'kss_rsdj'
                },
                method: 'post',
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                    hidden: ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
                }),
                onRowContextMenu:function(e, rowIndex, rowData){
                  e.preventDefault(); //阻止浏览器捕获右键事件
                  $(this).datagrid("clearSelections"); //取消所有选中项
                  $(this).datagrid("selectRow", rowIndex); //根据索引选中该行
                  $('#contextMenu').menu('show', {
                      left: e.pageX,//在鼠标点击处显示菜单
                      top: e.pageY
                  });
                  e.preventDefault();  //阻止浏览器自带的右键菜单弹出
                }
            })
            rightmenu.init('table',{
                menus:[
                    {id:'rymx',icon:'',name:'人员详情',fun:function(data){
                        console.log(data);
                        data = data[0];
                        var ryxxHtml = ryxxTpl("com/ryxxjbxx", data);
                        var ryxxajqkHtml = ajqkTpl("com/ryxxajqk", data);
                        var jkqkHtml = jkqkTpl("com/ryxxjkqk", data);
                        $.ajax({
                          url: url.jkqkAndTmtzList, type: 'POST', data: { "rybh": data.rybh },
                          success: res => {
                            console.log(res + 9999999999999999999999);
                            
                          }
                        })
                        layer.tab({
                          area: ["100%", "100%"],
                          btn: ["取消"],
                          tab: [
                            {
                              title: "基本信息",
                              content: ryxxHtml,
        
                            },
                            {
                              title: "案件情况",
                              content: ryxxajqkHtml,
                            },
                            {
                              title: "健康情况",
                              content: jkqkHtml,
                            },
                            {
                              title: "历史环节",
                              content: '<table id="hjbdId" class="grid"></table>',
                            },
                            {
                              title: "刑期变动",
                              content: '<table id="xqbdId" class="grid"></table>',
                            },
                            {
                              title: "延期信息",
                              content: '<table id="yqxxId" class="grid"></table>',
                            },
                            {
                              title: "判决登记",
                              content: '<table id="pjdjId" class="grid"></table>',
                            },
                            {
                              title: "提审登记",
                              content: '<table id="tsdjId" class="grid"></table>',
                            },
                            {
                              title: "律师会见",
                              content: '<table id="lshjId" class="grid"></table>',
                            },
                            {
                              title: "同案犯",
                              content: '<table id="tafId" class="grid"></table>',
                            },
                            {
                              title: "就医信息",
                              content: '<table id="jyxxId" class="grid"></table>',
                            },
                            {
                              title: "加减分记录",
                              content: '<table id="jjfjlId" class="grid"></table>',
                            },
                            {
                              title: "调监记录",
                              content: '<table id="djjlId" class="grid"></table>',
                            }
                          ],
                          success: function () {
                            $.parser.parse();
                            $(".layui-layer-title span").each(function () {
                              $(this).click(function () {
                                if ('历史环节' == $(this).html()) {
                                  grid.init('hjbdId', {
                                    url: url.hjbdList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnHjbd({
                                      check: false,
                                      clumns: ['bahjString', 'qsrq', 'gyqx', 'dwlxString', 'badw', 'bar', 'wsh'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('刑期变动' == $(this).html()) {
                                  grid.init('xqbdId', {
                                    url: url.jjxList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnXqbd({
                                      check: false,
                                      clumns: ['blrq', 'yxmrq', 'jjxq', 'xmsfrq', 'pzr', 'pzwh'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('延期信息' == $(this).html()) {
                                  grid.init('yqxxId', {
                                    url: url.jjxList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnYqxx({
                                      check: false,
                                      clumns: ['blrq', 'ygyqxString', 'xgyqxString', 'flwsh', 'pzr', 'pzdwString', 'bz'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('判决登记' == $(this).html()) {
                                  grid.init('pjdjId', {
                                    url: url.pjdjList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnPjdj({
                                      check: false,
                                      clumns: ['pjrq', 'pjdw', 'wsh', 'cljg', 'fjx', 'xq'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('提审登记' == $(this).html()) {
                                  grid.init('tsdjId', {
                                    url: url.tsdjList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnTsdj({
                                      check: false,
                                      clumns: ['dw', 'tsry', 'txlx', 'lfrzjh', 'kssjString', 'jssjString', 'jsr'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('律师会见' == $(this).html()) {
                                  grid.init('lshjId', {
                                    url: url.lswgdjQuery,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnLshj({
                                      check: false,
                                      clumns: ['lsxm', 'zjh', 'dwString', 'rs', 'hjsjString'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('同案犯' == $(this).html()) {
                                  grid.init('tafId', {
                                    url: url.tafList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnTaf({
                                      check: false,
                                      clumns: ['rybh', 'jsbh', 'tafh', 'xm'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('就医信息' == $(this).html()) {
                                  grid.init('jyxxId', {
                                    url: url.jyList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnJy({
                                      check: false,
                                      clumns: ['zdrqString', 'ysxmString', 'brzs', 'yyzdjg', 'cljg', 'csjylxString'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('加减分记录' == $(this).html()) {
                                  grid.init('jjfjlId', {
                                    url: url.jkfjlList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnJjfjl({
                                      check: false,
                                      clumns: ['szrqString', 'jkfz', 'gjxm', 'typeString', 'jkfsyString'],
                                      hidden: []
                                    })
                                  });
                                }
                                if ('调监记录' == $(this).html()) {
                                  grid.init('djjlId', {
                                    url: url.jstzList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { "rybh": data.rybh },
                                    firstLoad: true,
                                    columns: clumnDjjl({
                                      check: false,
                                      clumns: ['yjsh', 'xjsh', 'tjr', 'tzsj'],
                                      hidden: []
                                    })
                                  });
                                }
                              })
                            })
        
                          },
                        });
                    }},
                    {id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                        layer.tab({
                            area: ['1200px', '600px'],
                            btn: ['取消'],
                            tab: [{
                              title: '照片维护', 
                              content: '<table id="zpwhTable" class="grid"></table>'
                            }, {
                              title: '手环管理', 
                              content: '<table id="shglTable" class="grid"></table>'
                            }],
                            success:function(){
                                console.log(data);
                                grid.init('zpwhTable', {
                                    url: url.photosList,
                                    fit: false,
                                    width: '1000px',
                                    queryParams:{ "rybh": data[0].rybh},
                                    height: window.innerHeight - 200,
                                    firstLoad: true,
                                    columns: Thrclumn({
                                        check: false,
                                        clumns: ['type', 'ywzp', 'photoUrl'],
                                        hidden: []
                                    }),
                                    onDblClickCell: function (index, field, value) {
                                        var selectedRow = $(this).datagrid('getSelected');
                                        var html = '<div style="text-align: center;margin-top: 22px;">' +
                                            '<img src="" alt="" id="blocktu" style="width:430px;height:390px;">' +
                                            '</div>'
                                        html += '';
                                        layer.open({
                                            title: '照片查看',
                                            area: ['550px', '550px'],
                                            content: html,
                                            buttons: 0,
                                            maxmin: true,
                                            success: function () {
                                                $("#blocktu").attr("src", selectedRow.photoUrl)
                                            }
                                        });
                                    }
                                });
                                
                                $(".layui-layer-title span").each(function(){
                                    $(this).click(function(){
                                        grid.reload('shglTable');
                                    })
                                })
    
                                grid.init('shglTable', {
                                    url: url.shffList,
                                    fit: false,
                                    width: '1000px',
                                    queryParams:{ "rybh": data[0].rybh},
                                    height: window.innerHeight - 200,
                                    firstLoad: true,
                                    columns: Subclumn({
                                        check: false,
                                        clumns: ['shid', 'bdsj', 'bdr'],
                                        hidden: []
                                    })
                                });
                                $(".layui-layer-content").css("margin-left","30px")
                                $(".layui-layer-tabli").css('margin-top','30px')
                            }
                          }); 
                    }}
                ]
            }),
            hideshow.init('modules/clumn/jbxx',
            ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);

            // grid.init('zpwhTable', {
            //     url: url.photosList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 400,
            //     firstLoad: false,
            //     columns: Thrclumn({
            //         check: false,
            //         clumns: ['type', 'ywzp', 'photoUrl'],
            //         hidden: []
            //     }),
            //     onDblClickCell: function (index, field, value) {
            //         var selectedRow = $(this).datagrid('getSelected');
            //         var html = '<div style="text-align: center;margin-top: 22px;">' +
            //             '<img src="" alt="" id="blocktu" style="width:430px;height:390px;">' +
            //             '</div>'
            //         html += '';
            //         layer.open({
            //             title: '照片查看',
            //             area: ['550px', '550px'],
            //             content: html,
            //             buttons: 0,
            //             maxmin: true,
            //             success: function () {
            //                 $("#blocktu").attr("src", selectedRow.photoUrl)
            //             }
            //         });
            //     }
            // });
            // grid.init('shglTable', {
            //     url: url.shffList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: Subclumn({
            //         check: false,
            //         clumns: ['shid', 'bdsj', 'bdr'],
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
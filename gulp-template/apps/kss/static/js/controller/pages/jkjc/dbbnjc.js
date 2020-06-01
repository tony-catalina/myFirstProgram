/**
模块名称： 健康检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jkjcDbbnjc.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/jkqk');
    var url = require('modules/url');
    var jkjcDbbnjcForm = require('modules/form/jkjcDbbnjc');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                buttons: [{
                        id: 'add',
                        name: '半年检查',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jkjcDbbnjcForm.init(url.saveJkqkAndTmtzByYw, data, function () {
                                    grid.reload('subtable');
                                });
                            } else {
                                utils.alert('请选择人员');
                            }
                        }
                    },
                    {
                        id: 'excel',
                        name: '查询结果导入到Excel中',
                        icon: 'icon-jiahao'
                    },
                ]
            });

            linkbar.init({
                links: [{
                        id: 'list',
                        name: '数据列选择',
                        icon: 'icon-gengduo7',
                        fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1',
                        fun: function () {}
                    }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            // jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
            //     $("#subtable").datagrid('reload', {
            //         "rybh": rybh
            //     });
            // });
            jqtree.init('jqtree', 'table');

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    'gcbh': rybh,
                });
            },[{id:'rymx',icon:'',name:'人员详情',
            fun: function (data) {
                console.log(data);
                data = data[0];
                var ryxxHtml = ryxxTpl("com/ryxxjbxx", data);
                var ryxxajqkHtml = ajqkTpl("com/ryxxajqk", data);
                var jkqkHtml = jkqkTpl("com/ryxxjkqk", data);
                $.ajax({
                  url: url.jkqkAndTmtzList, type: 'POST', data: { "rybh": data.rybh },
                  success: res => {
                    // console.log(res + 9999999999999999999999);
                    // jkqkHtml = jkqkTpl("com/ryxxjkqk", res);
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
                              clumns: ['pjrq', 'pjdw', 'wsh', 'cljgString', 'fjxString', 'xq'],
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
              },
        },
            {id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.jkqkAndTmtzList,
                             fit: false,
                             width: '100%',
                             height: '500',
                             queryParams:{ "gcbh": data[0].rybh},
                             firstLoad: true,
                             columns: clumn1({
                                 check: false,
                                 clumns: ['sg', 'tz', 'zc', 'jkzkString', 'jcys', 'ysjcrqString', 'jclxString'],
                                 hidden: []
                             })
                         });

                     }
                 })
             }}
         ]);

            // grid.init('subtable', {
            //     url: url.jkqkAndTmtzList,
            //     fit: false,
            //     width: '100%',
            //     height: '200',
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['sg', 'tz', 'zc', 'jkzkString', 'jcys', 'ysjcrqString', 'jclxString'],
            //         hidden: []
            //     })
            // });

            jqtree.init('jqtree', 'table'); //有监区树就加，没有不加
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
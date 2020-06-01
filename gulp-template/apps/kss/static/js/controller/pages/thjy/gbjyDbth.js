/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var utils = require('awd/layui/utils');
    var gbjyDbthForm = require('modules/form/gbjyDbth')
    var thjyclumn = require('modules/clumn/thjy');
    var jbxxgrid=require('modules/jbxxgrid');
    var clumn = require('modules/clumn/jbxx');
    var jqtree = require('modules/jqtree');
    var combox = require('awd/easyui/combox');
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
                buttons: [{
                    id: 'dbthAdd', name: '谈话教育登记', icon: 'icon-jiahao',ryyw:true, fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            gbjyDbthForm.init(url.thjyAdd, data, function () {

                            });
                        } else {
                            utils.alert('请选择要办理的人员');
                        }
                    }
                }]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_thjy',
                        'processDefinitionKey': 'kss_thjy_add'
                    }, param);
                    grid.query('table', param);

                }
            });
            
            jbxxgrid.initJbxxflow('table',false,300, {'taskDefinitionKey': 'kss_thjy','processDefinitionKey': 'kss_thjy_add'},function(rybh) {

             },[{
                id:'rymx',icon:'',name:'人员详情',fun:function(data){
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
                }
             },{
                id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                    layer.open({
                        title:"业务信息",
                        area: ['90%', '600px'],
                        content:"<table id='subtable'></table>",
                        btn: ['取消'],
                        success: function () {
                            grid.init('subtable', {
                                url: url.thjyList,
                                fit: false,
                                width: '100%',
                                height: '450px',
                                queryParams:{ "rybh": data[0].rybh},
                                firstLoad: true,
                                columns: thjyclumn({
                                    check: false,
                                    clumns: ['thyyString', 'fzmj', 'kssj', 'jssj'],
                                    hidden:  []
                                })
                            });

                        }
                    })
                }
             }]);
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
    // $(main.init);
    return main;

});
define(function(require,exports){
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var ryxxTpl = require("services/com/ryxxjbxx.html");
    var ajqkTpl = require("services/com/ryxxajqk.html");
    var jkqkTpl = require("services/com/ryxxjkqk.html");
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
    var main={
        init:function(data){
            data=JSON.parse(data);
            var ryxxHtml = ryxxTpl("com/ryxxjbxx", data);
            var ryxxajqkHtml = ajqkTpl("com/ryxxajqk", data);
            var jkqkHtml = jkqkTpl("com/ryxxjkqk", data);
            $.ajax({
                url: url.jkqkAndTmtzList, type: 'POST', data: { "rybh": data.rybh },
                success: res => {
                }
            })
            layer.tab({
                area: ['100%', '100%'],
                closeBtn: 0,
                tab: [
                    {
                        title: '基本信息',
                        content: ryxxHtml,

                    },
                    {
                        title: '案件情况',
                        content: ryxxajqkHtml,
                    },
                    {
                        title: '健康情况',
                        content: jkqkHtml,
                    },
                    {
                        title: '历史环节',
                        content: '<table id="hjbdId" class="grid"></table>',
                    },
                    {
                        title: '刑期变动',
                        content: '<table id="xqbdId" class="grid"></table>',
                    },
                    {
                        title: '延期信息',
                        content: '<table id="yqxxId" class="grid"></table>',
                    },
                    {
                        title: '判决登记',
                        content: '<table id="pjdjId" class="grid"></table>',
                    },
                    {
                        title: '提审登记',
                        content: '<table id="tsdjId" class="grid"></table>',
                    },
                    {
                        title: '律师会见',
                        content: '<table id="lshjId" class="grid"></table>',
                    },
                    {
                        title: '同案犯',
                        content: '<table id="tafId" class="grid"></table>',
                    },
                    {
                        title: '就医信息',
                        content: '<table id="jyxxId" class="grid"></table>',
                    },
                    {
                        title: '加减分记录',
                        content: '<table id="jjfjlId" class="grid"></table>',
                    },
                    {
                        title: '调监记录',
                        content: '<table id="djjlId" class="grid"></table>',
                    }
                ],
                success: function () {
                    $.parser.parse();
                    $('.layui-layer-title span').each(function () {
                        $(this).click(function () {
                            if ('历史环节' == $(this).html()) {
                                grid.init('hjbdId', {
                                    url: url.hjbdList,
                                    fit: false,
                                    width: '1490px',
                                    height: '580px',
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
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
                                    queryParams: { 'rybh': data.rybh },
                                    firstLoad: true,
                                    columns: clumnDjjl({
                                        check: false,
                                        clumns: ['yjsh', 'xjsh', 'tjr', 'tzsj'],
                                        hidden: []
                                    })
                                });
                            }


                        });
                    });
                }
            });
        }
    };
    main.init($('#jbxxinfo').val());
});
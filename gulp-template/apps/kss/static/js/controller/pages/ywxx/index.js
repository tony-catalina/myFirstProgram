/**
 模块名称： 业务信息查询
 开始时间： 2020-2-25
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumnThjy = require('modules/clumn/thjy');
    var clumnPjdj = require('modules/clumn/pjdj');
    var clumnShgx = require('modules/clumn/shgx');
    var clumnTaf = require('modules/clumn/taf');
    var clumnXj = require('modules/clumn/_xj');
    var clumnJb = require('modules/clumn/jb');
    var clumnYgry = require('modules/clumn/ygry');
    var clumnEm = require('modules/clumn/emdj');
    var clumnLdf = require('modules/clumn/ldf');
    var clumnHjbd = require('modules/clumn/hjbd');
    var clumnJkqk = require('modules/clumn/jkqk');
    var clumnJslx = require('modules/clumn/jslx');
    var clumnJy = require('modules/clumn/jy');
    var clumnCsdj = require('modules/clumn/clcs');
    var clumnLscs = require('modules/clumn/lscs');
    var clumnLsfx = require('modules/clumn/lsfx');
    var clumnLshj = require('modules/clumn/lshj');
    var clumnTsdj = require('modules/clumn/tsdj');
    var clumnWpjs = require('modules/clumn/wpgl');
    var clumnXjzc = require('modules/clumn/_xjzc');
    var clumnFxpg = require('modules/clumn/fxpg');
    var clumnCrjjc = require('modules/clumn/crjjc');

    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    //ref start


    var ryxxAjqkTpl = require('services/com/ryxxajqk.html'); //引入基本信息案件情况HTML模板
    var ryxxJkqkTpl = require('services/com/ryxxjkqk.html'); //引入基本信息健康情况HTML模板
    var ryxxLshjTpl = require('services/com/ryxxlshj.html'); //引入基本信息历史环节HTML模板
    var ryxxTpl = require('services/com/ryxxjbxx.html');
    var ajqkTpl = require('services/com/ryxxajqk.html');
    var jkqkTpl = require('services/com/ryxxjkqk.html');
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

    //ref end



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
                buttons:[
                    {id:'excel',name:'查询结果导出到excel表',icon:'icon-daochu'}
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                console.log(rybh);
            }, [{id: 'ywmx',icon: '', name: '业务详情', fun: function (data) {
                    layer.tab({
                        area: ['100%', '600px'],
                        tab: [
                            {
                                title: "谈话教育",
                                content: '<table id="thjyId" class="grid"></table>',
                            },
                            {
                                title: "判决登记",
                                content: '<table id="pjdjId" class="grid"></table>',
                            },
                            {
                                title: "社会关系",
                                content: '<table id="shgxId" class="grid"></table>',
                            },
                            {
                                title: "同案犯",
                                content: '<table id="tafId" class="grid"></table>',
                            },
                            {
                                title: "械具",
                                content: '<table id="xjId" class="grid"></table>',
                            },
                            {
                                title: "禁闭",
                                content: '<table id="jbId" class="grid"></table>',
                            },
                            {
                                title: "严管",
                                content: '<table id="ygId" class="grid"></table>',
                            },
                            {
                                title: "耳目",
                                content: '<table id="emId" class="grid"></table>',
                            },
                            {
                                title: "劳动犯",
                                content: '<table id="ldfId" class="grid"></table>',
                            },
                            {
                                title: "环节变动",
                                content: '<table id="hjbdId" class="grid"></table>',
                            },
                            {
                                title: "健康情况",
                                content: '<table id="jkqkId" class="grid"></table>',
                            },
                            {
                                title: "家属联系",
                                content: '<table id="jslxId" class="grid"></table>',
                            },
                            {
                                title: "就医",
                                content: '<table id="jyId" class="grid"></table>',
                            },
                            {
                                title: "出所登记",
                                content: '<table id="csdjId" class="grid"></table>',
                            },
                            {
                                title: "临时出所",
                                content: '<table id="lscsId" class="grid"></table>',
                            },
                            {
                                title: "留所服刑",
                                content: '<table id="lsfxId" class="grid"></table>',
                            },
                            {
                                title: "律师会见",
                                content: '<table id="lshjId" class="grid"></table>',
                            },
                            {
                                title: "提审登记",
                                content: '<table id="tsdjId" class="grid"></table>',
                            },
                            {
                                title: "物品接收",
                                content: '<table id="wpjsId" class="grid"></table>',
                            },
                            {
                                title: "现金收支",
                                content: '<table id="xjszId" class="grid"></table>',
                            },
                            {
                                title: "风险等级",
                                content: '<table id="fxdjId" class="grid"></table>',
                            },
                            {
                                title: "带出带入记录",
                                content: '<table id="dcdrjlId" class="grid"></table>',
                            },
                        ],
                        success: function () {
                            $(".layui-layer-tabli").css({"margin-top":"30px","margin-left":"20px"})
                            grid.init('thjyId', {
                                url: url.thjyList,
                                fit: false,
                                width: '100%',
                                height: '300',
                                queryParams: { "rybh": data[0].rybh },
                                firstLoad: true,
                                columns: clumnThjy({ 
                                    check: false,
                                    clumns: ['rybh','xm', 'kssjString', 'jssjString', 'thyyString', "thnr",'fzmj'],
                                    hidden: []
                                })
                            });

                            $(".layui-layer-title span").each(function(){
                                $(this).click(function(){
                                    if('判决登记'==$(this).html()){
                                        grid.init('pjdjId', {
                                            url: url.pjdjList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnPjdj({
                                                check: false,
                                                clumns: ['rybh', 'pjdw','pjrq', 'wsh', 'cljg', 'fjx', 'xq'],
                                                hidden: []
                                            })
                                        });
                                    }
                                    if('社会关系'==$(this).html()){
                                        //社会关系
                                        grid.init('shgxId', {
                                            url: url.shgxList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnShgx({
                                                check: false,
                                                clumns: ['rybh',  'jsxm', 'jszjh', 'gxString', 'gzdw','sj'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('同案犯'==$(this).html()){
                                        //同案犯
                                        grid.init('tafId', {
                                            url: url.tafList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnTaf({
                                                check: false,
                                                clumns: ['rybh', 'tafh', 'lah','bz'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('械具'==$(this).html()){
                                        //械具
                                        grid.init('xjId', {
                                            url: url.xjszDbgsList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnXj({
                                                check: false,
                                                clumns: ['rybh', 'jbxx_xm', 'jbxx_bahjString','xjmcString','jjsl','lyString',],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('禁闭'==$(this).html()){
                                        //禁闭
                                        grid.init('jbId', {
                                            url: url.jbjbList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnJb({
                                                check: false,
                                                clumns: ['bllx', 'rybh',   'jbqx', 'kssj','jssj'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('严管'==$(this).html()){
                                        //严管
                                        grid.init('ygId', {
                                            url: url.ygryList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnYgry({
                                                check: false,
                                                clumns: ['rybh', 'lyString', 'kzcs', 'blr', 'bllxString', 'kssj', 'jssj'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('耳目'==$(this).html()){
                                        //耳目
                                        grid.init('emId', {
                                            url: url.emdjList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnEm({
                                                check: false,
                                                clumns: ['rybh', 'jbxxXm', 'ayString', 'bllx','lyString','jbr','szrqString','emlxString'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('劳动犯'==$(this).html()){
                                        //劳动犯
                                        grid.init('ldfId', {
                                            url: url.jbxxLdfList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnLdf({
                                                check: false,
                                                clumns: ['rybh', 'bx', 'ly', 'sbrq', 'sbr', 'bllx'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('环节变动'==$(this).html()){
                                        //环节变动
                                        grid.init('hjbdId', {
                                            url: url.hjbdList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnHjbd({
                                                check: false,
                                                clumns: ['rybh',  'bdrq', 'bahjString', 'yssjdString', 'dwlxString','badw','bar'],
                                                hidden: []
                                            })
                                        });
                                    }
 
                                    if('健康情况'==$(this).html()){
                                        //健康情况
                                        grid.init('jkqkId', {
                                            url: url.jkqkList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnJkqk({
                                                check: false,
                                                clumns: ['gcbh','jclxString', 'xx', 'xy', 'xl', 'tw', 'xcg', 'xdt','bc','zq','xp','ky','yy','xzzk','jkzkString'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('家属会见'==$(this).html()){
                                        //家属会见
                                    }


                                    if('家属联系'==$(this).html()){
                                        //家属联系
                                        grid.init('jslxId', {
                                            url: url.jslxList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnJslx({
                                                check: false,
                                                clumns: ['rybh', 'xm', 'sqr', 'sqsjString', 'lyjsx', 'lxr','lxqk','lxzt'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('就医'==$(this).html()){
                                        //就医
                                        grid.init('jyId', {
                                            url: url.jyList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnJy({
                                                check: false,
                                                clumns: ['rybh', 'lyString', 'xl', 'xy','zdqk','cljg'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('出所登记'==$(this).html()){
                                        //出所登记
                                        grid.init('csdjId', {
                                            url: url.csdjList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnCsdj({
                                                check: false,
                                                clumns: ['rybh', 'xm', 'csyyString', 'cssjString', 'csqx','pzdw','pzws'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('临时出所'==$(this).html()){
                                        //临时出所
                                        console.log(url.lscsList)
                                        grid.init('lscsId', {
                                            url: url.lscsList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnLscs({
                                                check: false,
                                                clumns: ['rybh', 'xm', 'ay', 'blsjString', 'csyyString','cssjString','hssjString','pzr','dcmj'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('留所服刑'==$(this).html()){
                                        //留所服刑
                                        grid.init('lsfxId', {
                                            url: url.lsfxList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnLsfx({
                                                check: false,
                                                clumns: ['rybh', 'xm', 'lsyyString', 'kcqk', 'ksrq', 'jsrq', 'bz'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('律师会见'==$(this).html()){
                                        //律师会见
                                        grid.init('lshjId', {
                                            url: url.lswgdjQuery,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnLshj({
                                                check: false,
                                                clumns: ['lsxm', 'zjh', 'dw', 'lxdh'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('提审登记'==$(this).html()){
                                        //提审登记
                                        grid.init('tsdjId', {
                                            url: url.tsdjList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnTsdj({
                                                check: false,
                                                clumns: ['rybh',  'kssjString', 'jssjString', 'tszbr'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('物品接收'==$(this).html()){
                                        //物品接收    暂未做，没有物品接受的js文件
                                        grid.init('wpjsId', {
                                            url: url.wpglList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnWpjs({
                                                check: false,
                                                clumns: ['rybh', 'wpmc', 'sl', 'xh', 'tz', 'lqzt', 'lqrq'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('现金收支'==$(this).html()){
                                        //现金收支
                                        grid.init('xjszId', {
                                            url: url.xjzcList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnXjzc({
                                                check: false,
                                                clumns: ['rybh', 'currencyString',  'xfje','xflxString','xfqje','xfhye'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('风险等级'==$(this).html()){
                                        //风险等级
                                        grid.init('fxdjId', {
                                            url: url.fxdjList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnFxpg({
                                                check: false,
                                                clumns: ['jtbg', 'ffrz', 'dddhyzk', 'dqjtqk', 'dxdqxtqk', 'dxdqstzk', 'sjyz','yfxdj','xfxdj'],
                                                hidden: []
                                            })
                                        });
                                    }

                                    if('带出带入记录'==$(this).html()){
                                        //带出带入记录
                                        grid.init('dcdrjlId', {
                                            url: url.crjjcList,
                                            fit: false,
                                            width: '100%',
                                            height: '300',
                                            queryParams: { "rybh": data[0].rybh },
                                            firstLoad: true,
                                            columns: clumnCrjjc({
                                                check: false,
                                                clumns: ['bllx', 'blsj', 'dlmj', 'ywqxyc', 'ywwjp', 'ywtbs'],
                                                hidden: []
                                            })
                                        });
                                    }
                                })
                            });
                        }
                    })
                }
            }]);

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
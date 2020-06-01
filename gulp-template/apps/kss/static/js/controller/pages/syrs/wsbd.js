/**
 * 业务台账 页面入口
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
    var glws = require('modules/glws');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var jbxxgrid = require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            linkbar.init({
                links: [
                ]
            });

            searchform.initWsbd('search', {
                query: function (param) {
                    grid.query('table', param);
                }
            });
            // var section = $('.section-item').height()
            // var sectionHeader = $('.section-header').height()
            // var search = $('#search').height()
            // var height = section - sectionHeader - search - 80
            grid.init('table', {
                url: url.jbxx,
                fit: false,
                width: '100%',
                
                //height: height,
                height: '250%',
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                    hidden: []
                })
            });

            glws.init('glws', {
                files: [
                    { name: "送押回执", label: 'kss_syhz' },
                    { name: "处理物品、文件清单", label: 'kss_clwpwjqd' },
                    { name: "提讯提解证", label: 'kss_txtjz' },
                    { name: "入所体检表", label: 'kss_rstjb' },
                    { name: "在押人员羁押期间表现情况表", label: 'kss_zyryjyqjbxqkb' },
                    { name: "羁押期间表现情况鉴定表", label: 'kss_jyqjbxqkjdb' },
                    { name: "收押登记表", label: 'kss_sydjb' },
                    { name: "暂不收押通知书", label: 'kss_bysytzs' },
                    { name: "条形码", label: '' },
                    { name: "犯罪执行登记表", label: 'kss_fzzxdjb' },
                    { name: "在押人员在监表现材料", label: 'kss_zyryzjbxcl' },
                    { name: "人员详细信息", label: 'kss_ryxxxx' },
                    { name: "罪犯身体检查表", label: 'kss_zfsjstjcb' },
                    { name: "罪犯收监身体检查表", label: 'kss_zfsjstjcb' },
                    { name: "指纹信息卡", label: 'kss_zwxxk' },
                    { name: "人员详细信息登记表", label: 'kss_ryxxxxdjb' },
                    { name: "人员信息卡", label: 'kss_ryxxk' },
                    { name: "在押人员基本情况登记表", label: 'kss_zyryjbqkdjb' },
                    { name: "重要案犯登记表", label: 'kss_syzyafdjb' },
                    { name: "入监卡", label: 'kss_rjk' }
                ]
            });





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
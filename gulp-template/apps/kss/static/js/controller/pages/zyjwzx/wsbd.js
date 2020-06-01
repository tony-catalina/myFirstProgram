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
    var jbxxgrid=require('modules/jbxxgrid');
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
				query:function(param){
				       grid.query('table',param);
				    }
            });

            jbxxgrid.initjbxx('table',false,250, {},function(rybh) {
                console.log(rybh);
            });
            grid.init('table',{
                url: url.jwzxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['snbh','xm','jsh','bahjString','rsrq','gyqx','badw'],
                    hidden:[]})
            });
            glws.init('glws', {
                files: [{
                        name: "暂予监外执行通知书",label:'kss_zyjwzxtzs'},
                    {
                        name: "暂予监外执行审批表",label:'kss_zyjwzxspb'},

                    {
                        name: "暂予监外执行罪犯监督考察表",label:'kss_zyjwzxzfjdkcb'
                    },
                    {
                        name: "暂予监外执行决定书",label:'kss_zyjwzxjds'
                    },
                    {
                        name: "（监外）罪犯保外就医征求意见书",label:'kss_zfbwjyzqyjs'
                    },
                    {
                        name: "（监外）保外就医保证书",label:'kss_bwqybzs'
                    },
                    {
                        name: "暂予监外执行审批表",label:'kss_zyjwzxspb'
                    }
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

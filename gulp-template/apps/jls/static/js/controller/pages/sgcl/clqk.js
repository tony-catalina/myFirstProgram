/**
 模块名称: 处理情况
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_sgclClqk.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/fssg');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_sgclClqk');
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
                    { id: 'bldj', name: '办理登记', icon: 'icon-taizhang', fun: function () {
                            
                        var data = grid.getSelected('table')[0];                    
                        if(data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var currentTime1 = new Date().Format("yyyy-MM-dd");
                            var addData1 = {dateTime: currentTime,tbrq:currentTime1};
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            form.init(url.fssgUpdate,addData,function(){
                                grid.reload("table");
                            });
                        }else {
                            utils.alert('请选择人员信息!');
                        }
                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.initLc('search', {
                
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'sfcl': '0'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.fssglist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jbr','jsbh','sglx','sgdw','sgdd','sgsj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/fssg', ['jbr','jsbh','sglx','sgdw','sgdd','sgsj'],
            []);
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
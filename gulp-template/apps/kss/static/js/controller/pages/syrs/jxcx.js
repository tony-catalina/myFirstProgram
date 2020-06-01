/**
模块名称： 安全检查
开始时间： 2020-2-25
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
    var clumn = require('modules/clumn/jbxx');
    var hideshow = require('modules/showHideClumn');
    var url = require('modules/url');
    var syrsyzdjForm = require('modules/form/syrsyzdj');
    var jbxxgrid = require('modules/jbxxgrid');

    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                    id: 'add',
                    name: '执法办案转入',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var addData1 = { rybh: '', gcbh: '', xxbl_taskid: '', id: data.id };
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            syrsyzdjForm.init(url.saveAsLegal, addData, function () {
                            });
                        } else {
                            utils.alert('请选择一条记录，然后再进行业务操作!');
                        }
                    }
                },
                {
                    id: 'edit',
                    name: '人工登记',
                    icon: 'icon-daochu',
                    fun: function () {
                        var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                        var addData = { rybh: '', gcbh: '', xxbl_taskid: '', id: '', bm: '无', rsrq: currentTime };

                        $.ajax({
                            method:'POST',
                            url: url.dabh,
                            //data: data,
                            success: function (re) {
                                var dah = { dah: re.result};
                                var addDatal = {};
                                Object.assign(addDatal, addData, dah);
                                syrsyzdjForm.init(url.saveAsLegal, addDatal, function () {});
                            }
                        });

                       
                    }
                },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    grid.query('table', param);
                }
            });
            jbxxgrid.init('table', url.rsdjyzdjList, false, true, 200, { state: 'R7' }, function (rybh) {
                console.log(rybh);
            });

            syrsyzdjForm.cache();
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

/**
 模块名称: 附物登记
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_zcrsFwdj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
	var powin;
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var hdpzFormAdd = require('modules/form/zcrsFwdj');
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
                    { id: 'bldj', name: '办理登记', icon: 'icon-taizhang', fun: function () { 
                               var data = grid.getSelected('table')[0];
                               if (data) {
                                   hdpzFormAdd.init(url.wpglSaveByZrs, data, function() {
                                    grid.reload('table');
                                   });
                                   
                               } else {
                                   utils.alert("请选择人员");
                               }
                    } },
                    { id: 'wgzdj', name: '无附物登记', icon: 'icon-gengduo7', fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            powin = utils.showWin({
                            	title: '提示',
                            	area: ['26%', '150px'],
                            	content: '<center><div style="font-size:15pt;margin-top:5%;">确定' + '<span style="color:red;">'+data.xm+'</span>' + '进入无附物登记？</div></center>',
                            	maxmin: true,
                            	buttons: ['确定'],
                            	yes: function() {
                            		utils.closeWin(powin);
                            		util.ajax({
                            			url: url.noFwdjFlow,
                            			data: {
                            				"rybh": data.rybh,
                            				"taskid": data.taskid,
                            				"snbh": data.snbh,
                            				"xm": data.xm,
                            				"jsh": data.jsh,
                            			},
                            			func: function(data) {
                            				if (data.success) {
                            					utils.alert(data.msg);
                            					if (tools.isFunction(callback)) {
                            						callback();
                            						utils.closeWin(popwin);
                            					}
                            				} else {
                            					utils.alert(data.msg);
                            				}
                            			}
                            		});
                            	}
                            })
							
                        } else {
                            utils.alert("请选择人员");
                        }
                    } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.initLc('search', {
            
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8',
                        'processDefinitionKey': 'jls_zcrs',
                        'taskDefinitionKey': 'jls_zcrs_fwdj'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200, {'processDefinitionKey': 'jls_zcrs',
                'taskDefinitionKey': 'jls_zcrs_fwdj'},function(rybh) {
             });
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

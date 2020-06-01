/**
 模块名称: 领导审批
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_zcrsLdsp.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_zcrsLdsp');
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
                                  hdpzFormAdd.init(url.ksrsLdspAdd, data, function() {grid.reload('table');});

                              } else {
                                  utils.alert("请选择人员");
                              }

                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table');} }
                ]
            });
            searchform.initLc('search', {
                // pageRender:{
                //     primary: [
                //         { name: 'xm', title: '姓名', type: 'textbox' },
                //         { name: 'jsh', title: '拘室号', type: 'awdCombotree', url:url.jsComboxTree }
                //     ],
                //     more: [
                //         [
                //             { name: 'bm', title: '别名', type: 'textbox' },
                //             { name: 'ay', title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                //             { name: 'xb', title: '性别', type: 'awdCombox' ,url:url.getDictionary +'?node=XB' }
                //         ],
                //         [
                //             { name: 'rsrqStart', title: '入所日期', type: 'datebox' },
                //             { name: 'rsrqEnd', title: '至', type: 'datebox' }
                //         ]
                //     ],
                // },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8',
                        'processDefinitionKey': 'jls_zcrs',
                        'taskDefinitionKey': 'jls_zcrs_ldsp'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200, {'processDefinitionKey': 'jls_zcrs',
                'taskDefinitionKey': 'jls_zcrs_ldsp'},function(rybh) {
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

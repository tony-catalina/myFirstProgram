/**
 * 工具栏
 * {
 *     buttons:[
 *     {id:'',name:'',icon:'',fun:function(){}}
 *     ]
 * }
 */
define(function(require) {
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var button = require('services/com/button.html');
    var formTable=require('modules/Form_Table');
    var main = {
        init: function(option) {
            var buttonhtml = button('com/button', option);
            $('#tools').html(buttonhtml);
            option.buttons.forEach(function(target) {
                $("#" + target.id).on('click', function() {
                    if (tools.isUndefined(target.fun) && target.id == 'print') {
                        // 数据打印
                        var table = tools.isUndefined(target.tableId) == true ? 'table' : target.tableId;
                        if ($('#' + table).datagrid('getData').rows != '') {
                            $('#' + table).datagrid('print', {
                                title: '数据打印',
                                rows: $('#' + table).datagrid('getData').rows
                            });
                        } else {
                            utils.alert('暂无数据打印!');
                        }
                    } else if (tools.isUndefined(target.fun) && target.id == 'excel') {
                        // 数据导出
                        var table = tools.isUndefined(target.tableId) == true ? 'table' : target.tableId;
                        if ($('#' + table).datagrid('getData').rows != '') {
                            $('#' + table).datagrid('toExcel', {
                                filename: '数据导出',
                                rows: $('#' + table).datagrid('getData').rows
                            });
                        } else {
                            utils.alert('暂无数据导出!');
                        }
                    } else {
                        // 其他
                        if (tools.isFunction(target.fun)) {
                            target.fun();
                        }
                    }
                    main.ListenEvent(target.id,target.ryyw);
                });
            });
        },
        ListenEvent:function(id,ryyw){
            if(ryyw == true){
                formTable.Person();
            }
         }
    };
    return main;

});
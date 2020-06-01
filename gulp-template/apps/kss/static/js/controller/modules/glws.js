/**
 * 管理文书 脚本组件
 */
define(function(require) {
    require('jquery');
    require('easyui');
    require('layer.config');
    var items = require('services/com/glws.html');
    var grid = require('awd/easyui/grid');
    var utils = require('awd/layui/utils');
    var common=require('common');
    var main = {
        init: function(id, option) {
            var itemsHtml = items('com/glws', option);
            $('#'+id).html(itemsHtml);
            main.initEvents(id);
        },
        initEvents: function(id) {
            var itemFileWrap = $('#'+id);
            $('.item-file', itemFileWrap).on('click', function(index,row) {
                var data = grid.getSelected('table')[0];
                if(data){
                    var params=$(this).attr('param')==undefined?'rybh%3d'+data.rybh:$(this).attr('param');
                    window.open(main.reporturl($(this).find('.file-name').attr('data-label'),$(this).find('.file-name').attr('title'),true,params ),'_blank');
                    //window.parent.parent.openTab($(this).find('.file-name').attr('title'),main.reporturl($(this).find('.file-name').attr('label'),$(this).find('.file-name').attr('title'),true,params ));
                }else {
                    utils.alert('请选择办理人员!');
                }
            });
        },
        reporturl:function(label,name,displaytool,parameters){
            return common.info.reporturl+'?displaytoolbar='+displaytool+'&label='+label+'&name='+label+'&parameters='+parameters;
        }
    };
    return main;
});
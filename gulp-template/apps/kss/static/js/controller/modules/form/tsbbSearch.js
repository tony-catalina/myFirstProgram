/**
 * 搜索栏
 */
define(function(require) {
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var combox=require('awd/easyui/combox');
    var search = require('services/form/_zhywTsbb');
    var cycles = 1;
    var main = {
        init: function(id, option) {
            var formhtml = search('form/_zhywTsbb', option);
            $('#' + id).html(formhtml);
            $.parser.parse('#' + id);
            combox.initBySelect('#' + id+' .easyui-awdCombox');
            main.bindEvent(id, option);
        },
        getData: function(id) {
            return util.form2Json(id);
        },
        bindEvent: function(id, option) {
            var el = document.getElementById(id);
            $('#query').on('click', function() {
                if (tools.isFunction(option.query)) {
                    option.query(main.getData('search'));
                }
            });

            $('#print').on('click', function() {
                alert("打印")

            });
        }
    };
    return main;

});
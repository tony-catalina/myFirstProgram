define(function (require) {
    var grid = require('awd/easyui/grid');
    var clumns = require('modules/jdsclumns');
    var url = require('modules/url');
    var table;
    var main= {
        init: function () {
            main.initTable('jbxxTable');
        },
        initTable:function(id){
            return grid.init(id, {
                url: url['jds/jbxx/list'],
                title: '',
                width: '100%',
                height: '100%',
                toolbar: '#toolbar',
                firstLoad: false,
                columns: clumns['rsxx'](false)
            });
        }
    };
    return main;
});
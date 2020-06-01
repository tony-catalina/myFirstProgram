define(function(require) {
    var tree = require('awd/easyui/tree');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var jqtree;
    var main = {
        init: function(id, jbxxtable) {
            jqtree = tree.initTree(id, {
                url: url.jqtree,
                select: function() {
                    grid.query(jbxxtable, { jsh: util.getTreeSelected($(this), '监区树').id });
                }
            });
            return jqtree;
        }
    };
    return main;
});
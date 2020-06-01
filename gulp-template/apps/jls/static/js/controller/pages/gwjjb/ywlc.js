window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var main = {
        init: function() {
            main.layout();
            main.eventBind();
        },
        layout: function() {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '交班登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/gwjjb/jbdj.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '接班确认(<font color="red">2</font>)', top: 400, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/gwjjb/jbqr.html' },

                ],

                lines: []
            });
        },
        eventBind: function() {

        }
    };

    $(main.init);

});
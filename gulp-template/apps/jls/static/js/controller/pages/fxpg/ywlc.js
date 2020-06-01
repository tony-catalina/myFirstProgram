window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("jls_fxpg");
    var main = {
        init: function () {
            ywlcCount.init("jls_fxpg", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '风险评估登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/fxpg/fxpgdj.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data.JLS_FXPG_LDSP == undefined ? '0' : data.JLS_FXPG_LDSP) + '</font>)', top: 400, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/fxpg/ldsp.html' },

                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});
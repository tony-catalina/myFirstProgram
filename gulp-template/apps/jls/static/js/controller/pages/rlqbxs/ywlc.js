window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    var main = {
        init: function () {
            ywlcCount.init("JLS_RLQBXSXX", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '信息录入', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/rlqbxs/xxlr.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '信息传递(<font color="red">'+(data. JLS_RLQBXSXX_XXCD==undefined?'0':data. JLS_RLQBXSXX_XXCD)+'</font>)', top: 300, left: 120, width: 80, height: 80, url: '/apps/jls/views/pages/rlqbxs/xxcd.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '查证情况(<font color="red">'+(data. JLS_RLQBXSXX_CZQK==undefined?'0':data. JLS_RLQBXSXX_CZQK)+'</font>)', top: 500, left: 120, width: 80, height: 80, url: '/apps/jls/views/pages/rlqbxs/czqk.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '处理情况(<font color="red">'+(data. JLS_RLQBXSXX_CLQK==undefined?'0':data. JLS_RLQBXSXX_CLQK)+'</font>)', top: 300, left: 280, width: 80, height: 80, url: '/apps/jls/views/pages/rlqbxs/clqk.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 1, to: 4, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});
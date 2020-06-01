window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
  //  var data = ywlcCount.init("kss_gwjjb");
    var main = {
        init: function () {
            ywlcCount.init("kss_gwjjb", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function () {
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '交班', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/jjb/jb.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '接班', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/jjb/jieb.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导查看', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/jjb/jbjl.html' },
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

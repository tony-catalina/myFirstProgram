/**
 * 收押入所 页面入口
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据

    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("kss_rsdj", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function(data) {
            /**布局初始化
             *流程图绘制  作者：沙国宏 日期 2020-2-27
             */
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '验证登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/yzdj.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '健康检查(<font color="red">' + (data.KSS_RSDJ_JKJC === undefined ? "0" : data.KSS_RSDJ_JKJC) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/jkjc.html' },
                    { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '安全检查(<font color="red">' + (data.KSS_RSDJ_AQJC == undefined ? "0" : data.KSS_RSDJ_AQJC) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/aqjc.html' },
                    { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '附物登记(<font color="red">' + (data.KSS_RSDJ_FWDJ == undefined ? "0" : data.KSS_RSDJ_FWDJ) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/fwdj.html' },
                    { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '告知(<font color="red">' + (data.KSS_RSDJ_GZ == undefined ? "0" : data.KSS_RSDJ_GZ) + '</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/rsgz.html' },
                    { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '入所登记(<font color="red">' + (data.KSS_RSDJ_RSDJ == undefined ? "0" : data.KSS_RSDJ_RSDJ) + '</font>)', top: 1100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/rsdj.html' },

                    { id: 'node7', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '快速入所', top: 100, left: 70, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/ksrs.html' },
                    { id: 'node8', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '生物特征(<font color="red">' + (data.KSS_RSDJ_SWTZCJ == undefined ? "0" : data.KSS_RSDJ_SWTZCJ) + '</font>)', top: 700, left: 70, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/swtz.html' },
                    { id: 'node9', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '收押开证(<font color="red">' + (data.KSS_RSDJ_SYKZ == undefined ? "0" : data.KSS_RSDJ_SYKZ) + '</font>)', top: 1100, left: 70, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/sykz.html' },

                    { id: 'node10', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '收回登记', top: 100, left: 350, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/shdj.html' },
                    { id: 'node11', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所领导意见(<font color="red">' + (data.KSS_RSDJ_SLDYJ == undefined ? "0" : data.KSS_RSDJ_SLDYJ) + '</font>)', top: 300, left: 350, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/sldyj.html' },
                    { id: 'node12', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '暂不收押(<font color="red">' + (data.KSS_RSDJ_ZBSY == undefined ? "0" : data.KSS_RSDJ_ZBSY) + '</font>)', top: 500, left: 350, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/zbsy.html' },
                    { id: 'node13', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '接济物品(<font color="red">' + (data.KSS_RSDJ_JJWP == undefined ? "0" : data.KSS_RSDJ_JJWP) + '</font>)', top: 700, left: 350, width: 80, height: 80, url: '/apps/kss/views/pages/syrs/jjwp.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 2, to: 3, line: '合格', type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 4, to: 5, type: 'edgeStyle=elbowEdgeStyle' },
                    { from: 5, to: 6, type: 'edgeStyle=elbowEdgeStyle' },
                    { from: 3, to: 8, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 8, to: 5, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 10, to: 2, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 2, to: 11, line: '<font style="color: red;">不合格</font>', type: 'edgeStyle=elbowEdgeStyle;strokeColor=red;' },
                    { from: 11, to: 3, line: '同意', type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 11, to: 12, line: '<font style="color:red;">不同意</font>', type: 'edgeStyle=elbowEdgeStyle;strokeColor=red;' },
                ]
            });
            /**流程图绘制 **/
        },
        eventBind: function() {
            /**
             * 事件绑定
             */
        }
    };
    /**
     *运行入口
     */
    $(main.init);

});
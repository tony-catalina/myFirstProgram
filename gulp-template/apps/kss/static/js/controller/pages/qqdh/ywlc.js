/**
 * 收押入所 页面入口
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_rsdj");
     /**
      * 界面控件
      */
    var main={
        init:function(){
            /**
             * 界面初始化
             */
            ywlcCount.init("kss_qqdh", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            /**布局初始化
             *流程图绘制  作者：沙国宏 日期 2020-2-27
             */
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '亲情电话申请',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/qqdh/qqdhsq.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队长审批(<font color="red">'+data.KSS_QQDH_ZDZSP+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/qqdh/zdzsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导审批(<font color="red">'+data.KSS_QQDH_SLDSP+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/qqdh/sldsp.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '联系家属(<font color="red">'+data.KSS_QQDH_LXJS+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/qqdh/lxjs.html' }],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'}]
            });
            /**流程图绘制 **/
        },
        eventBind:function(){
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

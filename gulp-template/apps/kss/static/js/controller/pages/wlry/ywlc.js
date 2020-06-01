/**
 * 收押入所 页面入口
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
     /**
      * 界面控件
      */
    var main={
        init:function(){
            /**
             * 界面初始化
             */
            
            main.layout();
            main.eventBind();
        },
        layout:function(){
            /**布局初始化
             *流程图绘制  作者：沙国宏 日期 2020-2-27
             */
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '外来人员登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/wlry/wlrydj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '离开登记',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/wlry/lkdj.html' }],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'}]
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


/**
 * 武器使用 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    require('stats');
    var vEngine=require('vEngine')
    //获取流程节点代办数据
    var  __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("KSS_WQSY", function(data) {
                // main.layout(data);
                // main.eventBind(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "武器使用";
           var element = document.querySelector("#scene");

         main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName:function ( flowName ) {
            var target = null;
            vEngine.config.flows.forEach(function ( item ) {
              if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            console.log(target)
            return target;
          },
          generalScene:function ( element, api, flowConfig) {

            ywlcCount.init("KSS_WQSY", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config,111)
           // dataCx.KSS_EMCX_SZYJ
             config[0].data[0].extData.events = data.KSS_WQSY_CP;
             config[0].data[1].extData.events = data.KSS_WQSY_LDSP;
             config[0].data[2].extData.events = data.KSS_WQSY_WQGH;
            
            __scene_flow.setOptions({
              series: config
          })
  
          });
            // console.log(flowConfig)
            vEngine.config.api.resourceRoot = "/apps/kss/static/images/"
  
            
            
            if (!__scene_flow) {
              __scene_flow = new vEngine.VEngine({
                width: 1764,
              height: 856,
                edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
                on: {
                  click: function ( target, e ) {
                    console.log(target,e)
                    if(target[0].case.options.name == "武器使用呈批" || target[0].case.options.text == "武器使用呈批"){
                      window.parent.parent.openTab('武器使用呈批','/apps/kss/views/pages/wqsy/wqsycp.html');
                    }
                    if(target[0].case.options.name == "所领导审批"||target[0].case.options.text == "所领导审批"){
                      window.parent.parent.openTab('所领导审批','/apps/kss/views/pages/wqsy/sldsp.html');
                    }
                    if(target[0].case.options.name == "武器归还"||target[0].case.options.text == "武器归还"){
                        window.parent.parent.openTab('武器归还','/apps/kss/views/pages/wqsy/wqgh.html');
                      }
                  }
                }
              });
              // 将场景挂载到某个HTML元素
              __scene_flow.mount(element);
            }
            __scene_flow.setOptions({
              series: flowConfig
          });
          },
          
        // layout: function(data) {
        //     // 布局初始化
        //     $('#wqsycpNum').html('武器使用呈批');
        //     $('#sldspNum').html('所领导审批(<font color="red">' + (data.KSS_WQSY_LDSP === undefined ? "0" : data.KSS_WQSY_LDSP) + '</font>)');
        //     $('#wqghNum').html('武器归还(<font color="red">' + (data.KSS_WQSY_WQGH === undefined ? "0" : data.KSS_WQSY_WQGH) + '</font>)');
        // },
        // eventBind: function() {
        //     /**
        //      * 事件绑定
        //      */
        //     $('#wqsycp').on('click',function(){
        //         window.parent.parent.openTab('武器使用呈批','/apps/kss/views/pages/wqsy/wqsycp.html');
        //     });
        //     $('#sldsp').on('click',function(){
        //         window.parent.parent.openTab('所领导审批','/apps/kss/views/pages/wqsy/sldsp.html');
        //     });
        //     $('#wqgh').on('click',function(){
        //         window.parent.parent.openTab('武器归还','/apps/kss/views/pages/wqsy/wqgh.html');
        //     });
        // }
    };
    /**
     *运行入口
     */
    $(main.init);

});
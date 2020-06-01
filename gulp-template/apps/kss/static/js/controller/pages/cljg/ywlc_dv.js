
/**
 * 处理结果 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('stats');
    var vEngine=require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function() {
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "处理结果";
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

             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)
  
            config[0].data[0].extData.events = 0;
  
            
  
            vEngine.config.api.resourceRoot = "/apps/kss/static/images/"
  
            
            
            if (!__scene_flow) {
              __scene_flow = new vEngine.VEngine({
                width: 1764,
                height: 856,
                edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
                on: {
                  click: function ( target, e ) {
                    console.log(target,e)
                    if(target[0].case.options.name == "处理结果登记" || target[0].case.options.text == "处理结果登记"){
                      window.parent.parent.openTab('处理结果登记','/apps/kss/views/pages/cljg/cljg.html');
                    }
                    if(target[0].case.options.name == "结案"){
                  
                    }
                    if(target[0].case.options.name == "执行"){
                   
                    }
                  }
                }
              });
              // 将场景挂载到某个HTML元素
              __scene_flow.mount(element);

              __scene_flow.setOptions({
                series: flowConfig
              });
              
            }
          },
            
    };
    /**
     *运行入口
     */
    // window.onload=fusnction(){
        main.init();
    // }

});
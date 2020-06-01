




/**
 * 收押入所 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('stats');
    var vEngine=require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    var main = {
        
        init: function() {
          var api = "/plugin-flowchart/scene/simulation.json";
          var firstLoadFlow = "单独关押";
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

          ywlcCount.init("KSS_DDGY", function (data) {
           console.log(data)
           let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
          console.log(config)
          config[0].data[0].extData.events = data.KSS_DDGY_DDGYSZ;
          config[0].data[1].extData.events = data.KSS_DDGY_ZDSSP;
          config[0].data[2].extData.events = data.KSS_DDGY_LDSP;
          config[0].data[3].extData.events = data.KSS_DDGY_DRJS;


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
                  if(target[0].case.options.name == "单独关押设置"||target[0].case.options.text =="单独关押设置"){
                    window.parent.parent.openTab('单独关押设置','/apps/kss/views/pages/ddgy/ddgysz.html' );
                  }
                  if(target[0].case.options.name == "中队长审批"||target[0].case.options.text == "中队长审批"){
                    window.parent.parent.openTab('中队长审批','/apps/kss/views/pages/ddgy/zdzsp.html'  );
                  }
                  if(target[0].case.options.name == "领导审批"||target[0].case.options.text == "领导审批"){
                    window.parent.parent.openTab('领导审批','/apps/kss/views/pages/ddgy/ldsp.html'  );
                  }
                  if(target[0].case.options.name == "带入关押监室"||target[0].case.options.text == "带入关押监室"){
                    window.parent.parent.openTab('带入关押监室','/apps/kss/views/pages/ddgy/drgyjs.html' );
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
          

        }
        
        
    };
    /**
     *运行入口
     */
    $(main.init)
});
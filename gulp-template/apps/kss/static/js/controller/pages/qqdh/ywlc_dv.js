


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
          var firstLoadFlow = "亲情电话";
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

          ywlcCount.init("kss_qqdh", function (data) {
           console.log(data)
           let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
          console.log(config)

          config[0].data[0].extData.events = data.KSS_QQDH_DHSQ;
          config[0].data[1].extData.events = data.KSS_QQDH_ZDZSP;
          config[0].data[2].extData.events = data.KSS_QQDH_SLDSP;
          config[0].data[3].extData.events = data.KSS_QQDH_LXJS;


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
                  if(target[0].case.options.name == "亲情电话申请"||target[0].case.options.text == "亲情电话申请"){
                    window.parent.parent.openTab('亲情电话申请','/apps/kss/views/pages/qqdh/qqdhsq.html' );
                  }
                  if(target[0].case.options.name == "中队长审批"||target[0].case.options.text == "中队长审批"){
                    window.parent.parent.openTab('中队长审批','/apps/kss/views/pages/qqdh/zdzsp.html' );
                  }
                  if(target[0].case.options.name == "所领导审批"||target[0].case.options.text == "所领导审批"){
                    window.parent.parent.openTab('所领导审批','/apps/kss/views/pages/qqdh/sldsp.html' );
                  }
                  if(target[0].case.options.name == "联系家属"||target[0].case.options.text == "联系家属"){
                    window.parent.parent.openTab('联系家属','/apps/kss/views/pages/qqdh/lxjs.html' );
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
          // $("canvas").css("height","750px")

        }
        
        
    };
    /**
     *运行入口
     */
    
      $(main.init);
    

});

/**
 *  律师会见页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('stats');
    var vEngine=require('vEngine');
    var ywlcCount = require('modules/ywlc');
    var __scene_flow;
    //获取流程节点代办数据

    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("kss_cfsz", function (data) {
                // main.layout(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
          var firstLoadFlow = "处罚管理";
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
  
            ywlcCount.init("kss_cfsz", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)
  
            config[0].data[0].extData.events = data.KSS_CFSZ_CFCB;
            config[0].data[1].extData.events = data.KSS_CFSZ_ZDZJSYJ;
            config[0].data[2].extData.events = data.KSS_CFSZ_CFJC;
            config[0].data[3].extData.events = data.KSS_CFSZ_YCCB;
            config[0].data[4].extData.events = data.KSS_CFSZ_YCSLDYJ;
            config[0].data[5].extData.events = data.KSS_CFSZ_SZYJ;
             
  
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
                    if(target[0].case.options.name == "处罚呈报" || target[0].case.options.text == "处罚呈报"){
                      window.parent.parent.openTab('处罚呈报','/apps/kss/views/pages/cfgl/cfcp.html');
                    }
                    if(target[0].case.options.name == "中队/警署意见" || target[0].case.options.text == "中队/警署意见"){
                      window.parent.parent.openTab('中队/警署意见','/apps/kss/views/pages/cfgl/szzdjzyj.html');
                    }
                    if(target[0].case.options.name == "延长呈报" || target[0].case.options.text == "延长呈报"){
                      window.parent.parent.openTab('延长呈报','/apps/kss/views/pages/cfgl/yccp.html');
                    }
                    if(target[0].case.options.name == "延长所领导意见" || target[0].case.options.text == "延长所领导意见"){
                      window.parent.parent.openTab('延长所领导意见','/apps/kss/views/pages/cfgl/ycszyj.html');
                    }
                    if(target[0].case.options.name == "解除处罚登记" || target[0].case.options.text == "解除处罚登记"){
                        window.parent.parent.openTab('解除处罚登记','/apps/kss/views/pages/cfgl/jccfdj.html');
                      }
                      if(target[0].case.options.name == "所长意见" || target[0].case.options.text == "所长意见"){
                        window.parent.parent.openTab('所长意见','/apps/kss/views/pages/cfgl/szszyj.html');
                      }
  
                  }
                }
              });
              // 将场景挂载到某个HTML元素
              __scene_flow.mount(element);
              __scene_flow.setOptions({
                series: flowConfig
            })
            }
            // $("canvas").css("height","750px")
  
          }
    };
    /**
     *运行入口
     */
    $(main.init);

});
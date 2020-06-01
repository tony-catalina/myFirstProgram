
/**
 * 自备药品申请 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('stats');
    var vEngine = require('vEngine');
    var ywlcCount = require('modules/ywlc');
    var __scene_flow;
    //获取流程节点代办数据
  
    /**
     * 界面控件
     */
    var main = {
      init: function () {
        var api = "/plugin-flowchart/scene/simulation.json";
        var firstLoadFlow = "自备药品申请";
        var element = document.querySelector("#scene");
  
        main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
      },
      
      findConfigByFlowName: function (flowName) {
        var target = null;
        vEngine.config.flows.forEach(function (item) {
          if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
        });
        console.log(target)
        return target;
      },
      generalScene: function (element, api, flowConfig) {
        ywlcCount.init("kss_zbypsq", function (data) {
          console.log(data)
          let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
          console.log(config)
  
          config[0].data[0].extData.events = data.KSS_ZBYPSQ_GYSQ;
          config[0].data[1].extData.events = data.KSS_ZBYPSQ_GJSP;
          config[0].data[2].extData.events = data.KSS_ZBYPSQ_YSQR;
          config[0].data[3].extData.events = data.KSS_ZBYPSQ_SLDSP;
          config[0].data[4].extData.events = data.KSS_ZBYPSQ_SYYZ;
  
  
          __scene_flow.setOptions({
            series: config
          })
  
        });
        vEngine.config.api.resourceRoot = "/apps/kss/static/images/"
  
  
  
        if (!__scene_flow) {
          __scene_flow = new vEngine.VEngine({
            width: 1764,
            height: 856,
            edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
            on: {
              click: function (target, e) {
                console.log(target, e)
                if (target[0].case.options.name == "购药申请" || target[0].case.options.text == "购药申请") {
                  window.parent.parent.openTab('购药申请', '/apps/kss/views/pages/zbypsq/gysq.html');
                }
                if (target[0].case.options.name == "管教审批" || target[0].case.options.text == "管教审批") {
                  window.parent.parent.openTab('管教审批', '/apps/kss/views/pages/zbypsq/gjsp.html');
                }
                if (target[0].case.options.name == "医生确认" || target[0].case.options.text == "医生确认") {
                  window.parent.parent.openTab('医生确认', '/apps/kss/views/pages/zbypsq/ysqr.html');
                }
                if (target[0].case.options.name == "所领导审批" || target[0].case.options.text == "所领导审批") {
                  window.parent.parent.openTab('所领导审批', '/apps/kss/views/pages/zbypsq/sldsp.html');
                }
                if (target[0].case.options.name == "送药验证" || target[0].case.options.text == "送药验证") {
                    window.parent.parent.openTab('送药验证', '/apps/kss/views/pages/zbypsq/syyz.html');
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
  
      }
    };
    /**
     *运行入口
     */
    $(main.init);
  
  });
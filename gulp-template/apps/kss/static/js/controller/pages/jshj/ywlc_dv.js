
/**
 * 家属会见 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var vEngine=require('vEngine');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("kss_jshj", function(data) {
                // main.layout(data);
                // main.eventBind(data);
                // main.handleInitFn(data);
                
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "家属会见";
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

        ywlcCount.init("kss_jshj", function (data) {
            console.log(data)
            let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)
            config[0].data[0].extData.events = 0;
            config[0].data[1].extData.events = data.KSS_JSHJ_LDSP;
            config[0].data[2].extData.events = data.KSS_JSHJ_JQTRDJ;
            config[0].data[3].extData.events = data.KSS_JSHJ_AQJC;
            config[0].data[4].extData.events = data.KSS_JSHJ_DRJS;
              // config[0].data[5].extData.events = 0;
              // config[0].data[6].extData.events = data.KSS_CSGL_FWTH;

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
                    click: function (target, e) {
                        console.log(target, e)
                        if (target[0].case.options.name == "会见登记" || target[0].case.options.text == "会见登记") {
                            window.parent.parent.openTab('会见登记', '/apps/kss/views/pages/jshj/hjdj.html');
                        }
                        if (target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批") {
                            window.parent.parent.openTab('领导审批', '/apps/kss/views/pages/jshj/ldsp.html');
                        }
                        if (target[0].case.options.name == "监区提人登记" || target[0].case.options.text == "监区提人登记") {
                            window.parent.parent.openTab('监区提人登记', '/apps/kss/views/pages/jshj/jqtr.html');
                        }
                        if (target[0].case.options.name == "会见完毕安全检查" || target[0].case.options.text == "会见完毕安全检查") {
                          window.parent.parent.openTab('会见完毕安全检查', '/apps/kss/views/pages/jshj/aqjc.html');
                        }
                        if (target[0].case.options.name == "带入监室" || target[0].case.options.text == "带入监室") {
                            window.parent.parent.openTab('带入监室', '/apps/kss/views/pages/jshj/drjs.html');
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
        $("canvas").css("margin-left", "10%")
        
    },
    };

    /**
     *运行入口
     */
    $(main.init);

});



/**
 * 收押入所 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('stats');
    var vEngine = require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    var main = {

        init: function () {
            ywlcCount.init("kss_zdrysz", function (data) {
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "重点人员";
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

            ywlcCount.init("kss_zdrysz", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_ZDRYSZ_RYWH;
                config[0].data[1].extData.events = data.KSS_ZDRYSZ_SLDYJ;
                config[0].data[2].extData.events = data.KSS_ZDRYSZ_ZDJZYJ;
                config[0].data[3].extData.events = data.KSS_ZDRYCX_JCCP;
                config[0].data[4].extData.events = data.KSS_ZDRYCX_SLDYJ;
                config[0].data[5].extData.events = data.KSS_ZDRYCX_ZDJZYJ;


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
                            if(target[0].case.options.name == "人员维护" || target[0].case.options.text == "人员维护"){
                                window.parent.parent.openTab('人员维护','/apps/kss/views/pages/zdry/sysz.html' );
                              }
                              if(target[0].case.options.name == "中队警组意见" || target[0].case.options.text == "中队警组意见"){
                                window.parent.parent.openTab('中队警组意见','/apps/kss/views/pages/zdry/szzdjzyj.html' );
                              }
                              if(target[0].case.options.name == "所领导意见" || target[0].case.options.text == "所领导意见"){
                                window.parent.parent.openTab('所领导意见','/apps/kss/views/pages/zdry/szldyj.html' );
                              }
                              if(target[0].case.options.name == "解除呈批" || target[0].case.options.text == "解除呈批"){
                                window.parent.parent.openTab('解除呈批','/apps/kss/views/pages/zdry/jccp.html' );
                              }
                              if(target[0].case.options.name == "解除中队/警组意见" || target[0].case.options.text == "解除中队/警组意见"){
                                window.parent.parent.openTab('解除中队/警组意见','/apps/kss/views/pages/zdry/jczdjzyj.html' );
                              }
                              if(target[0].case.options.name == "解除所领导意见" || target[0].case.options.text == "解除所领导意见"){
                                window.parent.parent.openTab('解除所领导意见','/apps/kss/views/pages/zdry/jcldyj.html' );
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
   
        main.init();


});
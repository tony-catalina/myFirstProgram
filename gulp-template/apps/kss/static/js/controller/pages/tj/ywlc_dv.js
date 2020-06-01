
/**
 * 提解 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('stats');
    var vEngine = require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function () {
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "提解";
            var element = document.querySelector("#scene");

            main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName: function (flowName) {
            var target = null;
            vEngine.config.flows.forEach(function (item) {
                if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            return target;
        },
        generalScene: function (element, api, flowConfig) {

            ywlcCount.init("kss_tj", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_TJ_HDPZ;
                config[0].data[1].extData.events = data.KSS_TJ_TJCSDJ;
                config[0].data[2].extData.events = data.KSS_TJ_JQTRDJ;
                config[0].data[3].extData.events = data.KSS_TJ_TJHSAQJC;

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
                            console.log(target)
                            if (target[0].case.options.name == "核对凭证" || target[0].case.options.text == "核对凭证") {
                                window.parent.parent.openTab('核对凭证', '/apps/kss/views/pages/tj/hdpz.html');
                            }
                            if (target[0].case.options.name == "提解出所登记" || target[0].case.options.text == "提解出所登记") {
                                window.parent.parent.openTab('提解出所登记', '/apps/kss/views/pages/tj/csdj.html');
                            }
                            if (target[0].case.options.name == "监区提人登记" || target[0].case.options.text == "监区提人登记") {
                                window.parent.parent.openTab('监区提人登记', '/apps/kss/views/pages/tj/trdj.html');
                            }
                            if (target[0].case.options.name == "提解回所安全检查" || target[0].case.options.text == "提解回所安全检查") {
                                window.parent.parent.openTab('提解回所安全检查', '/apps/kss/views/pages/tj/hsjc.html');
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
    $(main.init);

});
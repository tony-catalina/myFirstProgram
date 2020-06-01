define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('stats');
    var vEngine = require('vEngine');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function () {
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "精神异常管理";
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

            ywlcCount.init("kss_jsbjd", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_JSBJD_JDKS;
                config[0].data[1].extData.events = 0;
                config[0].data[2].extData.events = data.KSS_JSBJD_JDJS;

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
                            if (target[0].case.options.name == "精神异常登记" || target[0].case.options.text == "精神异常登记") {
                                window.parent.parent.openTab('精神异常登记', '/apps/kss/views/pages/jsycgl/jsycdj.html');
                            }
                            if (target[0].case.options.name == "解除精神异常" || target[0].case.options.text == "解除精神异常") {
                                window.parent.parent.openTab('解除精神异常', '/apps/kss/views/pages/jsycgl/jcjsyc.html');
                            }
                            if (target[0].case.options.name == "精神异常查询" || target[0].case.options.text == "精神异常查询") {
                                window.parent.parent.openTab('精神异常查询', '/apps/kss/views/pages/jsycgl/jsyccx.html');
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
